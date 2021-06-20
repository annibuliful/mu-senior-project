import db from "../db";
import listVaccinesInfo from "../../../locale/EN/vaccines";
import { add } from "date-fns";

const updateAppointment = async (id, data) => {
  return await db.table("appointments").update(id, data);
};

export default updateAppointment;

export const reScheduleAppointmentByVaccine = async (
  vaccineId,
  childId,
  doseNumber,
  receivingDate
) => {
  const listVaccines = await db.table("appointments").toArray();
  const listChildVaccines = listVaccines.filter(
    (vaccine) => vaccine.customData?.childId === childId
  );
  const listDoseVaccines = listChildVaccines.filter(
    (vaccine) => vaccine.customData?.vaccineId === vaccineId
  );
  const listPeriodTimes = listVaccinesInfo.find(
    (vaccine) => vaccine.doseNumber && vaccine.vaccineId === vaccineId
  )?.injectionPeriodTime;
  if (!listPeriodTimes || !doseNumber) return;
  const getListNextDose = listDoseVaccines.filter(
    (vaccine) => vaccine.customData?.doseNumber >= doseNumber
  );
  const listUpdateCall = [];
  getListNextDose.forEach((appointment) => {
    const doseNumber = appointment.customData.doseNumber;
    const periodTime = listPeriodTimes[doseNumber - 1];
    console.log("getListNextDose-appointment", {
      appointment,
      doseNumber,
      periodTime,
      receivingDate,
      newDate: add(receivingDate, { days: periodTime }),
    });
    listUpdateCall.push(
      updateAppointment(appointment.appointmentId, {
        dates: add(receivingDate, { days: periodTime }),
      })
    );
  });

  await Promise.all(listUpdateCall);
};
