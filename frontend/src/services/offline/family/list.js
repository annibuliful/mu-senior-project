import db from "../db";

export default async (userId) => {
  return await db
    .table("families")
    .where("userId")
    .equals(userId)
    .toArray();
};
