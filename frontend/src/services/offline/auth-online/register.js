import { API_URL } from "../../constants";
import { firestore, messaging } from "../../../firebase";
import { VAPID_KEY } from "../../../constants/api";
export const register = async (username, password) => {
  try {
    await Notification.requestPermission();
    const deviceToken = await messaging.getToken({ vapidKey: VAPID_KEY });

    const saveUsername = await firestore
      .collection("/users")
      .doc(username)
      .set({
        deviceTokens: [deviceToken],
      });

    console.log("saveUsername", saveUsername);
    return fetch(`${API_URL}/users`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password, gender: "male" }),
    });
  } catch (e) {
    return fetch(`${API_URL}/users`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password, gender: "male" }),
    });
  }
};
