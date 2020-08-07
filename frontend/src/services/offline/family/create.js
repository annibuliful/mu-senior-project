import db from "../db";

export default ({ name, birthDate, diseases, vaccines }) => {
  return db.table("families").add({
    name,
    birthDate,
    diseases,
    vaccines,
    isSync: false
  });
};
