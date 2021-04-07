import enLocale from "../../../shared/localization/en-locale/diseases";
import thLocale from "../../../shared/localization/th-locale/diseases";

export const getListDiseaseByLanguage = language => {
  if (language === "en-US") {
    return enLocale;
  }

  return thLocale;
};

export const getDiseaseById = (id, language) => {
  if (!id) throw new Error("missing disaese id");

  const diseaseInfo = getListDiseaseByLanguage(language).find(
    disease => disease.diseaseId === id
  );

  if (!diseaseInfo) throw new Error("disease not found");

  return diseaseInfo;
};
