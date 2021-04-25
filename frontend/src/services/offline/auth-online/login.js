import { API_URL } from "../../constants";
import { firestore, messaging } from "../../../firebase";
import { VAPID_KEY } from "../../../constants/api";
export const login = async (username, password) => {
  console.log("username", username);

  try {
    await Notification.requestPermission();
    const deviceToken = await messaging.getToken({ vapidKey: VAPID_KEY });

    const userQuery = await firestore
      .collection("/users")
      .doc(username)
      .get();

    const userData = userQuery.data();

    const listDeviceTokens = userData?.deviceTokens ?? [];
    console.log("aaaaaaa", listDeviceTokens);
    const saveUsername = await firestore
      .collection("/users")
      .doc(username)
      .set({
        deviceTokens: [...listDeviceTokens, deviceToken]
      });
    console.log("saveUsername", saveUsername);
    return fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, password })
    });
  } catch (e) {
    console.log("aaaa", e);
    return fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, password })
    });
  }
};
