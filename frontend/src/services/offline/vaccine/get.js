import thVacccines from "../../../shared/localization/th-locale/vaccines";
import enVaccines from "../../../shared/localization/th-locale/vaccines";

export const filterVaccineByExludeVaccineIds = (language) => (vaccineIds) => {
  return getListVaccine(language).filter(
    (vaccine) => !vaccineIds.includes(vaccine.vaccineId)
  );
};

export const getVaccineCategoryByDate = (childBirthDate) => {
  const now = new Date();
  const childYearOld = childBirthDate.getFullYear() / now.getFullYear() - 1;
  return (
    rangeYearOfCategories.filter(
      (el) => el.range.min <= childYearOld && childYearOld <= el.range.max
    )[0]?.category ?? "children"
  );
};

export const getListVaccine = (language) => {
  if (language === "en-US") {
    return enVaccines;
  }
  return thVacccines;
};

export const getVaccineById = (id, language) => {
  let listVaccines = [];

  if (language === "en-US") {
    listVaccines = enVaccines;
  } else {
    listVaccines = thVacccines;
  }

  return listVaccines.find((vaccine) => vaccine.vaccineId === id);
};

const rangeYearOfCategories = [
  {
    range: {
      min: 0,
      max: 18,
    },
    category: "children",
  },
  {
    range: {
      min: 19,
      max: 120,
    },
    category: "adult",
  },
];

export const getListVaccineByDate = (birthDate, language) => {
  if (!birthDate) throw new Error("missing member birthdate");
  const listVaccines = getListVaccine(language);
  const now = new Date();
  const childYearOld = birthDate.getFullYear() / now.getFullYear() - 1;

  const vaccineCategory =
    rangeYearOfCategories.filter(
      (el) => el.range.min <= childYearOld && childYearOld <= el.range.max
    )[0]?.category ?? "children";

  return listVaccines.filter(
    (el) => el.category === vaccineCategory || el.category === "all"
  );
};

export const getListDiseaseByLanguage = (language) => {
  if (language === "en-US") {
    return enVaccines;
  }

  return thVacccines;
};

export const getDiseaseById = (id, language) => {
  if (!id) throw new Error("missing disaese id");

  const diseaseInfo = getListDiseaseByLanguage(language).find(
    (disease) => disease.diseaseId === id
  );

  if (!diseaseInfo) throw new Error("disease not found");

  return diseaseInfo;
};
