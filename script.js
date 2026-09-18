// ---------- Data ----------
// สรุปแต่ละยุคของเนื้อเรื่อง Magic: The Gathering ตั้งแต่ปี 1993 ถึงปัจจุบัน
// จัดกลุ่มเป็น "มหายุค" (era groups) แต่ละกลุ่มมีหลาย set/arc ย่อยอยู่ข้างใน

const eraGroups = [
  {
    period: "ยุคบุกเบิก",
    years: "1993–1996",
    groups: [
      {
        title: "สงครามพี่น้องอูซา",
        years: "Antiquities → The Brothers' War",
        desc: "จุดเริ่มต้นของเรื่องราวทั้งหมด: Urza และ Mishra สองพี่น้องนักประดิษฐ์บนโดมิเนีย ทะเลาะกันจนบานปลายเป็นสงครามล้างโลกที่ทำลายอารยธรรมเธรัน (Thran) และทิ้งรอยแผลไว้ทั่วเพลน กำเนิดสิ่งประดิษฐ์ในตำนานอย่าง Mightstone และ Weakstone"
      },
      {
        title: "ยุคน้ำแข็ง",
        years: "Ice Age → Alliances",
        desc: "หลังสงครามพี่น้อง โดมิเนียเข้าสู่ยุคน้ำแข็งที่ยาวนาน เหล่าเผ่าพันธุ์ต้องดิ้นรนเอาชีวิตรอด เป็นช่วงที่วางรากฐานภูมิศาสตร์และเผ่าพันธุ์ต่าง ๆ ที่จะกลับมามีบทบาทในภายหลัง"
      }
    ]
  },
  {
    period: "มหากาพย์เรือเวเธอร์ไลท์",
    years: "1996–2001",
    groups: [
      {
        title: "Weatherlight Saga",
        years: "Tempest → Urza's Destiny",
        desc: "Urza (ในร่างที่เกือบเป็นอมตะ) สร้างเรือบิน Weatherlight และรวบรวมทีมผจญภัยนำโดย Gerrard Capashen เพื่อตามหา Legacy โบราณที่จะหยุดการรุกรานของฟิวเรกเซีย (Phyrexia) จักรวรรดิเครื่องจักรชั่วร้ายจากมิติคู่ขนาน"
      },
      {
        title: "การรุกรานของฟิวเรกเซีย",
        years: "Invasion → Apocalypse",
        desc: "ฟิวเรกเซียบุกโดมิเนียเต็มรูปแบบ เกิดสงครามใหญ่ที่สุดในประวัติศาสตร์เพลนนี้ Gerrard นำพันธมิตรจากหลายเพลนมาต่อสู้ จบลงด้วยการเสียสละของ Urza และ Gerrard เพื่อกำจัดยัคมอธ (Yawgmoth) ประมุขแห่งฟิวเรกเซียได้สำเร็จ แต่โดมิเนียแทบล่มสลาย"
      }
    ]
  },
  {
    period: "ยุคหลังสงคราม",
    years: "2001–2005",
    groups: [
      {
        title: "โอทาเรียและคาบาล",
        years: "Odyssey → Onslaught",
        desc: "หลังสงครามฟิวเรกเซีย ทวีปโอทาเรีย (Otaria) ของโดมิเนียเสื่อมโทรมหนัก กลุ่มลัทธิ Cabal ใช้ประโยชน์จากความโกลาหลนี้ เกิดการต่อสู้แย่งชิงอำนาจระหว่างกลุ่มต่าง ๆ รวมถึงเผ่าพันธุ์ที่ใช้พลัง morph ปลอมตัว"
      },
      {
        title: "มิรร็อดินและคามิงาวะ",
        years: "Mirrodin → Champions of Kamigawa",
        desc: "เรื่องราวย้ายออกจากโดมิเนียเป็นครั้งแรก ๆ สู่เพลนโลหะ Mirrodin ที่ภายหลังถูกฟิวเรกเซียเวอร์ชันใหม่แทรกซึม และเพลนคามิงาวะที่อิงตำนานญี่ปุ่น เกิดสงครามระหว่างมนุษย์กับวิญญาณ (kami) หลังมนุษย์ล่วงล้ำดินแดนศักดิ์สิทธิ์"
      }
    ]
  },
  {
    period: "ยุคกิลด์และการเปลี่ยนผ่าน",
    years: "2005–2008",
    groups: [
      {
        title: "ราฟนิก้า: นครแห่งกิลด์",
        years: "Ravnica: City of Guilds",
        desc: "แนะนำเพลนเมืองที่ปกครองด้วย 10 กิลด์ซึ่งแบ่งตามคู่สี — จุดเริ่มต้นของหนึ่งในเพลนยอดนิยมที่สุดของ MTG ที่จะถูกกลับมาเยือนซ้ำหลายครั้งในอนาคต"
      },
      {
        title: "รอยแยกเวลาและการเมนดิ้ง",
        years: "Time Spiral → Planar Chaos",
        desc: "โดมิเนียเผชิญวิกฤต 'รอยแยกเวลา' (time rifts) ที่เกิดจากความเสียหายสะสมของเวทมนตร์ตลอดประวัติศาสตร์ เหล่าเพลนวอล์กเกอร์รุ่นเก่าต้องร่วมมือกันปิดรอยแยกในเหตุการณ์ที่เรียกว่า 'the Mending' ซึ่งเปลี่ยนกฎธรรมชาติของเพลนวอล์กเกอร์ไปตลอดกาล (จุดนี้เองที่กลไกการ์ด Planeswalker แบบใหม่ถือกำเนิด)"
      }
    ]
  },
  {
    period: "ยุคเพลนวอล์กเกอร์ใหม่",
    years: "2007–2011",
    groups: [
      {
        title: "ลอร์วินและแชโดว์มัวร์",
        years: "Lorwyn → Shadowmoor",
        desc: "เพลนแฟนตาซีสดใสของภูตน้อย (kithkin, elves, giants) ถูกพลิกกลับด้านเป็นเวอร์ชันมืดหม่นแชโดว์มัวร์ ตัวละครเดียวกันเปลี่ยนบุคลิกไปคนละขั้ว เป็นชุดแรกที่มีการ์ด Planeswalker แบบใหม่ปรากฏ (Planeswalkers ชุดแรก: Ajani, Chandra, Garruk, Nicol Bolas, Tezzeret)"
      },
      {
        title: "เศษเสี้ยวแห่งอลาร่า",
        years: "Shards of Alara → Alara Reborn",
        desc: "เพลนอลาร่าที่เคยแตกออกเป็น 5 เสี้ยวสี (แต่ละเสี้ยวมีแค่ 3 สีเวทมนตร์) ถูกรวมกลับเป็นหนึ่งเดียวอีกครั้งจากแผนการของ Nicol Bolas มังกรเพลนวอล์กเกอร์ผู้ทะเยอทะยาน"
      },
      {
        title: "เซนดิการ์และเอลดราซี",
        years: "Zendikar → Rise of the Eldrazi",
        desc: "เพลนผจญภัยเต็มไปด้วยสมบัติและกับดัก ซ่อนความลับว่าเป็น 'คุก' ที่ใช้ขังเทพเจ้าโบราณสามองค์ Eldrazi Titans ไว้ เมื่อผนึกถูกทำลาย เอลดราซีก็หลุดออกมาอาละวาด"
      }
    ]
  },
  {
    period: "ยุคฟิวเรกเซียกลับมา และก่อร่าง Gatewatch",
    years: "2010–2016",
    groups: [
      {
        title: "รอยแผลแห่งมิรร็อดิน",
        years: "Scars of Mirrodin → New Phyrexia",
        desc: "ฟิวเรกเซียกลับมารุกรานมิรร็อดินอีกครั้ง คราวนี้ชนะเบ็ดเสร็จ เปลี่ยนเพลนทั้งใบเป็น 'New Phyrexia' Elesh Norn และเทพผู้นำฟิวเรกเซียองค์อื่น ๆ ปกครองเพลนอย่างสมบูรณ์"
      },
      {
        title: "อินนิสแทรด",
        years: "Innistrad → Dark Ascension",
        desc: "เพลนสยองขวัญกอทิกที่ปกครองโดยเทวทูต Avacyn ผู้ปกป้องมนุษย์จากผีดิบ แวมไพร์ มนุษย์หมาป่า เมื่อ Avacyn เสียสติ เพลนทั้งใบก็จมดิ่งสู่ความมืด"
      },
      {
        title: "หวนคืนราฟนิก้าและเธรอส",
        years: "Return to Ravnica → Theros",
        desc: "กลับไปเยือนราฟนิก้าอีกครั้งพร้อมความขัดแย้งใหม่ ก่อนย้ายไปเพลนเธรอสที่อิงเทพปกรณัมกรีก ซึ่งเหล่าเทพเจ้ามีตัวตนจริงและแทรกแซงชีวิตมนุษย์โดยตรง"
      },
      {
        title: "ข่านแห่งทาร์คีร์",
        years: "Khans of Tarkir → Dragons of Tarkir",
        desc: "Sarkhan Vol เพลนวอล์กเกอร์ผู้หลงใหลมังกรเดินทางย้อนเวลาเพื่อเปลี่ยนประวัติศาสตร์ทาร์คีร์ ทำให้เผ่ามังกรที่เคยสูญพันธุ์กลับมาปกครองเพลนแทนกลุ่มเผ่าคลาน"
      },
      {
        title: "สมรภูมิเซนดิการ์และกำเนิด Gatewatch",
        years: "Battle for Zendikar → Oath of the Gatewatch",
        desc: "Eldrazi Titans ที่เคยหลุดออกมาจากเซนดิการ์เริ่มอาละวาดข้ามเพลน กลุ่มเพลนวอล์กเกอร์รุ่นใหม่ (Jace, Chandra, Gideon, Nissa) รวมตัวกันเป็น 'the Gatewatch' เพื่อหยุดยั้งภัยคุกคามระดับมัลติเวิร์ส"
      }
    ]
  },
  {
    period: "ยุค Gatewatch ปะทะนิโคล โบลาส",
    years: "2016–2019",
    groups: [
      {
        title: "เงามืดเหนืออินนิสแทรด",
        years: "Shadows over Innistrad → Eldritch Moon",
        desc: "Emrakul ไททันเอลดราซีองค์สุดท้ายแอบแฝงตัวในอินนิสแทรด ทำให้เพลนทั้งใบกลายพันธุ์เป็นฝันร้าย Gatewatch ต้องเดินทางมาจัดการ"
      },
      {
        title: "คาลาเดชและแผนของนิโคล โบลาส",
        years: "Kaladesh → Aether Revolt",
        desc: "บ้านเกิดของ Chandra เพลนที่ขับเคลื่อนด้วยพลัง aether และสิ่งประดิษฐ์ ถูกปกครองแบบเผด็จการโดย Consulate เบื้องหลังทั้งหมดคือแผนการของ Nicol Bolas ที่ค่อย ๆ เผยตัว"
      },
      {
        title: "อามอนเค็ตและกับดักของโบลาส",
        years: "Amonkhet → Hour of Devastation",
        desc: "เพลนอิงอียิปต์โบราณที่แท้จริงแล้วเป็นกับดักขนาดยักษ์ของ Nicol Bolas เพื่อสร้างกองทัพซอมบี้ (the Eternals) Gatewatch เสียสมาชิกไปในการต่อสู้ครั้งนี้"
      },
      {
        title: "อิกซาลัน",
        years: "Ixalan → Rivals of Ixalan",
        desc: "เพลนแห่งโจรสลัด ไดโนเสาร์ แวมไพร์ และเมอร์โฟล์ก แย่งชิงเมืองทองคำในตำนาน เป็นช่วงพักเบรกจากเนื้อเรื่องหลักก่อนศึกใหญ่จะมาถึง"
      },
      {
        title: "โดมิเนียและสงครามเพลนวอล์กเกอร์",
        years: "Dominaria → War of the Spark",
        desc: "เรื่องราวย้อนกลับสู่โดมิเนียบ้านเกิดของ Urza ก่อนที่ Nicol Bolas จะยกทัพบุกราฟนิก้าเพื่อขโมยพลังเทพเจ้า เกิดสงครามเพลนวอล์กเกอร์ครั้งใหญ่ที่สุดในประวัติศาสตร์ ซึ่งจบลงด้วยการโค่นล้ม Bolas ได้สำเร็จ แต่ต้องแลกด้วยการสูญเสียครั้งใหญ่ รวมถึงการตายของ Gideon Jura"
      }
    ]
  },
  {
    period: "ยุคสำรวจเพลนใหม่",
    years: "2019–2022",
    groups: [
      {
        title: "บัลลังก์เอลดราแรน (ครั้งแรก)",
        years: "Throne of Eldraine",
        desc: "เพลนแฟนตาซีอิงนิทานพื้นบ้านยุโรป มีอัศวินโต๊ะกลม เจ้าหญิง และปีศาจในตำนาน — นี่คือการมาเยือนเอลดราแรนครั้งแรก ก่อนจะกลับมาอีกครั้งใน Wilds of Eldraine ที่จุดชนวน arc ปัจจุบัน"
      },
      {
        title: "เธรอสยามมรณะ ถึง เซนดิการ์คืนชีพ",
        years: "Theros Beyond Death → Ikoria → Zendikar Rising",
        desc: "ช่วงเปลี่ยนผ่านที่พาไปเยือนเธรอสอีกครั้งในธีมชีวิตหลังความตาย ตามด้วยเพลนสัตว์ประหลาดยักษ์อิโคเรีย และการฟื้นตัวของเซนดิการ์หลังยุคเอลดราซี"
      },
      {
        title: "คาลด์เฮมถึงสตริกซ์เฮเวน",
        years: "Kaldheim → Strixhaven",
        desc: "เพลนตำนานนอร์สคาลด์เฮม ต่อด้วยมหาวิทยาลัยเวทมนตร์ 5 คณะสตริกซ์เฮเวน เป็นช่วงที่เนื้อเรื่องเน้นเพลนเดี่ยว ๆ มากกว่าการต่อ arc ใหญ่"
      },
      {
        title: "มิดไนท์ฮันท์และคริมสันโว",
        years: "Innistrad: Midnight Hunt → Crimson Vow",
        desc: "หวนคืนอินนิสแทรดอีกครั้งหลังเหตุการณ์เอลดราซี เน้นธีมงานแต่งงานสยองขวัญและการฟื้นฟูเพลนหลังบาดแผลเก่า"
      },
      {
        title: "นีออนไดนาสตี้และนิวคาเปนนา",
        years: "Kamigawa: Neon Dynasty → Streets of New Capenna",
        desc: "คามิงาวะเวอร์ชันไซเบอร์พังก์อนาคต ตามด้วยเพลนแนวมาเฟีย/นัวร์นิวคาเปนนา เป็นการทดลองแนวใหม่ ๆ ก่อนจะกลับเข้าสู่ arc ใหญ่อีกครั้ง"
      }
    ]
  },
  {
    period: "สงครามฟิวเรกเซียครั้งสุดท้าย",
    years: "2022–2023",
    groups: [
      {
        title: "โดมิเนียยูไนเต็ดและสงครามพี่น้อง",
        years: "Dominaria United → The Brothers' War",
        desc: "เนื้อเรื่องย้อนกลับไปเล่าจุดกำเนิดสงคราม Urza-Mishra อย่างละเอียด ควบคู่กับปัจจุบันที่ฟิวเรกเซียเริ่มแผนรุกรานมัลติเวิร์สครั้งใหญ่ที่สุดเท่าที่เคยมีมา"
      },
      {
        title: "ฟิวเรกเซีย: ทุกคนจะเป็นหนึ่งเดียว",
        years: "Phyrexia: All Will Be One",
        desc: "Elesh Norn นำทัพฟิวเรกเซียบุกนิวฟิเรกเซีย (New Phyrexia เดิม) และเตรียมพร้อมสำหรับการรุกรานมัลติเวิร์สเต็มรูปแบบ"
      },
      {
        title: "มีนาคมแห่งเครื่องจักร",
        years: "March of the Machine → March of the Machine: The Aftermath",
        desc: "ฟิวเรกเซียบุกทุกเพลนในมัลติเวิร์สพร้อมกัน เป็นสงครามที่ใหญ่ที่สุดในประวัติศาสตร์ MTG เพลนวอล์กเกอร์เกือบทั้งหมดต้องร่วมมือกัน จบลงด้วยชัยชนะที่แลกมาด้วยการสูญเสียมหาศาล และเปลี่ยนโฉมมัลติเวิร์สไปตลอดกาล — นี่คือจุดสิ้นสุดของ 'ยุคเก่า' ก่อนเปิดตัว arc ใหม่"
      }
    ]
  },
  {
    period: "Metronome Arc (ยุคปัจจุบัน)",
    years: "2023–2026",
    featured: true,
    groups: [
      {
        title: "จุดเริ่มต้นของ Metronome",
        years: "Wilds of Eldraine → Lost Caverns of Ixalan → Murders at Karlov Manor",
        desc: "หลังสงครามฟิวเรกเซีย มัลติเวิร์สเข้าสู่ช่วงบูรณะ เอลดราแรนกลับมาอีกครั้งพร้อมปมของ Rowan และ Will Kenrith จากนั้นเนื้อเรื่องพาไปสำรวจถ้ำโบราณอิกซาลันและคดีฆาตกรรมในราฟนิก้า วางรากฐานปริศนาที่จะเชื่อมโยงกันในตอนท้าย arc"
      },
      {
        title: "ทางตะวันตกและป่าฤดูใบไม้ร่วง",
        years: "Outlaws of Thunder Junction → Bloomburrow",
        desc: "เพลนสไตล์คาวบอยเถื่อนที่ตามล่าโจรอวกาศ Oko ต่อด้วยเพลนสัตว์มนุษย์ในธีมป่าอบอุ่น เป็นช่วงพักผ่อนสั้น ๆ ก่อนเข้าสู่ครึ่งหลังที่หนักหน่วงของ arc"
      },
      {
        title: "บ้านผีสิงและสงครามดาวอังคาร",
        years: "Duskmourn: House of Horror → Aetherdrift",
        desc: "เพลนสยองขวัญใหม่ Duskmourn ที่เป็นเหมือนบ้านผีสิงมีชีวิต ตามด้วยการแข่งรถข้ามเพลนไล่ล่า Aetherdrift ซึ่งเผยเบาะแสสำคัญเกี่ยวกับแผนการลับของ Jace Beleren ที่กำลังดำเนินอยู่เบื้องหลัง"
      },
      {
        title: "พายุมังกรทาร์คีร์",
        years: "Tarkir: Dragonstorm",
        desc: "หวนคืนทาร์คีร์อีกครั้งพร้อมความขัดแย้งของเผ่ามังกรและเผ่าคลาน ซึ่งเป็นจุดที่ตัวละครหลักหลายคนเริ่มตระหนักถึงความจริงเกี่ยวกับ Echoverse ที่ Jace สร้างขึ้น",
        highlight: "unverified"
      },
      {
        title: "Reality Fracture — บทปิดฉาก",
        years: "Reality Fracture (2 ตุลาคม 2026)",
        desc: "ภาคจบของ Metronome Arc: Jace Beleren ในนาม 'The Theorist' สร้างจักรวาลคู่ขนาน Echoverse เพื่อลบล้างโศกนาฏกรรมทั้งหมด แต่ต้องเผชิญหน้ากับ Vraska และเพื่อนเก่าที่ไม่ยอมปล่อยให้เขาทำลายความเป็นจริง จบลงด้วยธีม 'เราเป็นได้ทั้งคนดีและปีศาจ' และการตายของ Jace",
        link: "reality-fracture/index.html",
        linkLabel: "อ่านสรุปฉบับเต็ม 10 ตอน →"
      }
    ]
  }
];

// ---------- Render ----------

function renderTimeline() {
  const root = document.getElementById("codexTimeline");
  root.innerHTML = "";

  eraGroups.forEach((period, periodIdx) => {
    const periodEl = document.createElement("div");
    periodEl.className = "period-block" + (period.featured ? " is-featured" : "");

    const head = document.createElement("div");
    head.className = "period-head";
    head.innerHTML = `
      <span class="period-years">${period.years}</span>
      <h3 class="period-title">${period.period}</h3>
    `;
    periodEl.appendChild(head);

    const list = document.createElement("ol");
    list.className = "era-list";

    period.groups.forEach((era, eraIdx) => {
      const id = `p${periodIdx}-e${eraIdx}`;
      const item = document.createElement("li");
      item.className = "era-item";
      if (era.link) item.classList.add("has-link");

      item.innerHTML = `
        <button class="era-toggle" aria-expanded="false" aria-controls="${id}">
          <span class="era-marker"></span>
          <span class="era-title-group">
            <span class="era-eyebrow">${era.years}</span>
            <span class="era-title">${era.title}</span>
          </span>
          <span class="era-caret"></span>
        </button>
        <div class="era-panel" id="${id}">
          <div class="era-body">
            <p>${era.desc}</p>
            ${era.link ? `<a class="era-link" href="${era.link}">${era.linkLabel || "อ่านต่อ →"}</a>` : ""}
            ${era.highlight === "unverified" ? `<p class="era-flag">* เนื้อหาช่วงนี้ยังไม่ได้ตรวจสอบละเอียด รอปรับปรุงเมื่อมีข้อมูลทางการเพิ่มเติม</p>` : ""}
          </div>
        </div>
      `;
      list.appendChild(item);
    });

    periodEl.appendChild(list);
    root.appendChild(periodEl);
  });

  root.addEventListener("click", (e) => {
    const btn = e.target.closest(".era-toggle");
    if (!btn) return;
    const item = btn.closest(".era-item");
    const isOpen = item.classList.toggle("is-open");
    btn.setAttribute("aria-expanded", String(isOpen));
  });
}

document.addEventListener("DOMContentLoaded", renderTimeline);
