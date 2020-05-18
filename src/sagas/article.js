import { call, put } from "redux-saga/effects";
import { addNews, fetchNewsError } from "../actions/article";
import { fetchNews } from "../api/news";

function* handleFetchNews(action) {
  const { query } = action;

  try {
    const result = yield call(fetchNews, query);
    yield put(addNews(result.hits));
  } catch (error) {
    yield put(fetchNewsError(error));
  }
}

export { handleFetchNews };