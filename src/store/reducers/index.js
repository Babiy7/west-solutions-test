import { combineReducers } from "redux";
import auth from "../reducers/auth";

const rootReducer = combineReducers({
  authStore: auth
});

export default rootReducer;
