import * as ActionType from "../actionTypes";
import { isValid } from "../../shared/utility";

const loading = () => {
  return { type: ActionType.AUTH_LOADING };
};

export const login = data => {
  return dispatch => {
    dispatch(loading());

    setTimeout(() => {
      if (isValid(data)) {
        localStorage.setItem("isLogin", true);

        dispatch({ type: ActionType.AUTH_SUCCESS });
      } else {
        dispatch({
          type: ActionType.AUTH_FAIL,
          payload: "Your data is incorect"
        });
      }
    }, 2000);
  };
};
