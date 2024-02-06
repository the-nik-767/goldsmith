import { ADD_TO_CART,REMOVE_FROM_CART, UPDATE_CART_ITEMS } from "../Type/type";

export const addToCart = (item) => {
  return {
    type: ADD_TO_CART,
    payload: item,
  };
};

export const removeFromCart = (item) => {
  return {
    type: REMOVE_FROM_CART,
    payload: item,
  };
};

export const updateCartItems = (cartItems) => {
  return {
    type: UPDATE_CART_ITEMS,
    payload: cartItems,
  };
};
