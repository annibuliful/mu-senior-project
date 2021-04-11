import { format } from "date-fns";

export default listAppointment => {
  listAppointment.forEach(appointment => {
    const data = appointment.customData;
    new Notification("appointment", {
      body: `${data.childname},${data.selectedVaccines[0]} on ${format(
        appointment.dates,
        "dd MMM yyyy"
      )}`
    });
  });
};
