import db from "../db";

export default async ({ username, password }) => {
  const listUsers = await db
    .table("users")
    .where("username")
    .equals(username)
    .toArray();
  const isExist = listUsers.length !== 0;
  if (isExist) return;
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
