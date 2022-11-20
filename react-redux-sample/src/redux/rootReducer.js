import { combineReducers } from "redux";
import counterReducer from "./counters/counterReducer";
import dynamicCounterReducer from "./dynamicCounter/dynamicCounterReducer";

// import counterReducer from "../redux/counters/reducer";
// import dynamicCounterReducer from "../redux/dynamicCounter/reducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  dynamicCounter: dynamicCounterReducer,
});
export default rootReducer;
