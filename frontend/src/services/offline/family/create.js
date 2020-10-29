import db from "../db";

export default ({
  fullname,
  birthDate,
  diseases,
  receivedVaccines,
  congenitalDisease,
  userId
}) => {
  return db.table("families").add({
    fullname,
    userId,
    birthDate,
    diseases,
    congenitalDisease,
    receivedVaccines,
    isSync: false
  });
};
