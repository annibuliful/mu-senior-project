import { combineReducers } from "redux";
import localReducer from "./locale";

export default combineReducers({
  locale: localReducer
});
