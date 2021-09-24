import { combineReducers } from "redux";
import questions from "./questions";
import user from "./user";
import score from "./score";
import { loadingBarReducer } from "react-redux-loading";

export default combineReducers({
    questions,
    user,
    score,
    loadingBar: loadingBarReducer
});