#!/usr/bin/env python3
"""
download_images.py — MTG Story Codex image localizer

Downloads every Scryfall card-art image the site currently hotlinks
(https://api.scryfall.com/cards/named?fuzzy=...) into a local
images/cards/ folder, then rewrites every index.html, full.html, and
35-reality-fracture/script.js to point at the local file instead of the
live Scryfall API.

Why run this yourself: this script needs to reach api.scryfall.com, which
isn't reachable from Claude's own tool-mediated network (sandbox or linked
device) — but it works fine from your own machine, same as
verify_scryfall_images.py did.

Usage:
    pip install requests
    python3 download_images.py [path-to-mtg-story-codex-folder]

If no path is given, it assumes the script's own folder is the site root.

What it does:
    1. Finds every unique `fuzzy=` card name used across the site.
    2. Downloads each card's art_crop image to images/cards/<slug>.jpg
       (paced slowly and retried on Scryfall's rate limiting, like
       verify_scryfall_images.py).
    3. Rewrites every reference to that Scryfall URL, in every
       index.html / full.html / 35-reality-fracture/script.js, to a
       relative local path instead.
    4. Prints a summary of what succeeded and what didn't. Any name that
       fails to download is left pointing at the live Scryfall URL
       (unchanged) so the page still works, just not fully offline.

After running, the images/ folder becomes part of the site — if you
re-zip or re-publish this site elsewhere, bring that folder along.

Note on licensing: downloading and self-hosting card art like this for a
non-commercial fan project is covered by Wizards of the Coast's Fan
Content Policy (https://company.wizards.com/en/legal/fancontentpolicy).
This isn't legal advice — read the policy yourself if you plan to do
anything beyond a personal/non-commercial project with it.
"""

import sys
import os
import re
import glob
import time
import json
import unicodedata
import urllib.parse

try:
    import requests
except ImportError:
    print("This script needs the 'requests' package. Install it with:")
    print("    pip install requests")
    sys.exit(2)

SCRYFALL_NAMED = "https://api.scryfall.com/cards/named"
REQUEST_DELAY = 0.6  # matches verify_scryfall_images.py's pacing
MAX_RETRIES = 3
IMAGES_SUBDIR = os.path.join("images", "cards")


def find_site_root(argv):
    if len(argv) > 1:
        return argv[1]
    return os.path.dirname(os.path.abspath(__file__))


def slugify(name):
    """Turn a card name into a filesystem-safe, readable filename stem."""
    # normalize accented characters (Lim-Dûl -> Lim-Dul) for a clean filename
    normalized = unicodedata.normalize("NFKD", name)
    ascii_name = normalized.encode("ascii", "ignore").decode("ascii")
    slug = re.sub(r"[^a-zA-Z0-9]+", "-", ascii_name).strip("-").lower()
    return slug or "card"


def extract_fuzzy_occurrences(text):
    """
    Returns a list of (raw_encoded_value, decoded_name, full_match_url)
    for every fuzzy= reference found in an HTML/JS file's Scryfall image
    URLs, e.g. matches:
      https://api.scryfall.com/cards/named?fuzzy=Tocasia%27s%20Welcome&format=image&version=art_crop
    """
    results = []
    for m in re.finditer(
        r"https://api\.scryfall\.com/cards/named\?fuzzy=([^&\"']+)&format=image&version=art_crop",
        text,
    ):
        raw = m.group(1)
        decoded = urllib.parse.unquote_plus(raw)
        results.append((raw, decoded, m.group(0)))
    return results


def extract_fuzzy_from_js(text):
    """35-reality-fracture/script.js builds its URL from `scryfall: "Name"` fields."""
    return [(m.group(1)) for m in re.finditer(r'scryfall:\s*["\']([^"\']+)["\']', text)]


def collect_all_names(site_root):
    names = {}  # decoded_name -> set of files it appears in
    html_files = sorted(
        glob.glob(os.path.join(site_root, "*", "index.html"))
        + glob.glob(os.path.join(site_root, "*", "full.html"))
    )
    for fp in html_files:
        with open(fp, "r", encoding="utf-8") as f:
            text = f.read()
        for _, decoded, _ in extract_fuzzy_occurrences(text):
            names.setdefault(decoded, set()).add(fp)

    js_path = os.path.join(site_root, "35-reality-fracture", "script.js")
    if os.path.exists(js_path):
        with open(js_path, "r", encoding="utf-8") as f:
            text = f.read()
        for name in extract_fuzzy_from_js(text):
            names.setdefault(name, set()).add(js_path)

    return names


def download_card_image(name, dest_path):
    """
    Downloads the art_crop image for a card name via Scryfall's fuzzy-name
    endpoint (format=image redirects straight to the image bytes).
    Returns (ok, message).
    """
    for attempt in range(1, MAX_RETRIES + 1):
        try:
            resp = requests.get(
                SCRYFALL_NAMED,
                params={"fuzzy": name, "format": "image", "version": "art_crop"},
                headers={"User-Agent": "MTGStoryCodexImageDownloader/1.0"},
                timeout=30,
            )
        except (requests.exceptions.Timeout, requests.exceptions.ConnectionError) as e:
            if attempt == MAX_RETRIES:
                return False, f"request failed after {MAX_RETRIES} tries: {e}"
            print(f"  (timed out on \"{name}\", retrying {attempt}/{MAX_RETRIES - 1}...)")
            time.sleep(2)
            continue
        except requests.RequestException as e:
            return False, f"request failed: {e}"

        if resp.status_code == 200 and resp.headers.get("content-type", "").startswith("image/"):
            with open(dest_path, "wb") as f:
                f.write(resp.content)
            return True, f"{len(resp.content)} bytes"

        if resp.status_code == 429:
            if attempt == MAX_RETRIES:
                return False, "still rate-limited after retries"
            wait = float(resp.headers.get("Retry-After", "60"))
            print(f"  (rate-limited on \"{name}\", waiting {wait:.0f}s...)")
            time.sleep(wait)
            continue

        if resp.status_code == 404:
            return False, "not found / ambiguous on Scryfall"

        return False, f"HTTP {resp.status_code}"

    return False, "unreachable"


def main():
    site_root = find_site_root(sys.argv)
    if not os.path.isdir(site_root):
        print(f"Error: '{site_root}' is not a directory.")
        sys.exit(2)

    names = collect_all_names(site_root)
    if not names:
        print(f"No Scryfall image references found under '{site_root}'. "
              f"Did you point this at the mtg-story-codex folder?")
        sys.exit(2)

    images_dir = os.path.join(site_root, IMAGES_SUBDIR)
    os.makedirs(images_dir, exist_ok=True)

    print(f"Found {len(names)} unique card images to download into "
          f"{os.path.relpath(images_dir, site_root)}/\n")

    # assign a unique slug per name (dedupe collisions defensively)
    used_slugs = set()
    slug_for = {}
    for name in sorted(names):
        base = slugify(name)
        slug = base
        i = 2
        while slug in used_slugs:
            slug = f"{base}-{i}"
            i += 1
        used_slugs.add(slug)
        slug_for[name] = slug

    succeeded = {}  # name -> local relative path (e.g. "images/cards/foo.jpg")
    failed = []

    for i, name in enumerate(sorted(names), 1):
        slug = slug_for[name]
        dest_path = os.path.join(images_dir, f"{slug}.jpg")
        if os.path.exists(dest_path) and os.path.getsize(dest_path) > 0:
            print(f"[{i}/{len(names)}] SKIP (already downloaded)  {name}")
            succeeded[name] = f"{IMAGES_SUBDIR}/{slug}.jpg".replace(os.sep, "/")
            continue
        ok, msg = download_card_image(name, dest_path)
        status = "OK" if ok else "FAIL"
        print(f"[{i}/{len(names)}] {status:<5} {name}  ({msg})")
        if ok:
            succeeded[name] = f"{IMAGES_SUBDIR}/{slug}.jpg".replace(os.sep, "/")
        else:
            failed.append((name, msg))
        time.sleep(REQUEST_DELAY)

    # ---- rewrite HTML/JS files to point at local images ----
    print(f"\nDownloaded {len(succeeded)}/{len(names)} images. Rewriting site files...\n")

    html_files = sorted(
        glob.glob(os.path.join(site_root, "*", "index.html"))
        + glob.glob(os.path.join(site_root, "*", "full.html"))
    )
    rewritten_files = 0
    total_replacements = 0

    for fp in html_files:
        with open(fp, "r", encoding="utf-8") as f:
            text = f.read()
        original = text
        for raw, decoded, full_url in extract_fuzzy_occurrences(text):
            if decoded in succeeded:
                # chapter files live one level below the site root
                local_path = "../" + succeeded[decoded]
                text = text.replace(full_url, local_path)
        if text != original:
            with open(fp, "w", encoding="utf-8") as f:
                f.write(text)
            n = sum(1 for _, decoded, _ in extract_fuzzy_occurrences(original) if decoded in succeeded)
            rewritten_files += 1
            total_replacements += n

    js_path = os.path.join(site_root, "35-reality-fracture", "script.js")
    if os.path.exists(js_path):
        with open(js_path, "r", encoding="utf-8") as f:
            text = f.read()
        original = text
        # script.js builds the URL at runtime from `scryfall: "Name"`, so instead
        # of rewriting the template we add a `localImg` field next to each entry
        # and prefer it in the renderer.
        for name in extract_fuzzy_from_js(text):
            if name in succeeded:
                local_path = "../" + succeeded[name]
                pattern = re.compile(
                    r'(scryfall:\s*["\']' + re.escape(name) + r'["\'])(,?)'
                )
                if 'localImg:' not in text.split(f'scryfall: "{name}"')[0][-200:]:
                    text = pattern.sub(
                        lambda m: f'{m.group(1)}{m.group(2)} localImg: "{local_path}",',
                        text,
                        count=1,
                    )
        if text != original:
            # patch the renderer to prefer localImg when present
            text = text.replace(
                'const imgUrl = `https://api.scryfall.com/cards/named?fuzzy=${encodeURIComponent(c.scryfall)}&format=image&version=art_crop`;',
                'const imgUrl = c.localImg || `https://api.scryfall.com/cards/named?fuzzy=${encodeURIComponent(c.scryfall)}&format=image&version=art_crop`;',
            )
            with open(js_path, "w", encoding="utf-8") as f:
                f.write(text)
            rewritten_files += 1

    print(f"Rewrote {rewritten_files} file(s), {total_replacements} image reference(s) "
          f"now point at local files under {IMAGES_SUBDIR}/.")

    if failed:
        print(f"\n{len(failed)} image(s) could not be downloaded and were left "
              f"pointing at the live Scryfall URL (site still works, just not "
              f"fully offline for these):")
        for name, msg in failed:
            print(f"  - {name}: {msg}")

    print("\nDone. The images/ folder is now part of the site — keep it "
          "alongside index.html etc. if you move or re-zip the project.")


if __name__ == "__main__":
    main()