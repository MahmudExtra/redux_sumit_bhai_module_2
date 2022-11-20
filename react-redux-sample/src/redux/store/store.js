import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";

import rootReducer from "../rootReducer";
import logger from "redux-logger";

import myLogger from "../middleware/MyLogger";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(myLogger, logger))
);
export default store;
