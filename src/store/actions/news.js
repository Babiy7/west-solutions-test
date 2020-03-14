import axios from "../../axios/axios";
import * as ActionType from "../actionTypes";

const loading = () => ({ type: ActionType.NEWS_LOADING });

const success = news => ({ type: ActionType.NEWS_SUCCESS, payload: news });

const fail = e => ({
  type: ActionType.NEWS_FAIL,
  payload: e
});

export const getNews = () => {
  return dispatch => {
    dispatch(loading());

    const data = axios.get();

    data
      .then(response => response.data.articles)
      .then(news => dispatch(success(news)))
      .catch(e => dispatch(fail(e)));
  };
};
