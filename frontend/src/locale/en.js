const vaccines = require("./EN/vaccines");
const diseases = require("./EN/diseases");
export default {
  vaccines,
  diseases,
  home: "Home",
  vaccine: "Vaccine",
  vaccineList: "Vaccine List",
  family: "Family",
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
  sorting: "Sorting",
  others: "Others",
  networkMode: {
    offline: "You are Offline now",
    online: "You are Online now",
  },
  vaccineDetailsPage: {
    title: "Vaccine Description",
    appointmentBtn: "Create an appointment",
    recordBtn: "Record Vaccine",
    description: "Short Description",
    suggestedAge: "Suggested Age",
    who: "Who Should Be Vaccinated ",
    warning: "Warning/Who should not use",
    vaccineReference:
      "Referrence: Centers for Disease Control and Prevention (www.cdc.gov)",
  },
  vaccinePackagerPage: {
    title: "Vaccine Packager",
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
  },
  label: {
    name: "Fullname",
    birthDate: "BirthDate",
    disease: "Congenital disease",
    vaccine: "Received vaccine",
  },
  labelAddAppointment: {
    child: "child name",
    vaccineList: "list vaccines",
    date: "date",
    time: "time",
    addAppointment: "add appointment",
    note: "ข้อมูลเพิ่มเติม",
  },
  button: {
    add: "add",
    save: "save",
  },

  // FOR MOCK UI : Example of vaccine Packager
  vaccinePackages: [
    {
      packageId: "pk0001",
      packageTitle: "Suggested Vaccine For Australia Traveler",
      packageSubTitle: "",
      vaccineInPackage: [
        {
          vaccineId: "vc0008",
          vaccineMedicalName: "Measles Mumps and Rubella Vaccine: MMR",
          vaccineNameNormal: "Measles Mumps and Rubella",
          shortDes:
            "-2-dose series at 12–15 months, 4–6 years\n-Dose 2 may be administered as early as 4 weeks after dose 1.\n-Unvaccinated children and adolescents: 2-dose series at least 4 weeks apart\n-The maximum age for use of MMRV is 12 years.",
        },
        {
          vaccineId: "vc0011",
          vaccineMedicalName: "Hepatitis A",
          vaccineNameNormal: "Hepatitis A",
          shortDes:
            "-2-dose series (minimum interval: 6 months) beginning at age 12 months\n-Unvaccinated persons through 18 years should complete a 2-dose series (minimum interval: 6 months).\n-Persons who previously received 1 dose at age 12 months or older should receive dose 2 at least 6 months after dose 1.\n-Adolescents 18 years and older may receive the combined HepA and HepB vaccine, Twinrix®, as a 3-dose series (0, 1, and 6 months) or 4-dose series (0, 7, and 21–30 days, followed by a dose at 12 months)",
        },
      ],
    },

    {
      packageId: "pk0002",
      packageTitle: "Additional Vaccine For 2020",
      packageSubTitle: "",
      vaccineInPackage: [
        {
          vaccineId: "vc0018",
          vaccineMedicalName: "Dengue vaccine",
          vaccineNameNormal: "Dengue",
          shortDes:
            "-Dengue is caused by any one of four related viruses transmitted by mosquitoes. Dengue virus is a leading cause of illness and death in the tropics and subtropics. The Dengue Vaccine Work Group reviews data on dengue vaccines and develops policy options for ACIP’s consideration.\n-Use of dengue vaccines in groups at risk for dengue, including people living in dengue endemic areas and for people traveling from non-endemic to endemic areas.",
        },
        {
          vaccineId: "vc0019",
          vaccineMedicalName: "Meningococcal conjugate or MenACWY vaccines",
          vaccineNameNormal: "Meningococcal Conjugated",
          shortDes:
            "All 11 to 12 year olds should get a MenACWY vaccine, with a booster dose at 16 years old. Teens may also get a MenB vaccine, preferably at 16 through 18 years old.\nWhile any teen may choose to get a MenB vaccine, certain preteens and teens should get it if they:\n-Have a rare type of immune disorder called complement component deficiency\n-Are taking a type of medicine called a complement inhibitor (for example, Soliris® or Ultomiris®)\n-Have a damaged spleen or their spleen has been removed\n-Are part of a population identified to be at increased risk because of a serogroup B meningococcal disease outbreak\na MenACWY vaccine for children who are between 2 months and 10 years old if they:\n-Have a rare type of immune disorder called complement component deficiency\n-Are taking a type of medicine called a complement inhibitor (for example, Soliris® or Ultomiris®)\n-Have a damaged spleen or their spleen has been removed\n-Have HIV\n-Are traveling to or residing in countries in which the disease is common\n-Are part of a population identified to be at increased risk because of a serogroup A, C, W, or Y meningococcal disease outbreak",
        },
      ],
    },
  ],
};
