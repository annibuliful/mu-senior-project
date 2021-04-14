import { format, addYears } from "date-fns";
import { th, enUS } from "date-fns/locale";
// import Queue from "js-queue";

// import PQueue from "p-queue";
// import delay from "delay";

// const queue = new Queue();
// let count = 0;
// queue.on("active", () => {
//   console.log(
//     `Working on item #${++count}.  Size: ${queue.size}  Pending: ${
//       queue.pending
//     }`
//   );
// });

const thaiDate = (date) =>
  format(addYears(new Date(date), 543), "dd MMM yyyy", {
    locale: th,
  });
const englishDate = (date) =>
  format(date, "dd MMM yyyy", {
    locale: enUS,
  });

export default (listAppointments, language) => {
  console.log("aaaa", listAppointments);
  listAppointments.forEach((appointment) => {
    // queue.add(function() {
    const title = "appointment";
    const data = appointment.customData;
    const notificationData = {
      tag: "syncAppointments",
      body: `${data.childname},${data.selectedVaccines[0]} on ${
        language === "th-TH"
          ? thaiDate(appointment.dates)
          : englishDate(appointment.dates)
      }`,
    };

    new Notification("appointment", notificationData);
    navigator.serviceWorker?.ready.then(function(registration) {
      registration.showNotification(title, notificationData);
    });
    // });
    // queue.add(() => delay(2000));
  });
};
