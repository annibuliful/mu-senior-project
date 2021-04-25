import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import { add, getUnixTime, sub } from "date-fns";
import { groupBy, uniq } from "lodash";
// import PQueue from "p-queue";
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const firebaseConfig = {
  apiKey: "AIzaSyAycYq1bXG5xNJtq75pzXgGd3ONoiJczEA",
  authDomain: "mu-senior.firebaseapp.com",
  projectId: "mu-senior",
  storageBucket: "mu-senior.appspot.com",
  messagingSenderId: "430977039067",
  appId: "1:430977039067:web:08a7760c600730f688eafe",
  measurementId: "G-FYFV5L0F2J",
};

admin.initializeApp(firebaseConfig);

export const sendNotificaton = functions.https.onRequest(async (req, res) => {
  const token = req.body.token;
  const payload = {
    notification: {
      title: "Firebase test trigger",
      body: `is now following you.`,
    },
  };
  const result = await admin.messaging().sendToDevice(token, payload);
  res.send(result);
});

const buildNotification = (data: any) => {
  const customData = data.data.customData;
  const childName = customData.childname;
  const time = customData.time;
  // const vaccineId = customData.vaccineId;
  const vaccineNames = data.listVaccineNames;
  return {
    title: `${childName} Today:${time} with ${vaccineNames.join(",")}`,
  };
};
export const setNotificationByUsername = functions.https.onRequest(
  async (req, res) => {
    const username = req.body.username;
    if (!username) {
      res.status(404).send("Username not found");
      return;
    }

    try {
      const userQuery = await admin
        .firestore()
        .collection("/users")
        .doc(username)
        .get();
      const userInfo = userQuery.data();
      const appointmentsQuery = await admin
        .firestore()
        .collection("/users")
        .doc(username)
        .collection("appointments")
        .limit(3)
        .get();
      const listAppointments: any[] = [];
      appointmentsQuery.forEach((appo) => {
        listAppointments.push(buildNotification(appo.data()));
      });
      const deviceToken = userInfo?.deviceToken;
      if (deviceToken) {
        await Promise.all(
          listAppointments.map((appointment) =>
            admin.messaging().sendToDevice(deviceToken, {
              notification: {
                title: appointment.title,
              },
            })
          )
        );
      }
      res.send({
        listAppointments: listAppointments,
        userInfo,
      });
    } catch (e) {
      res.status(500).send(e);
    }
  }
);

const getAllAppointmentToday = async () => {
  const startDate = getUnixTime(sub(new Date(), { days: 1 }));
  const endDate = getUnixTime(add(new Date(), { days: 7 }));

  const userQuery = await admin
    .firestore()
    .collection("/users")
    .get();

  const listUsers: any[] = [];
  userQuery.forEach((user) => {
    const userData = user.data();
    listUsers.push({ userId: user.id, deviceTokens: userData.deviceTokens });
  });
  const listAppointments: any[] = [];

  for (let i = 0; i < listUsers.length; i++) {
    const userId = listUsers[i].userId;
    const listUserAppointments = await admin
      .firestore()
      .collection("/users")
      .doc(userId)
      .collection("appointments")
      .get();

    listUserAppointments.forEach((appointment) => {
      listAppointments.push({ appointment: appointment.data(), userId });
    });
  }

  const listAppointmentInPeriod = listAppointments.filter(
    ({ appointment }) =>
      appointment.unixTimeStamp >= startDate &&
      appointment.unixTimeStamp <= endDate
  );
  const groupByUserId = groupBy(listAppointments, ({ userId }) => userId);

  return {
    listAppointmentInPeriod,
    groupByUserId,
    listUsers,
  };
};

// const queue = new PQueue({ concurrency: 2 });

export const testGetAllUser = functions.https.onRequest(async (req, res) => {
  const { listAppointmentInPeriod, listUsers } = await getAllAppointmentToday();
  const listNotifications: any[] = [];

  listUsers.forEach((user) => {
    const listAppointments: any[] = listAppointmentInPeriod
      .filter((appointment) => appointment.userId === user.userId)
      .map(({ appointment }) => appointment);

    const listDeviceTokens: string[] = user.deviceTokens;

    for (let i = 0; i < listAppointments.length; i++) {
      const appointment = listAppointments[i];

      listNotifications.push({
        appointment: buildNotification(appointment),
        listDeviceTokens,
      });
    }
  });

  const messageResult: any[] = [];

  for (let i = 0; i < listNotifications.length; i++) {
    const notification = listNotifications[i];
    const title = notification.appointment.title;
    const listDeviceTokens: any[] = uniq(notification.listDeviceTokens);

    const result = await admin.messaging().sendToDevice(listDeviceTokens[0], {
      notification: {
        title,
      },
    });

    messageResult.push(result);
  }
  res.send({
    listAppointmentInPeriod,
    listUsers,
    listNotifications,
    messageResult,
  });
});

export const sendNotificatonEveryDay = functions.pubsub
  .schedule("0 8 * * *")
  .timeZone("Asia/Bangkok")
  .onRun(async (context) => {
    const {
      listAppointmentInPeriod,
      listUsers,
    } = await getAllAppointmentToday();
    const listNotifications: any[] = [];

    listUsers.forEach((user) => {
      const listAppointments: any[] = listAppointmentInPeriod
        .filter((appointment) => appointment.userId === user.userId)
        .map(({ appointment }) => appointment);

      const listDeviceTokens: string[] = user.deviceTokens;

      for (let i = 0; i < listAppointments.length; i++) {
        const appointment = listAppointments[i];

        listNotifications.push({
          appointment: buildNotification(appointment),
          listDeviceTokens,
        });
      }
    });

    const messageResult: any[] = [];

    for (let i = 0; i < listNotifications.length; i++) {
      const notification = listNotifications[i];
      const title = notification.appointment.title;
      const listDeviceTokens: any[] = uniq(notification.listDeviceTokens);

      const result = await admin.messaging().sendToDevice(listDeviceTokens[0], {
        notification: {
          title,
        },
      });

      messageResult.push(result);
    }

    console.log(`message-result ${new Date().toDateString()}`, messageResult);
  });
