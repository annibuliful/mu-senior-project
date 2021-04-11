import { format, addYears } from "date-fns";
import { th, enUS } from "date-fns/locale";

import PQueue from "p-queue";
import delay from "delay";

const queue = new PQueue({ concurrency: 1 });
let count = 0;
queue.on("active", () => {
  console.log(
    `Working on item #${++count}.  Size: ${queue.size}  Pending: ${
      queue.pending
    }`
  );
});

const thaiDate = date =>
  format(addYears(new Date(date), 543), "dd MMM yyyy", {
    locale: th
  });
const englishDate = date =>
  format(date, "dd MMM yyyy", {
    locale: enUS
  });
export default (listAppointments, language) => {
  listAppointments.forEach(appointment => {
    queue.add(function() {
      const data = appointment.customData;
      new Notification("appointment", {
        tag: "syncAppointments",
        body: `${data.childname},${data.selectedVaccines[0]} on ${
          language === "th-TH"
            ? thaiDate(appointment.dates)
            : englishDate(appointment.dates)
        }`
      });
    });
    queue.add(() => delay(500));
  });
};