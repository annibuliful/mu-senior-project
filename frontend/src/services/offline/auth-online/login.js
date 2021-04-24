import { API_URL } from "../../constants";
import { firestore, messaging } from "../../../firebase";
import { VAPID_KEY } from "../../../constants/api";
export const login = async (username, password) => {
  console.log("username", username);

  try {
    await Notification.requestPermission();
    const deviceToken = await messaging.getToken({ vapidKey: VAPID_KEY });

    const saveUsername = await firestore
      .collection("/users")
      .doc(username)
      .set(
        {
          deviceToken,
        },
        { merge: true }
      );
    console.log("saveUsername", saveUsername);
    return fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
  } catch (e) {
    return fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
  }
};
