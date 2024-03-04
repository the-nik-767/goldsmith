import { addToCart, updateCartItems } from "../Redux/Action/action";
  
export const addToCartHandler = (id, quantity, allPrdData, cartItems, dispatch, openAddToCard) => {
   
    let prd = allPrdData.find((x) => x.id == (typeof id == 'string' ? Number(id) : id ) );

    if (prd) {
      const existingItem = cartItems.find((item) => item.id === (typeof id == 'string' ? Number(id) : id ));

      if (existingItem) {
        existingItem.quantity += quantity;
        dispatch(updateCartItems(existingItem, cartItems));
        dispatch(openAddToCard(true));
      } else {
        const itemToAdd = {
          id: id,
          prdimg: prd.prdimg,
          prdname: prd.prdname,
          quantity: quantity,
          prdprice: prd.prdprice,
        };
        dispatch(addToCart(itemToAdd));
        dispatch(openAddToCard(true));
      }
    } else {
      console.error(`Product with ID ${id} not found.`);
    }
  };