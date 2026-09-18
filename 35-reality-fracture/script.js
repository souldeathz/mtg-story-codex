// ---------- Data ----------

const characters = [
  {
    name: "Vraska",
    role: "นักฆ่ากอร์กอนจาก Ravnica · คนรักของ Jace",
    faction: "resistance",
    icon: "coil",
    scryfall: "Vraska",
    desc: "ตัวละครหลักที่สุดของเรื่อง ต้องเผชิญกับความจริงว่าคนที่เธอรักกำลังทำลายมัลติเวิร์ส เป็นคนเดียวที่ Theorist สะกดให้หลับไม่ได้ เพราะความผูกพันทางใจที่แน่นแฟ้น"
  },
  {
    name: "Chandra Nalaar",
    role: "นักเพลิงมนตร์ · เพื่อนเก่าของ Jace",
    faction: "resistance",
    icon: "flame",
    scryfall: "Chandra Nalaar",
    desc: "ตัวตั้งตัวตีในการรวมทีมออกตามหา Jace หลังรู้ว่าเขายังไม่ตาย"
  },
  {
    name: "Ajani Goldmane",
    role: "สิงโตนักรบ · เมนเทอร์",
    faction: "resistance",
    icon: "rays",
    scryfall: "Ajani Goldmane",
    desc: "ผู้มีเหตุผลและใจเย็นในทีม คอยถ่วงดุลความหุนหันของเพื่อนร่วมทาง"
  },
  {
    name: "Garruk Wildspeaker",
    role: "นักล่าจาก Muraganda",
    faction: "resistance",
    icon: "claw",
    scryfall: "Garruk Wildspeaker",
    desc: "ถูกดึงกลับมาร่วมทีมทั้งที่ปลีกตัวไปนาน มีพลังมองทะลุภาพลวงตา ซึ่งมีประโยชน์มากตลอดเรื่อง"
  },
  {
    name: "Liliana Vess",
    role: "เนโครแมนเซอร์ · อดีตพันธมิตรของ Jace",
    faction: "resistance",
    icon: "moon",
    scryfall: "Liliana Vess",
    desc: "มีทั้งเวอร์ชันจริงและเวอร์ชันปลอมใน Echoverse บทบาทซับซ้อน สุดท้ายมาร่วมไว้อาลัย Jace ตอนจบ"
  },
  {
    name: "Jace Beleren / The Theorist",
    role: "ตัวเอกของเรื่อง · ผู้สร้าง Echoverse",
    faction: "echoverse",
    icon: "vortex",
    scryfall: "Jace Beleren",
    desc: "อดีตนักจิตวิญญาณที่บอบช้ำจาก Phyrexian Invasion จนสร้างจักรวาลคู่ขนานไร้โศกนาฏกรรมของตัวเอง ตลอดเรื่องแตกออกเป็นหลายเสี้ยวบุคลิก เช่น the Detective, the Soldier, the Guildpact, the Nihilist"
  },
  {
    name: "Tam (Tamira)",
    role: "สิ่งมีชีวิตประดิษฐ์ที่ Jace สร้างขึ้น",
    faction: "echoverse",
    icon: "hex",
    scryfall: "Tamira",
    desc: "มีความทรงจำจากชีวิตเดิมที่ Strixhaven ค่อยๆ ค้นพบพลังจิตของตัวเอง และกลายเป็นตัวละครสำคัญที่สุดในตอนจบ — เผยว่าถูกสร้างมาเป็นทายาท/แผนสำรองของ Jace"
  },
  {
    name: "Jadzi",
    role: "โอราเคิลผู้พยากรณ์",
    faction: "echoverse",
    icon: "eye",
    scryfall: "Jadzi",
    desc: "ถูก Tam จับตัวมาส่งให้ Jace ก่อนเริ่มเรื่อง ถูกขังไว้เพื่อให้ Theorist ใช้ไขความลับสู่การรู้แจ้งทุกสิ่ง"
  },
  {
    name: "Alhammarret",
    role: "สฟิงซ์ยักษ์",
    faction: "echoverse",
    icon: "pyramid",
    scryfall: "Alhammarret",
    desc: "เคยทำร้าย/หลอกใช้ Jace ตอนเด็ก เป็นตัวแทนบาดแผลในอดีตที่ตามหลอกหลอน ถูกปลุกขึ้นมาอีกครั้งกลางเรื่อง"
  },
  {
    name: "Emrakul",
    role: "เอลดราซิจากดวงจันทร์ Innistrad",
    faction: "echoverse",
    icon: "shard",
    scryfall: "Emrakul",
    desc: "ปรากฏตัวในตอนจบเพื่อกินเฉพาะ Echoverse ของ Jace หลังถูก Tam เจรจาต่อรองด้วยพลังจิต"
  }
];

// ---------- Icon set (original geometric glyphs, faceted to match the hero's shard motif) ----------

const icons = {
  flame: '<path d="M12 3c1.2 2.4-.4 3.6-1.4 5-1.3 1.8-1.6 3.4-.6 5 .8-1.2 1.6-1.6 2-1.2.6.6-.2 1.8.6 2.8 1.4-.6 2.4-2 2.4-3.8 0-3-2-4.6-3-7.8Z"/>',
  coil: '<path d="M12 4c3 0 5 2 5 4.6 0 2-1.4 3.4-3.2 3.4-1.4 0-2.4-1-2.4-2.2 0-1 .7-1.6 1.6-1.6M12 4c-3 0-5 2-5 4.6 0 2.6 2 4.6 4.6 4.6M11.6 20c2.6 0 4.6-2 4.6-4.6" fill="none"/>',
  rays: '<circle cx="12" cy="12" r="3.4" fill="none"/><path d="M12 4.5v2.4M12 17.1v2.4M19.5 12h-2.4M6.9 12H4.5M17.6 6.4l-1.7 1.7M8.1 15.9l-1.7 1.7M17.6 17.6l-1.7-1.7M8.1 8.1 6.4 6.4" fill="none"/>',
  claw: '<path d="M7 5c1 4 1 9-1 15M12 4c1 4.5 1 10.5-1 16M17 5c1 4 1 9-1 15" fill="none"/>',
  moon: '<path d="M14.5 4a8 8 0 1 0 0 16 6.5 6.5 0 0 1 0-16Z"/>',
  vortex: '<path d="M12 4a8 8 0 1 1-6 3.2M12 4v3.4M6 7.2l2.6 1.8" fill="none"/>',
  hex: '<path d="M12 3.6 19 8v8l-7 4.4L5 16V8Z" fill="none"/><circle cx="12" cy="12" r="1.6"/>',
  eye: '<path d="M3 12c2.6-4 6-6 9-6s6.4 2 9 6c-2.6 4-6 6-9 6s-6.4-2-9-6Z" fill="none"/><circle cx="12" cy="12" r="2.4"/>',
  pyramid: '<path d="M12 4 20 19H4Z" fill="none"/><path d="M12 4v15M8 19l4-7 4 7" fill="none"/>',
  shard: '<path d="M12 3 19 9l-3 12-8-2-4-9Z" fill="none"/><path d="M12 3 8 19M19 9l-8 2" fill="none"/>'
};

function iconSvg(name) {
  return `<svg class="char-icon-svg" viewBox="0 0 24 24" aria-hidden="true">${icons[name] || icons.hex}</svg>`;
}

const episodes = [
  {
    num: 1,
    title: "Tam, Alive",
    body: `
      <p>เรื่องเปิดด้วยฉากย้อนอดีต: The Theorist สร้าง Tam ขึ้นเป็นสิ่งมีชีวิตประดิษฐ์ภายใน Echoverse โดยพูดกับเธอตรงๆ ว่าเขาไม่ใช่พระเจ้าและไม่ใช่พ่อของเธอ เพียงแต่บอกว่ามีบางอย่างที่เธอจะต้องทำในวันหนึ่ง ก่อนทิ้งท้ายด้วยประโยคสำคัญ <strong>"You're a person in progress"</strong></p>
      <p>ตัดกลับมาปัจจุบัน Tam อยู่ที่แคมปัส Hexhaven เห็นภาพเพื่อนเก่าจากชีวิตที่ Strixhaven — Abigale และ Lluwen พูดใส่หน้าเธอว่าเป็นคนโกหกและเป็นแค่ "ชิ้นส่วน" ไม่ใช่คนจริง เธอต้องอยู่กับความทรงจำเรื่องที่เคยจับตัว Jadzi ส่งให้ Jace</p>
      <p>เธอไปพบ Jace ที่ห้องทำงาน พบว่าเขากำลังต่อสู้กับเวอร์ชันอื่นของตัวเอง — เขาเอาชนะและโยนร่างนั้นเข้าพอร์ทัลไป แต่บาดแผลบนตัวเขาบอกใบ้ว่านี่ไม่ใช่ครั้งแรกที่ต้องกำจัดตัวตนอีกด้าน — เปิดปมสำคัญของทั้งเรื่อง</p>
    `
  },
  {
    num: 2,
    title: "Purge Yourself of Doubt",
    body: `
      <p>ตอนนี้เขียนในสไตล์ montage ความเป็นไปได้ — ไล่บรรยายสถานการณ์สมมติมากมายว่าถ้าสอง Multiverse ปะทะกันจะจบแบบไหนได้บ้าง: Jace ชนะ, Jace แพ้, Jace อยู่ตลอดกาล, Vraska กลับมาขอโทษ, Vraska นำทัพต่อต้านเขา, Tam สู้เคียงข้างเขา, Tam ทรยศเขา ฯลฯ</p>
      <p>ตอนนี้สะท้อนสภาพจิตใจของ Jace ที่หมกมุ่นกับการควบคุมทุกความเป็นไปได้ เพราะเป็น mind mage ที่มองเห็นภาพอนาคตหลายเส้นทาง และสื่อถึงความไม่แน่นอนของชะตากรรมทั้งมัลติเวิร์ส</p>
    `
  },
  {
    num: 3,
    title: "I Can Be Both",
    body: `
      <p>ย้อนไปที่ Vryn บ้านของ Ranna แม่ของ Jace ที่ Vraska อาศัยอยู่ด้วย ทั้งคู่ยังโศกเศร้ากับการที่เชื่อว่า Jace ตายไปแล้ว จนกระทั่ง Chandra และ Ajani มาเยี่ยมพร้อมข่าวช็อกว่า Jace ยังไม่ตายและกำลังเดินหน้าแผนลับต่อ</p>
      <p>Vraska ตกลงร่วมทีมออกตามหา Jace ผ่าน Omenpaths โดยมีเงื่อนไขว่า Chandra กับ Ajani ต้องไปตามตัว <strong>Garruk</strong> ที่ Muraganda มาร่วมด้วยก่อน ทั้งสองบุกป่าดงดิบเต็มไปด้วยไดโนเสาร์เพื่อตามหาเขา สุดท้าย Garruk เป็นฝ่ายพบพวกเขาเองและพาไปดื่มชาที่กระท่อม</p>
      <p>ในนิมิตหนึ่ง Vraska ฝันเห็น Jace ถามเธอว่าเขาเป็นคนดีหรือปีศาจกันแน่ ก่อนตอบเองว่า <strong>"I can be both"</strong> — ชื่อตอนมาจากประโยคนี้ และเป็นแก่นความคิดหลักของทั้งเรื่อง</p>
    `
  },
  {
    num: 4,
    title: "Oh, Sweetie",
    body: `
      <p>Vraska เดินทางผ่าน Omenpath ที่แปลกออกไป — วงแหวนสีฟ้าอมเขียวล้อมด้วยเหล็ก ซึ่งพาเธอเข้าสู่ <strong>Echoverse</strong> จักรวาลกระจกไร้ความทุกข์ที่ Jace สร้างขึ้น เธอสะเทือนใจเมื่อพบว่ามีส่วนหนึ่งของโลกนี้ถูกสร้างมาเพื่อเธอโดยเฉพาะ ทั้งที่เขาคิดว่าเธอตายไปแล้ว</p>
      <p>ในอีกฉากคู่ขนาน ตัวละคร Liliana ปลอม (เวอร์ชัน Echoverse) เผยความจริงช็อกว่ากลุ่มของ Vraska เคยปะทะกับ Jace มาแล้วถึง 3 ครั้ง โดยไม่รู้ตัวเลย เพราะความทรงจำถูกลบไปทุกครั้ง</p>
      <p>ฝั่ง Tam ทดลองเชื่อมจิตกับ "สัตว์ประหลาดที่ถูกขังอยู่ในดวงจันทร์" บน Innistrad — ซึ่งภายหลังเฉลยว่าคือ Emrakul การติดต่อครั้งนี้ยังไม่รู้ตัวว่าสำคัญแค่ไหน</p>
    `
  },
  {
    num: 5,
    title: "I Don't Need to Convince You",
    body: `
      <p>เล่าจากมุมมอง The Theorist เอง — ทันทีที่ Chandra, Garruk, Ajani และ Vraska บุกเข้าห้องทำงานของเขา เขาสะบัดมือเดียวสะกดให้สามคนแรกล้มหลับทันที เหลือเพียง <strong>Vraska คนเดียวที่ต้านทานไม่หลับ</strong></p>
      <p>เขาพยายามอย่างหนักในการชักชวนให้เธอมาเข้าข้างเขา แต่ยิ่งพยายามเธอกลับยิ่งต่อต้านหนักขึ้น สุดท้ายเขายอมแพ้ ลบความทรงจำของทั้งกลุ่ม แล้วส่งพวกเขากลับออกไป — คำตอบว่าทำไมกลุ่มของ Vraska ถึงเจอ Jace มาแล้วหลายรอบโดยไม่รู้ตัว</p>
    `
  },
  {
    num: 6,
    title: "The Man Who Kills His Own Ambition",
    body: `
      <p>Tam ตัดสินใจเผชิญหน้ากับ Theorist ด้วยตัวเอง หลังได้รับคำแนะนำจาก Vraska ให้ "ประเมินพลังที่ตัวเองมี และดูว่ามีใครที่ควรค่าแก่การช่วยเหลือบ้าง" เธอถามตรงๆ ว่าเพื่อนของเธอจะเป็นอย่างไรเมื่อ Echoverse ทับซ้อนกับ Multiverse จริง</p>
      <p>Theorist พยายามอ่านใจเธอแต่ Tam กันไว้ได้เกือบหมด เขาพบว่า Tam เคยติดต่อกับ Emrakul ไปแล้วตั้งแต่ตอนที่ 4 เมื่อเขาโต้กลับทางจิต Tam ย้อนแสดงนิมิตความทรงจำวัยเด็กของ Jace ตอนถูก <strong>Alhammarret</strong> ทำร้ายให้เขาดู</p>
      <p>การเผชิญหน้านี้ทำให้อีกเสี้ยวบุคลิกหนึ่งแยกตัวออกมา — "the Nihilist" เวอร์ชันของ Jace ที่ผูกกับความล้มเหลวตอนพยายามจุดระเบิด Filigree Sylex ที่ New Phyrexia ตอนจบ Vraska พูดตรงหน้า Jace ว่า <strong>"You need to die."</strong></p>
    `
  },
  {
    num: 7,
    title: "Pick Up the Pieces",
    body: `
      <p>Vraska ทะเลาะทางอารมณ์อย่างรุนแรงกับ "the Detective" อีกเสี้ยวบุคลิกของ Jace ซึ่งประกาศแผนจะรวมร่างกลับเข้าไปหา Theorist เพื่อชะลอการ overlay ของ Echoverse Vraska เริ่ม "เก็บ" เสี้ยวบุคลิกต่างๆ ของ Jace ไว้ในจิตของตัวเอง</p>
      <p>ฝั่ง Tam โกหก Professor Opal เรื่องห้องขัง Jadzi ที่ว่างเปล่า การกระทำนี้ปลุก <strong>Alhammarret</strong> ให้ฟื้นคืนและสั่งให้ Garruk กับคนอื่นเดินตกหน้าผา Garruk และ Ajani ต้านคำสั่งได้ แต่ <strong>Vraska กลับดูเหมือนจะยอมจำนนและก้าวตกหน้าผาไป</strong> — จบตอนแบบ cliffhanger</p>
    `
  },
  {
    num: 8,
    title: "Keep Your Lids Open",
    body: `
      <p>Vraska ยังคงตามเก็บชิ้นส่วนต่างๆ ของ Jace ต่อไปหลังพลัดจากกลุ่ม (พบ "the Soldier" และ "the Guildpact" ตามลำดับ) ฝั่ง The Theorist บุกเข้าไปในจิตของ Jadzi เพื่อพยายามบรรลุการรู้แจ้งทุกสิ่ง</p>
      <p>ในจังหวะสำคัญความมุ่งมั่นของเขากลับสั่นคลอน ก่อนที่ <strong>Jadzi จะคว้ามีดกรีดคอตัวเองตาย</strong> ต่อหน้าเขาแทนที่จะยอมให้เขาได้พลังนั้น ด้วยจิตที่ยังเชื่อมกันอยู่ Theorist รับรู้ความเจ็บปวดของเธอไปด้วย ก่อนจิตสำนึกของเขาจะกระเด็นเข้าสู่ blind eternities</p>
    `
  },
  {
    num: 9,
    title: "Unafraid",
    body: `
      <p>Echoverse เริ่ม overlay ทับซ้อนกับ Multiverse จริงอย่างเป็นทางการ ก่อความตื่นตระหนกไปทั่วหลายระนาบ ที่ Hexhaven, Tam เจอ Kirol เพื่อนที่เธอเคยทรยศ ซึ่งบอกให้เธอใช้สติปัญญาคิดหาทางแก้ปัญหา แต่ Tam รู้สึกไม่พร้อมและถูกฝูงชนที่หนีตายพัดพาไป</p>
      <p>ในห้องความทรงจำสุดท้ายของ Jace (จำลองจาก Implicit Maze แห่ง Ravnica) Vraska เจอ Chandra อีกครั้ง ทั้งคู่พบว่าเงาของตัวเองกำลังขวางทางออกเพียงทางเดียวไว้</p>
    `
  },
  {
    num: 10,
    title: "Happy Birthday",
    final: true,
    body: `
      <p><strong>Emrakul</strong> ปรากฏตัวขึ้น — ไม่ได้มากินมัลติเวิร์สทั้งหมด แต่มากินเฉพาะ Echoverse ของ Jace เท่านั้น ด้วยพลัง telepathy ที่เพิ่มขึ้นมาก Tam สามารถเจรจาต่อรองกับ Emrakul ให้กินแค่ Echoverse แล้วปล่อย Multiverse จริงไว้ตามเดิม</p>
      <p>ระหว่างที่ Echoverse เริ่มพังทลาย Jace (ซึ่งรวมเสี้ยวบุคลิกกลับมาเป็นคนเดียวสมบูรณ์อีกครั้ง) สำนึกผิดต่อสาธารณะต่อทุกสิ่งที่ทำไป เขาส่งข้อความสุดท้ายทางจิตถึงคนรักและเพื่อนพ้องรอบตัวทุกคน รวมถึง Liliana ด้วย</p>
      <p>Vraska เสนอจะพาเขาหนีไปอยู่ที่อื่น แต่ <strong>Jace เลือกที่จะตายในความเป็นจริง</strong> คำพูดสุดท้ายของเขาคือ <strong>"Thank you, Captain."</strong></p>
      <p>Jace Beleren เสียชีวิตในอ้อมแขนของ Vraska — Liliana เข้ามาคุกเข่าข้างๆ ร่วมไว้อาลัย Echoverse ล่มสลายลงพร้อมกัน ก่อนตาย มีการบอกใบ้ว่า spark ของ Jace ลอยออกจากร่างไปหา <strong>Tam</strong> — เผยว่าเธอถูกสร้างขึ้นมาให้เป็นทายาท/แผนสำรองของเขาตั้งแต่แรก</p>
      <p><strong>บทส่งท้าย:</strong> Tam กลายเป็นเพลนวอล์กเกอร์สมบูรณ์จากสปาร์กที่ได้รับสืบทอด เธอ planeswalk กลับไปที่ Strixhaven ก่อนจะตามไปเยี่ยม Vraska ในเวลาต่อมา สื่อว่าเธอจะสานต่อ "งานที่ทำให้สิ่งต่างๆ ดีขึ้น" ในแบบของตัวเอง ส่วน Chandra และ Ajani หนีรอดปลอดภัยไปพร้อมกัน — ปิดฉาก Metronome Arc</p>
    `
  }
];

// ---------- Render characters ----------

const grid = document.getElementById("characterGrid");

function renderCharacters(filter) {
  grid.innerHTML = "";
  characters
    .filter(c => filter === "all" || c.faction === filter)
    .forEach(c => {
      const card = document.createElement("a");
      card.className = `vol-card char-card rf-char-card faction-${c.faction}`;
      card.href = `https://scryfall.com/search?q=${encodeURIComponent(c.scryfall)}`;
      card.target = "_blank";
      card.rel = "noopener";
      const imgUrl = `https://api.scryfall.com/cards/named?fuzzy=${encodeURIComponent(c.scryfall)}&format=image&version=art_crop`;
      card.innerHTML = `
        <img class="char-card-img" src="${imgUrl}" alt="${c.name}" loading="lazy" onerror="this.remove()">
        <div class="vol-card-top">
          <span class="vol-card-num">${c.name}</span>
          <span class="rf-char-icon">${iconSvg(c.icon)}</span>
        </div>
        <p class="rf-char-role">${c.role}</p>
        <p class="vol-card-meta">${c.desc}</p>
        <span class="rf-char-link">ดูภาพการ์ดบน Scryfall →</span>
      `;
      grid.appendChild(card);
    });
}

renderCharacters("all");

document.querySelectorAll(".faction-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".faction-btn").forEach(b => {
      b.classList.remove("is-active");
      b.setAttribute("aria-selected", "false");
    });
    btn.classList.add("is-active");
    btn.setAttribute("aria-selected", "true");
    renderCharacters(btn.dataset.faction);
  });
});

// ---------- Render episode timeline ----------

const epList = document.getElementById("episodeList");

episodes.forEach(ep => {
  const li = document.createElement("li");
  li.className = "ep-item" + (ep.final ? " is-final" : "");

  li.innerHTML = `
    <span class="ep-marker">${ep.num}</span>
    <button class="ep-toggle" aria-expanded="false">
      <span class="ep-title-group">
        <span class="ep-eyebrow">ตอนที่ ${ep.num}${ep.final ? " · ตอนจบ" : ""}</span>
        <span class="ep-title">${ep.title}</span>
      </span>
      <span class="ep-caret" aria-hidden="true"></span>
    </button>
    <div class="ep-panel">
      <div class="ep-body">${ep.body}</div>
    </div>
  `;

  const toggle = li.querySelector(".ep-toggle");
  toggle.addEventListener("click", () => {
    const isOpen = li.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  epList.appendChild(li);
});
