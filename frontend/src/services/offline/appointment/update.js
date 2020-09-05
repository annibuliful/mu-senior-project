import db from "../db";

export default async (id, data) => {
  return await db.table("appointments").update(id, data);
};
