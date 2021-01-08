import db from "../db";

export default async ({ pin }) => {
  const listUsers = await db.table("users").toArray();
  const isExist = listUsers.find(el => el.pin === pin) !== undefined;
  if (isExist) return true;

  return false;
};
