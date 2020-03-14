import axios from "axios";
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

    const data = axios.get(
      "http://newsapi.org/v2/everything?q=bitcoin&from=2020-02-14&sortBy=publishedAt&apiKey=a2141125460b419eb95edb2eedcd474d"
    );

    data
      .then(response => response.data.articles)
      .then(news => {
        console.log(news);
        dispatch(success(news));
      })
      .catch(e => dispatch(fail(e)));
  };
};
