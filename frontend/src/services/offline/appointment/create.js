import db from "../db";

export default async (data) => {
  return await db.table("appointments").add(data);
};

export const toggleCreateAppointment = async (toggle, data) => {
  const vaccineId = data.vaccine;
  const childId = data.childId;
  const listFamilies = await db
    .table("families")
    .where("familyId")
    .equals(Number(childId))
    .toArray();

  const childInfo = listFamilies.find((child) => child.familyId === childId);
  if (!childInfo) return;

  if (toggle) {
    childInfo.receivedVaccines = [...childInfo.receivedVaccines, vaccineId];
  } else {
    childInfo.receivedVaccines = childInfo.receivedVaccines.filter(
      (id) => id !== vaccineId
    );
  }
  await db.table("families").update(childId, childInfo);
};
