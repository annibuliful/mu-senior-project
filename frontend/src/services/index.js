import offlineService from "./offline";

export let mode = "online";

export const setMode = newMode => {
  mode = newMode;
};
export default () => {
  // return mode === "online" ? {} : offlineService;
  return offlineService;
};
