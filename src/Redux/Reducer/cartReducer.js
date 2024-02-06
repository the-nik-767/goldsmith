
import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_CART_ITEMS } from "../Type/type";
const initialState = {
  cartItems: [],
};
export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case UPDATE_CART_ITEMS:
      return {
        ...state,
        cartItems: action.payload,
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item !== action.payload),
      };
    default:
      return state;
  }
};