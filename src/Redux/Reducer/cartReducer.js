import {
  ADD_TO_CART,
  OPEN_ADD_TO_CART,
  REMOVE_FROM_CART,
  TOGGLE_ITEM_CHECKED,
  UPDATE_CART_ITEMS,
} from "../Type/type";

const initialState = {
  openAddToCart: false,
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
      console.log("UPDATE_CART_ITEMS", action);
      const updatedItems = state.cartItems.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            quantity: item.quantity + action.payload.change,
          };
        }
        return item;
      });
      console.log(updatedItems)
      return {
        ...state,
        cartItems: updatedItems,
        // cartItems: action.payload,
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item !== action.payload),
      };
    case OPEN_ADD_TO_CART:
      // console.log('Open')
      return {
        ...state,
        openAddToCart: action.payload,
      };
    case TOGGLE_ITEM_CHECKED:
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload.itemId
            ? { ...item, isChecked: action.payload.isChecked }
            : item
        ),
      };
    default:
      return state;
  }
};
