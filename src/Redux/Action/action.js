import {
  ADD_TO_CART,
  IS_LOADING_FALSE,
  IS_LOADING_TRUE,
  OPEN_ADD_TO_CART,
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

  // console.log('cartItems-----',cartItems)
  // console.log('updatedItem.id',updatedItem.id)
  // console.log('existingItemIndex',existingItemIndex)
  // console.log('existingItemIndex1',existingItemIndex1)

  // if (existingItemIndex || existingItemIndex1) {
  //   console.log('if existingItemIndex',existingItemIndex)
  //   console.log('if existingItemIndex1',existingItemIndex1)
  //   console.log('pppppp----------')
  //   cartItems[existingItemIndex] = updatedItem;
  // }
  // if  (existingItemIndex1) {
  //   console.log('ooooooo--------')
  //   cartItems[existingItemIndex] = updatedItem;
  // }
  
  return {
    type: UPDATE_CART_ITEMS,
    payload: cartItems, updatedItem
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
  console.log(itemId)
  return{
  type: TOGGLE_ITEM_CHECKED,
  payload: { itemId, isChecked },
}

};