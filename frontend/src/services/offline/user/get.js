import db from "../db";

export default function getListUser() {
  return db.table("users").toArray();
}
