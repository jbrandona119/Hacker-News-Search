const HN_BASE_URL = "https://hn.algolia.com/api/v1/search?query=";

const fetchNews = (query) =>
  fetch(HN_BASE_URL + query).then((response) => response.json());

export { fetchNews };