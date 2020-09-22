module.exports = [
  {
    vaccineId: "vac001",
    category: "children",
    vaccineMedicalName: "BCG",
    vaccineNameNormal: "วัคซีนป้องกันวัณโรค",
    protectDisease: ["disease001"],
    injectionPeriodTime: [0],
    doseNumber: 1,
    replaceableWith: null,
    shortDes:
      "ความต้านทานต่อเชื้อวัณโรคจะเกิดเต็มที่ประมาณ 2 เดือน หลังจากได้รับวัคซีน โดยวัคซีนบีซีจี มีประสิทธิภาพดีต่อการป้องกันวัณโรคระยะแรกในเด็ก โดยเฉพาะวัณโรคเยื่อหุ้มสมอง (TB meningitis) และวัณโรคชนิดแพร่กระจาย (miliary TB) สามารถป้องกันได้สูงถึงร้อยละ 52-100",
    displayedSuggestAge: "<ul><li>- เข็มที่ 1: ฉีดทันทีหลังคลอด</li></ul>",
    warning:
      "<ul><li>- ผู้ที่มีภาวะภูมิคุ้มกันบกพร่อง</li><li>- ตั้งครรภ์</li></ul>"
  },
  {
    vaccineId: "vac002",
    category: "children",
    vaccineMedicalName: "HBV",
    vaccineNameNormal: "วัคซีนป้องกันโรคไวรัสตับอักเสบบี",
    protectDisease: ["disease002"],
    injectionPeriodTime: [0, 30, 150],
    doseNumber: 3,
    replaceableWith: null,
    shortDes:
      "การให้วัคซีนป้องกันโรคไวรัสตับอักเสบบี จะทำให้เกิดภูมิคุ้มกันโรคได้หลังจากได้รับวัคซีนเข็มที่สอง วัคซีนเข็มที่สามถือเป็นการกระตุ้นให้ภูมิคุ้มกันโรคสูงขึ้น และมีภูมิคุ้มกันที่ป้องกันโรคได้ร้อยละ 90-95",
    displayedSuggestAge: "<ul><li>- เข็มที่ 1: ฉีดทันทีหลังคลอด</li></ul>",
    warning: "<ul><li>- ผู้ที่แพ้ยีสต์อย่างรุนแรง</li></ul>"
  },
  {
    vaccineId: "vac003",
    category: "children",
    vaccineMedicalName: "DTwP",
    vaccineNameNormal: "วัคซีนรวม คอตีบ-บาดทะยัก-ไอกรน ชนิดทั้งเซลล์",
    protectDisease: ["disease004", "disease005", "disease006"],
    injectionPeriodTime: [60, 60, 60, 270, 1095],
    doseNumber: 5,
    replaceableWith: ["vac004"],
    shortDes: "คำอธิบาย",
    displayedSuggestAge: "<ul><li>- เข็มที่ 1: ฉีดทันทีหลังคลอด</li></ul>",
    warning:
      "<ul><li>- ผู้ที่มีภาวะภูมิคุ้มกันบกพร่อง</li><li>- ตั้งครรภ์</li></ul>"
  },
  {
    vaccineId: "vac004",
    category: "children",
    vaccineMedicalName: "DTaP",
    vaccineNameNormal: "วัคซีนรวมคอตีบ-บาดทะยัก-ไอกรน ชนิดไร้เซลล์",
    protectDisease: ["disease004", "disease005", "disease006"],
    injectionPeriodTime: [60, 60, 60, 270, 1095],
    doseNumber: 5,
    replaceableWith: ["vac003"],
    shortDes: "คำอธิบาย",
    displayedSuggestAge: "<ul><li>- เข็มที่ 1: ฉีดทันทีหลังคลอด</li></ul>",
    warning:
      "<ul><li>- ผู้ที่มีภาวะภูมิคุ้มกันบกพร่อง</li><li>- ตั้งครรภ์</li></ul>"
  },
  {
    vaccineId: "vac005",
    category: "children",
    vaccineMedicalName: "Td",
    vaccineNameNormal: "วัคซีนรวมคอตีบ-บาดทะยัก สำหรับผู้ใหญ่",
    protectDisease: ["disease004", "disease005"],
    injectionPeriodTime: [4380],
    doseNumber: 1,
    replaceableWith: null,
    shortDes: "คำอธิบาย",
    displayedSuggestAge: "<ul><li>- เข็มที่ 1: ฉีดทันทีหลังคลอด</li></ul>",
    warning:
      "<ul><li>- ผู้ที่มีภาวะภูมิคุ้มกันบกพร่อง</li><li>- ตั้งครรภ์</li></ul>"
  },
  {
    vaccineId: "vac006",
    category: "children",
    vaccineMedicalName: "Tdap",
    vaccineNameNormal:
      "วัคซีนรวมคอตีบ-บาดทะยัก-ไอกรน ชนิดไร้เซลล์สำหรับผู้ใหญ่",
    protectDisease: ["disease004", "disease005", "disease006"],
    injectionPeriodTime: [1460],
    doseNumber: 1,
    replaceableWith: null,
    shortDes: "คำอธิบาย",
    displayedSuggestAge: "<ul><li>- เข็มที่ 1: ฉีดทันทีหลังคลอด</li></ul>",
    warning:
      "<ul><li>- ผู้ที่มีภาวะภูมิคุ้มกันบกพร่อง</li><li>- ตั้งครรภ์</li></ul>"
  },
  {
    vaccineId: "vac007",
    category: "children",
    vaccineMedicalName: "Hib",
    vaccineNameNormal: "วัคซีนโรคจากเชื้อฮีโมฟิลุสอินฟลูเอนเซ่ทัยป์บี หรือฮิบ",
    protectDisease: ["disease003"],
    injectionPeriodTime: [60, 60, 60, 360],
    doseNumber: 4,
    replaceableWith: null,
    shortDes: "คำอธิบาย",
    displayedSuggestAge: "<ul><li>- เข็มที่ 1: ฉีดทันทีหลังคลอด</li></ul>",
    warning:
      "<ul><li>- ผู้ที่มีภาวะภูมิคุ้มกันบกพร่อง</li><li>- ตั้งครรภ์</li></ul>"
  },
  {
    vaccineId: "vac008",
    category: "children",
    vaccineMedicalName: "OPV",
    vaccineNameNormal: "วัคซีนป้องกันโรคโปลิโอ (รับประทาน)",
    protectDisease: ["disease007"],
    injectionPeriodTime: [60, 60, 60, 360, 1095],
    doseNumber: 5,
    replaceableWith: ["vac009"],
    shortDes: "คำอธิบาย",
    displayedSuggestAge: "<ul><li>- เข็มที่ 1: ฉีดทันทีหลังคลอด</li></ul>",
    warning:
      "<ul><li>- ผู้ที่มีภาวะภูมิคุ้มกันบกพร่อง</li><li>- ตั้งครรภ์</li></ul>"
  },
  {
    vaccineId: "vac009",
    category: "children",
    vaccineMedicalName: "IPV",
    vaccineNameNormal: "วัคซีนโปลิโอ ชนิดที่ทำจากเชื้อที่ตายแล้ว (ฉีด)",
    protectDisease: ["disease007"],
    injectionPeriodTime: [60, 60, 60, 360, 1095],
    doseNumber: 5,
    replaceableWith: ["vac008"],
    shortDes: "คำอธิบาย",
    displayedSuggestAge: "<ul><li>- เข็มที่ 1: ฉีดทันทีหลังคลอด</li></ul>",
    warning:
      "<ul><li>- ผู้ที่มีภาวะภูมิคุ้มกันบกพร่อง</li><li>- ตั้งครรภ์</li></ul>"
  },
  {
    vaccineId: "vac010",
    category: "children",
    vaccineMedicalName: "MMR",
    vaccineNameNormal: "วัคซีนรวมหัด-คางทูม-หัดเยอรมัน",
    protectDisease: ["disease008", "disease009", "disease010"],
    injectionPeriodTime: [270, 1190],
    doseNumber: 2,
    replaceableWith: ["vac011"],
    shortDes: "คำอธิบาย",
    displayedSuggestAge: "<ul><li>- เข็มที่ 1: ฉีดทันทีหลังคลอด</li></ul>",
    warning:
      "<ul><li>- ผู้ที่มีภาวะภูมิคุ้มกันบกพร่อง</li><li>- ตั้งครรภ์</li></ul>"
  },
  {
    vaccineId: "vac011",
    category: "children",
    vaccineMedicalName: "MMRV",
    vaccineNameNormal: "วัคซีนรวมหัด-คางทูม-หัดเยอรมัน-อีสุกอีใส",
    protectDisease: ["disease008", "disease009", "disease010", "disease014"],
    injectionPeriodTime: [365, 365],
    doseNumber: 1,
    replaceableWith: null,
    shortDes: "คำอธิบาย",
    displayedSuggestAge: "<ul><li>- เข็มที่ 1: ฉีดทันทีหลังคลอด</li></ul>",
    warning:
      "<ul><li>- ผู้ที่มีภาวะภูมิคุ้มกันบกพร่อง</li><li>- ตั้งครรภ์</li></ul>"
  },
  {
    vaccineId: "vac012",
    category: "children",
    vaccineMedicalName: "JEVAC",
    vaccineNameNormal: "วัคซีนไข้สมองอักเสบเจอี",
    protectDisease: ["disease011"],
    injectionPeriodTime: [180, 30, 365],
    doseNumber: 3,
    replaceableWith: null,
    shortDes: "คำอธิบาย",
    displayedSuggestAge: "<ul><li>- เข็มที่ 1: ฉีดทันทีหลังคลอด</li></ul>",
    warning:
      "<ul><li>- ผู้ที่มีภาวะภูมิคุ้มกันบกพร่อง</li><li>- ตั้งครรภ์</li></ul>"
  },
  {
    vaccineId: "vac013",
    category: "children",
    vaccineMedicalName: "CD-JEVAC",
    vaccineNameNormal: "วัคซีนไข้สมองอักเสบเจอี ",
    protectDisease: ["disease011"],
    injectionPeriodTime: [270, 90],
    doseNumber: 2,
    replaceableWith: ["vac014"],
    shortDes: "คำอธิบาย",
    displayedSuggestAge: "<ul><li>- เข็มที่ 1: ฉีดทันทีหลังคลอด</li></ul>",
    warning:
      "<ul><li>- ผู้ที่มีภาวะภูมิคุ้มกันบกพร่อง</li><li>- ตั้งครรภ์</li></ul>"
  },
  {
    vaccineId: "vac014",
    category: "children",
    vaccineMedicalName: "IMOJEV",
    vaccineNameNormal: "วัคซีนไข้สมองอักเสบเจอี",
    protectDisease: ["disease011"],
    injectionPeriodTime: [270, 365],
    doseNumber: 2,
    replaceableWith: ["vac013"],
    shortDes: "คำอธิบาย",
    displayedSuggestAge: "<ul><li>- เข็มที่ 1: ฉีดทันทีหลังคลอด</li></ul>",
    warning:
      "<ul><li>- ผู้ที่มีภาวะภูมิคุ้มกันบกพร่อง</li><li>- ตั้งครรภ์</li></ul>"
  },
  {
    vaccineId: "vac015",
    category: "children",
    vaccineMedicalName: "Influenza",
    vaccineNameNormal: "วัคซีนป้องกันไข้หวัดใหญ่",
    protectDisease: ["disease012"],
    injectionPeriodTime: [180, "annually"],
    doseNumber: 1,
    replaceableWith: null,
    shortDes: "คำอธิบาย",
    displayedSuggestAge: "<ul><li>- เข็มที่ 1: ฉีดทันทีหลังคลอด</li></ul>",
    warning:
      "<ul><li>- ผู้ที่มีภาวะภูมิคุ้มกันบกพร่อง</li><li>- ตั้งครรภ์</li></ul>"
  },
  {
    vaccineId: "vac016",
    category: "children",
    vaccineMedicalName: "HPV",
    vaccineNameNormal: "วัคซีนป้องกันเอชพีวี",
    protectDisease: ["disease017"],
    injectionPeriodTime: [4015, 4045, 4165],
    doseNumber: 3,
    replaceableWith: null,
    shortDes: "คำอธิบาย",
    displayedSuggestAge: "<ul><li>- เข็มที่ 1: ฉีดทันทีหลังคลอด</li></ul>",
    warning:
      "<ul><li>- ผู้ที่มีภาวะภูมิคุ้มกันบกพร่อง</li><li>- ตั้งครรภ์</li></ul>"
  },
  {
    vaccineId: "vac017",
    category: "children",
    vaccineMedicalName: "PCV13",
    vaccineNameNormal: "วัคซีนโรคจากเชื้อนิวโมคอคคัส ชนิดคอนจูเกต 13 สายพันธุ์",
    protectDisease: ["disease023"],
    injectionPeriodTime: [60, 60, 60, 180],
    doseNumber: 4,
    replaceableWith: null,
    shortDes: "คำอธิบาย",
    displayedSuggestAge: "<ul><li>- เข็มที่ 1: ฉีดทันทีหลังคลอด</li></ul>",
    warning:
      "<ul><li>- ผู้ที่มีภาวะภูมิคุ้มกันบกพร่อง</li><li>- ตั้งครรภ์</li></ul>"
  },
  {
    vaccineId: "vac018",
    category: "children",
    vaccineMedicalName: "PPSV23",
    vaccineNameNormal:
      "วัคซีนโรคจากเชื้อนิวโมคอคคัส ชนิดโพลีแซคคาไรด์ 23 สายพันธุ์",
    protectDisease: ["disease023"],
    injectionPeriodTime: [730, 1825],
    doseNumber: 2,
    replaceableWith: null,
    shortDes: "คำอธิบาย",
    displayedSuggestAge: "<ul><li>- เข็มที่ 1: ฉีดทันทีหลังคลอด</li></ul>",
    warning:
      "<ul><li>- ผู้ที่มีภาวะภูมิคุ้มกันบกพร่อง</li><li>- ตั้งครรภ์</li></ul>"
  },
  {
    vaccineId: "vac019",
    category: "children",
    vaccineMedicalName: "Rota",
    vaccineNameNormal: "วัคซีนโรคอุจจาระร่วงจากเชื้อไวรัสโรต้า",
    protectDisease: ["disease016"],
    injectionPeriodTime: [60, 60, 60],
    doseNumber: 3,
    replaceableWith: null,
    shortDes: "คำอธิบาย",
    displayedSuggestAge: "<ul><li>- เข็มที่ 1: ฉีดทันทีหลังคลอด</li></ul>",
    warning:
      "<ul><li>- ผู้ที่มีภาวะภูมิคุ้มกันบกพร่อง</li><li>- ตั้งครรภ์</li></ul>"
  },
  {
    vaccineId: "vac020",
    category: "children",
    vaccineMedicalName: "HAV",
    vaccineNameNormal: "วัคซีนไวรัสตับอักเสบ เอ",
    protectDisease: ["disease013"],
    injectionPeriodTime: [365, 180],
    doseNumber: 2,
    replaceableWith: null,
    shortDes: "คำอธิบาย",
    displayedSuggestAge: "<ul><li>- เข็มที่ 1: ฉีดทันทีหลังคลอด</li></ul>",
    warning:
      "<ul><li>- ผู้ที่มีภาวะภูมิคุ้มกันบกพร่อง</li><li>- ตั้งครรภ์</li></ul>"
  },
  {
    vaccineId: "vac021",
    category: "children",
    vaccineMedicalName: "VAR",
    vaccineNameNormal: "วัคซีนป้องกันโรคอีสุกอีใส",
    protectDisease: ["disease014"],
    injectionPeriodTime: [365, 1095],
    doseNumber: 2,
    replaceableWith: null,
    shortDes: "คำอธิบาย",
    displayedSuggestAge: "<ul><li>- เข็มที่ 1: ฉีดทันทีหลังคลอด</li></ul>",
    warning:
      "<ul><li>- ผู้ที่มีภาวะภูมิคุ้มกันบกพร่อง</li><li>- ตั้งครรภ์</li></ul>"
  }
];
