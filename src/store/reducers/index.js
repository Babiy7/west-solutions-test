import { combineReducers } from "redux";
import auth from "../reducers/auth";
import news from "../reducers/news";

const rootReducer = combineReducers({
  authStore: auth,
  newsStore: news
});

export default rootReducer;
