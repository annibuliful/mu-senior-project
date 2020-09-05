import db from "../db";

export default async data => {
  return await db.table("vaccines").add(data);
};
