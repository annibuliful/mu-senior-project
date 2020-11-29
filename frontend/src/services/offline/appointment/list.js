import db from "../db";
import { getVaccineInfoById } from "../util/getVaccineInfo";

const listLanguages = ["en-US", "th-TH"];

const getListVaccines = (el, language) => getVaccineInfoById(el, language);
export default async language => {
  if (listLanguages.includes(language)) {
    const listAppointments = await db.table("appointments").toArray();
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
  return await db.table("appointments").toArray();
};
