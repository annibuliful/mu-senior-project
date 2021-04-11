import differenceInDays from "date-fns/differenceInDays";
import listAppointmentService from "./list";

export default async (language) => {
  const listAppointments = await listAppointmentService(language);

  const listVaccinatingAppointments = listAppointments.filter((el) => {
    const result = differenceInDays(new Date(el.dates), new Date());

    return result >= -7 && result <= 7 && el.status !== "vaccinated";
  });
  return listVaccinatingAppointments;
};
