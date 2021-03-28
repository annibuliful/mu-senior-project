import db from "../db";

export const removeByAppointmentId = appointmentId => {
  return db
    .table("records")
    .where("appointmentId")
    .equals(appointmentId)
    .delete();
};

export const removeById = id => {
  return db
    .table("records")
    .where("recordId")
    .equals(id)
    .delete();
};
