import Dexie from "dexie";

const db = new Dexie("senior");
db.version(1).stores({
  users: "++userId, username",
  families: "++familyId, userId, fullname"
});
export default db;
