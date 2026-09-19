#!/usr/bin/env python3
"""
verify_scryfall_images.py — MTG Story Codex image-link checker

Scans every chapter's index.html / full.html and 35-reality-fracture/script.js
for Scryfall `fuzzy=` card-name lookups, then calls Scryfall's real API
(https://api.scryfall.com/cards/named?fuzzy=...) for each one to confirm it
resolves to exactly one card (no "ambiguous name" or "not found" errors).

Run this locally (outside any sandboxed/offline environment) before
publishing a new version of the site, since Scryfall's API can't be reached
from this project's build sandbox.

Usage:
    pip install requests
    python3 verify_scryfall_images.py [path-to-mtg-story-codex-folder]

If no path is given, it assumes the script's own folder is the site root
(i.e. it's sitting next to index.html, style.css, etc.).

Output:
    - Prints a line per unique fuzzy= value: OK / AMBIGUOUS / NOT FOUND / ERROR
    - Prints a final summary
    - Exits with code 1 if any problems were found (useful in CI), else 0
"""

import sys
import os
import re
import glob
import time
import json
import urllib.parse

try:
    import requests
except ImportError:
    print("This script needs the 'requests' package. Install it with:")
    print("    pip install requests")
    sys.exit(2)

SCRYFALL_NAMED = "https://api.scryfall.com/cards/named"
REQUEST_DELAY = 0.6  # Scryfall asks callers to stay well under 10 req/sec; a real
                      # burst of ~10/sec still trips their rate limiter in practice,
                      # so this checker paces itself much slower than the stated max.
MAX_RETRIES = 3


def find_site_root(argv):
    if len(argv) > 1:
        return argv[1]
    return os.path.dirname(os.path.abspath(__file__))


def extract_fuzzy_from_html(text, filepath):
    """
    Find every `fuzzy=<value>` used in a Scryfall image URL inside an HTML
    file, e.g.:
      https://api.scryfall.com/cards/named?fuzzy=Tocasia%27s%20Welcome&format=image&version=art_crop
    Returns a list of (decoded_name, filepath) tuples.
    """
    results = []
    # match fuzzy=... up to the next & or " or '
    for m in re.finditer(r'fuzzy=([^&"\']+)', text):
        raw = m.group(1)
        decoded = urllib.parse.unquote_plus(raw)
        results.append((decoded, filepath))
    return results


def extract_fuzzy_from_js(text, filepath):
    """
    Find every `scryfall: "<Card Name>"` entry in script.js's characters
    array (used by the chapter-35 reality-fracture page), e.g.:
      scryfall: "Jadzi, Oracle of Arcavios",
    Returns a list of (name, filepath) tuples.
    """
    results = []
    for m in re.finditer(r'scryfall:\s*["\']([^"\']+)["\']', text):
        results.append((m.group(1), filepath))
    return results


def collect_all_fuzzy_names(site_root):
    seen = {}  # name -> list of files it appears in
    html_files = sorted(
        glob.glob(os.path.join(site_root, "*", "index.html"))
        + glob.glob(os.path.join(site_root, "*", "full.html"))
    )
    for fp in html_files:
        with open(fp, "r", encoding="utf-8") as f:
            text = f.read()
        for name, source in extract_fuzzy_from_html(text, fp):
            seen.setdefault(name, []).append(source)

    js_path = os.path.join(site_root, "35-reality-fracture", "script.js")
    if os.path.exists(js_path):
        with open(js_path, "r", encoding="utf-8") as f:
            text = f.read()
        for name, source in extract_fuzzy_from_js(text, js_path):
            seen.setdefault(name, []).append(source)

    return seen


def check_scryfall_name(name):
    """
    Calls Scryfall's /cards/named?fuzzy= endpoint for a single card name.
    Returns a tuple: (status, detail)
      status is one of: "OK", "AMBIGUOUS", "NOT_FOUND", "ERROR"
      detail is a human-readable message (matched card name on OK,
      Scryfall's error details otherwise).

    Retries on HTTP 429 (rate limited), honoring Retry-After when Scryfall
    sends one, since a single burst of lookups can trip their limiter even
    at a conservative request rate.
    """
    for attempt in range(1, MAX_RETRIES + 1):
        try:
            resp = requests.get(
                SCRYFALL_NAMED,
                params={"fuzzy": name},
                headers={"User-Agent": "MTGStoryCodexLinkChecker/1.0"},
                timeout=15,
            )
        except requests.RequestException as e:
            return "ERROR", f"request failed: {e}"

        if resp.status_code == 200:
            try:
                data = resp.json()
            except json.JSONDecodeError:
                return "ERROR", "200 OK but response was not valid JSON"
            matched_name = data.get("name", "?")
            return "OK", matched_name

        if resp.status_code == 404:
            try:
                data = resp.json()
            except json.JSONDecodeError:
                return "NOT_FOUND", resp.text[:200]
            details = data.get("details", "")
            if "many cards match" in details.lower() or "ambiguous" in details.lower():
                return "AMBIGUOUS", details
            return "NOT_FOUND", details

        if resp.status_code == 429:
            if attempt == MAX_RETRIES:
                return "ERROR", (
                    "still rate-limited after retries — re-run the script "
                    "later, or raise REQUEST_DELAY"
                )
            wait = float(resp.headers.get("Retry-After", "60"))
            print(f"  (rate-limited on \"{name}\", waiting {wait:.0f}s before retry "
                  f"{attempt}/{MAX_RETRIES - 1}...)")
            time.sleep(wait)
            continue

        return "ERROR", f"HTTP {resp.status_code}: {resp.text[:200]}"

    return "ERROR", "unreachable"


def main():
    site_root = find_site_root(sys.argv)
    if not os.path.isdir(site_root):
        print(f"Error: '{site_root}' is not a directory.")
        sys.exit(2)

    names = collect_all_fuzzy_names(site_root)
    if not names:
        print(f"No fuzzy= references found under '{site_root}'. "
              f"Did you point this at the mtg-story-codex folder?")
        sys.exit(2)

    print(f"Found {len(names)} unique Scryfall fuzzy= card names across the site.\n")
    print(f"{'STATUS':<10} {'CARD NAME':<45} DETAIL")
    print("-" * 100)

    problems = []
    for i, (name, files) in enumerate(sorted(names.items()), 1):
        status, detail = check_scryfall_name(name)
        marker = {"OK": "OK", "AMBIGUOUS": "AMBIGUOUS", "NOT_FOUND": "NOT FOUND", "ERROR": "ERROR"}[status]
        print(f"{marker:<10} {name:<45} {detail}")
        if status != "OK":
            problems.append((name, status, detail, files))
        time.sleep(REQUEST_DELAY)

    print("\n" + "=" * 100)
    print(f"Checked {len(names)} names. OK: {len(names) - len(problems)}  Problems: {len(problems)}")

    if problems:
        print("\nProblem details (with the file(s) where each name is used):")
        for name, status, detail, files in problems:
            print(f"\n  [{status}] \"{name}\"  —  {detail}")
            for fp in files:
                print(f"      used in: {os.path.relpath(fp, site_root)}")
        print(
            "\nTo fix an AMBIGUOUS or NOT_FOUND name, replace the fuzzy= value in "
            "the file(s) above with the card's exact, unambiguous full name "
            "(e.g. 'Kamahl' -> 'Kamahl, Pit Fighter'), URL-encoded if it contains "
            "spaces, commas or apostrophes (%20, %2C, %27)."
        )
        sys.exit(1)
    else:
        print("\nAll Scryfall image references resolve cleanly. Nothing to fix.")
        sys.exit(0)


if __name__ == "__main__":
    main()
