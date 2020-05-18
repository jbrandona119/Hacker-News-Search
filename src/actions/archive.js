import { ARTICLE_ARCHIVE } from "../constants/actionTypes";

const doArchiveArticle = (id) => ({
  type: ARTICLE_ARCHIVE,
  id,
});

export { doArchiveArticle };