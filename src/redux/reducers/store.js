import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { logger } from "redux-logger/src";
import { rootReducer } from "./rootReducer";

export const store = createStore(
  rootReducer,
  compose(applyMiddleware(logger, thunk))
);
