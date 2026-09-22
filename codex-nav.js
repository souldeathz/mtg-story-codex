(function () {
  var VOLUMES = [{"num": 1, "title": "ยุคบุกเบิก", "years": "1993–1996", "featured": false, "chapters": [{"num": 1, "slug": "01-antiquities", "title": "สงครามพี่น้องอูซา", "sets": "Antiquities · The Brothers' War", "chars": ["Urza", "Mishra", "Gix"]}, {"num": 2, "slug": "02-ice-age", "title": "ยุคน้ำแข็ง", "sets": "Ice Age · Alliances", "chars": ["Lim-Dûl"]}]}, {"num": 2, "title": "มหากาพย์เรือเวเธอร์ไลท์", "years": "1996–2001", "featured": false, "chapters": [{"num": 3, "slug": "03-tempest", "title": "Weatherlight Saga", "sets": "Tempest · Stronghold · Exodus · Urza's Saga · Urza's Legacy · Urza's Destiny", "chars": ["Urza", "Gerrard Capashen", "Sisay", "Mirri", "Orim", "Tahngarth", "Karn", "Volrath"]}, {"num": 4, "slug": "04-invasion", "title": "การรุกรานของฟิวเรกเซีย", "sets": "Invasion · Planeshift · Apocalypse", "chars": ["Urza", "Yawgmoth", "Gerrard", "Crovax", "Karn"]}]}, {"num": 3, "title": "ยุคหลังสงคราม", "years": "2001–2005", "featured": false, "chapters": [{"num": 5, "slug": "05-odyssey", "title": "โอทาเรียและคาบาล", "sets": "Odyssey · Torment · Judgment · Onslaught · Legions · Scourge", "chars": ["Kamahl", "Jeska", "Phage", "Karona"]}, {"num": 6, "slug": "06-mirrodin", "title": "มิรร็อดินและคามิงาวะ", "sets": "Mirrodin · Darksteel · Fifth Dawn · Champions of Kamigawa · Betrayers of Kamigawa · Saviors of Kamigawa", "chars": ["Memnarch", "Karn", "Glissa Sunslayer", "Konda", "Toshiro Umezawa", "Godo"]}]}, {"num": 4, "title": "ยุคกิลด์และการเปลี่ยนผ่าน", "years": "2005–2008", "featured": false, "chapters": [{"num": 7, "slug": "07-ravnica-city-of-guilds", "title": "ราฟนิก้า: นครแห่งกิลด์", "sets": "Ravnica: City of Guilds · Guildpact · Dissension", "chars": ["Agrus Kos", "Teysa Karlov", "Szadek", "Savra"]}, {"num": 8, "slug": "08-time-spiral", "title": "รอยแยกเวลาและการเมนดิ้ง", "sets": "Time Spiral · Planar Chaos · Future Sight", "chars": ["Teferi", "Freyalise", "Karn", "Leshrac", "Nicol Bolas", "Jeska"]}]}, {"num": 5, "title": "ยุคเพลนวอล์กเกอร์ใหม่", "years": "2007–2011", "featured": false, "chapters": [{"num": 9, "slug": "09-lorwyn", "title": "ลอร์วินและแชโดว์มัวร์", "sets": "Lorwyn · Morningtide · Shadowmoor · Eventide", "chars": ["Ajani", "Chandra", "Garruk", "Nicol Bolas", "Tezzeret", "Maralen", "Oona"]}, {"num": 10, "slug": "10-shards-of-alara", "title": "เศษเสี้ยวแห่งอลาร่า", "sets": "Shards of Alara · Conflux · Alara Reborn", "chars": ["Nicol Bolas", "Sarkhan Vol", "Ajani", "Elspeth"]}, {"num": 11, "slug": "11-zendikar", "title": "เซนดิการ์และเอลดราซี", "sets": "Zendikar · Worldwake · Rise of the Eldrazi", "chars": ["Nicol Bolas", "Sarkhan Vol", "Jace Beleren", "Chandra", "Emrakul"]}]}, {"num": 6, "title": "ยุคฟิวเรกเซียกลับมา และก่อร่าง Gatewatch", "years": "2010–2016", "featured": false, "chapters": [{"num": 12, "slug": "12-scars-of-mirrodin", "title": "รอยแผลแห่งมิรร็อดิน", "sets": "Scars of Mirrodin · Mirrodin Besieged · New Phyrexia", "chars": ["Elesh Norn", "Melira", "Jin-Gitaxias", "Sheoldred", "Urabrask", "Vorinclex"]}, {"num": 13, "slug": "13-innistrad", "title": "อินนิสแทรด", "sets": "Innistrad · Dark Ascension", "chars": ["Avacyn", "Griselbrand"]}, {"num": 14, "slug": "14-return-to-ravnica", "title": "หวนคืนราฟนิก้าและเธรอส", "sets": "Return to Ravnica · Gatecrash · Dragon's Maze · Theros · Born of the Gods · Journey into Nyx", "chars": ["Niv-Mizzet", "Trostani", "Elspeth", "Heliod", "Erebos"]}, {"num": 15, "slug": "15-khans-of-tarkir", "title": "ข่านแห่งทาร์คีร์", "sets": "Khans of Tarkir · Fate Reforged · Dragons of Tarkir", "chars": ["Sarkhan Vol"]}, {"num": 16, "slug": "16-battle-for-zendikar", "title": "สมรภูมิเซนดิการ์และกำเนิด Gatewatch", "sets": "Battle for Zendikar · Oath of the Gatewatch", "chars": ["Jace Beleren", "Chandra Nalaar", "Nissa", "Gideon Jura", "Nissa Revane"]}]}, {"num": 7, "title": "ยุค Gatewatch ปะทะนิโคล โบลาส", "years": "2016–2019", "featured": false, "chapters": [{"num": 17, "slug": "17-shadows-over-innistrad", "title": "เงามืดเหนืออินนิสแทรด", "sets": "Shadows over Innistrad · Eldritch Moon", "chars": ["Emrakul", "Nahiri", "Sorin Markov", "Avacyn"]}, {"num": 18, "slug": "18-kaladesh", "title": "คาลาเดชและแผนของนิโคล โบลาส", "sets": "Kaladesh · Aether Revolt", "chars": ["Chandra Nalaar", "Nicol Bolas", "Pia", "Saheeli"]}, {"num": 19, "slug": "19-amonkhet", "title": "อามอนเค็ตและกับดักของโบลาส", "sets": "Amonkhet · Hour of Devastation", "chars": ["Nicol Bolas", "Jace", "Liliana", "Gideon"]}, {"num": 20, "slug": "20-ixalan", "title": "อิกซาลัน", "sets": "Ixalan · Rivals of Ixalan", "chars": ["Nicol Bolas"]}, {"num": 21, "slug": "21-dominaria", "title": "โดมิเนียและสงครามเพลนวอล์กเกอร์", "sets": "Dominaria · Guilds of Ravnica · Ravnica Allegiance · War of the Spark", "chars": ["Urza", "Nicol Bolas", "Liliana", "Gideon Jura", "Jodah", "Teferi", "Chandra"]}]}, {"num": 8, "title": "ยุคสำรวจเพลนใหม่", "years": "2019–2022", "featured": false, "chapters": [{"num": 22, "slug": "22-throne-of-eldraine", "title": "บัลลังก์เอลดราแรน (ครั้งแรก)", "sets": "Throne of Eldraine", "chars": ["Will Kenrith", "King Kenrith"]}, {"num": 23, "slug": "23-theros-beyond-death", "title": "เธรอสยามมรณะ ถึง เซนดิการ์คืนชีพ", "sets": "Theros Beyond Death · Ikoria: Lair of Behemoths · Zendikar Rising", "chars": ["Erebos"]}, {"num": 24, "slug": "24-kaldheim", "title": "คาลด์เฮมถึงสตริกซ์เฮเวน", "sets": "Kaldheim · Strixhaven: School of Mages", "chars": []}, {"num": 25, "slug": "25-innistrad-midnight-hunt", "title": "มิดไนท์ฮันท์และคริมสันโว", "sets": "Innistrad: Midnight Hunt · Innistrad: Crimson Vow", "chars": ["Emrakul"]}, {"num": 26, "slug": "26-kamigawa-neon-dynasty", "title": "นีออนไดนาสตี้และนิวคาเปนนา", "sets": "Kamigawa: Neon Dynasty · Streets of New Capenna", "chars": []}]}, {"num": 9, "title": "สงครามฟิวเรกเซียครั้งสุดท้าย", "years": "2022–2023", "featured": false, "chapters": [{"num": 27, "slug": "27-dominaria-united", "title": "โดมิเนียยูไนเต็ดและสงครามพี่น้อง", "sets": "Dominaria United · The Brothers' War", "chars": ["Urza", "Mishra", "Sheoldred", "Teferi", "Karn"]}, {"num": 28, "slug": "28-phyrexia-all-will-be-one", "title": "ฟิวเรกเซีย: ทุกคนจะเป็นหนึ่งเดียว", "sets": "Phyrexia: All Will Be One", "chars": ["Elesh Norn", "Urabrask", "Sheoldred", "Elspeth"]}, {"num": 29, "slug": "29-march-of-the-machine", "title": "มีนาคมแห่งเครื่องจักร", "sets": "March of the Machine · March of the Machine: The Aftermath", "chars": []}]}, {"num": 10, "title": "Metronome Arc", "years": "2023–2026 · ยุคปัจจุบัน", "featured": true, "chapters": [{"num": 30, "slug": "30-wilds-of-eldraine", "title": "จุดเริ่มต้นของ Metronome", "sets": "Wilds of Eldraine · The Lost Caverns of Ixalan · Murders at Karlov Manor", "chars": ["Will Kenrith", "Alquist Proft"]}, {"num": 31, "slug": "31-outlaws-of-thunder-junction", "title": "ทางตะวันตกและป่าฤดูใบไม้ร่วง", "sets": "Outlaws of Thunder Junction · Bloomburrow", "chars": ["Oko", "Akul", "Jace", "Vraska"]}, {"num": 32, "slug": "32-duskmourn-house-of-horror", "title": "บ้านผีสิง Duskmourn", "sets": "Duskmourn: House of Horror", "chars": ["Tamiyo", "Niko Aris", "Tyvar Kell", "Zimone Wola", "Kaito Shizuki", "the Wanderer", "Jace Beleren", "Valgavoth"]}, {"num": 33, "slug": "33-aetherdrift", "title": "การแข่งขันข้ามเพลน Aetherdrift", "sets": "Aetherdrift", "chars": ["Chandra Nalaar", "Nissa", "Jace", "Sita Varma", "Daretti", "Mohar Varma"]}, {"num": 34, "slug": "34-tarkir-dragonstorm", "title": "พายุมังกรทาร์คีร์ และจุดแตกหักของ Jace", "sets": "Tarkir: Dragonstorm", "chars": ["Elspeth", "Narset", "Jace", "Ugin", "Vraska", "Nicol Bolas", "Sarkhan", "Ajani"]}, {"num": 35, "slug": "35-reality-fracture", "title": "Reality Fracture — บทปิดฉาก", "sets": "Reality Fracture", "chars": ["Jace", "Vraska"]}]}];
  var base = window.CODEX_BASE || "./";
  var current = window.CODEX_CHAPTER || null;

  var SHORTCUTS = [
    { href: "characters.html", label: "คู่มือตัวละคร", icon: "chars" },
    { href: "planes.html", label: "อภิธานเพลน", icon: "planes" },
    { href: "glossary.html", label: "อภิธานศัพท์", icon: "glossary" }
  ];

  var RULES_PAGES = ["rules.html", "rules-mechanics.html", "rules-commander.html", "rules-aristocrats.html"];

  var RULES_TIERS = [
    {
      page: "rules.html",
      label: "1. พื้นฐานเกมและโครงสร้าง",
      items: [
        { id: "basics", label: "พื้นฐานเกม" },
        { id: "turn", label: "โครงสร้างเทิร์น" },
        { id: "cardtypes", label: "ประเภทการ์ด" },
        { id: "stack", label: "Stack" },
        { id: "mana", label: "มานาและต้นทุน" },
        { id: "casting-cost", label: "ร่ายสเปลล์ & Stack" },
        { id: "combat", label: "การต่อสู้ (Combat)" },
        { id: "counters", label: "เคาน์เตอร์" }
      ]
    },
    {
      page: "rules-mechanics.html",
      label: "2. กลไกและเอฟเฟกต์",
      items: [
        { id: "triggered", label: "Triggered Abilities" },
        { id: "tokens", label: "กฎ Token" },
        { id: "sba", label: "State-Based Actions" },
        { id: "death-timing", label: "ตายพร้อมกัน vs ทีละตัว" },
        { id: "replacement", label: "Replacement Effects" },
        { id: "copy", label: "Copy Effects" },
        { id: "graveyard", label: "Graveyard และ Exile" },
        { id: "edge-cases", label: "ปฏิสัมพันธ์ & กรณีพิเศษ" },
        { id: "keywords", label: "อภิธานศัพท์คีย์เวิร์ด" }
      ]
    },
    {
      page: "rules-commander.html",
      label: "3. Commander (EDH) & Orzhov",
      items: [
        { id: "commander", label: "กฎเฉพาะ Commander (EDH)" },
        { id: "orzhov", label: "กลไกสี Orzhov" },
        { id: "edict-effects", label: "Edict Effects เจาะลึก" },
        { id: "infinite-combo", label: "Infinite Combo / Loop" }
      ]
    },
    {
      page: "rules-aristocrats.html",
      label: "4. กรณีศึกษา Aristocrats & FAQ",
      items: [
        { id: "aristocrats-case-study", label: "กรณีศึกษา Aristocrats" },
        { id: "token-doubling-case-study", label: "ตัวคูณโทเค็น vs ตัวคูณทริกเกอร์" },
        { id: "dies-wording", label: "ถ้อยคำ death-trigger" },
        { id: "faq", label: "คำถามที่พบบ่อย" }
      ]
    }
  ];

  function chevronSvg(cls) {
    return '<svg class="' + (cls || "vol-head-chevron") + '" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="9 6 15 12 9 18"></polyline></svg>';
  }

  function shortcutIcon(name) {
    if (name === "rules") {
      return '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 4h9l3 3v13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z"></path><path d="M9 9h6M9 13h6M9 17h3"></path></svg>';
    }
    if (name === "chars") {
      return '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.2"></circle><path d="M2.5 20c.6-3.6 3.3-6 6.5-6s5.9 2.4 6.5 6"></path><circle cx="17.5" cy="8.5" r="2.6"></circle><path d="M15.6 14.3c2.6.4 4.8 2.5 5.3 5.7"></path></svg>';
    }
    if (name === "planes") {
      return '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><ellipse cx="12" cy="12" rx="4" ry="9"></ellipse><path d="M3 12h18"></path></svg>';
    }
    return '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16l6-3.5z"></path></svg>';
  }

  function currentFile() {
    var path = (window.location && window.location.pathname) || "";
    var parts = path.split("/");
    var last = parts[parts.length - 1];
    return last && last.length ? last : "index.html";
  }

  function currentHash() {
    return (window.location && window.location.hash) ? window.location.hash.replace("#", "") : "";
  }

  function renderRulesGroup(isOnRulesPage, currentFileName, activeId) {
    var open = isOnRulesPage;
    var html =
      '<div class="vol-group rules-group' + (open ? " is-open" : "") + (isOnRulesPage ? " is-active" : "") + '" data-group="rules">' +
      '<button class="vol-head" type="button" aria-expanded="' + (open ? "true" : "false") + '">' +
      '<span class="vol-head-left">' + chevronSvg() +
      '<span class="vol-head-label">' + shortcutIcon("rules") + '<span>กฎกติกา MTG</span></span></span>' +
      '<span class="vol-head-count">26 ข้อ · 4 หน้า</span>' +
      "</button>" +
      '<div class="vol-chapters rules-chapters"' + (open ? "" : " hidden") + ">";

    RULES_TIERS.forEach(function (tier) {
      html += '<p class="rules-tier-label">' + escapeHtml(tier.label) + "</p>";
      tier.items.forEach(function (it) {
        var isActive = isOnRulesPage && currentFileName === tier.page && it.id === activeId;
        html +=
          '<a class="ch-row' + (isActive ? " is-active" : "") + '" href="' + base + tier.page + "#" + it.id + '"' +
          (isActive ? ' aria-current="page"' : "") + ">" + escapeHtml(it.label) + "</a>";
      });
    });

    html += "</div></div>";
    return html;
  }

  function renderShortcuts() {
    var anchor = document.getElementById("sidebar-nav");
    if (!anchor || !anchor.parentNode) return;
    var file = currentFile();

    var html = '<div class="sidebar-shortcuts">';
    SHORTCUTS.forEach(function (s) {
      var isActive = file === s.href;
      html +=
        '<a class="shortcut-link' + (isActive ? " is-active" : "") + '" href="' + base + s.href + '"' +
        (isActive ? ' aria-current="page"' : "") + ">" +
        shortcutIcon(s.icon) + "<span>" + s.label + "</span></a>";
    });
    html += "</div>";
    anchor.insertAdjacentHTML("beforebegin", html);
  }

  function renderSidebar(filterText) {
    var nav = document.getElementById("sidebar-nav");
    if (!nav) return;
    var q = (filterText || "").trim().toLowerCase();
    var file = currentFile();
    var isOnRulesPage = RULES_PAGES.indexOf(file) !== -1;
    var activeId = isOnRulesPage ? currentHash() : "";
    var html = "";
    var anyMatch = false;

    VOLUMES.forEach(function (vol) {
      var isActiveVol = vol.chapters.some(function (c) { return c.num === current; });
      var chapterRows = [];
      vol.chapters.forEach(function (c) {
        var charsText = (c.chars || []).join(" ");
        var hay = (c.title + " " + c.sets + " " + charsText).toLowerCase();
        var matches = !q || hay.indexOf(q) !== -1;
        if (!matches) return;
        anyMatch = true;
        var activeCls = c.num === current ? " is-active" : "";
        var num = String(c.num).padStart(2, "0");
        chapterRows.push(
          '<a class="ch-row' + activeCls + '" href="' + base + c.slug + '/index.html"' +
          (c.num === current ? ' aria-current="page"' : "") + '>' +
          '<span class="ch-row-num">' + num + '</span>' + escapeHtml(c.title) + "</a>"
        );
      });
      if (q && chapterRows.length === 0) return;
      var open = q ? true : isActiveVol;
      html +=
        '<div class="vol-group' + (open ? " is-open" : "") + (isActiveVol ? " is-active" : "") + '" data-vol="' + vol.num + '">' +
        '<button class="vol-head" type="button" aria-expanded="' + (open ? "true" : "false") + '">' +
        '<span class="vol-head-left">' + chevronSvg() +
        '<span class="vol-head-label">เล่ม ' + vol.num + " · " + escapeHtml(vol.title) + "</span></span>" +
        '<span class="vol-head-count">' + vol.chapters.length + ' บท</span>' +
        "</button>" +
        '<div class="vol-chapters"' + (open ? "" : " hidden") + ">" +
        chapterRows.join("") +
        "</div></div>";
    });

    if (q && !anyMatch) {
      html = '<p class="sidebar-empty">ไม่พบบทที่ตรงกับ “' + escapeHtml(filterText) + '”</p>';
    }
    html += renderRulesGroup(isOnRulesPage, file, activeId);
    nav.innerHTML = html;

    nav.querySelectorAll(".vol-head").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var group = btn.closest(".vol-group");
        var chapters = group.querySelector(".vol-chapters");
        var isOpen = group.classList.toggle("is-open");
        btn.setAttribute("aria-expanded", isOpen ? "true" : "false");
        if (isOpen) chapters.removeAttribute("hidden");
        else chapters.setAttribute("hidden", "");
      });
    });
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    renderShortcuts();
    renderSidebar("");

    var search = document.getElementById("codex-search");
    if (search) {
      search.addEventListener("input", function () {
        renderSidebar(search.value);
      });
    }

    var toggle = document.querySelector(".sidebar-toggle");
    var backdrop = document.querySelector(".sidebar-backdrop");
    function closeSidebar() { document.body.classList.remove("sidebar-open"); }
    function openSidebar() { document.body.classList.add("sidebar-open"); }
    if (toggle) {
      toggle.addEventListener("click", function () {
        document.body.classList.contains("sidebar-open") ? closeSidebar() : openSidebar();
      });
    }
    if (backdrop) backdrop.addEventListener("click", closeSidebar);
  });
})();
