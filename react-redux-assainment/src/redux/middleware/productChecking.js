import { INCREMENT } from "../productItem/actionType";
import { ADD_PRODUCT } from "../products/actionType";

const productChecking = (store) => (next) => (action) => {
  if (action.type === ADD_PRODUCT) {
    const product = store
      .getState()
      .product.products.find((product) => product.id === action.payload);
    if (product.quantity > 0) {
      next(action);
    }
  } else if (action.type === INCREMENT) {
    const product = store
      .getState()
      .product.products.find((product) => product.id === action.payload);
    if (product.quantity > 0) {
      next(action);
    }
  } else {
    return next(action);
  }
};
export default productChecking;
