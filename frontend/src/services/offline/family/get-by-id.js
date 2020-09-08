import db from "../db";

export default async familyId => {
  return await db
    .table("families")
    .where("familyId")
    .equals(familyId)
    .toArray();
};
