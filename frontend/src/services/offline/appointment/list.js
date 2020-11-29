import db from "../db";
import { getVaccineInfoById } from "../util/getVaccineInfo";
import { listLanguages } from "../../../constants/language";

const getListVaccines = (el, language) => getVaccineInfoById(el, language);
export default async language => {
  const listAppointments = await db.table("appointments").toArray();

  if (listLanguages.includes(language)) {
    return listAppointments.map(appointment => {
      const vaccineInfo = appointment.customData?.selectedVaccines
        .map(vaccine => getListVaccines(vaccine, language))
        .map(vaccine => vaccine.vaccineNameNormal);

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
