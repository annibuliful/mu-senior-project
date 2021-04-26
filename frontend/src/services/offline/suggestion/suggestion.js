import { add } from "date-fns";
import constraintVaccines from "../../../shared/localization/constraint-vaccine";

import { getListVaccineByDate, getVaccineById } from "../vaccine/get";

export const getAllDoseWithCurrentDate = (vaccineId, currentDate, language) => {
  const vaccineInfo = getVaccineById(vaccineId, language);
  if (!vaccineInfo) throw new Error("vaccine not found");

  const listAllDoses = vaccineInfo.injectionPeriodTime.filter(
    (time) => time !== "annually"
  );

  let sum = 0;
  const listAllDosesWithTime = listAllDoses.map((day) => {
    sum += day;
    return {
      appointmentDate: add(currentDate, {
        days: Number(sum),
      }),
    };
  });

  return {
    ...vaccineInfo,
    listAllDosesWithTime,
  };
};

export const getAllDoseById = (vaccineInfo, currentDate) => {
  const listAllDoses = vaccineInfo.injectionPeriodTime.filter(
    (time) => time !== "annually"
  );

  let sum = 0;
  const listAllDosesWithTime = listAllDoses.map((day) => {
    sum += day;
    return {
      appointmentDate: add(currentDate, {
        days: Number(sum),
      }),
    };
  });

  return {
    ...vaccineInfo,
    listAllDosesWithTime,
  };
};

export const suggestion = async (memberInfo, language) => {
  if (!memberInfo) throw new Error("missing member info");
  if (!language) throw new Error("missing language");

  const filteredVaccineForChild = getListVaccineByDate(
    memberInfo.birthDate,
    language
  );

  const receivedVaccineIds = memberInfo.receivedVaccineIds ?? [];

  const filterdVaccineChildNotReceived = filteredVaccineForChild.filter(
    (el) => !receivedVaccineIds.includes(el.vaccineId)
  );

  const diseaseIds = memberInfo.congenitalDiseaseIds ?? [];

  const listVaccineConstraint = constraintVaccines
    .filter((el) => diseaseIds.some((disease) => el.diseaseId === disease))
    .map((el) => el.vaccineId);

  const listForChild = filterdVaccineChildNotReceived.filter(
    (el) => !listVaccineConstraint.includes(el.vaccineId)
  );

  return listForChild.map((vaccine) =>
    getAllDoseById(vaccine, memberInfo.birthDate)
  );
};
