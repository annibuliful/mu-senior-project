import service from "../../";
// import listDiseases from "../../../locale/EN/diseases";
// import listVaccine from "../../../locale/EN/vaccines";
export default async childId => {
  const childInfo = (await service().family.getByChildId(childId))[0];
  console.log(childInfo);
};
