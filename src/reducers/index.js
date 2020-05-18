import { combineReducers } from "redux";
import articleReducer from "./article";
import archiveReducer from "./archive";

const rootReducer = combineReducers({
  articleState: articleReducer,
  archiveState: archiveReducer,
});

export default rootReducer;
