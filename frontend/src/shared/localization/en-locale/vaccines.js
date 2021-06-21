export default [
  {
    vaccineId: "vac001",
    category: "children",
    vaccineMedicalName: "BCG",
    vaccineNameNormal: "Bacillus Calmette Guerin vaccine",
    protectDisease: ["disease001"],
    repeat: null,
    injectionPeriodTime: [0],
    doseNumber: 1,
    replaceableWith: null,
    shortDes:
      "The immunity will fully grow inside the body after 2 months of receiving the vaccine. BCG Vaccine has a good effect on defensing an early state of tuberculosis especially on TB meningitis and miliary TB with 52-100 percentage of success rate.",
    displayedSuggestAge: "<ul><li>1st Dose: Shortly after birth</li></ul>",
    warning: "<ul><li>Immunosuppression</li><li>Pregnancy</li></ul>"
  },
  {
    vaccineId: "vac002",
    category: "all",
    vaccineMedicalName: "HBV",
    vaccineNameNormal: "Hepatitis B Vaccine",
    protectDisease: ["disease002"],
    repeat: null,
    injectionPeriodTime: [0, 30, 150],
    doseNumber: 3,
    replaceableWith: null,
    shortDes:
      "Hepatitis B will be suppressed after receiving the second dose of this vaccine. For the third dose, it only increases the effect of immunity. It has 90-95 percentage of success rate. For Thailand, it is recommended to get this vaccine up to four doses.",
    displayedSuggestAge:
      "<ul><li>1st Dose: Shortly after birth within 24 hours</li><li>2nd Dose: 2 months </li><li>3rd Dose: 4 months</li><li>4th Dose: 6 months</li></ul><ul><li>For Adults</li><li>1st Dose: Can be recevied the first dose from the age of 19</li><li>2nd Dose: 1 month after the first dose</li><li>3rd Dose: 6 months after the second dose</li></ul>",
    warning: "<ul><li>Immunosuppression</li><li>Pregnancy</li></ul>"
  },
  {
    vaccineId: "vac003",
    category: "children",
    vaccineMedicalName: "DTwP",
    vaccineNameNormal: "Diphtheria - Tetanus - whole cell Pertussis",
    protectDisease: ["disease004", "disease005", "disease006"],
    repeat: null,
    injectionPeriodTime: [60, 60, 60, 270, 1095],
    doseNumber: 5,
    replaceableWith: ["vac004"],
    shortDes:
      "The immunity will best occur when injecting into muscle. It will first occur in 2 weeks after receiving the vaccine. In many studies found that the effectiveness between DTwp and DTap are not different with 75-90%. ",
    displayedSuggestAge:
      "<ul><li>1st Dose: 2 months</li><li>2nd Dose: 4 months</li><li>3rd Dose: 6 months </li><li>4th Dose: 15-18 months</li><li>5th Dose: 4-6 years</li></ul>",
    warning:
      "<ul><li>Encephalopathy within 7 days after receving the previous vaccination has to stop receiving Pertussis and give  Tdap instead</li></ul>"
  },
  {
    vaccineId: "vac004",
    category: "children",
    vaccineMedicalName: "DTaP",
    vaccineNameNormal:
      "Diphtheria -Tetanus - acellular Pertussis Vaccine combined",
    protectDisease: ["disease004", "disease005", "disease006"],
    repeat: null,
    injectionPeriodTime: [60, 60, 60, 270, 1095],
    doseNumber: 5,
    replaceableWith: ["vac003"],
    shortDes:
      "The immunity will best occur when injecting into muscle. It will first occur in 2 weeks after receiving the vaccine. In many studies found that the effectiveness between DTwp and DTap are not different with 75-90%. ",
    displayedSuggestAge:
      "<ul><li>1st Dose: 2 months</li><li>2nd Dose: 4 months</li><li>3rd Dose: 6 months </li><li>4th Dose: 15-18 months</li><li>5th Dose: 4-6 years</li></ul>",
    warning:
      "<ul><li>Encephalopathy within 7 days after receving the previous vaccination has to stop receiving Pertussis and give DT instead</li></ul>"
  },
  {
    vaccineId: "vac005",
    category: "adult",
    vaccineMedicalName: "Td",
    vaccineNameNormal: "Tetanus - Diphtheria toxoid Vaccine combined",
    protectDisease: ["disease004", "disease005"],
    repeat: null,
    injectionPeriodTime: [4380],
    doseNumber: 1,
    replaceableWith: null,
    shortDes:
      "The immunity will best occur when injecting into muscle. It will first occur in 2 weeks after receiving the vaccine. In many studies found that the effectiveness between DTwp and DTap are not different with 75-90%. ",
    displayedSuggestAge:
      "<ul><li>For Prenancy</li><li>1st Dose: on the third quarter of the year</li><li>For Normal Person</li><li>1 dose every 10 years</li></ul>",
    warning: "<ul><li>Immunosuppression</li><li>Pregnancy</li></ul>"
  },
  {
    vaccineId: "vac006",
    category: "adult",
    vaccineMedicalName: "Tdap",
    vaccineNameNormal:
      "Tetanus - reduced diphtheria toxoid and acellular pertussis",
    protectDisease: ["disease004", "disease005", "disease006"],
    repeat: null,
    injectionPeriodTime: [1460],
    doseNumber: 1,
    replaceableWith: null,
    shortDes:
      "The immunity will best occur when injecting into muscle. It will first occur in 2 weeks after receiving the vaccine. In many studies found that the effectiveness between DTwp and DTap are not different with 75-90%. ",
    displayedSuggestAge:
      "<ul><li>For Prenancy</li><li>1st Dose: on the third quarter of the year</li><li>For Normal Person</li><li>1 dose every 10 years</li></ul>",
    warning: "<ul><li>Immunosuppression</li><li>Pregnancy</li></ul>"
  },
  {
    vaccineId: "vac007",
    category: "children",
    vaccineMedicalName: "Hib",
    vaccineNameNormal: "Haemophilus influenzae type b (Hib) vaccine",
    protectDisease: ["disease003"],
    repeat: null,
    injectionPeriodTime: [60, 60, 60, 360],
    doseNumber: 4,
    replaceableWith: null,
    shortDes:
      "This vaccine has an effective preventation of Haemophilus influenzae type b (Hib). In the country that every children has been received this vaccine found that it can minimize the incidence of this disease to 95-99 percentage.",
    displayedSuggestAge:
      "<ul><li>1st Dose: 2 months</li><li>2nd Dose 4 months</li><li>3rd Dose: 6 months</li><li>4th Dose: 12-15 months</li></ul>",
    warning: "<ul><li>Immunosuppression </li><li>Pregnancy</li></ul>"
  },
  {
    vaccineId: "vac008",
    category: "children",
    vaccineMedicalName: "OPV",
    vaccineNameNormal: "Poliomyelitis vaccine",
    protectDisease: ["disease007"],
    repeat: null,
    injectionPeriodTime: [60, 60, 60, 360, 1095],
    doseNumber: 5,
    replaceableWith: ["vac009"],
    shortDes:
      "Studies in American found that 90% of a person who receives this vaccine more than 2 doses will have immunity for 3 serotypes of Poliomyelitis. After receiving more than 3 doses, a person will grow immunity to 97-100%",
    displayedSuggestAge:
      "<ul><li>1st Dose 2 months</li><li>2nd Dose: 4 months</li><li>3rd Dose: 6 months</li><li>4th Dose: 1 year 6 months</li><li>5th Dose: 4 years</li></ul>",
    warning:
      "<ul><li>People with immunodeficiency will need to receive IPV instead </li><li>Pregnancy</li></ul>"
  },
  {
    vaccineId: "vac009",
    category: "children",
    vaccineMedicalName: "IPV",
    vaccineNameNormal: "Inactivated Polio Vaccine",
    protectDisease: ["disease007"],
    repeat: null,
    injectionPeriodTime: [60, 60, 60, 360, 1095],
    doseNumber: 5,
    replaceableWith: ["vac008"],
    shortDes:
      "After receiving more than 2 doses, 90% of a who receives this vaccine person will grow immunity for 3 serotypes of Poliomyelitis, and it will increase to 99% after receiving 3 doses. The immunity will stay for many years after receiving the 4th does.",
    displayedSuggestAge:
      "<ul><li>1st Dose: 2 month</li><li>2nd Dose: 4 month</li><li>3rd Dose: 6 month</li><li>4th Dose: 1 year 6 month</li><li>5th Dose: 4 year</li></ul>",
    warning:
      "<ul><li> People who are severely allergic to neomycin, streptomycin, and polymyxin </li><li>Pregnancy</li></ul>"
  },
  {
    vaccineId: "vac010",
    category: "all",
    vaccineMedicalName: "MMR",
    vaccineNameNormal: "Measles- Mumps - Rubella Vaccine combined",
    protectDisease: ["disease008", "disease009", "disease010"],
    repeat: null,
    injectionPeriodTime: [270, 1190],
    doseNumber: 2,
    replaceableWith: ["vac011"],
    shortDes:
      "Studies in American found that the immunity for Measles-Mumps-Rubella will grow for 95% of the 12 months children who receive this vaccine, and 98% for 15 months children.",
    displayedSuggestAge:
      "<ul><li>1st Dose: 9-12 months</li><li>2nd Dose: 18 months</li></ul><ul><li>For Adults</li><li>1st Dose: Can be recevied the first dose from the age of 19</li><li>2nd Dose: 28 days after the first dose</li></ul>",
    warning:
      "<ul><li>People with immunodeficiency</li><li>Pregnancy</li><li> People who are severely allergic to neomycin and gelatin</li></ul>"
  },
  {
    vaccineId: "vac011",
    category: "all",
    vaccineMedicalName: "MMRV",
    vaccineNameNormal: "Measles- Mumps- Rubella - Varicella Vaccine combined",
    protectDisease: ["disease008", "disease009", "disease010", "disease014"],
    repeat: null,
    injectionPeriodTime: [365, 365],
    doseNumber: 1,
    replaceableWith: null,
    shortDes:
      "Studies in American found that the immunity for Measles-Mumps-Rubella will grow for 95% of the 12 months children who receive this vaccine, and 98% for 15 months children.",
    displayedSuggestAge:
      "<ul><li>1st Dose: 9-12 months</li><li>2nd Dose: 4-6 years</li></ul><ul><li>For Adults</li><li>1st Dose: Can be recevied the first dose from the age of 19</li><li>2nd Dose: 28 days after the first dose</li></ul>",
    warning:
      "<ul><li>People with immunodeficiency</li><li>Pregnancy</li><li> People who are severely allergic to neomycin and gelatin</li><li>if there is seizures records, MMRV is not recommended</li></ul>"
  },
  {
    vaccineId: "vac012",
    category: "children",
    vaccineMedicalName: "Inactivate JE",
    vaccineNameNormal: "Inactivate Japanese Encephalitis Vaccine",
    protectDisease: ["disease011"],
    repeat: null,
    injectionPeriodTime: [180, 30, 365],
    doseNumber: 3,
    replaceableWith: null,
    shortDes:
      "After receiving 2nd dose for 1 month, JEVACTM will grow an immunity for this disease to 89-90%.",
    displayedSuggestAge:
      "<ul><li>Inacitvated</li><li>1st Dose: 12-18 months</li><li>2nd Dose: 13-19 months</li><li>3rd Dose: 24-30 months</li>",
    warning: "<ul><li>Immunosuppression</li><li>Pregnancy</li></ul>"
  },
  {
    vaccineId: "vac013",
    category: "children",
    vaccineMedicalName: "Live-attenuated JE",
    vaccineNameNormal: "Live-attenuated Japanese Encephalitis Vaccine",
    protectDisease: ["disease011"],
    repeat: null,
    injectionPeriodTime: [270, 90],
    doseNumber: 2,
    replaceableWith: ["vac014"],
    shortDes:
      "After receiving 1st dose of CD.JEVAXTM, The immunity will occur with percentage of 89.3, and the 2nd dose will increase the immunity to 100%.After receiving 1st dose of IMOJEVTM, both adults and children will grow an immunity to 99% and 96% respectively. ",
    displayedSuggestAge:
      "<ul><li>1st Dose: 1 year</li><li>2nd Dose: 2-2 years 6 months</li></ul>",
    warning: "<ul><li>Immunosuppression</li><li>Pregnancy</li></ul>"
  },
  {
    vaccineId: "vac014",
    category: "all",
    vaccineMedicalName: "Influenza",
    vaccineNameNormal: "Influenza vaccine",
    protectDisease: ["disease012"],
    repeat: null,
    injectionPeriodTime: [180, "annually"],
    doseNumber: 1,
    replaceableWith: null,
    shortDes:
      "Inactivated influenza vaccine will grow an immunity in 7-14 days, and live influenza vaccine has 70-95% of effectiveness depends on how much it match the disease.",
    displayedSuggestAge:
      "<ul><li>1st Dose: 6-15 month</li><li>Next Dose: Annually</li></ul><ul><li>For children aged 6 months - 9 years</li><li>1st Dose: Can be recevied the first dose from the age of 6 months</li><li>2nd Dose: 1 month after the first dose</li><li>Next Dose: 1 dose anually</li></ul><ul><li>For children aged more than 9 years</li><li>Recommended Dose: 1 dose anually</li></ul>",
    warning:
      "<ul><li> People who are severely allergic to eggs have to be in the care a doctor</li><li>Pregnancy</li></ul>"
  },
  {
    vaccineId: "vac015",
    category: "all",
    vaccineMedicalName: "HPV",
    vaccineNameNormal: "Human Papillomavirus Vaccine",
    protectDisease: ["disease017"],
    repeat: null,
    injectionPeriodTime: [4015, 4045, 4165],
    doseNumber: 3,
    replaceableWith: null,
    shortDes:
      "If there is no HPV infection was found in a person before receving this vaccine, it will grow an immunity to 93% of effectiveness.",
    displayedSuggestAge:
      "<ul><li>1st Dose: 9-15 years(Can be recevied the first dose from the age of 9)</li><li>2nd Dose: 9-15 years (6 months after the first dose)</li></ul><ul><li>For Adults</li><li>1st Dose: Can be recevied the first dose from the age of 19</li><li>2nd Dose: 6 months after the first dose</li><li>3rd Dose: 12 months after the second dose</li></ul>",
    warning:
      "<ul><li> People who are severely allergic to yeast</li><li>Pregnancy</li></ul>"
  },
  {
    vaccineId: "vac016",
    category: "all",
    vaccineMedicalName: "PCV13",
    vaccineNameNormal: "13 valent conjugate Pneumococcal Conjugate Vaccine",
    protectDisease: ["disease023"],
    repeat: null,
    injectionPeriodTime: [60, 60, 60, 180],
    doseNumber: 4,
    replaceableWith: null,
    shortDes:
      "For PCV13, it can prevent the serotype 7F and 19A from IPD with 76% and 70% respectively. ",
    displayedSuggestAge:
      "<ul><li>1st Dose 2 months</li><li>2nd Dose: 4 months</li><li>3rd Dose: 6 months</li><li>4th Dose: 15 months</li></ul><ul><li>For Adults</li><li>1st Dose: For elderly whose age 65 years old or more</li></ul>",
    warning: "<ul></ul>"
  },
  {
    vaccineId: "vac017",
    category: "all",
    vaccineMedicalName: "PPSV23",
    vaccineNameNormal: "23-valent polysaccharide Pneumococcalvaccine",
    protectDisease: ["disease023"],
    repeat: null,
    injectionPeriodTime: [730, 1825],
    doseNumber: 2,
    replaceableWith: null,
    shortDes:
      "Studies in America found that it can prevent the serotype that will cause IPD in adults and children to 85-95%, and 86.9-87.3% for Thailand. And it has ability to prevent the IPD itself to 56-81%",
    displayedSuggestAge:
      "<ul><li>1st Dose: 2 year</li><li>2nd Dose: 7 year</li></ul><ul><li>For Adults</li><li>1st Dose: For elderly whose age 65 years old or more that already received PCV13 for at least 1 year</li></ul>",
    warning: "<ul></ul>"
  },
  {
    vaccineId: "vac018",
    category: "children",
    vaccineMedicalName: "Rotarix",
    vaccineNameNormal: "Rotavirus vaccine",
    protectDisease: ["disease016"],
    repeat: null,
    injectionPeriodTime: [60, 60],
    doseNumber: 2,
    replaceableWith: null,
    shortDes:
      " After receiving 2 doses of Rotarix, it can prevent rotavirus from 85% to 100%",
    displayedSuggestAge:
      "<ul><li>1st Dose: 2 months</li><li>2nd Dose: 4 months</li></ul>",
    warning:
      "<ul><li>- People with severely immunodeficiency such as Severe combined immunodeficiency </li><li> People who previously had Intussusception</li><li> Patients who have a chronic type of gastrointestinal and intestinal disease</li></ul>"
  },
  {
    vaccineId: "vac019",
    category: "children",
    vaccineMedicalName: "RotaTeq",
    vaccineNameNormal: "Rotavirus vaccine",
    protectDisease: ["disease016"],
    repeat: null,
    injectionPeriodTime: [60, 60, 60],
    doseNumber: 3,
    replaceableWith: null,
    shortDes:
      "After receiving 3 doses, it can prevent rotavirus to 98%, and 74% for every harmful level of rotavirus.",
    displayedSuggestAge:
      "<ul><li>1st Dose: 2 months</li><li>2nd Dose: 4 months</li><li>3rd Dose: 6 months</li></ul>",
    warning:
      "<ul><li>- People with severely immunodeficiency such as Severe combined immunodeficiency </li><li> People who previously had Intussusception</li><li> Patients who have a chronic type of gastrointestinal and intestinal disease</li></ul>"
  },
  {
    vaccineId: "vac020",
    category: "all",
    vaccineMedicalName: "HAV",
    vaccineNameNormal: "Hepatitis A Vaccine",
    protectDisease: ["disease013"],
    repeat: null,
    injectionPeriodTime: [365, 180],
    doseNumber: 2,
    replaceableWith: null,
    shortDes:
      "After receiving 1 dose, Hepatitis A vaccine can prevent this disease for 1 year. And after receiving boosted dose in 6th-12th month after the first dose will allow this vaccine to prevent the disease to 94-100%",
    displayedSuggestAge:
      "<ul><li>1st Dose: 12-23 months</li><li>2st Dose: >18 months</li></ul><ul><li>For Adults</li><li>1st Dose: Can be recevied the first dose from the age of 19</li><li>2nd Dose: 6-12 months after the first dose</li></ul>",
    warning: "<ul><li>-</li></ul>"
  },
  {
    vaccineId: "vac021",
    category: "all",
    vaccineMedicalName: "VAR",
    vaccineNameNormal: "Varicella Vaccine",
    protectDisease: ["disease014"],
    repeat: null,
    injectionPeriodTime: [365, 1095],
    doseNumber: 2,
    replaceableWith: null,
    shortDes:
      "In 1 year or more children age, found that after receiving the 1st dose will grow the immunity to 76-85%, and it will increase to 100% when receiving the 2nd does of the vaccine.",
    displayedSuggestAge:
      "<ul><li>1st Dose: 12-18 months</li><li>2st Dose: >4-6 year</li></ul><ul><li>For Adults</li><li>1st Dose: Can be recevied the first dose from the age of 19</li><li>2nd Dose: 1 months after the first dose</li></ul>",
    warning:
      "<ul><li> People who are severely allergic to gelatin, neomycin, streptomycin, and polymyxin </li><li>People with immunodeficiency</li><li>Pregnancy</li></ul>"
  },
  {
    vaccineId: "vac022",
    category: "additional",
    vaccineMedicalName: "Rabies",
    vaccineNameNormal: "Rabies Vaccine",
    protectDisease: ["disease015"],
    repeat: null,
    injectionPeriodTime: [0, 7],
    doseNumber: 2,
    replaceableWith: null,
    shortDes:
      "Rabies vaccine can prevent rabies disease which is mainly caused by animals. Children and adults with high risk of this disease are recommended to get 2 doses of this vaccine through their muscles, and each dose is aparted from the previous dose for 7 days.",
    displayedSuggestAge:
      "<ul><li>1st Dose: 0 (First time)</li><li>2st Dose: >7 days (at least 7 days from the previous dose)</li></ul>",
    warning:
      "<ul><li> People who are severely allergic to gelatin, neomycin, streptomycin, and polymyxin </li><li>People with immunodeficiency</li><li>Pregnancy</li></ul>"
  },
  {
    vaccineId: "vac023",
    category: "children",
    vaccineMedicalName: "Meningococcal",
    vaccineNameNormal: "Meningococcal Vaccine",
    protectDisease: ["disease020"],
    repeat: null,
    injectionPeriodTime: [4015, 5840],
    doseNumber: 2,
    replaceableWith: null,
    shortDes:
      "There are 2  common types of meningococcal vaccine which are Meningococcal conjugate(MenACWY) and Serogroup B meningococcal(MenB). This vaccine can be used on 2 months children until 55 years old people, if they have complement component deficiency, their spleen has been removed or damaged, or live in countries where this disease is common. It is also recommended that every child should get a MenACWY at 11-12 years old with a booster shot at 16 years old. ",
    displayedSuggestAge:
      "<ul><li>1st Dose: 11-12 years</li><li>2st Dose: >16 years (booster shot)</li></ul>",
    warning: "<ul><li>Pregnancy</li></ul>"
  },
  {
    vaccineId: "vac024",
    category: "all",
    vaccineMedicalName: "Dengue",
    vaccineNameNormal: "Dengue Vaccine",
    protectDisease: ["disease019"],
    repeat: null,
    injectionPeriodTime: [3285, 180, 180],
    doseNumber: 3,
    replaceableWith: null,
    shortDes:
      "Dengue vaccine is recommended by the World Health Organization, Infectious Disease Association of Thailand, and the Association of Infectious Diseases in Children to give 3 doses of this vaccine for children and adults from 9 years old through 45 years old, and each dose is aparted from each other for 6 months.",
    displayedSuggestAge:
      "<ul><li>1st Dose: 9-45 years (0 month)</li><li>2st Dose: >9-45 years (+ 6 months)</li><li>3rd Dose: >9-45 years (+ 6 months)</li></ul>",
    warning: "<ul><li>People with immunodeficiency</li><li>Pregnancy</li><ul>"
  },
  {
    vaccineId: "vac025",
    category: "adult",
    vaccineMedicalName: "Live-attenuated zoster vaccine",
    vaccineNameNormal: "Zoster vaccine",
    protectDisease: ["disease029"],
    repeat: null,
    injectionPeriodTime: [23725],
    doseNumber: 1,
    replaceableWith: null,
    shortDes:
      "Zoster vaccine is used only 1 dose for elderly aged around 50-65 years old or older. Avoiding the use of this vaccine on pregnant, and people with severe immunodeficiency.",
    displayedSuggestAge:
      "<ul><li>1st Dose: For elderly whose age 65 years old or more</li></ul>",
    warning: "<ul><li>People with immunodeficiency</li><li>Pregnancy</li><ul>"
  },
  {
    vaccineId: "vac026",
    category: "additional",
    vaccineMedicalName: "Sinovac",
    vaccineNameNormal: "Sinovac COVID-19 vaccine",
    protectDisease: ["disease030"],
    repeat: null,
    injectionPeriodTime: [0, 14],
    doseNumber: 2,
    replaceableWith: ["vac027"],
    shortDes: `The Sinovac vaccine is an inactivated virus COVID-19 vaccine. Currently recommended for people 18 years of age and older, given as two intramuscular injections 2 weeks apart, the vaccine is 77.9 percent effective overall in preventing symptomatic disease requiring medical attention. different for each country of study with the efficiency of 65.3, 91.25, and 77.9 percent in Indonesia, Turkey, and Brazil, respectively. Vaccines are 100% effective in preventing severe COVID-19 disease. and if counting including the prevention of disease with few symptoms without having to see a doctor Will find efficiency only 50.4% is interesting. A phase 2 study found that 28 days apart from the 1st and 2nd injections, the immune response was higher than 14 days, but the injections were 28 days apart. There were no results from the Phase 3 study. In addition, there is not enough data in Phase 3 studies in people aged 60 years and over. It is not recommended for general use in people over 60 years of age, but because the results of the Phase II study showed that people over 60 years of age did not respond differently to vaccines than those of younger people. and have no different side effects Therefore, it may be considered to be used if necessary and that it is more useful. and the elderly are at risk of severe disease.`,
    displayedSuggestAge:
      "<ul><li>2 doses with ths interval of 2–4 weeks between the first and second dose</li></ul>",
    warning: "<ul><li>Under 18 years old</li><li>Pregnancy</li><ul>"
  },
  {
    vaccineId: "vac027",
    category: "additional",
    vaccineMedicalName: "Oxford–AstraZeneca",
    vaccineNameNormal: "Oxford/AstraZeneca COVID-19 vaccine",
    protectDisease: ["disease030"],
    repeat: null,
    injectionPeriodTime: [0, 70],
    doseNumber: 2,
    replaceableWith: ["vac026"],
    shortDes: `The Oxford–AstraZeneca COVID‑19 vaccine is used to provide protection against infection by the SARS-CoV-2 virus in order to prevent COVID-19 in adults aged 18 years and older. The medicine is administered by two 0.5 ml doses injected intramuscularly into the deltoid muscle (upper arm) four to twelve weeks apart, with the WHO recommending the second is given 8 to 12 weeks after the first for optimum efficacy.

      An analysis published on 19 February 2021 showed an efficacy of 76.0% at preventing symptomatic COVID-19 beginning at 22 days following the first dose, increasing to 81.3% when the second dose is given 12 weeks or more after the first. Another analysis published by Public Health England showed that the vaccine was 66.0% effective at preventing symptomatic COVID-19 2 weeks after the second dose.      
       `,
    displayedSuggestAge:
      "<ul><li>2 dose with the interval of 10-12 weeks between the first and second dose</li></ul>",
    warning: "<ul><li>Under 18 years old</li><li>Pregnancy</li><ul>"
  }
];
