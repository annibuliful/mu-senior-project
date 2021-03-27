import db from "../db";

export default async () => {
  const result = await db.table("users").toArray();
  return result.length !== 0;
};
