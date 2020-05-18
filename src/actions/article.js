import {
  NEWS_ADD,
  NEWS_FETCH,
  NEWS_FETCH_ERROR,
} from "../constants/actionTypes";

const addNews = (news) => ({
  type: NEWS_ADD,
  news,
});

const fetchNews = (query) => ({
  type: NEWS_FETCH,
  query,
});
const fetchNewsError = (error) => ({
  type: NEWS_FETCH_ERROR,
  error,
});

export { addNews, fetchNews, fetchNewsError };
