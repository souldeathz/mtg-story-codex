# MTG Story Codex

คลังสรุปเนื้อเรื่อง **Magic: The Gathering** ฉบับภาษาไทย ครบทั้งไทม์ไลน์ตั้งแต่ยุค Antiquities จนถึงยุคปัจจุบัน พร้อมคู่มือกฎกติกา คู่มือตัวละคร และอภิธานศัพท์ — เป็นเว็บไซต์ static ล้วน ๆ ไม่มี backend ไม่ต้อง build

🔗 **Live site:** [souldeathz.github.io/mtg-story-codex](https://souldeathz.github.io/mtg-story-codex/)

---

## มีอะไรในเว็บนี้

- **สารบัญเรื่องราว 35 บท** (`01-antiquities/` ถึง `35-reality-fracture/`) สรุปเนื้อเรื่องแต่ละชุดการ์ดตามลำดับเวลา พร้อมแหล่งอ้างอิงท้ายบททุกบท
- **กฎกติกา** (`rules.html`) — Comprehensive Rules ฉบับแปลไทย ตั้งแต่โครงสร้างเทิร์น, stack, state-based actions, คีย์เวิร์ดทั้งหมด, ระบบ 7 Layers, กฎ Commander/EDH, ไปจนถึงกรณีศึกษาเด็ค Aristocrats (Teysa Karlov + Delney + Bastion of Remembrance)
- **คู่มือตัวละคร** (`characters.html`) — รวมเพลนวอล์กเกอร์และตัวร้ายสำคัญ พร้อมลิงก์การ์ดที่เกี่ยวข้องบน Scryfall
- **อภิธานศัพท์** (`glossary.html`) — ศัพท์เฉพาะทางเกม
- สัญลักษณ์มานา/แท็ปและรูปภาพตัวละครในหน้าเว็บ hotlink มาจาก [Scryfall](https://scryfall.com) (`svgs.scryfall.io`, `api.scryfall.com`) ตามแนวทาง Fan Content Policy ของ Wizards of the Coast

## โครงสร้างโปรเจกต์

```
mtg-story-codex/
├── index.html            หน้าแรก / สารบัญ
├── rules.html             กฎกติกา
├── characters.html        คู่มือตัวละคร
├── glossary.html          อภิธานศัพท์
├── style.css              สไตล์รวมทั้งเว็บ
├── codex-nav.js           sidebar / navigation
├── script.js               สคริปต์ทั่วไป
├── sitemap.xml, robots.txt
└── 01-antiquities/ … 35-reality-fracture/
    └── index.html          เนื้อหาแต่ละบท
```

## เทคโนโลยีที่ใช้

Static HTML + CSS + vanilla JavaScript ล้วน ๆ — ไม่มี framework, ไม่มีขั้นตอน build, เปิดได้ทันทีจากเว็บเซิร์ฟเวอร์ใดก็ได้ ฟอนต์ใช้ Google Fonts (Fraunces, Noto Sans/Serif Thai)

## รันดูในเครื่อง

เนื่องจากรูปภาพและสัญลักษณ์บางส่วน hotlink จากภายนอก แนะนำให้รันผ่าน local server แทนการเปิดไฟล์ `index.html` ตรง ๆ (เปิดไฟล์ตรง ๆ ผ่าน `file://` อาจโดนเบราว์เซอร์บางตัว โดยเฉพาะบนมือถือ บล็อกการโหลดรีซอร์สข้ามโดเมน):

```bash
cd mtg-story-codex
python3 -m http.server 8000
# แล้วเปิด http://localhost:8000
```

## Deploy ขึ้น GitHub Pages

1. Push โฟลเดอร์นี้ขึ้น repo `mtg-story-codex`
2. ไปที่ Settings → Pages → Source เลือก branch `main` โฟลเดอร์ `/ (root)`
3. เว็บจะขึ้นที่ `https://<username>.github.io/mtg-story-codex/`

## แหล่งอ้างอิง & Disclaimer

เนื้อหาสรุปโดยอิงจากเนื้อเรื่องทางการของ Wizards of the Coast และแหล่งข้อมูลรองที่น่าเชื่อถือ (Scryfall, MTG Wiki, Star City Games, Card Kingdom ฯลฯ — ระบุไว้ท้ายแต่ละบท) โปรเจกต์นี้เป็นผลงานแฟนคลับ **ไม่มีความเกี่ยวข้องกับ Wizards of the Coast** จัดทำภายใต้ [Fan Content Policy](https://company.wizards.com/en/legal/fancontentpolicy) ห้ามใช้เพื่อการค้า

Portions of the materials used are property of Wizards of the Coast. ©Wizards of the Coast LLC.
