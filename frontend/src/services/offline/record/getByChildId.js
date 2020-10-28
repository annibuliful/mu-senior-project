import db from "../db";

export default (childId) => {
  return db.table("records").filter((record) => record.childId === childId);
};
