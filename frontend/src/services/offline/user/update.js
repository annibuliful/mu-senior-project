import db from "../db";

export default async (
  userId,
  { fullname, birthDate, diseases, receivedVaccines }
) => {
  return await db.table("users").update(userId, {
    fullname,
    birthDate,
    diseases,
    receivedVaccines
  });
};
