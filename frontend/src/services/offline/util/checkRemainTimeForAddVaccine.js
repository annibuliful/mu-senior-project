import countRecordTime from "../record/countRecordTime";

import listThVaccines from "../../../locale/TH/vaccines";
import listEnVaccines from "../../../locale/EN/vaccines";

export default async (childId, listReceivedVaccines, language) => {
  if (listReceivedVaccines.length === 0) return;

  let listVaccines = [];
  if (language === "en-US") {
    listVaccines = listEnVaccines;
  } else {
    listVaccines = listThVaccines;
  }

  const listCountRecordTimes = [];
  for (let i = 0; i < listReceivedVaccines.length; i++) {
    const vaccineId = listReceivedVaccines[i];
    const countTime = await countRecordTime(childId, vaccineId);
    listCountRecordTimes.push({ vaccineId: vaccineId, time: countTime });
  }

  return listCountRecordTimes.map((receivedInfo) => {
    const vaccineInfo = listVaccines.find(
      (vaccine) => receivedInfo.vaccineId === vaccine.vaccineId
    );

    const periodTime = vaccineInfo?.injectionPeriodTime;

    const isComplete = periodTime.length === receivedInfo.time + 1;

    return {
      vaccineId: vaccineInfo.vaccineId,
      name: vaccineInfo.vaccineNameNormal,
      nextDay: periodTime[receivedInfo.time + 1],
      isComplete,
    };
  });
};
