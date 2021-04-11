import { format, addYears } from "date-fns";
import { th, enUS } from "date-fns/locale";

const thaiDate = date =>
  format(addYears(new Date(date), 543), "dd MMM yyyy", {
    locale: th
  });
const englishDate = date =>
  format(date, "dd MMM yyyy", {
    locale: enUS
  });
export default (listAppointment, language) => {
  listAppointment.forEach(appointment => {
    const data = appointment.customData;
    new Notification("appointment", {
      tag: "syncAppointments",
      body: `${data.childname},${data.selectedVaccines[0]} on ${
        language === "th-TH"
          ? thaiDate(appointment.dates)
          : englishDate(appointment.dates)
      }`
    });
  });
};
