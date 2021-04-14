/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
// eslint-disable-next-line no-undef
import { register } from "register-service-worker";
import { format, addYears } from "date-fns";
import { th, enUS } from "date-fns/locale";
import service from "./services";
register("firebase-messaging-sw.js");
register("background-sync.js");
// navigator.serviceWorker.register("sw.js");

const thaiDate = date =>
  format(addYears(new Date(date), 543), "dd MMM yyyy", {
    locale: th
  });
const englishDate = date =>
  format(date, "dd MMM yyyy", {
    locale: enUS
  });

const language = navigator.language;
Notification.requestPermission(function(result) {
  if (result === "granted") {
    service()
      .appointment.cronCheckStatus()
      .then(async () => {
        const userInfo = JSON.parse(localStorage.getItem("userInfo"));
        const data = await service().appointment.listNonDelete(
          language,
          userInfo.userId
        );

        const listAppointments = data.filter(
          event => event.status === "vaccinating"
        );
        const registration = await navigator.serviceWorker.ready;
        console.log("aaaa", listAppointments);

        listAppointments.forEach(appointment => {
          const title = "appointment";
          const data = appointment.customData;
          const notificationData = {
            tag: "syncAppointments",
            body: `${data.childname},${data.selectedVaccines[0]} on ${
              language === "th-TH"
                ? thaiDate(appointment.dates)
                : englishDate(appointment.dates)
            }`
          };

          new Notification("appointment", notificationData);
          registration.showNotification(title, notificationData);
        });
      });
  }
});

if (process.env.NODE_ENV === "production") {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready() {
      console.log(
        "App is being served from cache by a service worker.\n" +
          "For more details, visit https://goo.gl/AFskqB"
      );
    },
    registered() {
      console.log("Service worker has been registered.");
    },
    cached() {
      console.log("Content has been cached for offline use.");
    },
    updatefound() {
      console.log("New content is downloading.");
    },
    updated() {
      console.log("New content is available; please refresh.");
    },
    offline() {
      console.log(
        "No internet connection found. App is running in offline mode."
      );
    },
    error(error) {
      console.error("Error during service worker registration:", error);
    }
  });
}
