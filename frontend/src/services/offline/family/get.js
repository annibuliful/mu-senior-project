import db from "../db";
import { getDiseaseById } from "../diseases/get";
import { getVaccineById } from "../vaccine/get";

export const getListFamilyMemberByFamilyId = (id) => {
  return db.familyMembers
    .filter((member) => member.familyId === id && !member.isDeleted)
    .toArray();
};

export const getFamilyMemberById = async (id, language) => {
  if (!id) return;

  const memberInfo = await db.familyMembers.get(id);

  if (!memberInfo) throw new Error("member not found");

  const listVaccines = memberInfo.receivedVaccineIds.map((id) =>
    getVaccineById(id, language)
  );
  const listDiseases = memberInfo.congenitalDiseaseIds.map((id) =>
    getDiseaseById(id, language)
  );

  return {
    ...memberInfo,
    listDiseases,
    listVaccines,
  };
};
