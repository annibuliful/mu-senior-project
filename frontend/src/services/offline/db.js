import Dexie from "dexie";

const db = new Dexie("senior");
db.version(1).stores({
  users: "++userId, username",
  families: "++familyId, userId, fullname",
  familyMembers: "memberId, familyId",
  vaccines: "++vaccineId, name",
  appointments: "++appointmentId, childname",
  diseases: "++diseaseId",
  records: "++recordId"
});

export const restore = () => {
  const db = new Dexie("senior");
  db.version(1).stores({
    users: "++userId, username",
    families: "++familyId, userId, fullname",
    vaccines: "++vaccineId, name",
    appointments: "++appointmentId, childname",
    diseases: "++diseaseId",
    records: "++recordId"
  });
};
export default db;
