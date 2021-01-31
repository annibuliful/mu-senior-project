import db from "../db";
import { getVaccineInfoById } from "../util/getVaccineInfo";
import { listLanguages } from "../../../constants/language";
import service from "@/services";

const getListVaccines = (el, language) => getVaccineInfoById(el, language);
export default async (language) => {
  console.log("test non delete");
  let listAppointments = await db.table("appointments").toArray();

  if (listLanguages.includes(language)) {
    const mappedListAppointments = listAppointments.map((appointment) => {
      const vaccineInfo = appointment.customData?.selectedVaccines
        .map((vaccine) => getListVaccines(vaccine, language))
        .map((vaccine) => vaccine.vaccineNameNormal);
      return {
        ...appointment,
        customData: {
          ...appointment.customData,
          selectedVaccines: vaccineInfo,
        },
      };
    });
    const familyList = await service().family.list();

    const existingFamilyAppointment = mappedListAppointments.filter((el) => {
      return familyList.some((f) => {
        return f.fullname === el.customData.childname && f.isDelete === false;
      });
    });
    listAppointments = existingFamilyAppointment
  }

  return listAppointments;
};
