import * as ActionType from "../actionTypes";

const initialState = {
  loading: false,
  isLogin: false,
  error: null
};

const loading = state => {
  return { ...state, ...{ loading: true, error: null } };
};

const success = state => {
  return { ...state, ...{ loading: false, isLogin: true, error: null } };
};

const fail = (state, error) => {
  return { ...state, ...{ error: error, loading: false } };
};

const auth = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionType.AUTH_LOADING:
      console.log("loading");
      return loading(state);

    case ActionType.AUTH_SUCCESS:
      return success(state);

    case ActionType.AUTH_FAIL:
      return fail(state, payload);

    case ActionType.AUTH_USER_ISLOGIN:
      return { ...state, ...payload };

    case ActionType.AUTH_LOGOUT:
      return { ...state, ...payload };

    default:
      return state;
  }
};

export default auth;
