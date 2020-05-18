const isNotArchived = (archiveIds) => (article) =>
  archiveIds.indexOf(article.objectID) === -1;

const getReadableNews = ({ articleState, archiveState }) =>
  articleState.news.filter(isNotArchived(archiveState));

const getFetchError = ({ articleState }) => articleState.error;

export { getReadableNews, getFetchError };
