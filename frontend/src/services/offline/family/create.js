import db from "../db";

export default ({ fullname, birthDate, diseases, receivedVaccines }) => {
  return db.table("families").add({
    fullname,
    birthDate,
    diseases,
    receivedVaccines,
    isSync: false
  });
};
