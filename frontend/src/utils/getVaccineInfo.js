import listEnVaccines from "../locale/EN/vaccines";
import listThVaccines from "../locale/TH/vaccines";

export const getVaccineInfoById = (vaccineId, language) => {
  if (language === "en-US") {
    return listEnVaccines.find(el => el.vaccineId === vaccineId);
  }

  return listThVaccines.find(el => el.vaccineId === vaccineId);
};
