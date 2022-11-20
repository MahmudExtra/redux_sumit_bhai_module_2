import { ADD_PRODUCT, REMOVE_PRODUCT } from "./actionType";

export const addProduct = (id) => {
  return {
    type: ADD_PRODUCT,
    payload: id,
  };
};
export const removeProduct = (id) => {
  return {
    type: REMOVE_PRODUCT,
    payload: id,
  };
};
