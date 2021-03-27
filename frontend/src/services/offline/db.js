import Dexie from "dexie";

const listTables = {
  users: "++userId, username",
  families: "++familyId, userId, fullname",
  familyMembers: "++memberId, familyId",
  vaccines: "++vaccineId, name",
  appointments: "++appointmentId, childname",
  diseases: "++diseaseId",
  records: "++recordId",
};

const db = new Dexie("senior");
db.version(1).stores(listTables);

export const restore = () => {
  const db = new Dexie("senior");
  db.version(1).stores(listTables);
};
export default db;
