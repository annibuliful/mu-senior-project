const vaccines = require("./TH/vaccines");
const diseases = require("./TH/diseases");
const packagers = require("./TH/packager");
const newsData = require("./TH/news");
export default {
  newsData,
  vaccines,
  diseases,
  packagers,
  menu: "เมนู",
  year: "ปี",
  month: "เดือน",
  addMemberWarning: "กรุณาเพิ่มสมาชิกในครอบครัวก่อนเพิ่มการนัดหมาย",
  addMemberWarning2: "คลิกที่นี่เพื่อไปหน้าจัดการครอบครัวได้เลยครับ",
  home: "การนัดหมาย",
  vaccine: "วัคซีน",
  learnVaccine: "เรียนรู้วัคซีน",
  loginBeforeUse: "กรุณาเข้าสู่ระบบก่อนใช้งาน",
  loginAs: "คุณกำลังเข้าสู่ระบบโดยบัญชี",
  news: "ข่าวสาร",
  modalSuggest: "ข้อแนะนำ",
  vaccineList: "รายการวัคซีน",
  login: "เข้าสู่ระบบ",
  backup: "สำรองข้อมูล",
  register: "สมัครสมาชิก",
  username: "ชื่อผู้ใช้",
  importDB: "นำเข้าข้อมูลจากคลาวด์",
  password: "รหัสผ่าน",
  repeatPassword: "ยินยันรหัสผ่าน",
  usernameRequire: "กรุณากรอกชื่อผู้ใช้",
  passwordRequire: "กรุณากรอกรหัสผ่าน",
  passwordMismatch: "รหัสผ่านไม่ตรงกัน",
  passwordAtLeast: "รหัสผ่านต้องมีตัวอักษรมากกว่า",
  family: "ครอบครัว",
  aboutUs: "เกี่ยวกับเรา",
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
  noEvent: "ไม่มีการนัดหมายในเร็วๆนี้",
  receivedVac: "ได้รับวัคซีนเมื่อ",
  welcomeLanguage: "ยินดีต้อนรับสู่ Vaccinet",
  welcomeContinue: "ไปต่อ",
  loadmore: "เพิ่มเติม",
  nameRequired: "กรุณากรอกชื่อ",
  bthRequired: "กรุณาเลือกวันเกิดให้ถูกต้อง",
  deleteRecCon: "คุณต้องการลบบันทึกการฉีดวันซีนครั้งนี้ใช่ไหม?",
  deleteRecSuc: "ลบบันทึกการฉีดวัคซีนสำเร็จ",
  receievedQA: "เคยฉีด",
  notReceievedQA: "ไม่เคยฉีด",
  suggestDate: "วันที่แนะนำให้ฉีด",
  privacy: "นโยบายความเป็นส่วนตัว",
  privacyDetail: `          แอปพลิเคชั่น Vaccinet
  เป็นแอปพลิเคชั่นที่ถูกพัฒนามาเพื่อเป็นสมุดบันทึกวัคซีนอิเล็กทรอนิกส์
  โดยข้อมูลที่ถูกบันทึกในแอปพลิเคชั่นนี้จะไม่มีการนำออกจากอุปกรณ์ใช้งานของผู้ใช้
  ยกเว้นผู้ใช้ที่เลือกใช้งาน backup เพื่อสำรองข้อมูล และ
  กู้คืนข้อมูลของผู้ใช้งานในแอปพลิเคชั่นนี้ การ backup สำรองข้อมูล
  เมื่อผู้ใช้งานได้ทำการลงทะเบียน ผู้ใช้งานจะสามารถใช้งานฟังชั่น backup
  ของแอปพลิเคชั่นได้ โดยผู้ที่มีสิทธิ์จะต้อง login ด้วยชื่อผู้ใช้งาน
  username และ รหัสผ่าน password ที่ผู้ใช้งานได้ทำการสมัครไว้
  โดยเมื่อกดปุ่ม backup จะเป็นการสำรองข้อมูลของผู้ใช้งาน
  เป็นการเก็บข้อมูลที่เข้ารหัสแล้ว และกู้คืนข้อมูลของผู้ใช้งานโดยการกด
  import
  โดยทางผู้พัฒนาจะไม่มีการนำข้อมูลของผู้ใช้งานไปใช้โดยพละการโดยเด็ดขาด
  ระยะเวลาในการสำรองข้อมูล ข้อมูลที่ถูกสำรองไว้
  จะถูกเก็บไว้ตราบเท่าที่ผู้ใช้งานยังใช้งานแอปพลิเคชั่นอยู่ การยินยอม
  ผู้ใช้งานที่ลงทะเบียนและเลือกใช้งานบริการ backup
  เมื่อดำการการสำรองข้อมูลในแอปพลิเคชั่นจะถือเป็นการยินยอมของผู้ใช้งานที่จะส่งข้อมูลออกมาสำรองในฐานข้อมูลของแอปพลิเคชั่น
  และเมื่อดำเนินการกู้คืนข้อมูล
  จะถือเป็นการยินยอมที่จะให้แอปพลิเคชั่นส่งข้อมูลจากฐานข้อมูลไปยังอุปกรณ์ใช้งานของผู้ใช้งาน`,
  aboutInfo: {
    tarName: "นาย จารุพงศ์ ปะจักโก",
    benzName: "นาย เดชาพล ทองมาก",
    lifName: "นาย วรานนท์ อุสมาณีย์"
  },
  networkMode: {
    offline: "คุณออฟไลน์อยู่",
    online: "คุณออนไลน์อยู่"
  },
  covidStat: {
    title: "รายงานสถานการณ์ โควิด-19 ในประเทศไทย",
    cases: "ติดเชื้อสะสม",
    recovered: "หายแล้ว",
    hospitalized: "รักษาอยู่ใน รพ.",
    death: "เสียชีวิต"
  },
  pin: {
    label: "โปรดกรอก PIN"
  },
  vaccineDetailsPage: {
    back: "ย้อนกลับ",
    title: "รายละเอียดวัคซีน",
    suggestedAge: "อายุที่ควรได้รับวัคซีน",
    who: "บุคคลที่ควรได้รับวัคซีน และอายุที่ควรรับวัคซีน",
    appointmentBtn: "กำหนดวันฉีดวัคซีน",
    recordBtn: "บันทึกวัคซีน",
    description: "รายละเอียดโดยย่อ",
    warning: "คำเตือน/บุคคลที่ไม่ควรฉีด",
    vaccineReference:
      "ที่มาข้อมูล: ตำราวัคซีนและการสร้างเสริมภูมิคุ้มกันโรค ปี 2562 กรมควบคุมโรค กระทรวงสาธารณะสุข"
  },
  vaccinePackagerPage: {
    title: "แพ็กเกจวัคซีนเสริม"
  },
  labelError: {
    required: "โปรดกรอก{}",
    mistmatch: "{}ไม่ตรงกัน",
    atLeast: "{}ต้องมีตัวอักษรมากกว่า",
    duplicate: "{}ซ้ำ",
    notFound: "ไม่พบ{}นี้",
    incorrect: "{}ไม่ถูกต้อง"
  },
  recordVaccinePage: {
    title: "จดบันทึกวัคซีน",
    vaccineName: "ชื่อวัคซีน",
    batchNO: "เลขล็อตการผลิต",
    receivingDate: "วันที่ได้รับวัคซีน",
    hostpitalName: "ชื่อโรงพยาบาลที่รับวัคซีน",
    doctorInfo: "ชื่อคุณหมอ",
    freetext: "บันทึกข้อความ/รายละเอียดเพิ่มเติม",
    recordTo: "บันทึกการฉีดให้กับ",
    uploadImage: "อัพโหลดรูปภาพหลักฐานการฉีดวัคซีน (เลขล๊อตวัคซีน)",
    submitBtn: "บันทึกข้อมูล",
    cancelBtn: "ยกเลิก",
    packageMember: "แนะนำวัคซีนสำหรับ",
    doseNumber: "เข็มที่",
    sideEffect: "ผลข้างเคียง",
    sideEffectImg: "รูปภาพผลข้างเคียง",
    evidenceImg: "รูปภาพหลักฐานการฉีดวัคซีน(เลขล๊อตของวัคซีน)",
    uploadFile: "อัปโหลดภาพ"
  },
  label: {
    doseTimes: "โด๊สที่",
    useNewestVersion: "คุณกำลังใช้เวอร์ชันล่าสุด",
    updateVersion: "ต้องการอัปเดตแอปพลิเคชันหรือไม่",
    updateSuccess: "อัปเดตแอปพลิเคชันสำเร็จ",
    updateRecord: "อัปเดตข้อมูลการฉีดวัคซีนสำเร็จ",
    version: "อัปเดต",
    ref: "ที่มา",
    pin: "PIN",
    username: "ชื่อผู้ใช้งาน",
    password: "รหัสผ่าน",
    name: "ชื่อ",
    birthDate: "วันเกิด",
    disease: "โรคประจำตัว",
    vaccine: "วัคซีนที่เคยได้รับ",
    noneCongenitalDisease: "ไม่มีโรคประจำตัว",
    updateChildInfoTitle: "อัปเดตข้อมูลสมาชิกในครอบครัว",
    age: "อายุ",
    reporttitle: "สถานะภูมิคุ้มกัน",
    roadmap: "แผนการฉีดวัคซีน",
    history: "ประวัติการฉีด",
    search: "ค้นหา",
    sortBy: "เรียงข้อมูล",
    filterBy: "ตัวกรอง",
    unspecified: "ไม่ระบุสถานะ",
    overdue: "เกินกำหนดฉีด",
    vaccinated: "ฉีดแล้ว",
    vaccinating: "กำลังจะฉีด",
    all: "ทั้งหมด",
    vaccineName: "ชื่อวัคซีน",
    diseaseName: "ชื่อโรค",
    date: "วันที่",
    placeHolderSearch: "กรอกคำที่ต้องการค้นหา",
    confirmLogout: "คุณต้องการออกจากระบบใช่ไหม",
    logoutSuccess: "ออกจากระบบสำเร็จ",
    saveInfo: "บันทึกข้อมูลของคุณสำเร็จ",
    success: "สำเร็จ",
    confirmEdit: "คุณต้องการบันทึกการเปลี่ยนแปลงใช่ไหม",
    continue: "ไปต่อ",
    yes: "ใช่",
    no: "ไม่ใช่",
    notifyToEdit: "กรุณาแก้ไขข้อมูลส่วนตัวก่อนใช้งานแอพพลิเคชั่น",
    suggestedPlan: "สร้างแผนการฉีดวัคซีน",
    deleteFamily: "ลบ",
    deleteSuccess: "ลบโปรไฟล์สำเร็จ",
    confirmDelete: "คุณต้องการลบโปรไฟล์นี้ใช่ไหม",
    cannotDelete: "ไม่สามารถลบโปรไฟล์หลักได้"
  },
  labelAddAppointment: {
    child: "ชื่อเด็ก",
    vaccineList: "ชื่อวัคซีน",
    date: "วันที่",
    time: "เวลา (สำหรับการแจ้งเตือน)",
    addAppointment: "เพิ่มการนัดหมาย",
    note: "ข้อมูลเพิ่มเติม",
    nextAppointMent: "การนัดหมายถัดไป",
    vcName: "ชื่อวัคซีน",
    complete: "ได้รับวัคซีนชนิดนี้ครบตามแผนแล้ว",
    day: "วัน"
  },
  historyPage: {
    title: "ประวัติการฉีดวัคซีน",
    received: "ได้รับวัคซีน",
    hospital: "โรงพยาบาล/คลินิค",
    date: "วันที่",
    nohistory: "ไม่มีประวัติการได้รับวัคซีน"
  },
  button: {
    cancel: "ยกเลิก",
    update: "อัปเดต",
    add: "เพิ่ม",
    save: "บันทึก",
    logout: "ออกจากระบบ",
    search: "ค้นหา",
    delete: "ลบ",
    next: "ไปต่อ"
  },
  camera: {
    takePhoto: "ถ่ายรูป",
    reset: "ถ่ายใหม่"
  }
};
