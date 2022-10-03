import { combineReducers } from "redux";
import { wordsReducer } from "./wordsReducer";

export const rootReducer = combineReducers({
  wordsReducer,
});
