import db from "../db";

export default async (childId, vaccineName) => {
  const listTimesRecord = await db
    .table("records")
    .filter(record => record.childId === childId)
    .toArray();
  const listAllSelectedVaccines = listTimesRecord
    .map(record => record.selectedVaccines)
    .flat()
    .map(record => record.tag);
  const countInjectTime = listAllSelectedVaccines.filter(
    name => name === vaccineName
  ).length;

  return countInjectTime;
};
