import db from "../db";

export default ({ username, password }) => {
  return db.table("users").add({
    username,
    password,
    fullname: "",
    birthDate: "",
    diseases: [],
    receivedVaccines: [],
    isSync: false
  });
};
