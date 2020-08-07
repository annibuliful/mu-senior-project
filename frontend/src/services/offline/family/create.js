import db from "../db";

export default ({
  fullname,
  birthDate,
  diseases,
  receivedVaccines,
  userId
}) => {
  return db.table("families").add({
    fullname,
    userId,
    birthDate,
    diseases,
    receivedVaccines,
    isSync: false
  });
};
