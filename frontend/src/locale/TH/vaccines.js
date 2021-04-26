module.exports = [
  {
    vaccineId: "vac001",
    category: "children",
    vaccineMedicalName: "BCG",
    vaccineNameNormal: "วัคซีนป้องกันวัณโรค",
    protectDisease: ["disease001"],
    repeat: null,
    injectionPeriodTime: [0],
    doseNumber: 1,
    replaceableWith: null,
    shortDes:
      "ความต้านทานต่อเชื้อวัณโรคจะเกิดเต็มที่ประมาณ 2 เดือน หลังจากได้รับวัคซีน โดยวัคซีนบีซีจี มีประสิทธิภาพดีต่อการป้องกันวัณโรคระยะแรกในเด็ก โดยเฉพาะวัณโรคเยื่อหุ้มสมอง (TB meningitis) และวัณโรคชนิดแพร่กระจาย (miliary TB) สามารถป้องกันได้สูงถึงร้อยละ 52-100",
    displayedSuggestAge: "<ul><li>โด๊สที่ 1: ฉีดทันทีหลังคลอด</li></ul>",
    warning:
      "<ul><li>ผู้ที่มีภาวะภูมิคุ้มกันบกพร่อง</li><li>ตั้งครรภ์</li></ul>",
  },
  {
    vaccineId: "vac002",
    category: "all",
    vaccineMedicalName: "HBV",
    vaccineNameNormal: "วัคซีนป้องกันโรคไวรัสตับอักเสบบี",
    protectDisease: ["disease002"],
    repeat: null,
    injectionPeriodTime: [0, 30, 150],
    doseNumber: 3,
    replaceableWith: null,
    shortDes:
      "การให้วัคซีนป้องกันโรคไวรัสตับอักเสบบี จะทำให้เกิดภูมิคุ้มกันโรคได้หลังจากได้รับวัคซีนโด๊สที่สอง วัคซีนโด๊สที่สามถือเป็นการกระตุ้นให้ภูมิคุ้มกันโรคสูงขึ้น และมีภูมิคุ้มกันที่ป้องกันโรคได้ร้อยละ 90-95",
    displayedSuggestAge:
      "<ul><li>สำหรับเด็ก</li><li>โด๊สที่ 1: แรกเกิด</li><li>โด๊สที่ 2: 2 เดือน </li><li>โด๊สที่ 3: 4 เดือน </li><li>โด๊สที่ 4: 6 เดือน </li></ul><br><ul><li><b>สำหรับผู้ใหญ่</b></li><li>โด๊สที่ 1: สามารถฉีดโด๊สแรกได้ตั้งแต่อายุ 19 ปี</li><li>โด๊สที่ 2: 1 เดือน หลังจากได้รับโด๊สแรก</li><li>โด๊สที่ 3: 6 เดือน หลังจากได้รับโด๊สที่สอง</li></ul>",
    warning:
      "<ul><li>ผู้ที่มีภาวะภูมิคุ้มกันบกพร่อง</li><li>ตั้งครรภ์</li><li>สำหรับผู้ใหญ่ต้องได้รับการตรวจ Anti-HBs Anti-HBc และ HBsAg</li></ul>",
  },
  {
    vaccineId: "vac003",
    category: "children",
    vaccineMedicalName: "DTwP",
    vaccineNameNormal: "วัคซีนรวมปัองกัน คอตีบ-บาดทะยัก-ไอกรน ชนิดทั้งเซลล์",
    protectDisease: ["disease004", "disease005", "disease006"],
    repeat: null,
    injectionPeriodTime: [60, 60, 60, 270, 1095],
    doseNumber: 5,
    replaceableWith: ["vac004"],
    shortDes:
      " ภูมิคุ้มกันจะเกิดดีที่สุดเมื่อฉีดวัคซีนเข้ากล้ามเนื้อ โดยเริ่มเกิดประมาณ 2 สัปดาห์หลังฉีดวัคซีน ครั้งแรก ภูมิคุ้มกันต่อเชื้อบาดทะยักและคอตีบเกิดขึ้นในเด็กหลังได้รับวัคซีน DT ประสิทธิภาพ ในการป้องกันโรคของวัคซีน DTwP และ DTaP มีประมาณร้อยละ 75-90 โดยในภาพรวมแลว้ DTwP และ DTaP ในการศึกษาต่างๆ มีประสิทธิภาพไม่แตกต่างกัน",
    displayedSuggestAge:
      "<ul><li>โด๊สที่ 1: 2 เดือน</li><li>โด๊สที่ 2: 4 เดือน</li><li>โด๊สที่ 3: 6 เดือน </li><li>โด๊สที่ 4: 15-18 เดือน</li><li>โด๊สที่ 5: 4-6 ปี </li></ul>",
    warning:
      "<ul><li> Encephalopathy ภายใน 7 วัน หลังจากฉีดวัคซีนครั้งก่อน ให้งดฉีดไอกรน แล้วฉีด DT แทน</li><li> ถ้าฉีดแล้วมีไข้ชัก ร้องกวนนาน มีอาการตัวอ่อนชั่วคราว ให้ฉีด DTap แทน</li></ul>",
  },
  {
    vaccineId: "vac004",
    category: "children",
    vaccineMedicalName: "DTaP",
    vaccineNameNormal: "วัคซีนรวมปัองกันคอตีบ-บาดทะยัก-ไอกรน ชนิดไร้เซลล์",
    protectDisease: ["disease004", "disease005", "disease006"],
    repeat: null,
    injectionPeriodTime: [60, 60, 60, 270, 1095],
    doseNumber: 5,
    replaceableWith: ["vac003"],
    shortDes:
      "ภูมิคุ้มกันจะเกิดดีที่สุดเมื่อฉีดวัคซีนเข้ากล้ามเนื้อ โดยเริ่มเกิดประมาณ 2 สัปดาห์หลังฉีดวัคซีน ครั้งแรก ภูมิคุ้มกันต่อเชื้อบาดทะยักและคอตีบเกิดขึ้นในเด็กหลังได้รับวัคซีน DT",
    displayedSuggestAge:
      "<ul><li>โด๊สที่ 1: 2 เดือน</li><li>โด๊สที่ 2: 4 เดือน</li><li>โด๊สที่ 3: 6 เดือน </li><li>โด๊สที่ 4: 15-18 เดือน</li><li>โด๊สที่ 5: 4-6 ปี </li></ul>",
    warning:
      "<ul><li> Encephalopathy ภายใน 7 วัน หลังจากฉีดวัคซีนครั้งก่อน ให้งดฉีดไอกรน แล้วฉีด DT แทน</li></ul>",
  },
  {
    vaccineId: "vac005",
    category: "adult",
    vaccineMedicalName: "Td",
    vaccineNameNormal: "วัคซีนรวมปัองกันคอตีบ-บาดทะยัก สำหรับผู้ใหญ่",
    protectDisease: ["disease004", "disease005"],
    repeat: "3650",
    injectionPeriodTime: [4380],
    doseNumber: 1,
    replaceableWith: null,
    shortDes:
      "วัคซีนไอกรนชนิดไร้เซลล์สูตรผู้ใหญ่ (Tdap หรือ TdaP) ที่สามารถใช้ใน เด็กตั้งแต่อายุ 4-6 ปีขึ้นไปได้ ดังนั้น เด็กโตและผู้ใหญ่ทุกคนที่มีความประสงค์จะฉีดวัคซีนป้องกันไอกรน ด้วย สามารถใช ้Tdap แทน dT ได ้1 เข็ม",
    displayedSuggestAge:
      "<ul><li>หญิงตั้งครรภ์</li><li>โด๊สที่ 1: ไตมาส 3</li><li>คนทั่วไป</li><li>ฉีดกระตุ้นทุกๆ 10 ปี</li></ul>",
    warning:
      "<ul><li> Encephalopathy ภายใน 7 วัน หลังจากฉีดวัคซีนครั้งก่อน ให้งดฉีดไอกรน แล้วฉีด DT แทน</li></ul>",
  },
  {
    vaccineId: "vac006",
    category: "adult",
    vaccineMedicalName: "Tdap",
    vaccineNameNormal:
      "วัคซีนรวมปัองกันคอตีบ-บาดทะยัก-ไอกรน ชนิดไร้เซลล์สำหรับผู้ใหญ่",
    protectDisease: ["disease004", "disease005", "disease006"],
    repeat: "3650",
    injectionPeriodTime: [1460],
    doseNumber: 1,
    replaceableWith: null,
    shortDes:
      "วัคซีนไอกรนชนิดไร้เซลล์สูตรผู้ใหญ่ (Tdap หรือ TdaP) ที่สามารถใช้ใน เด็กตั้งแต่อายุ 4-6 ปีขึ้นไปได้ ดังนั้น เด็กโตและผู้ใหญ่ทุกคนที่มีความประสงค์จะฉีดวัคซีนป้องกันไอกรน ด้วย สามารถใช ้Tdap แทน dT ได ้1 เข็ม",
    displayedSuggestAge:
      "<ul><li>หญิงตั้งครรภ์</li><li>โด๊สที่ 1: ไตมาส 3</li><li>คนทั่วไป</li><li>ฉีดกระตุ้นทุกๆ 10 ปี</li></ul>",
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
    repeat: null,
    injectionPeriodTime: [60, 60, 60, 360],
    doseNumber: 4,
    replaceableWith: null,
    shortDes:
      "วัคซีนนี้มีประสิทธิภาพป้องกันโรคได้สูงมากโดยเฉพาะ โรครุนแรง และเยื่อหุ้มสมองอักเสบจากเชื้อฮิบ พบว่าในประเทศที่ให้วัคซีนนี้แก่เด็กทุกคน สามารถ ลดอุบัติการณ์ของโรคได้ร้อยละ 95-99",
    displayedSuggestAge:
      "<ul><li>โด๊สที่ 1: 2 เดือน</li><li>โด๊สที่ 2: 4 เดือน</li><li>โด๊สที่ 3: 6 เดือน </li><li>โด๊สที่ 4: 12-15 เดือน</li></ul>",
    warning: "<ul><li>-</li></ul>",
  },
  {
    vaccineId: "vac008",
    category: "children",
    vaccineMedicalName: "OPV",
    vaccineNameNormal: "วัคซีนป้องกันโรคโปลิโอ (รับประทาน)",
    protectDisease: ["disease007"],
    repeat: null,
    injectionPeriodTime: [60, 60, 60, 360, 1095],
    doseNumber: 5,
    replaceableWith: ["vac009"],
    shortDes:
      "การศึกษาในประเทศสหรฐัอเมริกา พบว่าผู้ที่ได้รับวัคซีน OPV 2 ครั้ง มากกว่าร้อยละ 90 จะมีภูมิคุ้มกันขึ้นต่อเชื้อไวรัสโปลิโอทั้ง 3 ซีโรทัยป์ และถ้าได้รับครบ 3 ครั้งจะมีภูมูคุ้มกันต่อซีโรทัยป์ 1 ร้อยละ 97 ซีโรทัยป์ 2 และ 3 เกือบร้อยละ 100",
    displayedSuggestAge:
      "<ul><li>โด๊สที่ 1: 2 เดือน</li><li>โด๊สที่ 2: 4 เดือน</li><li>โด๊สที่ 3: 6 เดือน </li><li>โด๊สที่ 4: 1 ปี 6 เดือน</li><li>โด๊สที่ 5: 4 ปี</li></ul>",
    warning:
      "<ul><li>ผู้ที่มีภาวะภูมิคุ้มกันบกพร่อง ให้ใช้ IPV แทน</li><li>ตั้งครรภ์</li></ul>",
  },
  {
    vaccineId: "vac009",
    category: "children",
    vaccineMedicalName: "IPV",
    vaccineNameNormal: "วัคซีนปัองกันโปลิโอ ชนิดที่ทำจากเชื้อที่ตายแล้ว (ฉีด)",
    protectDisease: ["disease007"],
    repeat: null,
    injectionPeriodTime: [60, 60, 60, 360, 1095],
    doseNumber: 5,
    replaceableWith: ["vac008"],
    shortDes:
      " หลังได้รับวัคซีน 2 โดส มากกว่าร้อยละ 90 ของผู้ที่่ได้รับวัคซีนจะมีภูมูคุ้มกันในเลือด ต่อเชื้อโปลิโอทั้ง 3 ซีโรทัยป์ และจะเพิ่มขึ้นเป็นร้อยละ 99 หลังได้รับวัคซีน 3 โด๊ส ภูมิคุ้มกันในเลือดที่เกิดขึ้น ภายหลังได้รับวัคซีน 4 โด๊ส จะอยู่ได้นานหลายปี",
    displayedSuggestAge:
      "<ul><li>โด๊สที่ 1: 2 เดือน</li><li>โด๊สที่ 2: 4 เดือน</li><li>โด๊สที่ 3: 6 เดือน </li><li>โด๊สที่ 4: 1 ปี 6 เดือน</li><li>โด๊สที่ 5: 4 ปี</li></ul>",
    warning:
      "<ul><li> ผู้ที่แพ ้neomycin, streptomycin, polymyxin อย่างรุนแรง</li><li>ตั้งครรภ์</li></ul>",
  },
  {
    vaccineId: "vac010",
    category: "all",
    vaccineMedicalName: "MMR",
    vaccineNameNormal: "วัคซีนรวมปัองกันหัด-คางทูม-หัดเยอรมัน",
    protectDisease: ["disease008", "disease009", "disease010"],
    repeat: null,
    injectionPeriodTime: [270, 1190],
    doseNumber: 2,
    replaceableWith: ["vac011"],
    shortDes:
      "การศึกษาในประเทศสหรฐัอเมรกิาพบภูมืคุ้มกันต่อโรคหัดเกิดขึ้นร้อยละ 95 ของเด็กที่ได้รับวัคซีน เมื่ออายุ12 เดือน และร้อยละ 98 เมื่อได้รับวัคซีนที่อายุ15 เดือน",
    displayedSuggestAge:
      "<ul><li>โด๊สที่ 1: 9-12 เดือน</li><li>โด๊สที่ 2: 18 เดือน</li></ul><br><ul><li><b>สำหรับผู้ใหญ่</b></li><li>โด๊สที่ 1: สามารถฉีดโด๊สแรกได้ตั้งแต่อายุ 19 ปี</li><li>โด๊สที่ 2: 28 วัน หลังจากโด๊สแรก</li></ul>",
    warning:
      "<ul><li>ผู้ที่มีภาวะภูมิคุ้มกันบกพร่อง</li><li>ตั้งครรภ์</li><li> ผู้ที่แพ ้neomycin หรือเจลาติน อยา่งรุนแรง</li></ul>",
  },
  {
    vaccineId: "vac011",
    category: "all",
    vaccineMedicalName: "MMRV",
    vaccineNameNormal: "วัคซีนรวมปัองกันรวมหัด-คางทูม-หัดเยอรมัน-อีสุกอีใส",
    protectDisease: ["disease008", "disease009", "disease010", "disease014"],
    repeat: null,
    injectionPeriodTime: [365, 365],
    doseNumber: 1,
    replaceableWith: null,
    shortDes:
      "การศึกษาในประเทศสหรฐัอเมรกิาพบภูมืคุ้มกันต่อโรคหัดเกิดขึ้นร้อยละ 95 ของเด็กที่ได้รับวัคซีน เมื่ออายุ12 เดือน และร้อยละ 98 เมื่อได้รับวัคซีนที่อายุ15 เดือน",
    displayedSuggestAge:
      "<ul><li>โด๊สที่ 1: 9-12 เดือน</li><li>โด๊สที่ 2: 4-6 ปี</li></ul><br><ul><li><b>สำหรับผู้ใหญ่</b></li><li>โด๊สที่ 1: สามารถฉีดโด๊สแรกได้ตั้งแต่อายุ 19 ปี</li><li>โด๊สที่ 2: 28 วัน หลังจากโด๊สแรก</li></ul>",
    warning:
      "<ul><li>ผู้ที่มีภาวะภูมิคุ้มกันบกพร่อง</li><li>ตั้งครรภ์</li><li> ผู้ที่แพ ้neomycin หรือเจลาติน อยา่งรุนแรง</li><li>ถ้ามีประวัตืชัก ไม่ควรฉีด MMRV</li></ul>",
  },
  {
    vaccineId: "vac012",
    category: "children",
    vaccineMedicalName: "Inactivate JE",
    vaccineNameNormal: "วัคซีนปัองกันไข้สมองอักเสบชนิดเจอี ชนิดเชื้อตาย",
    protectDisease: ["disease011"],
    repeat: null,
    injectionPeriodTime: [180, 30, 365],
    doseNumber: 3,
    replaceableWith: null,
    shortDes:
      "วัคซีน JEVACTM ทำให้ภูมิคุ้มกันเกิดขึ้นร้อยละ 89-90 หลังฉีดโด๊สที่ 2 ได ้1 เดือน 16,17 และ หลังฉีดเข็มกระตุ้นได ้1 เดือน พบภูมิคุ้มร้อยละ 100",
    displayedSuggestAge:
      "<ul><li>โด๊สที่ 1: 12-18 เดือน</li><li>โด๊สที่ 2: 13-19 เดือน</li><li>โด๊สที่ 3: 24-30 เดือน </li></ul>",
    warning:
      "<ul><li>ผู้ที่มีภาวะภูมิคุ้มกันบกพร่อง</li><li>ตั้งครรภ์</li></ul>",
  },
  {
    vaccineId: "vac013",
    category: "children",
    vaccineMedicalName: "Live-attenuated JE",
    vaccineNameNormal:
      "วัคซีนปัองกันไข้สมองอักเสบชนิดเจอี  ชนิดเชื้อมีชีวิตอ่อนฤทธิ์",
    protectDisease: ["disease011"],
    repeat: null,
    injectionPeriodTime: [270, 90],
    doseNumber: 2,
    replaceableWith: null,
    shortDes:
      "วัคซีน CD.JEVAXTM หลังฉีดเข็มแรก มีภูมิคุ้มกันเกิดขึ้นร้อยละ 89.3 และร้อยละ 95 ที่ 30 วัน และที่ 90 วันตามลำดับ หลังฉีดวัคซีนโด๊สที่ 2 ภูมิคุ้มกันเกิดขึ้นร้อยละ 100 วัคซีน IMOJEVTM หลังฉีดเข็มแรกในผู้ใหญ่และเด็กมีภูมิคุ้มกันเกิดขึ้นึ้ร้อยละ 99.119 และ 9620 ตามลำดับ ในเด็กอาย ุ9 เดือนขึ้นไป สามารถสร้างภูมิคุ้มกันได้ไ้ม่ต่างจากเด็กอายุเุกิน 1 ปี",
    displayedSuggestAge:
      "<ul><li>โด๊สที่ 1: 1 ปี</li><li>โด๊สที่ 2: 2 ปี - 2 ปี 6 เดือน</li></ul>",
    warning:
      "<ul><li>ผู้ที่มีภาวะภูมิคุ้มกันบกพร่อง</li><li>ตั้งครรภ์</li></ul>",
  },
  {
    vaccineId: "vac014",
    category: "all",
    vaccineMedicalName: "Influenza",
    vaccineNameNormal: "วัคซีนป้องกันไข้หวัดใหญ่",
    protectDisease: ["disease012"],
    repeat: null,
    injectionPeriodTime: [180, "annually"],
    doseNumber: 1,
    replaceableWith: null,
    shortDes:
      "วัคซีนชนิดเชื้อไม่มีชีวิต ภูมิคุ้มกันจะเกิดขึ้นหลังฉีดวัคซีนในเวลา 7–14 วันวัคซีนชนิดเชื้อมีชีวิต มีประสิทธิภาพประมาณ ร้อยละ 70 - 95 ขึ้นกับว่าเชื้อตรงกับสายพันธุ์ ในวัคซีนมากน้อยเพียงใด",
    displayedSuggestAge:
      "<ul><li>โด๊สที่ 1: 6-15 เดือน</li><li>โด๊สถัดไป: ฉีดปีละ 1 ครั้ง</li></ul>",
    warning:
      "<ul><li>ผู้ที่แพ้ไข่อย่างรุนแรง ต้องเฝ้าสังเกตอาการจากการดูแลของแพทย์</li><li>ตั้งครรภ์</li></ul>",
  },
  {
    vaccineId: "vac015",
    category: "all",
    vaccineMedicalName: "HPV",
    vaccineNameNormal: "วัคซีนป้องกันเอชพีวี",
    protectDisease: ["disease017"],
    repeat: null,
    injectionPeriodTime: [4015, 4045, 4165],
    doseNumber: 3,
    replaceableWith: null,
    shortDes:
      "ีหากวัดประสิทธิภาพในการป้องกัน CIN3 ขึ้นไปจากเชื้อ HPV ไม่ว่าจะสายพันธุ์ใด เฉพาะในผู้ที่ตรวจไม่พบการติดเชื้อ HPV ก่อนฉีดวัคซีน พบว่าวัคซีนชนิด 2 สายพันธ์ุ มีประสิทธิภาพ ร้อยละ 93",
    displayedSuggestAge:
      "<ul><li>โด๊สที่ 1: 11-12 ปี (โด๊สแรกสามารถฉีดได้ตั้งแต่อายุ 9 ปี)</li><li>โด๊สที่ 2: 11-12 ปี (+1-2 เดือน)</li><li>โด๊สที่ 3: 11-12 ปี (6 เดือน)</li></ul><br><ul><li><b>สำหรับผู้ใหญ่</b></li><li>โด๊สที่ 1: สามารถเริ่มรับวัคซีนได้ตั้งแต่อายุ 19 ปี</li><li>โด๊สที่ 2: 1-2 เดือน หลังจากได้รับโด๊สแรก</li><li>โด๊สที่ 3: 6 เดือน หลังจากได้รับโด๊สที่สอง</li></ul>",
    warning:
      "<ul><li> ผู้ที่มีประวัติแพ้รุนแรงต่อยีสต์ </li><li>ตั้งครรภ์</li></ul>",
  },
  {
    vaccineId: "vac016",
    category: "all",
    vaccineMedicalName: "PCV13",
    vaccineNameNormal: "วัคซีนป้องกันโรคจากเชื้อนิวโมคอคคัส",
    protectDisease: ["disease023"],
    repeat: null,
    injectionPeriodTime: [60, 60, 60, 180],
    doseNumber: 4,
    replaceableWith: null,
    shortDes:
      " สำหรับ PCV13 ประมาณ 1 ปีนับจาก ที่มีการใช้อย่างแพร่หลายทั่วประเทศอังกฤษแบบ 2+1 พบว่ามีประสิทธิภาพในการป้องกัน IPD จากซีโรทัยป์ 7F และ 19A ร้อยละ 76 และ 70 ตามลำดับหากได้ร้บ PCV13 อย่างน้อย 1 โด๊ส และมี ประสิทธิภาพในการป้องกัน IPD จากสายพันธุ์ทุบรรจุใุนวัคซีนร้อยละ 78 หากได้รับ PCV13 อย่างน้อย 2 โด๊ส ภายในขวบปีแรก",
    displayedSuggestAge:
      "<ul><li>โด๊สที่ 1: 2 เดือน</li><li>โด๊สที่ 2: 4 เดือน</li><li>โด๊สที่ 3: 6 เดือน </li><li>โด๊สที่ 4: 15 เดือน</li></ul><br><ul><li><b>สำหรับผู้ใหญ่</b></li><li>โด๊สที่ 1: สำหรับผู้สูงอายุตั้งแต่อายุ 65 ปี ขึ้นไป</li></ul>",
    warning: "<ul><li>-</li></ul>",
  },
  {
    vaccineId: "vac017",
    category: "all",
    vaccineMedicalName: "PPSV23",
    vaccineNameNormal:
      "วัคซีนป้องกันโรคจากเชื้อนิวโมคอคคัส ชนิดโพลีแซคคาไรด์ 23 สายพันธุ์",
    protectDisease: ["disease023"],
    repeat: null,
    injectionPeriodTime: [730, 1825],
    doseNumber: 2,
    replaceableWith: null,
    shortDes:
      " สามารถครอบคลุมซีโรทัยป์ ที่ก่อให้เกิดโรค IPD ในเด็กและผู้ใหญ่ได้ร้อยละ 85-90 สำหรับประเทศไทยครอบคลุมซีโรทัยป์ที่ก่อให้เกิด IPD ได้ร้อยละ 86.9-87.3 มีประสิทธิภาพในการป้องกันโรค IPD ได้ร้อยละ 56-81 ",
    displayedSuggestAge:
      "<ul><li>โด๊สที่ 1: 2 ปี</li><li>โด๊สที่ 2: 7 ปี</li></ul><br><ul><li><b>สำหรับผู้ใหญ่</b></li><li>โด๊สที่ 1: สำหรับผู้สูงอายุตั้งแต่อายุ 65 ปี ขึ้นไปที่ได้รับ PCV13 มาแล้วอย่างน้อย 1 ปีขึ้นไป</li></ul>",
    warning:
      "<ul><li>แนะนำให้ใช้เฉพาะบุคคลที่มีโรคประจำตัว เช่น โรคภูมิคุ้มกันบกพร่อง โรคหัวใจ โรคหอบ</li></ul>",
  },
  {
    vaccineId: "vac018",
    category: "children",
    vaccineMedicalName: "Rotarix",
    vaccineNameNormal: "วัคซีนป้องกันเชื้อไวรัสโรต้า ชนิด 1 สายพันธุ์",
    protectDisease: ["disease016"],
    repeat: null,
    injectionPeriodTime: [60, 60],
    doseNumber: 2,
    replaceableWith: null,
    shortDes:
      "สำหรับการใช้วัคซีน Rotarix หลังได้รับวัคซีนครบ 2 โด๊สสามารถป้องกันผู้ป่วยที่มีอาการรุนแรงและต้องรับการรักษาในโรงพยาบาลจากโรคนี้ร้อยละ 85 และป้องกันโรคที่รุนแรงมากที่สุดได้ถึงร้อยละ 100",
    displayedSuggestAge:
      "<ul><li>โด๊สที่ 1: 2 เดือน</li><li>โด๊สที่ 2: 4 เดือน</li></ul>",
    warning:
      "<ul><li>ห้ามในเด็กอายุนอกเหนือกว่าแนะนำ</li><li>ผู้ป่วยที่มีภาวะภูมิคุ้มกันบกพร่องแบบรุนแรงชนิด Severe combined immunodeficiency </li><li> ผู้ที่เคยมีภาวะลำไส้กลืนกัน</li><li> ผู้ที่ป่วยเป็นโรคเกี่ยวกับทางเดินอาหารและลำไส้ชนิดเรื้อรัง</li></ul>",
  },
  {
    vaccineId: "vac019",
    category: "children",
    vaccineMedicalName: "RotaTeq",
    vaccineNameNormal: "วัคซีนป้องกันเชื้อไวรัสโรต้า ชนิด 5 สายพันธุ์",
    protectDisease: ["disease016"],
    repeat: null,
    injectionPeriodTime: [60, 60, 60],
    doseNumber: 3,
    replaceableWith: ["vac018"],
    shortDes:
      "การศึกษาการใช้วัคซีน RotaTeq หลังได้รับวัคซีนครบ 3 โด๊สสามารถป้องกัน โรคอุจจาระร่วงรุนแรงได้ร้อยละ 98 และป้องกันโรคนี้ที่ทุกระดับความรุนแรงร้อยละ 74",
    displayedSuggestAge:
      "<ul><li>โด๊สที่ 1: 2 เดือน</li><li>โด๊สที่ 2: 4 เดือน</li><li>โด๊สที่ 3: 6 เดือน </li></ul>",
    warning:
      "<ul><li>ห้ามในเด็กอายุนอกเหนือกว่าแนะนำ</li><li> ผู้ป่วยที่มีภาวะภูมิคุ้มกันบกพร่องแบบรุนแรงชนิด Severe combined immunodeficiency </li><li> ผู้ที่เคยมีภาวะลำไส้กลืนกัน</li><li> ผู้ที่ป่วยเป็นโรคเกี่ยวกับทางเดินอาหารและลำไส้ชนิดเรื้อรัง</li></ul>",
  },
  {
    vaccineId: "vac020",
    category: "all",
    vaccineMedicalName: "HAV",
    vaccineNameNormal: "วัคซีนป้องกันโรคไวรัสตับอักเสบ เอ",
    protectDisease: ["disease013"],
    repeat: null,
    injectionPeriodTime: [365, 180],
    doseNumber: 2,
    replaceableWith: null,
    shortDes:
      " วัคซีนเชื้อตายสามารถป้องกันการติดเชื้อจากไวรัสตับอักเสบเอได้ภายในระยะ 2-4 สัปดาห์ หลังจากได้รับวัคซีน 1 เข็ม จะสามารถป้องกันโรคได้ราว 1 ปี หากฉีดกระตุ้นอีกหนึ่งโด๊สที่ 6-12 เดือน หลังจากเข็มแรกจะสามารถป้องกันโรคไดร้อยละ 94-100 และยังสามารถหยุดยั้งการระบาดของโรคได้",
    displayedSuggestAge:
      "<ul><li>โด๊สที่ 1: 12-23 เดือน</li><li>โด๊สที่ 2: >18 เดือน</li></ul><br><ul><li><b>สำหรับผู้ใหญ่</b></li><li>โด๊สที่ 1: สามารถฉีดโด๊สแรกได้ตั้งแต่อายุ 19 ปี จนถึงอายุ 26 ปี</li><li>โด๊สที่ 2: 6-12 เดือน หลังจากได้รับโด๊สแรก</li></ul>",
    warning:
      "<br><ul><li><b>สำหรับผู้ใหญ่</b>ควรได้รับการตรวจผล HAV IgG ก่อนได้รับวัคซีน</li></ul>",
  },
  {
    vaccineId: "vac021",
    category: "all",
    vaccineMedicalName: "VAR",
    vaccineNameNormal: "วัคซีนป้องกันโรคอีสุกอีใส",
    protectDisease: ["disease014"],
    repeat: null,
    injectionPeriodTime: [365, 1095],
    doseNumber: 2,
    replaceableWith: null,
    shortDes:
      "ภายหลังได้รับวัคซีนป้องกันโรคอีสกุอีใส ในเด็กอายุ1 ปีขึ้นไป พบว่าภายหลังการให้วัคซีน 1 ครั้ง จะมีภมูิคุ้มกันเกิดขึ้นร้อยละ 76-85 และจะเพิ่มขึ้น เป็นเกือบร้อยละ 100 ภายหลังได้รับวัคซีนครั้งที่ 2",
    displayedSuggestAge:
      "<ul><li>โด๊สที่ 1: 12-18 เดือน</li><li>โด๊สที่ 2: >4-6 ปี</li></ul><br><ul><li><b>สำหรับผู้ใหญ่</b></li><li>โด๊สที่ 1: สามารถฉีดโด๊สแรกได้ตั้งแต่อายุ 19 ปี</li><li>โด๊สที่ 2: 1 เดือนหลังจากได้รับโด๊สแรก</li></ul>",
    warning:
      "<ul><li>ผู้ที่แพ ้เจลาติน neomycin, erythromycin, kanamycin อย่างรุนแรง</li><li>ผู้ที่มีภาวะภูมิคุ้มกันบกพร่อง</li><li>ตั้งครรภ์</li></ul>",
  },
  {
    vaccineId: "vac022",
    category: "additional",
    vaccineMedicalName: "Rabies",
    vaccineNameNormal: "วัคซีนป้องกันโรคพิษสุนัขบ้า",
    protectDisease: ["disease015"],
    repeat: null,
    injectionPeriodTime: [0, 7],
    doseNumber: 2,
    replaceableWith: null,
    shortDes:
      "การฉีดวัคซีนป้องกันโรคล่วงหน้าเหมาะสำหรับผู้ที่มีโอกาสสัมผัสเชื้อพิษสุนัขบ้า ",
    displayedSuggestAge:
      "<ul><li>โด๊สที่ 1: 0 (ครั้งแรก)</li><li>โด๊สที่ 2: >7 วัน (ฉีดห่างจากครั้งก่อนหน้า 7 วัน)</li></ul>",
    warning:
      "<ul><li>ผู้ที่มีภาวะภูมิคุ้มกันบกพร่อง</li><li>ตั้งครรภ์</li></ul>",
  },
  {
    vaccineId: "vac023",
    category: "children",
    vaccineMedicalName: "Meningococcal",
    vaccineNameNormal: "วัคซีนป้องกันโรคไข้กาฬหลังแอ่น",
    protectDisease: ["disease020"],
    repeat: null,
    injectionPeriodTime: [4015, 5840],
    doseNumber: 2,
    replaceableWith: null,
    shortDes:
      "วัคซีนนี้ใช้ป้องกันโรคไข้กาฬหลังแอ่นจำเพาะซีโรกรุ๊ปที่บรรจุอยู่ในวัคซีน ใช้ได้ในเด็กอายุมากกว่า 2 เดือน และผู้ใหญ่ที่เสี่ยงต่อการเกิดโรคไข้กาฬหลังแอ่น",
    displayedSuggestAge:
      "<ul><li>โด๊สที่ 1: 11-12 ปี</li><li>โด๊สที่ 2: >16 ปี (วัคซีนเสริม)</li></ul>",
    warning: "<ul><li>ตั้งครรภ์</li></ul>",
  },
  {
    vaccineId: "vac024",
    category: "all",
    vaccineMedicalName: "Dengue",
    vaccineNameNormal: "วัคซีนป้องกันโรคไข้เลือดออก",
    protectDisease: ["disease019"],
    repeat: null,
    injectionPeriodTime: [3285, 180, 180],
    doseNumber: 3,
    replaceableWith: null,
    shortDes:
      "องค์การอนามัยโลก สมาคมโรคติดเชื้อแห่งประเทศไทย และสมาคมโรคติดเชื้อในเด็กแห่งประเทศไทย แนะนำให้วัคซีนไข้เลือดออกสำหรับเด็กและผู้ใหญ่อายุ 9-45 ปีที่เคยติดเชื้อไวรัสเดงกีมาก่อนนอกจากนี้ในเด็กอายุ 9-16 ปี ที่ไม่เคยติดเชื้อมาก่อน อาจเกิดโรครุนแรงได้ หากติดเชื้อหลังฉีดไปแล้ว 2-3 ปี จึงไม่แนะนำให้ฉีดในผู้ที่ไม่เคยติดเชื้อมาก่อน",
    displayedSuggestAge:
      "<ul><li>โด๊สที่ 1: 9-45 ปี (0 เดือน)</li><li>โด๊สที่ 2: >9-45 ปี (+ 6 เดือนจากครั้งก่อนหน้า)</li><li>โด๊สที่ 3: >9-45 ปี (+ 6 เดือนจากครั้งก่อนหน้า)</li></ul>",
    warning:
      "<ul><li>ผู้ที่มีภาวะภูมิคุ้มกันบกพร่อง</li><li>ตั้งครรภ์</li><ul>",
  },
  {
    vaccineId: "vac025",
    category: "adult",
    vaccineMedicalName: "Live-attenuated zoster vaccine",
    vaccineNameNormal: "วัคซีนป้องกันโรคงูสวัด ชนิดเชื้อมีชีวิตอ่อนฤทธิ์",
    protectDisease: ["disease029"],
    repeat: null,
    injectionPeriodTime: [23725],
    doseNumber: 1,
    replaceableWith: null,
    shortDes:
      "การให้วัคซีนนี้เหมาะสำหรับผู้สูงอายุตั้งแต่ 65 ปีขึ้นไปที่อยู่ในที่ที่เสี่ยงต่อการติดโรคงูสวัด",
    displayedSuggestAge:
      "<ul><li>โด๊สที่ 1: สำหรับผู้สูงอายุที่มีอายุตั้งแต่อายุ 65 ปีขึ้นไป</li></ul>",
    warning: "<ul><li>ผู้ที่มีภาวะภูมิคุ้มกันบกพร่อง</li><ul>",
  },
];
