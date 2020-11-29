import listEnDisease from "../../../locale/EN/diseases";
import listThDisease from "../../../locale/TH/diseases";

export const getDiseaseInfoById = (diseaseId, language) => {
  if (language === "en-US") {
    return listEnDisease.find(el => el.diseaseId === diseaseId);
  }

  return listThDisease.find(el => el.diseaseId === diseaseId);
};
