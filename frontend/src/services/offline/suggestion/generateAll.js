import listThVaccines from "../../../locale/TH/vaccines";
import listEnVaccines from "../../../locale/EN/vaccines";
// import constraintVaccines from "../../../locale/constraint-vaccine";
// import { add } from "date-fns";

export default (language = "en-US") => {
  let listVaccines = [];
  if (language === "en-US") {
    listVaccines = listEnVaccines;
  } else {
    listVaccines = listThVaccines;
  }
  console.log("listVaccines", listVaccines);
};
