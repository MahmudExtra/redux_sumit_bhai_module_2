import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";

import rootReducer from "./rootReducer";
import productChecking from "./middleware/productChecking";
// import logger from "redux-logger";

// import myLogger from "../middleware/MyLogger";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(productChecking))
);
export default store;
