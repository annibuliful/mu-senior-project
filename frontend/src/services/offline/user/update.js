import db from "../db";

export default async (userId, data) => {
  return await db.table("users").update(userId, data);
};
