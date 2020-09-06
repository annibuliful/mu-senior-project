import db from "../db";

export default childId => {
  return db
    .table("appointments")
    .filter(el => el.customData.childId === childId);
};
