import {
  ADD_TO_CART,
  IS_LOADING_FALSE,
  IS_LOADING_TRUE,
  OPEN_ADD_TO_CART,
  PAYMENT_DETAILS,
  REMOVE_FROM_CART,
  TOGGLE_ITEM_CHECKED,
  UPDATE_CART_ITEMS,
} from "../Type/type";

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
// export const updateCartItems = (updatedItem, cartItems) => {
//   const existingItemIndex = cartItems.findIndex(
//     (item) => item.id === updatedItem.id
//   );
//   if (existingItemIndex) {
//     cartItems[existingItemIndex] = updatedItem;
//   }
//   return {
//     type: UPDATE_CART_ITEMS,
//     payload: cartItems,updatedItem
//   };
// };
export const updateCartItems = (updatedItem, cartItems) => {
  // const existingItemIndex = cartItems.findIndex(
  //   (item) => item.id === updatedItem.id
  //   );
  // const existingItemIndex1 = cartItems.findIndex(
  //   (item) => item.id !== cartItems.id
  //   );


  // if (existingItemIndex || existingItemIndex1) {
  //   cartItems[existingItemIndex] = updatedItem;
  // }
  // if  (existingItemIndex1) {
  //   cartItems[existingItemIndex] = updatedItem;
  // }

  return {
    type: UPDATE_CART_ITEMS,
    payload: cartItems,
    updatedItem,
  };
};

export const openAddToCard = (isOpen) => {
  return {
    type: OPEN_ADD_TO_CART,
    payload: isOpen,
  };
};

export const trueLoading = () => {
  return {
    type: IS_LOADING_TRUE,
    payload: true,
  };
};

export const falseLoading = () => {
  return {
    type: IS_LOADING_FALSE,
    payload: false,
  };
};
export const toggleItemChecked = (itemId, isChecked) => {
  return {
    type: TOGGLE_ITEM_CHECKED,
    payload: { itemId, isChecked },
  };
};

export const paymentDetalisAction=(paymentDetalis)=>{
  return{
    type:PAYMENT_DETAILS,
    payload:paymentDetalis
  }
}
