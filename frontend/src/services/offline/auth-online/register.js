import { API_URL } from "../../constants";

export const register = (username, password) => {
  return fetch(`${API_URL}/users`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ username, password,gender: "male" })
  });
};
