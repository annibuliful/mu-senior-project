import db from "../db";

export default async id => {
  return await db
    .table("appointments")
    .where("appointmentId")
    .equals(id);
};
