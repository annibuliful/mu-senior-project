import firebase from "firebase/app";
import "firebase/firebase-messaging";
import "firebase/firestore";
import "firebase/storage";
import { VAPID_KEY } from "./constants/api";

var firebaseConfig = {
  apiKey: "AIzaSyAycYq1bXG5xNJtq75pzXgGd3ONoiJczEA",
  authDomain: "mu-senior.firebaseapp.com",
  projectId: "mu-senior",
  storageBucket: "mu-senior.appspot.com",
  messagingSenderId: "430977039067",
  appId: "1:430977039067:web:08a7760c600730f688eafe",
  measurementId: "G-FYFV5L0F2J"
};

firebase.initializeApp(firebaseConfig);

export const messaging = firebase.messaging();
export const firestore = firebase.firestore();
export const storage = firebase.storage();

messaging.getToken({ vapidKey: VAPID_KEY }).then(data => {
  console.log("messging-token", data);
});
// export const pushMessage = (vapidKey = VAPID_KEY) =>
//   firebase.messaging().getToken({ vapidKey });
export default firebase;

export const saveAppointment = () => {};
