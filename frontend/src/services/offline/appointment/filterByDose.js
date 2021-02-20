import list from "./list";

export default async ({ userId, doseNumber, vaccineId }) => {
  const listAppointments = await list();
  return listAppointments.find(
    ({ customData }) =>
      customData.vaccineId === vaccineId &&
      customData.childId === userId &&
      customData.doseNumber === doseNumber
  );
};
