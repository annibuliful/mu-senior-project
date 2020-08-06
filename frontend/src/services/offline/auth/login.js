import db from "../db";

export default async ({ username, password }) => {
  const listUsers = await db
    .table("users")
    .where("username")
    .equals(username)
    .toArray();
  const isNotExist = listUsers.length === 0;
  if (isNotExist) throw new Error("username not found");

  const passwordIsNotCorrect = listUsers[0].password !== password;
  if (passwordIsNotCorrect) throw new Error("password incorrect");

  localStorage.setItem("userInfo", JSON.stringify(listUsers[0]));
};
