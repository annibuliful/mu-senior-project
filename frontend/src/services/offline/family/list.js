import db from "../db";
import { getDiseaseInfoById } from "../util/getDiseaseInfo";
import { listLanguages } from "../../../constants/language";

export default async (userId, language) => {
  const listFamilies = await db
    .table("families")
    .where("userId")
    .equals(userId)
    .toArray();

  if (listLanguages.includes(language)) {
    return listFamilies.map(el => {
      const listDiseaseInfo = el.diseases.map(disease => ({
        tag: getDiseaseInfoById(disease, language).diseaseName,
        id: disease
      }));
      return {
        ...el,
        diseases: listDiseaseInfo
      };
    });
    
  }
  return listFamilies;
};
