import * as ActionType from "../actionTypes";
import { isValid } from "../../shared/utility";

const loading = () => ({ type: ActionType.AUTH_LOADING });

const success = () => ({ type: ActionType.AUTH_SUCCESS });

const fail = () => ({
  type: ActionType.AUTH_FAIL,
  payload: "Your data is incorect"
});

const authLogout = isLogin => ({
  type: ActionType.AUTH_LOGOUT,
  payload: isLogin
});

const authUserIslogin = isLogin => ({
  type: ActionType.AUTH_USER_ISLOGIN,
  payload: isLogin
});

export const login = data => {
  return dispatch => {
    dispatch(loading());

    setTimeout(() => {
      if (isValid(data)) {
        localStorage.setItem("isLogin", true);

        dispatch(success());
      } else {
        dispatch(fail());
      }
    }, 2000);
  };
};

export const logout = () => {
  return dispatch => {
    dispatch(loading());

    setTimeout(() => {
      localStorage.setItem("isLogin", false);

      const isLogin = localStorage.getItem("isLogin");
      const boolValue = isLogin === "false";

      dispatch(authLogout(!boolValue));
    }, 2000);
  };
};

export const isLogin = () => {
  return dispatch => {
    const isLogin = localStorage.getItem("isLogin");
    const boolValue = isLogin === "true";

    if (boolValue) {
      dispatch(authUserIslogin(boolValue));
    }
  };
};
