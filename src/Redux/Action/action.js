import { ADD_TO_CART } from "../Type/type";

export const addToCart = (size, Img, title,price) => {
  return {
    type: ADD_TO_CART,
    payload: { size,Img,title,price},
  };
};

export const updateCartItemQuantity = (index, quantity) => {
  return {
    type: "UPDATE_CART_ITEM_QUANTITY",
    payload: {
      index,
      quantity,
    },
  };
};