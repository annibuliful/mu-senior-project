import db from "../db";

export default async ({ username, password }) => {
  if (!username || !password) return false;
  const result = (await db.table("users").toArray()).filter(
    (el) => el.username === username && el.password === password
  );

  return result.length !== 0;
};
