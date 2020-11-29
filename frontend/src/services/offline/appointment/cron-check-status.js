import listAppointmentService from "./list";
import updateAppointmentService from "./update";
import differenceInDays from "date-fns/differenceInDays";

const getAppointmentId = el => el.appointmentId;
export default async () => {
  const listAppointments = await listAppointmentService();
  console.log("list appointment", listAppointments);

  const listVaccinatingAppointments = listAppointments.filter(el => {
    const result = differenceInDays(new Date(el.dates), new Date());

    return result >= -7 && result <= 7 && el.status !== "vaccinated";
  });

  const listCallVaccinatingUpdate = listVaccinatingAppointments
    .map(getAppointmentId)
    .map(id =>
      updateAppointmentService(id, { status: "vaccinating", dot: "yellow" })
    );

  await Promise.allSettled(listCallVaccinatingUpdate);

  const listOverdueAppointments = listAppointments.filter(el => {
    const result = differenceInDays(new Date(el.dates), new Date());
    return result + 7 <= 0 && el.status !== "vaccinated";
  });

  const listCallOverdueUpdate = listOverdueAppointments
    .map(getAppointmentId)
    .map(id => updateAppointmentService(id, { status: "overdue", dot: "red" }));

  await Promise.allSettled(listCallOverdueUpdate);
  console.log("list overdue", listCallOverdueUpdate);
};
