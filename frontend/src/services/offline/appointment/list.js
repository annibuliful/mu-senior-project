import db from "../db";

export default async () => {
  return await db.table("appointments").toArray();
};
