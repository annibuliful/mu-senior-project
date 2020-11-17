import listAppointmentService from "./list";

export default async () => {
  const listAppointments = listAppointmentService();
  console.log("list appointment", listAppointments);
};
