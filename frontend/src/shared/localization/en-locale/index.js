import diseases from "./diseases";
import newsData from "./newsData";
import vaccines from "./vaccines";
import packagers from "./packagers";

export default {
  newsData,
  vaccines,
  diseases,
  packagers,
  home: "Home",
  vaccine: "Vaccine",
  news: "News",
  vaccineList: "Vaccine List",
  family: "Family",
  login: "Login",
  register: "Register",
  username: "Username",
  password: "Password",
  repeatPassword: "Repeat Password",
  usernameRequire: "Username is required",
  passwordRequire: "Password is required",
  passwordMismatch: "Repeat password is mismatch",
  passwordAtLeast: "Password must have at least",
  packager: "Packager",
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
  welcomeLanguage: "Welcome to Vaccinet",
  welcomeContinue: "Continue",
  receievedQA: "Received",
  notReceievedQA: "Never Received",
  loadmore: "Load More",
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
    title: "Vaccine Packager"
  },
  recordVaccinePage: {
    title: "Record Vaccine",
    vaccineName: "Vaccine Name",
    batchNO: "Batch Number",
    receivingDate: "Receiving Date",
    hostpitalName: "Hospital Name",
    doctorInfo: "Medical Staff Id(For Medical Staff)",
    freetext: "Note Messages",
    recordTo: "Record to",
    uploadImage: "Upload an evidence (Incluing The Batch Number)",
    submitBtn: "Submit",
    cancelBtn: "cancel",
    packageMember: "Suggested Vaccine for",
    doseNumber: "Dose Number"
  },
  label: {
    gender: "Gender",
    doseTimes: "Dose",
    useNewestVersion: "You already use the lastest version",
    updateVersion: "Do you want to update the application now?",
    updateSuccess: "Update application successful",
    version: "Version",
    ref: "reference",
    pin: "PIN",
    username: "username",
    password: "password",
    name: "Fullname",
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
    child: "child name",
    vaccineList: "list vaccines",
    date: "date",
    time: "time",
    addAppointment: "add appointment",
    note: "additional note",
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
    delete: "Delete"
  },
  camera: {
    takePhoto: "Take a Photo",
    reset: "reset"
  }
};
