const vaccines = require("./TH/vaccines");
const diseases = require("./TH/diseases");
const packagers = require("./TH/packager");
export default {
  vaccines,
  diseases,
  packagers,
  home: "หน้าหลัก",
  vaccine: "วัคซีน",
  vaccineList: "รายการวัคซีน",
  family: "ครอบครัว",
  packager: "แพ็กเกจวัคซีนเสริม",
  setting: "ตั้งค่า",
  event: "กิจกรรมที่ต้องทำ",
  recentActivity: "วันนัดที่กำลังจะถึงเร็วๆนี้",
  welcome: "ยินดีต้อนรับคุณ ",
  language: "ภาษา",
  accountSetting: "ตั้งค่าบัญชี",
  appointmentSuggestion: "แนะนำการนัดหมาย",
  category: "ประเภทวัคซีน",
  children: "สำหรับเด็ก",
  adult: "สำหรับผู้ใหญ่",
  ordering: "จัดเรียงวัคซีนโดย",
  others: "อื่นๆ",
  networkMode: {
    offline: "คุณออฟไลน์อยู่",
    online: "คุณออนไลน์อยู่",
  },
  vaccineDetailsPage: {
    title: "รายละเอียดวัคซีน",
    suggestedAge: "อายุที่ควรได้รับวัคซีน",
    who: "บุคคลที่ควรได้รับวัคซีน และอายุที่ควรรับวัคซีน",
    appointmentBtn: "กำหนดวันฉีดวัคซีน",
    recordBtn: "บันทึกวัคซีน",
    description: "รายละเอียดโดยย่อ",
    warning: "คำเตือน/บุคคลที่ไม่ควรฉีด",
    vaccineReference:
      "ที่มาข้อมูล: ตำราวัคซีนและการสร้างเสริมภูมิคุ้มกันโรค ปี 2562 กรมควบคุมโรค กระทรวงสาธารณะสุข",
  },
  vaccinePackagerPage: {
    title: "แพ็กเกจวัคซีนเสริม",
  },
  recordVaccinePage: {
    title: "จดบันทึกวัคซีน",
    vaccineName: "ชื่อวัคซีน",
    batchNO: "เลขล็อตการผลิต",
    receivingDate: "วันที่ได้รับวัคซีน",
    hostpitalName: "ชื่อโรงพยาบาลที่รับวัคซีน",
    doctorInfo: "รหัสบุคลากรทางการแพทย์(สำหรับเจ้าหน้าที่)",
    freetext: "บันทึกข้อความ/รายละเอียดเพิ่มเติม",
    recordTo: "บันทึกการฉีดให้กับ",
    uploadImage: "อัพโหลดรูปภาพหลักฐานการฉีดวัคซีน (เลขล๊อตวัคซีน)",
    submitBtn: "บันทึกข้อมูล",
    cancelBtn: "ยกเลิก",
    packageMember: "แนะนำวัคซีนสำหรับ",
  },
  label: {
    name: "ชื่อ - นามสกุล",
    birthDate: "วันเกิด",
    disease: "โรคประจำตัว",
    vaccine: "วัคซีนที่เคยได้รับ",
    noneCongenitalDisease: "ไม่มีโรคประจำตัว",
    updateChildInfoTitle: "อัปเดตข้อมูลสมาชิกในครอบครัว",
    age: "อายุ",
    reporttitle: "สถานะภูมิคุ้มกัน",
    roadmap: "แผนการฉีดวัคซีน",
  },
  labelAddAppointment: {
    child: "ชื่อเด็ก",
    vaccineList: "รายการวัคซีน",
    date: "วันที่",
    time: "เวลา",
    addAppointment: "เพิ่มการนัดหมาย",
    note: "ข้อมูลเพิ่มเติม",
  },
  historyPage: {
    title: "ประวัติการฉีดวัคซีน",
    received: "ได้รับวัคซีน",
    hospital: "โรงพยาบาล/คลินิค",
    date: "วันที่",
    nohistory: "ไม่มีประวัติการได้รับวัคซีน",
  },
  button: {
    cancel: "ยกเลิก",
    update: "อัปเดต",
    add: "เพิ่ม",
    save: "บันทึก",
  },
};
