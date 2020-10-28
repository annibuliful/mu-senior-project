module.exports = [
  {
    vaccineId: "vac001",
    category: "children",
    vaccineMedicalName: "BCG",
    vaccineNameNormal: "Bacillus Calmette Guerin vaccine",
    protectDisease: ["disease001"],
    injectionPeriodTime: [0],
    doseNumber: 1,
    repeat: null,
    replaceableWith: null,
    shortDes:
      "The immunity will fully grow inside the body after 2 months of receiving the vaccine. BCG Vaccine has a good effect on defensing an early state of tuberculosis especially on TB meningitis and miliary TB with 52-100 percentage of success rate.",
    displayedSuggestAge: "<ul><li>1st Dose: Shortly after birth</li></ul>",
    warning: "<ul><li>Immunosuppression</li><li>Pregnancy</li></ul>",
  },
  {
    vaccineId: "vac002",
    category: "children",
    vaccineMedicalName: "HBV",
    vaccineNameNormal: "Hepatitis B Vaccine",
    protectDisease: ["disease002"],
    injectionPeriodTime: [0, 30, 150],
    doseNumber: 3,
    repeat: null,
    replaceableWith: null,
    shortDes:
      "The immunity of Hepatitis B will be suppressed after receiving the second dose of this vaccine. For the third dose, it only increases the effect of immunity. It has 90-95 percentage of success rate.",
    displayedSuggestAge:
      "<ul><li>1st Dose: Shortly after birth within 24 hours</li><li>2nd Dose: 1-2 months </li><li>3rd Dose: 6-7 months</li></ul>",
    warning: "<ul><li>Immunosuppression</li><li>Pregnancy</li></ul>",
  },
  {
    vaccineId: "vac003",
    category: "children",
    vaccineMedicalName: "DTwP",
    vaccineNameNormal: "Diphtheria - Tetanus - whole cell Pertussis",
    protectDisease: ["disease004", "disease005", "disease006"],
    injectionPeriodTime: [60, 60, 60, 270, 1095],
    doseNumber: 5,
    repeat: null,
    replaceableWith: ["vac004"],
    shortDes:
      "The immunity will best occur when injecting into muscle. It will first occur in 2 weeks after receiving the vaccine. In many studies found that the effectiveness between DTwp and DTap are not different with 75-90%. ",
    displayedSuggestAge:
      "<ul><li>1st Dose: 2 months</li><li>2nd Dose: 4 months</li><li>3rd Dose: 6 months </li><li>4th Dose: 15-18 months</li><li>5th Dose: 4-6 years</li></ul>",
    warning:
      "<ul><li>Encephalopathy within 7 days after receving the previous vaccination has to stop receiving Pertussis and give DT instead</li></ul>",
  },
  {
    vaccineId: "vac004",
    category: "children",
    vaccineMedicalName: "DTaP",
    vaccineNameNormal:
      "Diphtheria -Tetanus - acellular Pertussis Vaccine combined",
    protectDisease: ["disease004", "disease005", "disease006"],
    injectionPeriodTime: [60, 60, 60, 270, 1095],
    doseNumber: 5,
    repeat: null,
    replaceableWith: ["vac003"],
    shortDes:
      "The immunity will best occur when injecting into muscle. It will first occur in 2 weeks after receiving the vaccine. In many studies found that the effectiveness between DTwp and DTap are not different with 75-90%. ",
    displayedSuggestAge:
      "<ul><li>1st Dose: 2 months</li><li>2nd Dose: 4 months</li><li>3rd Dose: 6 months </li><li>4th Dose: 15-18 months</li><li>5th Dose: 4-6 years</li></ul>",
    warning:
      "<ul><li>Encephalopathy within 7 days after receving the previous vaccination has to stop receiving Pertussis and give DT instead</li></ul>",
  },
  {
    vaccineId: "vac005",
    category: "children",
    vaccineMedicalName: "Td",
    vaccineNameNormal: "Tetanus - Diphtheria toxoid Vaccine combined",
    protectDisease: ["disease004", "disease005"],
    injectionPeriodTime: [4380],
    doseNumber: 1,
    repeat: null,
    replaceableWith: null,
    shortDes:
      "The immunity will best occur when injecting into muscle. It will first occur in 2 weeks after receiving the vaccine. In many studies found that the effectiveness between DTwp and DTap are not different with 75-90%. ",
    displayedSuggestAge: "<ul><li>1st Dose: Shortly after birth</li></ul>",
    warning: "<ul><li>Immunosuppression</li><li>Pregnancy</li></ul>",
  },
  {
    vaccineId: "vac006",
    category: "children",
    vaccineMedicalName: "Tdap",
    vaccineNameNormal:
      "Tetanus - reduced diphtheria toxoid and acellular pertussis",
    protectDisease: ["disease004", "disease005", "disease006"],
    injectionPeriodTime: [1460],
    doseNumber: 1,
    repeat: null,
    replaceableWith: null,
    shortDes:
      "The immunity will best occur when injecting into muscle. It will first occur in 2 weeks after receiving the vaccine. In many studies found that the effectiveness between DTwp and DTap are not different with 75-90%. ",
    displayedSuggestAge: "<ul><li>1st Dose: Shortly after birth</li></ul>",
    warning: "<ul><li>Immunosuppression</li><li>Pregnancy</li></ul>",
  },
  {
    vaccineId: "vac007",
    category: "children",
    vaccineMedicalName: "Hib",
    vaccineNameNormal: "Haemophilus influenzae type b (Hib) vaccine",
    protectDisease: ["disease003"],
    injectionPeriodTime: [60, 60, 60, 360],
    doseNumber: 4,
    repeat: null,
    replaceableWith: null,
    shortDes:
      "This vaccine has an effective preventation of Haemophilus influenzae type b (Hib). In the country that every children has been received this vaccine found that it can minimize the incidence of this disease to 95-99 percentage.",
    displayedSuggestAge:
      "<ul><li>1st Dose: 2 months</li><li>2nd Dose 4 months</li><li>3rd Dose: 6 months</li><li>4th Dose: 12-15 months</li></ul>",
    warning: "<ul><li>Immunosuppression </li><li>Pregnancy</li></ul>",
  },
  {
    vaccineId: "vac008",
    category: "children",
    vaccineMedicalName: "OPV",
    vaccineNameNormal: "Poliomyelitis vaccine",
    protectDisease: ["disease007"],
    injectionPeriodTime: [60, 60, 60, 360, 1095],
    doseNumber: 5,
    repeat: null,
    replaceableWith: ["vac009"],
    shortDes:
      "Studies in American found that 90% of a person who receives this vaccine more than 2 doses will have immunity for 3 serotypes of Poliomyelitis. After receiving more than 3 doses, a person will grow immunity to 97-100%",
    displayedSuggestAge:
      "<ul><li>1st Dose 2 months</li><li>2nd Dose: 4 months</li><li>3rd Dose: 6 months</li><li>4th Dose: 1 year 6 months</li><li>5th Dose: 4 years</li></ul>",
    warning:
      "<ul><li>People with immunodeficiency will need to receive IPV instead </li><li>Pregnancy</li></ul>",
  },
  {
    vaccineId: "vac009",
    category: "children",
    vaccineMedicalName: "IPV",
    vaccineNameNormal: "Inactivated Polio Vaccine",
    protectDisease: ["disease007"],
    injectionPeriodTime: [60, 60, 60, 360, 1095],
    doseNumber: 5,
    repeat: null,
    replaceableWith: ["vac008"],
    shortDes:
      "After receiving more than 2 doses, 90% of a who receives this vaccine person will grow immunity for 3 serotypes of Poliomyelitis, and it will increase to 99% after receiving 3 doses. The immunity will stay for many years after receiving the 4th does.",
    displayedSuggestAge:
      "<ul><li>1st Dose: 2 month</li><li>2nd Dose: 4 month</li><li>3rd Dose: 6 month</li><li>4th Dose: 1 year 6 month</li><li>5th Dose: 4 year</li></ul>",
    warning:
      "<ul><li> People who are severely allergic to neomycin, streptomycin, and polymyxin </li><li>Pregnancy</li></ul>",
  },
  {
    vaccineId: "vac010",
    category: "children",
    vaccineMedicalName: "MMR",
    vaccineNameNormal: "Measles- Mumps - Rubella Vaccine combined",
    protectDisease: ["disease008", "disease009", "disease010"],
    injectionPeriodTime: [270, 1190],
    doseNumber: 2,
    repeat: null,
    replaceableWith: ["vac011"],
    shortDes:
      "Studies in American found that the immunity for Measles-Mumps-Rubella will grow for 95% of the 12 months children who receive this vaccine, and 98% for 15 months children.",
    displayedSuggestAge:
      "<ul><li>1st Dose: 9-12 month</li><li>2nd Dose: 4-6 year</li></ul>",
    warning:
      "<ul><li>People with immunodeficiency</li><li>Pregnancy</li><li> People who are severely allergic to neomycin and gelatin</li></ul>",
  },
  {
    vaccineId: "vac011",
    category: "children",
    vaccineMedicalName: "MMRV",
    vaccineNameNormal: "Measles- Mumps- Rubella - Varicella Vaccine combined",
    protectDisease: ["disease008", "disease009", "disease010", "disease014"],
    injectionPeriodTime: [365, 365],
    doseNumber: 1,
    repeat: null,
    replaceableWith: null,
    shortDes:
      "Studies in American found that the immunity for Measles-Mumps-Rubella will grow for 95% of the 12 months children who receive this vaccine, and 98% for 15 months children.",
    displayedSuggestAge:
      "<ul><li>1st Dose: 9-12 month</li><li>2nd Dose: 4-6 year</li></ul>",
    warning:
      "<ul><li>People with immunodeficiency</li><li>Pregnancy</li><li> People who are severely allergic to neomycin and gelatin</li><li>if there is seizures records, MMRV is not recommended</li></ul>",
  },
  {
    vaccineId: "vac012",
    category: "children",
    vaccineMedicalName: "JEVAC",
    vaccineNameNormal: "Japanese Encephalitis Vaccine",
    protectDisease: ["disease011"],
    injectionPeriodTime: [180, 30, 365],
    doseNumber: 3,
    repeat: null,
    replaceableWith: null,
    shortDes:
      "After receiving 2nd dose for 1 month, JEVACTM will grow an immunity for this disease to 89-90%.",
    displayedSuggestAge:
      "<ul><li>Inacitvated</li><li>1st Dose: 12-18 months</li><li>2nd Dose: 13-19 months</li><li>3rd Dose: 24-30 months</li><li>Live</li><li>1st Dose: 1 year</li><li>2nd Dose: 2 year 6 months</li></ul>",
    warning: "<ul><li>Immunosuppression</li><li>Pregnancy</li></ul>",
  },
  {
    vaccineId: "vac013",
    category: "children",
    vaccineMedicalName: "CD-JEVAC",
    vaccineNameNormal: "Japanese Encephalitis Vaccine",
    protectDisease: ["disease011"],
    injectionPeriodTime: [270, 90],
    doseNumber: 2,
    repeat: null,
    replaceableWith: ["vac014"],
    shortDes:
      "After receiving 1st dose of CD.JEVAXTM, The immunity will occur with percentage of 89.3, and the 2nd dose will increase the immunity to 100%.",
    displayedSuggestAge:
      "<ul><li>Inacitvated</li><li>1st Dose: 12-18 months</li><li>2nd Dose: 13-19 months</li><li>3rd Dose: 24-30 months</li><li>Live</li><li>1st Dose: 1 year</li><li>2nd Dose: 2 year 6 months</li></ul>",
    warning: "<ul><li>Immunosuppression</li><li>Pregnancy</li></ul>",
  },
  {
    vaccineId: "vac014",
    category: "children",
    vaccineMedicalName: "IMOJEV",
    vaccineNameNormal: "Japanese Encephalitis Vaccine",
    protectDisease: ["disease011"],
    injectionPeriodTime: [270, 365],
    doseNumber: 2,
    repeat: null,
    replaceableWith: ["vac013"],
    shortDes:
      "After receiving 1st dose of IMOJEVTM, both adults and children will grow an immunity to 99% and 96% respectively. ",
    displayedSuggestAge:
      "<ul><li>Inacitvated</li><li>1st Dose: 12-18 months</li><li>2nd Dose: 13-19 months</li><li>3rd Dose: 24-30 months</li><li>Live</li><li>1st Dose: 1 year</li><li>2nd Dose: 2 year 6 months</li></ul>",
    warning: "<ul><li>Immunosuppression</li><li>Pregnancy</li></ul>",
  },
  {
    vaccineId: "vac015",
    category: "children",
    vaccineMedicalName: "Influenza",
    vaccineNameNormal: "Influenza vaccine",
    protectDisease: ["disease012"],
    injectionPeriodTime: [180],
    doseNumber: 1,
    repeat: 365,
    replaceableWith: null,
    shortDes:
      "Inactivated influenza vaccine will grow an immunity in 7-14 days, and live influenza vaccine has 70-95% of effectiveness depends on how much it match the disease.",
    displayedSuggestAge: "<ul><li>1st Dose 1: 6-15 month</li></ul>",
    warning:
      "<ul><li> People who are severely allergic to eggs have to be in the care a doctor</li><li>Pregnancy</li></ul>",
  },
  {
    vaccineId: "vac016",
    category: "children",
    vaccineMedicalName: "HPV",
    vaccineNameNormal: "Human Papillomavirus Vaccine",
    protectDisease: ["disease017"],
    injectionPeriodTime: [4015, 4045, 4165],
    doseNumber: 3,
    repeat: null,
    replaceableWith: null,
    shortDes:
      "If there is no HPV infection was found in a person before receving this vaccine, it will grow an immunity to 93% of effectiveness.",
    displayedSuggestAge:
      "<ul><li>1st Dose: 11-12 year</li><li>2nd Dose: 11-12 year (+1-2 months)</li><li>3rd Dose: 11-12 year (6 months)</li></ul>",
    warning:
      "<ul><li> People who are severely allergic to yeast</li><li>Pregnancy</li></ul>",
  },
  {
    vaccineId: "vac017",
    category: "children",
    vaccineMedicalName: "PCV13",
    vaccineNameNormal: "13 valent conjugate Pneumococcal Conjugate Vaccine",
    protectDisease: ["disease023"],
    injectionPeriodTime: [60, 60, 60, 180],
    doseNumber: 4,
    repeat: null,
    replaceableWith: null,
    shortDes:
      "For PCV13, it can prevent the serotype 7F and 19A from IPD with 76% and 70% respectively. ",
    displayedSuggestAge:
      "<ul><li>1st Dose 2 months</li><li>2nd Dose: 4 months</li><li>3rd Dose: 6 months</li><li>4th Dose: 12 months</li></ul>",
    warning: "<ul></ul>",
  },
  {
    vaccineId: "vac018",
    category: "children",
    vaccineMedicalName: "PPSV23",
    vaccineNameNormal: "23-valent polysaccharide Pneumococcalvaccine",
    protectDisease: ["disease023"],
    injectionPeriodTime: [730, 1825],
    doseNumber: 2,
    repeat: null,
    replaceableWith: null,
    shortDes:
      "Studies in America found that it can prevent the serotype that will cause IPD in adults and children to 85-95%, and 86.9-87.3% for Thailand. And it has ability to prevent the IPD itself to 56-81%",
    displayedSuggestAge:
      "<ul><li>1st Dose: 2 year</li><li>2nd Dose: 7 year</li></ul>",
    warning: "<ul></ul>",
  },
  {
    vaccineId: "vac019",
    category: "children",
    vaccineMedicalName: "Rota",
    vaccineNameNormal: "Rotavirus vaccine",
    protectDisease: ["disease016"],
    injectionPeriodTime: [60, 60, 60],
    doseNumber: 3,
    repeat: null,
    replaceableWith: null,
    shortDes:
      "After receiving 3 doses, it can prevent rotavirus to 98%, and 74% for every harmful level of rotavirus.",
    displayedSuggestAge:
      "<ul><li>1st Dose: 2 months</li><li>2nd Dose: 4 months</li><li>3rd Dose: 6 months</li></ul>",
    warning:
      "<ul><li>- People with severely immunodeficiency such as Severe combined immunodeficiency </li><li> People who previously had Intussusception</li><li> Patients who have a chronic type of gastrointestinal and intestinal disease</li></ul>",
  },
  {
    vaccineId: "vac020",
    category: "children",
    vaccineMedicalName: "HAV",
    vaccineNameNormal: "Hepatitis A Vaccine",
    protectDisease: ["disease013"],
    injectionPeriodTime: [365, 180],
    doseNumber: 2,
    repeat: null,
    replaceableWith: null,
    shortDes:
      "After receiving 1 dose, Hepatitis A vaccine can prevent this disease for 1 year. And after receiving boosted dose in 6th-12th month after the first dose will allow this vaccine to prevent the disease to 94-100%",
    displayedSuggestAge:
      "<ul><li>1st Dose: 12-23 months</li><li>1st Dose: >18 months</li></ul>",
    warning: "<ul><li>-</li></ul>",
  },
  {
    vaccineId: "vac021",
    category: "children",
    vaccineMedicalName: "VAR",
    vaccineNameNormal: "Varicella Vaccine",
    protectDisease: ["disease014"],
    injectionPeriodTime: [365, 1095],
    doseNumber: 2,
    repeat: null,
    replaceableWith: null,
    shortDes:
      "In 1 year or more children age, found that after receiving the 1st dose will grow the immunity to 76-85%, and it will increase to 100% when receiving the 2nd does of the vaccine.",
    displayedSuggestAge:
      "<ul><li>1st Dose 12-18 months</li><li>1st Dose: >4-6 year</li></ul>",
    warning:
      "<ul><li> People who are severely allergic to gelatin, neomycin, streptomycin, and polymyxin </li><li>People with immunodeficiency</li><li>Pregnancy</li></ul>",
  },
  {
    vaccineId: "vac022",
    category: "adult",
    vaccineMedicalName: "Influenza",
    vaccineNameNormal: "Influenza vaccine",
    protectDisease: ["disease012"],
    injectionPeriodTime: [6750],
    doseNumber: 1,
    repeat: null,
    replaceableWith: null,
    shortDes:
      "Inactivated influenza vaccine will grow an immunity in 7-14 days, and live influenza vaccine has 70-95% of effectiveness depends on how much it match the disease.",
    displayedSuggestAge:
      "<ul><li>1st Dose: 6-15 month</li><li>Next Dose: Annually</li></ul>",
    warning:
      "<ul><li> People who are severely allergic to eggs have to be in the care a doctor</li><li>Pregnancy</li></ul>",
  },
];
