import { DDECREMENT, DINCREMENT } from "./actionTypes";

export const increment = (value) => ({
  type: DINCREMENT,
  payload: value,
});
export const decrement = (value) => ({
  type: DDECREMENT,
  payload: value,
});
