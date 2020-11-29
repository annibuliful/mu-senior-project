import db from "../db";

export default async (childId, vaccineId) => {
  const listTimesRecord = await db
    .table("records")
    .filter(record => record.childId === childId)
    .toArray();
  const listAllSelectedVaccines = listTimesRecord
    .map(record => record.selectedVaccines)
    .flat()
    .map(record => record.id);

  if (!listAllSelectedVaccines) return 0;

  const countInjectTime = listAllSelectedVaccines.filter(id => id === vaccineId)
    .length;

  return countInjectTime;
};
