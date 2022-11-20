import { ADD_PRODUCT, REMOVE_PRODUCT } from "./actionType";

const initialState = {
  products: [
    {
      id: 1,
      name: "Asus Vivobook X515MA ",
      quantity: 3,
      price: 35500,
    },
    {
      id: 2,
      name: "Dell E1916HV 18.5 Inch",
      quantity: 2,
      price: 9300,
    },
    {
      id: 3,
      name: "Canon Eos 4000D 18MP",
      quantity: 1,
      price: 36500,
    },
  ],
};
const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        products: state.products.map((product) => {
          if (product.id === action.payload) {
            return {
              ...product,
              quantity: product.quantity - 1,
            };
          }
          return product;
        }),
      };

    case REMOVE_PRODUCT:
      return {
        ...state,
        products: state.products.map((product) => {
          if (product.id === action.payload) {
            return {
              ...product,
              quantity: product.quantity + 1,
            };
          }
          return product;
        }),
      };

    default:
      return state;
  }
};
export default productReducer;
