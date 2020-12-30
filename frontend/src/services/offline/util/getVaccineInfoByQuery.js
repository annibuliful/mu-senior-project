import listEnVaccines from "../../../locale/EN/vaccines";
import listThVaccines from "../../../locale/TH/vaccines";
import { pagination } from "../../../utils/filter";

export const getVaccineInfoByQuery = ({ limit, offset }, language) => {
  let listVaccines = [];
  if (language === "en-US") {
    listVaccines = listEnVaccines;
  } else {
    listVaccines = listThVaccines;
  }

  const isPagination = limit !== undefined && offset !== undefined;
  if (isPagination) {
    listVaccines = listVaccines.filter(pagination(limit, offset));
  }

  return listVaccines;
};
