import Dexie from "dexie";

const db = new Dexie("senior");
db.version(1).stores({
  users: "++userId, username",
  families: "++familyId, userId, fullname",
  vaccines: "++vaccineId name",
  appointments: "++appointmentId childId",
  diseases: "++diseaseId"
});
export default db;
