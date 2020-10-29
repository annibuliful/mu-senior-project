module.exports = [
  {
    vaccineId: "vac001",
    category: "children",
    vaccineMedicalName: "BCG",
    vaccineNameNormal: "วัคซีนป้องกันวัณโรค",
    protectDisease: ["disease001"],
    injectionPeriodTime: [0],
    doseNumber: 1,
    repeat: null,
    replaceableWith: null,
    shortDes:
      "ความต้านทานต่อเชื้อวัณโรคจะเกิดเต็มที่ประมาณ 2 เดือน หลังจากได้รับวัคซีน โดยวัคซีนบีซีจี มีประสิทธิภาพดีต่อการป้องกันวัณโรคระยะแรกในเด็ก โดยเฉพาะวัณโรคเยื่อหุ้มสมอง (TB meningitis) และวัณโรคชนิดแพร่กระจาย (miliary TB) สามารถป้องกันได้สูงถึงร้อยละ 52-100",
    displayedSuggestAge: "<ul><li>เข็มที่ 1: ฉีดทันทีหลังคลอด</li></ul>",
    warning:
      "<ul><li>ผู้ที่มีภาวะภูมิคุ้มกันบกพร่อง</li><li>ตั้งครรภ์</li></ul>",
  },
  {
    vaccineId: "vac002",
    category: "children",
    vaccineMedicalName: "HBV",
    vaccineNameNormal: "วัคซีนป้องกันโรคไวรัสตับอักเสบบี",
    protectDisease: ["disease002"],
    injectionPeriodTime: [0, 30, 150],
    doseNumber: 3,
    repeat: null,
    replaceableWith: null,
    shortDes:
      "การให้วัคซีนป้องกันโรคไวรัสตับอักเสบบี จะทำให้เกิดภูมิคุ้มกันโรคได้หลังจากได้รับวัคซีนเข็มที่สอง วัคซีนเข็มที่สามถือเป็นการกระตุ้นให้ภูมิคุ้มกันโรคสูงขึ้น และมีภูมิคุ้มกันที่ป้องกันโรคได้ร้อยละ 90-95",
    displayedSuggestAge:
      "<ul><li>เข็มที่ 1: ฉีดวัคซีนครั้งแรกโดยเร็วที่สุดหรือภายใน 24 ชั่วโมง หลังคลอด</li><li>เข็มที่ 2: อายุ 1-2 เดือน </li><li>เข็มที่ 3: อายุ 6-7 เดือน </li></ul>",
    warning:
      "<ul><li>ผู้ที่มีภาวะภูมิคุ้มกันบกพร่อง</li><li>ตั้งครรภ์</li></ul>",
  },
  {
    vaccineId: "vac003",
    category: "children",
    vaccineMedicalName: "DTwP",
    vaccineNameNormal: "วัคซีนรวมปัองกัน คอตีบ-บาดทะยัก-ไอกรน ชนิดทั้งเซลล์",
    protectDisease: ["disease004", "disease005", "disease006"],
    injectionPeriodTime: [60, 60, 60, 270, 1095],
    doseNumber: 5,
    repeat: null,
    replaceableWith: ["vac004"],
    shortDes:
      " ภูมิคุ้มกันจะเกิดดีที่สุดเมื่อฉีดวัคซีนเข้ากล้ามเนื้อ โดยเริ่มเกิดประมาณ 2 สัปดาห์หลังฉีดวัคซีน ครั้งแรก ภูมิคุ้มกันต่อเชื้อบาดทะยักและคอตีบเกิดขึ้นในเด็กหลังได้รับวัคซีน DT ประสิทธิภาพ ในการป้องกันโรคของวัคซีน DTwP และ DTaP มีประมาณร้อยละ 75-90 โดยในภาพรวมแลว้ DTwP และ DTaP ในการศึกษาต่างๆ มีประสิทธิภาพไม่แตกต่างกัน",
    displayedSuggestAge:
      "<ul><li>เข็มที่ 1: 2 เดือน</li><li>เข็มที่ 2: 4 เดือน</li><li>เข็มที่ 3: 6 เดือน </li><li>เข็มที่ 4: 15-18 เดือน</li><li>เข็มที่ 5: 4-6 ปี </li></ul>",
    warning:
      "<ul><li> Encephalopathy ภายใน 7 วัน หลังจากฉีดวัคซีนครั้งก่อน ให้งดฉีดไอกรน แล้วฉีด DT แทน</li></ul>",
  },
  {
    vaccineId: "vac004",
    category: "children",
    vaccineMedicalName: "DTaP",
    vaccineNameNormal: "วัคซีนรวมปัองกันคอตีบ-บาดทะยัก-ไอกรน ชนิดไร้เซลล์",
    protectDisease: ["disease004", "disease005", "disease006"],
    injectionPeriodTime: [60, 60, 60, 270, 1095],
    doseNumber: 5,
    repeat: null,
    replaceableWith: ["vac003"],
    shortDes:
      "ภูมิคุ้มกันจะเกิดดีที่สุดเมื่อฉีดวัคซีนเข้ากล้ามเนื้อ โดยเริ่มเกิดประมาณ 2 สัปดาห์หลังฉีดวัคซีน ครั้งแรก ภูมิคุ้มกันต่อเชื้อบาดทะยักและคอตีบเกิดขึ้นในเด็กหลังได้รับวัคซีน DT",
    displayedSuggestAge:
      "<ul><li>เข็มที่ 1: 2 เดือน</li><li>เข็มที่ 2: 4 เดือน</li><li>เข็มที่ 3: 6 เดือน </li><li>เข็มที่ 4: 15-18 เดือน</li><li>เข็มที่ 5: 4-6 ปี </li></ul>",
    warning:
      "<ul><li> Encephalopathy ภายใน 7 วัน หลังจากฉีดวัคซีนครั้งก่อน ให้งดฉีดไอกรน แล้วฉีด DT แทน</li></ul>",
  },
  {
    vaccineId: "vac005",
    category: "children",
    vaccineMedicalName: "Td",
    vaccineNameNormal: "วัคซีนรวมปัองกันคอตีบ-บาดทะยัก สำหรับผู้ใหญ่",
    protectDisease: ["disease004", "disease005"],
    injectionPeriodTime: [4380],
    doseNumber: 1,
    repeat: null,
    replaceableWith: null,
    shortDes:
      "วัคซีนไอกรนชนิดไรเ้ซลล์สูตรผู้ใหญ่ (Tdap หรือ TdaP) ที่สามารถใช้ใน เด็กตั้งแต่อายุ 4-6 ปีขึ้นไปได้ ดังนั้น เด็กโตและผู้ใหญ่ทุกคนที่มีความประสงค์จะฉีดวัคซีนป้องกันไอกรน ด้วย สามารถใช ้Tdap แทน dT ได ้1 เข็ม",
    displayedSuggestAge: "<ul><li>เข็มที่ 1: ฉีดทันทีหลังคลอด</li></ul>",
    warning:
      "<ul><li> Encephalopathy ภายใน 7 วัน หลังจากฉีดวัคซีนครั้งก่อน ให้งดฉีดไอกรน แล้วฉีด DT แทน</li></ul>",
  },
  {
    vaccineId: "vac006",
    category: "children",
    vaccineMedicalName: "Tdap",
    vaccineNameNormal:
      "วัคซีนรวมปัองกันคอตีบ-บาดทะยัก-ไอกรน ชนิดไร้เซลล์สำหรับผู้ใหญ่",
    protectDisease: ["disease004", "disease005", "disease006"],
    injectionPeriodTime: [1460],
    doseNumber: 1,
    repeat: null,
    replaceableWith: null,
    shortDes:
      "วัคซีนไอกรนชนิดไรเ้ซลล์สูตรผู้ใหญ่ (Tdap หรือ TdaP) ที่สามารถใช้ใน เด็กตั้งแต่อายุ 4-6 ปีขึ้นไปได้ ดังนั้น เด็กโตและผู้ใหญ่ทุกคนที่มีความประสงค์จะฉีดวัคซีนป้องกันไอกรน ด้วย สามารถใช ้Tdap แทน dT ได ้1 เข็ม",
    displayedSuggestAge: "<ul><li>เข็มที่ 1: ฉีดทันทีหลังคลอด</li></ul>",
    warning:
      "<ul><li> Encephalopathy ภายใน 7 วัน หลังจากฉีดวัคซีนครั้งก่อน ให้งดฉีดไอกรน แล้วฉีด DT แทน</li></ul>",
  },
  {
    vaccineId: "vac007",
    category: "children",
    vaccineMedicalName: "Hib",
    vaccineNameNormal:
      "วัคซีนปัองกันโรคจากเชื้อฮีโมฟิลุสอินฟลูเอนเซ่ทัยป์บี หรือฮิบ",
    protectDisease: ["disease003"],
    injectionPeriodTime: [60, 60, 60, 360],
    doseNumber: 4,
    repeat: null,
    replaceableWith: null,
    shortDes:
      "วัคซีนนี้มีประสิทธิภาพป้องกันโรคได้สูงมากโดยเฉพาะ โรครุนแรง และเยื่อหุ้มสมองอักเสบจากเชื้อฮิบ พบว่าในประเทศที่ให้วัคซีนนี้แก่เด็กทุกคน สามารถ ลดอุบัติการณ์ของโรคได้ร้อยละ 95-99",
    displayedSuggestAge:
      "<ul><li>เข็มที่ 1: 2 เดือน</li><li>เข็มที่ 2: 4 เดือน</li><li>เข็มที่ 3: 6 เดือน </li><li>เข็มที่ 4: 12-15 เดือน</li></ul>",
    warning: "<ul><li>-</li></ul>",
  },
  {
    vaccineId: "vac008",
    category: "children",
    vaccineMedicalName: "OPV",
    vaccineNameNormal: "วัคซีนป้องกันโรคโปลิโอ (รับประทาน)",
    protectDisease: ["disease007"],
    injectionPeriodTime: [60, 60, 60, 360, 1095],
    doseNumber: 5,
    repeat: null,
    replaceableWith: ["vac009"],
    shortDes:
      "การศึกษาในประเทศสหรฐัอเมริกา พบว่าผู้ที่ได้รับวัคซีน OPV 2 ครั้ง มากกว่าร้อยละ 90 จะมีภูมิคุ้มกันขึ้นต่อเชื้อไวรัสโปลิโอทั้ง 3 ซีโรทัยป์ และถ้าได้รับครบ 3 ครั้งจะมีภูมูคุ้มกันต่อซีโรทัยป์ 1 ร้อยละ 97 ซีโรทัยป์ 2 และ 3 เกือบร้อยละ 100",
    displayedSuggestAge:
      "<ul><li>เข็มที่ 1: 2 เดือน</li><li>เข็มที่ 2: 4 เดือน</li><li>เข็มที่ 3: 6 เดือน </li><li>เข็มที่ 4: 1 ปี 6 เดือน</li><li>เข็มที่ 5: 4 ปี</li></ul>",
    warning:
      "<ul><li>ผู้ที่มีภาวะภูมิคุ้มกันบกพร่อง ให้ใช้ IPV แทน</li><li>ตั้งครรภ์</li></ul>",
  },
  {
    vaccineId: "vac009",
    category: "children",
    vaccineMedicalName: "IPV",
    vaccineNameNormal: "วัคซีนปัองกันโปลิโอ ชนิดที่ทำจากเชื้อที่ตายแล้ว (ฉีด)",
    protectDisease: ["disease007"],
    injectionPeriodTime: [60, 60, 60, 360, 1095],
    doseNumber: 5,
    repeat: null,
    replaceableWith: ["vac008"],
    shortDes:
      " หลังได้รับวัคซีน 2 โดส มากกว่าร้อยละ 90 ของผู้ที่่ได้รับวัคซีนจะมีภูมูคุ้มกันในเลือด ต่อเชื้อโปลิโอทั้ง 3 ซีโรทัยป์ และจะเพิ่มขึ้นเป็นร้อยละ 99 หลังได้รับวัคซีน 3 โด๊ส ภูมิคุ้มกันในเลือดที่เกิดขึ้น ภายหลังได้รับวัคซีน 4 โด๊ส จะอยู่ได้นานหลายปี",
    displayedSuggestAge:
      "<ul><li>เข็มที่ 1: 2 เดือน</li><li>เข็มที่ 2: 4 เดือน</li><li>เข็มที่ 3: 6 เดือน </li><li>เข็มที่ 4: 1 ปี 6 เดือน</li><li>เข็มที่ 5: 4 ปี</li></ul>",
    warning:
      "<ul><li> ผู้ที่แพ ้neomycin, streptomycin, polymyxin อย่างรุนแรง</li><li>ตั้งครรภ์</li></ul>",
  },
  {
    vaccineId: "vac010",
    category: "children",
    vaccineMedicalName: "MMR",
    vaccineNameNormal: "วัคซีนรวมปัองกันหัด-คางทูม-หัดเยอรมัน",
    protectDisease: ["disease008", "disease009", "disease010"],
    injectionPeriodTime: [270, 1190],
    doseNumber: 2,
    repeat: null,
    replaceableWith: ["vac011"],
    shortDes:
      "การศึกษาในประเทศสหรฐัอเมรกิาพบภูมืคุ้มกันต่อโรคหัดเกิดขึ้นร้อยละ 95 ของเด็กที่ได้รับวัคซีน เมื่ออายุ12 เดือน และร้อยละ 98 เมื่อได้รับวัคซีนที่อายุ15 เดือน",
    displayedSuggestAge:
      "<ul><li>เข็มที่ 1: 9-12 เดือน</li><li>เข็มที่ 1: 4-6 ปี</li></ul>",
    warning:
      "<ul><li>ผู้ที่มีภาวะภูมิคุ้มกันบกพร่อง</li><li>ตั้งครรภ์</li><li> ผู้ที่แพ ้neomycin หรือเจลาติน อยา่งรุนแรง</li></ul>",
  },
  {
    vaccineId: "vac011",
    category: "children",
    vaccineMedicalName: "MMRV",
    vaccineNameNormal: "วัคซีนรวมปัองกันรวมหัด-คางทูม-หัดเยอรมัน-อีสุกอีใส",
    protectDisease: ["disease008", "disease009", "disease010", "disease014"],
    injectionPeriodTime: [365, 365],
    doseNumber: 1,
    repeat: null,
    replaceableWith: null,
    shortDes:
      "การศึกษาในประเทศสหรฐัอเมรกิาพบภูมืคุ้มกันต่อโรคหัดเกิดขึ้นร้อยละ 95 ของเด็กที่ได้รับวัคซีน เมื่ออายุ12 เดือน และร้อยละ 98 เมื่อได้รับวัคซีนที่อายุ15 เดือน",
    displayedSuggestAge:
      "<ul><li>เข็มที่ 1: 9-12 เดือน</li><li>เข็มที่ 1: 4-6 ปี</li></ul>",
    warning:
      "<ul><li>ผู้ที่มีภาวะภูมิคุ้มกันบกพร่อง</li><li>ตั้งครรภ์</li><li> ผู้ที่แพ ้neomycin หรือเจลาติน อยา่งรุนแรง</li><li>ถ้ามีประวัตืชัก ไม่ควรฉีด MMRV</li></ul>",
  },
  {
    vaccineId: "vac012",
    category: "children",
    vaccineMedicalName: "JEVAC",
    vaccineNameNormal: "วัคซีนปัองกันไข้สมองอักเสบชนิดเจอี",
    protectDisease: ["disease011"],
    injectionPeriodTime: [180, 30, 365],
    doseNumber: 3,
    repeat: null,
    replaceableWith: null,
    shortDes:
      "วัคซีน JEVACTM ทำให้ภูมิคุ้มกันเกิดขึ้นร้อยละ 89-90 หลังฉีดเข็มที่ 2 ได ้1 เดือน 16,17 และ หลังฉีดเข็มกระตุ้นได ้1 เดือน พบภูมิคุ้มร้อยละ 100",
    displayedSuggestAge:
      "<ul><li>Inacitvated</li><li>เข็มที่ 1: 12-18 เดือน</li><li>เข็มที่ 2: 13-19 เดือน</li><li>เข็มที่ 3: 24-30 เดือน </li><li>Live</li><li>เข็มที่ 1: 1 ปี</li><li>เข็มที่ 2: 2 ปี 6 เดือน</li></ul>",
    warning:
      "<ul><li>ผู้ที่มีภาวะภูมิคุ้มกันบกพร่อง</li><li>ตั้งครรภ์</li></ul>",
  },
  {
    vaccineId: "vac013",
    category: "children",
    vaccineMedicalName: "CD-JEVAC",
    vaccineNameNormal: "วัคซีนปัองกันไข้สมองอักเสบชนิดเจอี ",
    protectDisease: ["disease011"],
    injectionPeriodTime: [270, 90],
    doseNumber: 2,
    repeat: null,
    replaceableWith: ["vac014"],
    shortDes:
      "วัคซีน CD.JEVAXTM หลังฉีดเข็มแรก มีภูมิคุ้มกันเกิดขึ้นร้อยละ 89.3 และร้อยละ 95 ที่ 30 วัน และที่ 90 วันตามลำดับ หลังฉีดวัคซีนเข็มที่ 2 ภูมิคุ้มกันเกิดขึ้นร้อยละ 100 ",
    displayedSuggestAge:
      "<ul><li>Inacitvated</li><li>เข็มที่ 1: 12-18 เดือน</li><li>เข็มที่ 2: 13-19 เดือน</li><li>เข็มที่ 3: 24-30 เดือน </li><li>Live</li><li>เข็มที่ 1: 1 ปี</li><li>เข็มที่ 2: 2 ปี 6 เดือน</li></ul>",
    warning:
      "<ul><li>ผู้ที่มีภาวะภูมิคุ้มกันบกพร่อง</li><li>ตั้งครรภ์</li></ul>",
  },
  {
    vaccineId: "vac014",
    category: "children",
    vaccineMedicalName: "IMOJEV",
    vaccineNameNormal: "วัคซีนปัองกันไข้สมองอักเสบชนิดเจอี",
    protectDisease: ["disease011"],
    injectionPeriodTime: [270, 365],
    doseNumber: 2,
    repeat: null,
    replaceableWith: ["vac013"],
    shortDes:
      "วัคซีน IMOJEVTM หลังฉีดเข็มแรกในผู้ใหญ่และเด็กมีภูมิคุ้มกันเกิดขึ้นึ้ร้อยละ 99.119 และ 9620 ตามลำดับ ในเด็กอาย ุ9 เดือนขึ้นไป สามารถสร้างภูมิคุ้มกันได้ไ้ม่ต่างจากเด็กอายุเุกิน 1 ปี",
    displayedSuggestAge:
      "<ul><li>Inacitvated</li><li>เข็มที่ 1: 12-18 เดือน</li><li>เข็มที่ 2: 13-19 เดือน</li><li>เข็มที่ 3: 24-30 เดือน </li><li>Live</li><li>เข็มที่ 1: 1 ปี</li><li>เข็มที่ 2: 2 ปี 6 เดือน</li></ul>",
    warning:
      "<ul><li>ผู้ที่มีภาวะภูมิคุ้มกันบกพร่อง</li><li>ตั้งครรภ์</li></ul>",
  },
  {
    vaccineId: "vac015",
    category: "children",
    vaccineMedicalName: "Influenza",
    vaccineNameNormal: "วัคซีนป้องกันไข้หวัดใหญ่",
    protectDisease: ["disease012"],
    injectionPeriodTime: [180],
    doseNumber: 1,
    repeat: 365,
    replaceableWith: null,
    shortDes:
      "วัคซันชนิดเชื้อไม่มีชีวิต ภูมูคุ้มกันจะเกิดขึ้นหลังฉีดวัคซีนในเวลา 7–14 วันวัคซีนชนิดเชื้อมีชีวิต มีประสิทธิภาพประมาณ ร้อยละ 70 - 95 ขึ้นกับว่าเชื้อตรงกับสายพันธุ์ ในวัคซีนมากน้อยเพียงใด",
    displayedSuggestAge:
      "<ul><li>เข็มที่ 1: 6-15 เดือน</li><li>เข็มถัดไป: ฉีดปีละ 1 ครั้ง</li></ul>",
    warning:
      "<ul><li>ผู้ที่แพ้ไข่อย่างรุนแรง ต้องเฝ้าสังเกตอาการจากการดูแลของแพทย์</li><li>ตั้งครรภ์</li></ul>",
  },
  {
    vaccineId: "vac016",
    category: "children",
    vaccineMedicalName: "HPV",
    vaccineNameNormal: "วัคซีนป้องกันเอชพีวี",
    protectDisease: ["disease017"],
    injectionPeriodTime: [4015, 4045, 4165],
    doseNumber: 3,
    repeat: null,
    replaceableWith: null,
    shortDes:
      "ีหากวัดประสิทธิภาพในการป้องกัน CIN3 ขึ้นไปจากเชื้อ HPV ไม่ว่าจะสายพันธุ์ใด เฉพาะในผู้ที่ตรวจไม่พบการติดเชื้อ HPV ก่อนฉีดวัคซีน พบว่าวัคซีนชนิด 2 สายพันธ์ุ มีประสิทธิภาพ ร้อยละ 93",
    displayedSuggestAge:
      "<ul><li>เข็มที่ 1: 11-12 ปี</li><li>เข็มที่ 2: 11-12 ปี (+1-2 เดือน)</li><li>เข็มที่ 3: 11-12 ปี (6 เดือน)</li></ul>",
    warning:
      "<ul><li> ผู้ที่มีประวัติแพ้รุนแรงต่อยีสต์ </li><li>ตั้งครรภ์</li></ul>",
  },
  {
    vaccineId: "vac017",
    category: "children",
    vaccineMedicalName: "PCV13",
    vaccineNameNormal: "วัคซีนป้องกันโรคจากเชื้อนิวโมคอคคัส",
    protectDisease: ["disease023"],
    injectionPeriodTime: [60, 60, 60, 180],
    doseNumber: 4,
    repeat: null,
    replaceableWith: null,
    shortDes:
      " สำหรับ PCV13 ประมาณ 1 ปีนับจาก ที่มีการใช้อย่างแพร่หลายทั่วประเทศอังกฤษแบบ 2+1 พบว่ามีประสิทธิภาพในการป้องกัน IPD จากซีโรทัยป์ 7F และ 19A ร้อยละ 76 และ 70 ตามลำดับหากได้ร้บ PCV13 อย่างน้อย 1 โด๊ส และมี ประสิทธิภาพในการป้องกัน IPD จากสายพันธุ์ทุบรรจุใุนวัคซีนร้อยละ 78 หากได้รับ PCV13 อย่างน้อย 2 โด๊ส ภายในขวบปีแรก",
    displayedSuggestAge:
      "<ul><li>เข็มที่ 1: 2 เดือน</li><li>เข็มที่ 2: 4 เดือน</li><li>เข็มที่ 3: 6 เดือน </li><li>เข็มที่ 4: 12 เดือน</li></ul>",
    warning: "<ul><li>-</li></ul>",
  },
  {
    vaccineId: "vac018",
    category: "children",
    vaccineMedicalName: "PPSV23",
    vaccineNameNormal:
      "วัคซีนป้องกันโรคจากเชื้อนิวโมคอคคัส ชนิดโพลีแซคคาไรด์ 23 สายพันธุ์",
    protectDisease: ["disease023"],
    injectionPeriodTime: [730, 1825],
    doseNumber: 2,
    repeat: null,
    replaceableWith: null,
    shortDes:
      " สามารถครอบคลุมซีโรทัยป์ ที่ก่อให้เกิดโรค IPD ในเด็กและผู้ใหญ่ได้ร้อยละ 85-90 สำหรับประเทศไทยครอบคลุมซีโรทัยป์ที่ก่อให้เกิด IPD ได้ร้อยละ 86.9-87.3 มีประสิทธิภาพในการป้องกันโรค IPD ได้ร้อยละ 56-81 ",
    displayedSuggestAge:
      "<ul><li>เข็มที่ 1: 2 ปี</li><li>เข็มที่ 2: 7 ปี</li></ul>",
    warning: "<ul><li>-</li></ul>",
  },
  {
    vaccineId: "vac019",
    category: "children",
    vaccineMedicalName: "Rota",
    vaccineNameNormal: "วัคซีนป้องกันเชื้อไวรัสโรต้า",
    protectDisease: ["disease016"],
    injectionPeriodTime: [60, 60, 60],
    doseNumber: 3,
    repeat: null,
    replaceableWith: null,
    shortDes:
      "หลังได้รับวัคซีนครบ 3 โด๊สสามารถป้องกัน โรคอุจจาระร่วงรุนแรงได้ร้อยละ 98 และป้องกันโรคนี้ที่ทุกระดับความรุนแรงร้อยละ 74",
    displayedSuggestAge:
      "<ul><li>เข็มที่ 1: 2 เดือน</li><li>เข็มที่ 2: 4 เดือน</li><li>เข็มที่ 3: 6 เดือน </li></ul>",
    warning:
      "<ul><li>- ผู้ป่วยที่มีภาวะภูมิคุ้มกันบกพร่องแบบรุนแรงชนิด Severe combined immunodeficiency </li><li> ผู้ที่เคยมีภาวะลำไส้กลืนกัน</li><li> ผู้ที่ป่วยเป็นโรคเกี่ยวกับทางเดินอาหารและลำไส้ชนิดเรื้อรัง</li></ul>",
  },
  {
    vaccineId: "vac020",
    category: "children",
    vaccineMedicalName: "HAV",
    vaccineNameNormal: "วัคซีนป้องกันโรคไวรัสตับอักเสบ เอ",
    protectDisease: ["disease013"],
    injectionPeriodTime: [365, 180],
    doseNumber: 2,
    repeat: null,
    replaceableWith: null,
    shortDes:
      " วัคซีนเชื้อตายสามารถป้องกันการติดเชื้อจากไวรัสตับอักเสบเอได้ภายในระยะ 2-4 สัปดาห์ หลังจากได้รับวัคซีน 1 เข็ม จะสามารถป้องกันโรคได้ราว 1 ปี หากฉีดกระตุ้นอีกหนึ่งเข็มที่ 6-12 เดือน หลังจากเข็มแรกจะสามารถป้องกันโรคไดร้อยละ 94-100 และยังสามารถหยุดยั้งการระบาดของโรคได้",
    displayedSuggestAge:
      "<ul><li>เข็มที่ 1: 12-23 เดือน</li><li>เข็มที่ 2: >18 เดือน</li></ul>",
    warning: "<ul><li>-</li></ul>",
  },
  {
    vaccineId: "vac021",
    category: "children",
    vaccineMedicalName: "VAR",
    vaccineNameNormal: "วัคซีนป้องกันโรคอีสุกอีใส",
    protectDisease: ["disease014"],
    injectionPeriodTime: [365, 1095],
    doseNumber: 2,
    repeat: null,
    replaceableWith: null,
    shortDes:
      "ภายหลังได้รับวัคซีนป้องกันโรคอีสกุอีใส ในเด็กอายุ1 ปีขึ้นไป พบว่าภายหลังการให้วัคซีน 1 ครั้ง จะมีภมูิคุ้มกันเกิดขึ้นร้อยละ 76-85 และจะเพิ่มขึ้น เป็นเกือบร้อยละ 100 ภายหลังได้รับวัคซีนครั้งที่ 2",
    displayedSuggestAge:
      "<ul><li>เข็มที่ 1: 12-18 เดือน</li><li>เข็มที่ 2: >4-6 ปี</li></ul>",
    warning:
      "<ul><li>ผู้ที่แพ ้เจลาติน neomycin, erythromycin, kanamycin อย่างรุนแรง</li><li>ผู้ที่มีภาวะภูมิคุ้มกันบกพร่อง</li><li>ตั้งครรภ์</li></ul>",
  },
  {
    vaccineId: "vac022",
    category: "adult",
    vaccineMedicalName: "Influenza",
    vaccineNameNormal: "วัคซีนป้องกันไข้หวัดใหญ่",
    protectDisease: ["disease012"],
    injectionPeriodTime: [365],
    doseNumber: 1,
    repeat: 365,
    replaceableWith: null,
    shortDes:
      "วัคซันชนิดเชื้อไม่มีชีวิต ภูมูคุ้มกันจะเกิดขึ้นหลังฉีดวัคซีนในเวลา 7–14 วันวัคซีนชนิดเชื้อมีชีวิต มีประสิทธิภาพประมาณ ร้อยละ 70 - 95 ขึ้นกับว่าเชื้อตรงกับสายพันธุ์ ในวัคซีนมากน้อยเพียงใด",
    displayedSuggestAge:
      "<ul><li>เข็มที่ 1: 6-15 เดือน</li><li>เข็มถัดไป: ฉีดปีละ 1 ครั้ง</li></ul>",
    warning:
      "<ul><li>ผู้ที่แพ้ไข่อย่างรุนแรง ต้องเฝ้าสังเกตอาการจากการดูแลของแพทย์</li><li>ตั้งครรภ์</li></ul>",
  },
];
