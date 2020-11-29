import db from "../db";
import { listLanguages } from "../../../constants/language";
import { getVaccineInfoById } from "../util/getVaccineInfo";
import { getDiseaseInfoById } from "../util/getDiseaseInfo";

const getListVaccines = (el, language) => getVaccineInfoById(el, language);
const getListDiseases = (el, language) => getDiseaseInfoById(el, language);
export default async (familyId, language) => {
  const listFamilies = await db
    .table("families")
    .where("familyId")
    .equals(Number(familyId))
    .toArray();

  if (listLanguages.includes(language)) {
    return listFamilies.map(family => {
      const listVaccines = family.receivedVaccines
        .map(el => getListVaccines(el, language))
        .map(vaccine => ({
          id: vaccine.vaccineId,
          tag: vaccine.vaccineNameNormal
        }));

      const listDiseases = family.diseases
        .map(el => getListDiseases(el, language))
        .map(disease => ({
          id: disease.diseaseId,
          tag: disease.diseaseName
        }));
      return {
        ...family,
        diseases: listDiseases,
        receivedVaccines: listVaccines
      };
    });
  }
  return listFamilies;
};
