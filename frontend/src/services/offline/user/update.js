import db from "../db";

export default (
  userId,
  { fullname, birthDate, diseases, receivedVaccines }
) => {
  return db.table("users").update(userId, {
    fullname,
    birthDate,
    diseases,
    receivedVaccines
  });
};
