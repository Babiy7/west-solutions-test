import * as ActionType from "../actionTypes";
import { updatedObject } from "../../shared/utility";

const initialState = {
  loading: false,
  news: null,
  error: null
};

const loading = state => updatedObject(state, { loading: true, error: null });

const success = (state, news) =>
  updatedObject(state, { news: news, loading: false, error: null });

const fail = (state, error) =>
  updatedObject(state, { error: error, loading: false });

const auth = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionType.NEWS_LOADING:
      return loading(state);

    case ActionType.NEWS_SUCCESS:
      return success(state, payload);

    case ActionType.NEWS_FAIL:
      return fail(state, payload);

    default:
      return state;
  }
};

export default auth;
