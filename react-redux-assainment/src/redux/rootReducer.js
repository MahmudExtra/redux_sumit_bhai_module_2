import { combineReducers } from "redux";
import ProductItemReducer from "./productItem/ProductItemReducer";
import productReducer from "./products/productReducer";
const rootReducer = combineReducers({
  product: productReducer,
  productItem: ProductItemReducer,
});
export default rootReducer;
