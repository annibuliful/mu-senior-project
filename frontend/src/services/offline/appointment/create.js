import db from "../db";
import { firestore } from "../../../firebase";
import { getVaccineById } from "../vaccine/get";
import { getUnixTime, format } from "date-fns";
import { SequentialTaskQueue } from "sequential-task-queue";

const queue = new SequentialTaskQueue();

export const addAppointmentToFirebase = async data => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const userOnlineInfo = userInfo.onlineInfo;
  const username = userOnlineInfo?.username;
  const listVaccineIds = data.customData.selectedVaccines;

  const listVaccineNames =
    listVaccineIds
      ?.map(id => getVaccineById(id))
      ?.map(vaccine => vaccine.vaccineNameNormal) ?? [];

  const unixTimeStamp = getUnixTime(data.dates);
  const appointmentDate = format(data.dates, "yyyy-MM-dd");

  await firestore
    .collection(`/users`)
    .doc(username)
    .collection("appointments")
    .add({ data, appointmentDate, unixTimeStamp, listVaccineNames });
};

export const addAppointmentTask = data => () => {
  return new Promise((resolve, reject) => {
    addAppointmentToFirebase(data)
      .then(() => {
        console.log("[add appointment] added => ", data);
        resolve();
      })
      .catch(e => {
        console.error("[add appointment]", e);
        reject();
      });
  });
};

export default async data => {
  try {
    const listVaccineIds = data.customData.selectedVaccines;
    if (listVaccineIds.length === 0) return;

    queue.push(addAppointmentTask(data));
    // await addAppointmentToFirebase(data);
    return await db.table("appointments").add(data);
  } catch (e) {
    console.log("error", e);
    return await db.table("appointments").add(data);
  }
};

export const toggleCreateAppointment = async (toggle, data) => {
  const vaccineId = data.vaccine;
  const childId = data.childId;
  const listFamilies = await db
    .table("families")
    .where("familyId")
    .equals(Number(childId))
    .toArray();

  const childInfo = listFamilies.find(child => child.familyId === childId);
  if (!childInfo) return;

  if (toggle) {
    const recordData = {
      childId,
      childname: childInfo.childname,
      selectedVaccines: vaccineId,
      receivingDate: data.receivingDate,
      batchNO: data.batchNO,
      hostpitalName: data.hostpitalName,
      doctorInfo: data.doctorInfo,
      freetext: data.freetext,
      recordImage: data.recordImage,
      photoDate: data.photoDate ?? new Date(),
      appointmentId: data.appointmentId
    };

    childInfo.receivedVaccines = [...childInfo.receivedVaccines, vaccineId];
    await Promise.all([
      db.table("records").add(recordData),
      db.table("appointments").update(Number(data.appointmentId), {
        dot: "green",
        status: "vaccinated"
      })
    ]);
  } else {
    childInfo.receivedVaccines = childInfo.receivedVaccines.filter(
      id => id !== vaccineId
    );
    await Promise.all([
      db.table("records").delete(data.recordId),
      db.table("appointments").update(Number(data.appointmentId), {
        dot: "gray",
        status: "in-progress"
      })
    ]);
  }
  await db.table("families").update(childId, childInfo);
};
