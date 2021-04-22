// eslint-disable-next-line no-undef
importScripts("https://www.gstatic.com/firebasejs/8.2.7/firebase-app.js");
// eslint-disable-next-line no-undef
importScripts("https://www.gstatic.com/firebasejs/8.2.7/firebase-messaging.js");

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

const app = firebase.initializeApp(firebaseConfig);
app
  .messaging()
  .getToken({ vapidKey: VAPID_KEY })
  .then((data) => {
    console.log("messging-token", data);
  });
