import db from "../db";
import { listLanguages } from "../../../constants/language";
import { getVaccineInfoById } from "../util/getVaccineInfo";

const getListVaccines = (el, language) => getVaccineInfoById(el, language);

export const getAppointmentById = async (childId, vaccineId) => {
  return (
    await db
      .table("appointments")
      .where("appointmentId")
      .toArray()
  ).filter(
    appointment =>
      appointment.customData.childId === childId &&
      appointment.customData.vaccineId === vaccineId
  );
};

export default async (id, language) => {
  const listAppointments = await db
    .table("appointments")
    .where("appointmentId")
    .equals(Number(id))
    .toArray();

  if (listLanguages.includes(language)) {
    return listAppointments.map(appointment => {
      const vaccineInfo = appointment.customData?.selectedVaccines
        .map(vaccine => getListVaccines(vaccine, language))
        .map(vaccine => ({
          id: vaccine.vaccineId,
          tag: vaccine.vaccineNameNormal
        }));

      return {
        ...appointment,
        customData: {
          ...appointment.customData,
          selectedVaccines: vaccineInfo
        }
      };
    });
  }
  return listAppointments;
};
