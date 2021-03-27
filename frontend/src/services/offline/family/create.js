import db from "../db";
import { nanoid } from "nanoid";

export const createFamilyMember = async (memberData) => {
  const familyInfo = await db.table("families").get(memberData.familyId);

  if (!familyInfo) {
    throw new Error("family not found");
  }

  return db.table("familyMembers").add({
    ...memberData,
    congenitalDiseaseIds: [],
    receivedVaccineIds: [],
    memberId: nanoid(),
  });
};

export default ({
  fullname,
  birthDate,
  profileImg,
  diseases,
  receivedVaccines,
  congenitalDisease,
  userId,
}) => {
  return db.table("families").add({
    familyId: nanoid(),
    fullname,
    userId,
    birthDate,
    profileImg,
    diseases,
    congenitalDisease,
    receivedVaccines,
    isSync: false,
    isDelete: false,
  });
};
