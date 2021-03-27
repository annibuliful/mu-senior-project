import db from "../db";

export default async loginInfo => {
  if (!loginInfo?.username || !loginInfo?.password) return false;
  const result = (await db.table("users").toArray()).filter(
    el =>
      el.username === loginInfo?.username && el.password === loginInfo?.password
  );

  return result.length !== 0;
};
