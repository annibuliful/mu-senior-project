import db from "../db";

export const updateById = (id, data) => {
  return db.table("records").update(id, data);
};
