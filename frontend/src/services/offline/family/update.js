import db from "../db";
import getByChildId from "./get-by-id";
export default async (id, data, merge = true) => {
  if (merge) {
    const oldChildInfo = await getByChildId(id);
    return await db.table("families").update({ ...oldChildInfo, ...data });
  }

  return await db.table("families").update(data);
};
