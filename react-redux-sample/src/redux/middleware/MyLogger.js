import rootReducer from "../rootReducer";

// middleware
const myLogger = (store) => (next) => (action) => {
  console.log(`Action : ${JSON.stringify(action)}`);
  console.log(`Before : ${JSON.stringify(store.getState())}`);

  const upcomingState = [action].reduce(rootReducer, store.getState());
  console.log(`Upcoming : ${JSON.stringify(upcomingState)}`);

  // pass the action to the next middleware
  return next(action);
};
export default myLogger;
