// // eslint-disable-next-line no-undef
// importScripts("https://www.gstatic.com/firebasejs/8.4.1/firebase-app.js");
// // eslint-disable-next-line no-undef
// importScripts("https://www.gstatic.com/firebasejs/8.4.1/firebase-messaging.js");

// // eslint-disable-next-line no-undef
// importScripts("https://www.gstatic.com/firebasejs/8.4.1/firebase-firestore.js");
// importScripts(
//   "https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js"
// );

// // const app = firebase.initializeApp(firebaseConfig);
// // firebase.firestore().settings({ experimentalForceLongPolling: true });

// // app
// //   .messaging()
// //   .getToken({ vapidKey: VAPID_KEY })
// //   .then((data) => {
// //     console.log("messging-token-service-worker", data);
// //     app
// //       .firestore()
// //       .collection("messeging-token")
// //       .add({
// //         serviceWorker: true,
// //         token: data,
// //       });
// //   });

// firebase.initializeApp(firebaseConfig);

// const messaging = firebase.messaging();
// console.log("messaging", messaging);
// // Customize notification here
// const notificationTitle = "Background Message Title";
// const notificationOptions = {
//   body: "Background Message body.",
//   icon: "/firebase-logo.png",
// };
// console.log("navigator.serviceWorker", navigator.serviceWorker);

// navigator.serviceWorker.ready.then(function(registration) {
//   registration.showNotification("Vibration Sample", {
//     body: "Buzz! Buzz!",
//     icon: "../images/touch/chrome-touch-icon-192x192.png",
//     vibrate: [200, 100, 200, 100, 200, 100, 200],
//     tag: "vibration-sample",
//   });
// });
// // messaging.setBackgroundMessageHandler(function(payload) {
// //   console.log(
// //     "[firebase-messaging-sw.js] Received background message ",
// //     payload
// //   );

// // });
importScripts("https://www.gstatic.com/firebasejs/8.4.1/firebase-app.js");

const VAPID_KEY =
  "BL3T2UrD72S7-BzpdvoECHPm50e6UOnG6Xlj39wQw5269a9xUBKMUQNMpAfNU3bMSXj_E3R696uAOkmh6tWFN6M";
var firebaseConfig = {
  apiKey: "AIzaSyAycYq1bXG5xNJtq75pzXgGd3ONoiJczEA",
  authDomain: "mu-senior.firebaseapp.com",
  projectId: "mu-senior",
  storageBucket: "mu-senior.appspot.com",
  messagingSenderId: "430977039067",
  appId: "1:430977039067:web:08a7760c600730f688eafe",
  measurementId: "G-FYFV5L0F2J",
};
firebase.initializeApp(firebaseConfig);

let messaging = null;
if (typeof Notification !== "undefined") {
  importScripts(
    "https://www.gstatic.com/firebasejs/8.4.1/firebase-messaging.js"
  );
  messaging = firebase?.messaging();
}

messaging?.onBackgroundMessage(function(payload) {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  // Customize notification here
  // const notificationTitle = "Background Message Title";
  // const notificationOptions = {
  //   body: "Background Message body.",
  //   icon: "/firebase-logo.png",
  // };

  // self.registration.showNotification(
  //   payload.notification.title,
  //   notificationOptions
  // );
});

// const options = {
//   body: "Vaccinet",
//   // icon: push_message.notification.icon,
//   // image: push_message.notification.image,
//   tag: "alert",
// };
// self.registration.showNotification("Vaccinet", options);
