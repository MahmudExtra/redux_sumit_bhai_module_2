import { DECREMENT, INCREMENT } from "./actionType";

const initialState = {
  productItem: [
    {
      id: 1,
      name: "Asus Vivobook X515MA",
      quantity: 0,
    },
    {
      id: 2,
      name: "Dell E1916HV 18.5 Inch",
      quantity: 0,
    },
    {
      id: 3,
      name: "Canon Eos 4000D 18MP",
      quantity: 0,
    },
  ],
};
function ProductItemReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        productItem: state.productItem.map((item) => {
          if (item.id === action.payload) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }
          return item;
        }),
      };
    case DECREMENT:
      return {
        ...state,
        productItem: state.productItem.map((item) => {
          if (item.id === action.payload) {
            return {
              ...item,
              quantity: item.quantity - 1,
            };
          }
          return item;
        }),
      };

    default:
      return state;
  }
}

export default ProductItemReducer;
