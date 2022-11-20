import { DECREMENT, INCREMENT } from "./actionType";

export const incrementProductItem = (id) => {
  return {
    type: INCREMENT,
    payload: id,
  };
};
export const decrementProductItem = (id) => {
  return {
    type: DECREMENT,
    payload: id,
  };
};
