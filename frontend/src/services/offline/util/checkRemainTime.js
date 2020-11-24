import countRecordTime from "../record/countRecordTime";
import listVaccines from "../../../locale/EN/vaccines";
export default async (childId, listReceivedVaccines) => {
  if (listReceivedVaccines.length === 0) return;

  const listCountRecordTimes = [];
  for (let i = 0; i < listReceivedVaccines.length; i++) {
    const vaccineName = listReceivedVaccines[i];
    const countTime = await countRecordTime(childId, vaccineName);
    listCountRecordTimes.push({ name: vaccineName, time: countTime });
  }

  return listCountRecordTimes.map(receivedInfo => {
    const periodTime = listVaccines.find(
      vaccine => receivedInfo.name === vaccine.vaccineNameNormal
    )?.injectionPeriodTime;
    const isComplete = !periodTime[receivedInfo.time + 1];
    return {
      name: receivedInfo.name,
      nextDay: periodTime[receivedInfo.time + 1],
      isComplete
    };
  });
};
