import db from "../db";

export default async (childId, vaccineId) => {
  const listTimesRecord = await db
    .table("records")
    .filter((record) => record.childId === childId)
    .toArray();
  const listAllSelectedVaccines = listTimesRecord.map(
    (record) => record.recordCustomData.vaccineId
  );

  if (!listAllSelectedVaccines) return 1;

  const countInjectTime = listAllSelectedVaccines.filter((id) => {
    return id === vaccineId;
  }).length;

  console.log("info", { childId, vaccineId, countInjectTime });

  return countInjectTime;
};
