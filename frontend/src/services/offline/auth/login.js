import db from "../db";

export default async ({ username, password }) => {
  const listUsers = await db
    .table("users")
    .where("username")
    .equals(username)
    .toArray();
  const isNotExist = listUsers.length === 0;
  if (isNotExist) throw new Error("notFound");

  const passwordIsNotCorrect = listUsers[0].password !== password;
  if (passwordIsNotCorrect) throw new Error("incorrect");
  return listUsers[0];
};
