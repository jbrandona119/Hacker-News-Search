import { ARTICLE_ARCHIVE } from "../constants/actionTypes.js";

const INITIAL_STATE = [];

const applyArchiveArticle = (state, action) => [...state, action.id];

function archiveReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ARTICLE_ARCHIVE: {
      return applyArchiveArticle(state, action);
    }
    default:
      return state;
  }
}
export default archiveReducer;
