import db from "../db";

export default async data => {
  return await db.table("appointments").add(data);
};
