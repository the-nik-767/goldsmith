import { ADD_TO_CART } from "../Type/type";

export const addToCart = (size, type) => {
  return {
    type: ADD_TO_CART,
    payload: { size, type},
  };
};