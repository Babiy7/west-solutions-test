import * as ActionType from "../actionTypes";
import { updatedObject } from "../../shared/utility";

const initialState = {
  loading: false,
  isLogin: false,
  error: null
};

const loading = state => updatedObject(state, { loading: true, error: null });

const success = state =>
  updatedObject(state, { isLogin: true, loading: false, error: null });

const fail = (state, error) =>
  updatedObject(state, { error: error, loading: false });

const logout = (state, isLogin) =>
  updatedObject(state, { isLogin: isLogin, loading: false, error: null });

const isLogin = (state, isLogin) =>
  updatedObject(state, {
    isLogin: isLogin,
    loading: false,
    error: null
  });

const auth = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionType.AUTH_LOADING:
      return loading(state);

    case ActionType.AUTH_SUCCESS:
      return success(state);

    case ActionType.AUTH_FAIL:
      return fail(state, payload);

    case ActionType.AUTH_LOGOUT:
      return logout(state, payload);

    case ActionType.AUTH_USER_ISLOGIN:
      return isLogin(state, payload);

    default:
      return state;
  }
};

export default auth;
