import db from "../db";
export default data => {
  return db.table("records").add(data);
};
