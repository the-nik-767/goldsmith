import { addToCart, updateCartItems } from "../Redux/Action/action";

export const calculateDiscountedPrice = (price, discountLabel) => {
  if (discountLabel) {
    const numericPart = discountLabel.match(/\d+/);
    if (numericPart) {
      const discount = parseFloat(numericPart[0]) / 100;
      const discountedPrice = price * (1 - discount);
      return discountedPrice.toFixed(2);
    } else {
      return price;
    }
  } else {
    return price;  
  }
}; 

export const addToCartHandler = (id, quantity, allPrdData, cartItems, dispatch, openAddToCard) => {
   
    let prd = allPrdData.find((x) => x.id == (typeof id == 'string' ? Number(id) : id ) );
    if (prd) {
      const existingItem = cartItems.find((item) => item.id === (typeof id == 'string' ? Number(id) : id ));
      const discountedPrice = calculateDiscountedPrice(prd.prdprice, prd.discountlable);
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
          prdprice: discountedPrice,
          discountlable:prd.discountlable,
          prddiscount:prd.prddiscount
        };
        dispatch(addToCart(itemToAdd));
        dispatch(openAddToCard(true));
      }
    } else {
      console.error(`Product with ID ${id} not found.`);
    }
  };


  // export const calculateDiscountedPrice = (price, discountLabel) => {
  //   if (discountLabel) {
  //     const numericPart = discountLabel.match(/\d+/);
  //     if (numericPart) {
  //       const discount = parseFloat(numericPart[0]) / 100;
  //       const discountedPrice = price * (1 - discount);
  //       return discountedPrice.toFixed(2);
  //     } else {
  //       return price;
  //     }
  //   } else {
  //     return price;  
  // };}
    
    
  