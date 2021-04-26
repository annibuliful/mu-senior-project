const vaccines = require("./EN/vaccines");
const diseases = require("./EN/diseases");
const packagers = require("./EN/packager");
const newsData = require("./EN/news");

export default {
  newsData,
  vaccines,
  diseases,
  packagers,
  menu: "Menu",
  addMemberWarning: "Please add family member before making an appointment",
  addMemberWarning2: "Click here to go to the family management page",
  year: "Year(s)",
  month: "Month(s)",
  notify: "Notifications",
  noNotiNow: "No Upcoming Notifications",
  developBy: "This Application Develop By",
  importSuccess: "Restore Data Successful",
  exportSuccess: "Export Data Successful",
  home: "Appointment",
  vaccine: "Vaccine",
  learnVaccine: "Learn Vaccines",
  news: "News",
  modalSuggest: "Tips",
  loginBeforeUse: "Please login before using this feature",
  vaccineList: "Vaccine List",
  loginAs: "You are logged in as",
  family: "Family",
  aboutUs: "About Us",
  login: "Login",
  backup: "Backup",
  register: "Register",
  username: "Username",
  password: "Password",
  repeatPassword: "Repeat Password",
  usernameRequire: "Username is required",
  passwordRequire: "Password is required",
  passwordMismatch: "Repeat password is mismatch",
  passwordAtLeast: "Password must have at least",
  packager: "Packages",
  setting: "Settings",
  event: "events",
  welcome: "Welcome Dear,",
  recentActivity: "Recent Activity",
  language: "Language",
  accountSetting: "Account Setting",
  appointmentSuggestion: "Appointment Suggestion",
  category: "Categories",
  children: "Children",
  adult: "Adult",
  ordering: "Order by",
  others: "Others",
  noEvent: "There is no any event",
  receivedVac: "Received Date",
  welcomeLanguage: "Welcome to Vaccinet",
  welcomeContinue: "Continue",
  importDB: "Import data from cloud",
  receievedQA: "Received",
  notReceievedQA: "Never Received",
  loadmore: "Load More",
  nameRequired: "Please enter the name",
  deleteRecCon: "Do you want to delete this record?",
  deleteRecSuc: "Delete Vaccination Record Successful",
  bthRequired: "Please select birth date correctly",
  suggestDate: "Suggested date",

  privacy: "Privacy Policy",
  privacyDetail: `
  Vaccinet is an application developed as an electronic vaccine booklet. The information saved in this application will not be transfer from the user's device.
  Except users who choose to use a backup service from the application to back up and recover user data in this application.
  
  Data Back Up
	Before using our back up service users have to login with their username and password. To back up the data, their need to press 
Back Up Button (Encypted Data), and they have to press import button to restore the data. 

Back Up Duration 
	The backed up data will last forever until users stop using the application

Acceptance
	After users registered for using our back up service, it will be claimed that they accept to transfer their data to our application
database. Once they restored the data, it will be claimed that they accept to transfer their data from our application database to
their device.`,
  aboutInfo: {
    tarName: "Mr. Jarupong Pajakgo",
    benzName: "Mr. Dechapon Tongmak",
    lifName: "Mr. Waranon Utsmanee"
  },
  pin: {
    label: "Enter PIN"
  },
  networkMode: {
    offline: "You are Offline now",
    online: "You are Online now"
  },
  covidStat: {
    title: "Covid-19 Stats in Thailand.",
    cases: "Cases",
    recovered: "Recovered",
    hospitalized: "Hospitalized",
    death: "Death"
  },
  vaccineDetailsPage: {
    back: "Go back",
    title: "Vaccine Description",
    appointmentBtn: "Create an appointment",
    recordBtn: "Record Vaccine",
    description: "Short Description",
    suggestedAge: "Suggested Age",
    who: "Who Should Be Vaccinated ",
    warning: "Warning/Who should not use",
    vaccineReference:
      "Referrence: Vaccine and immunization textbook 2019, Department of Disease Control, Ministry of Public Health"
  },
  vaccinePackagerPage: {
    title: "Vaccine Packages"
  },
  recordVaccinePage: {
    title: "Record Vaccine",
    vaccineName: "Vaccine Name",
    batchNO: "Batch Number",
    receivingDate: "Receiving Date",
    hostpitalName: "Hospital Name",
    doctorInfo: "Doctor Name",
    freetext: "Note Messages",
    recordTo: "Record to",
    uploadImage: "Upload an evidence (Incluing The Batch Number)",
    submitBtn: "Submit",
    cancelBtn: "cancel",
    packageMember: "Suggested Vaccine for",
    doseNumber: "Dose Number",
    sideEffect: "Side Effect",
    sideEffectImg: "Side Effect Image",
    evidenceImg: "Vaccination Evidence(Including Batch Number)",
    uploadFile: "Upload Image"
  },
  label: {
    regisSuccess: "Register successful",
    regisNotSuccess: "Register was not successful",
    doseTimes: "Dose",
    useNewestVersion: "You already use the lastest version",
    updateVersion: "Do you want to update the application now?",
    updateSuccess: "Update application successful",
    updateRecord: "Update record information successful",
    version: "Update",
    ref: "reference",
    pin: "PIN",
    username: "username",
    password: "password",
    name: "Name",
    birthDate: "BirthDate",
    disease: "Congenital disease",
    vaccine: "Received vaccine",
    noneCongenitalDisease: "No Congenital Disease",
    updateChildInfoTitle: "Update Family's Member Infomation",
    age: "Age",
    reporttitle: "Immunity Status",
    roadmap: "Vaccine Roadmap",
    history: "History",
    search: "Search",
    sortBy: "Sorted by",
    filterBy: "Filtered by",
    unspecified: "Unspecified",
    overdue: "Overdue",
    vaccinated: "Vaccinated",
    vaccinating: "Vaccinating",
    all: "All vaccines",
    vaccineName: "Vaccine name",
    diseaseName: "Disease",
    date: "Date",
    placeHolderSearch: "Enter Search Query",
    confirmLogout: "Do you want to logout?",
    logoutSuccess: "Logout successful",
    saveInfo: "Saved Your Information",
    success: "successful",
    confirmEdit: "Are you sure you want to update your information?",
    continue: "Continue",
    yes: "Yes",
    no: "No",
    notifyToEdit: "Edit your information before using the application",
    suggestedPlan: "Add vaccine plan",
    deleteFamily: "Delete",
    deleteSuccess: "Delete Successful",
    confirmDelete: "Are you sure you want to delete this profile?",
    cannotDelete: "Cannot delete the main profile"
  },
  labelAddAppointment: {
    child: "Child name",
    vaccineList: "Vaccine name",
    date: "Date",
    time: "Time (For notification)",
    addAppointment: "Add appointment",
    note: "Additional note",
    nextAppointMent: "Next Appointment",
    vcName: "Vaccine name",
    complete: "Complete",
    day: "Days"
  },
  labelError: {
    required: "{} is required",
    mistmatch: "{} is mismatch",
    atLeast: "{} must have at least ",
    duplicate: " duplicate {}",
    notFound: "{} not found",
    incorrect: "{} incorrect"
  },
  historyPage: {
    title: "History",
    received: "Received",
    hospital: "Hospital/Clinic",
    date: "Date",
    nohistory: "doesn't take any vaccine before"
  },
  button: {
    cancel: "Cancel",
    update: "Update",
    add: "Add",
    save: "Save",
    logout: "Logout",
    search: "Search",
    delete: "Delete",
    next: "Next",
    loading: "Loading Information..."
  },
  camera: {
    takePhoto: "Take a Photo",
    reset: "reset"
  }
};
