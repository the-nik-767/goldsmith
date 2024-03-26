import { useSelector } from "react-redux";
import { calculateDiscountedPrice } from "../utils";

// export const useTotalPrice = () => {
//   const cartItems = useSelector((state) => state.cart.cartItems);
  
//   const totalPrice = cartItems.reduce((acc, curr) =>
//     curr.prdprice * curr.quantity + acc
//   , 0);

//   return totalPrice;
// };

export const useTotalPrice = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const totalPrice = cartItems.reduce((acc, curr) => {
    const discountedPrice = calculateDiscountedPrice(curr.prdprice, curr.discountlable);

    return parseFloat(discountedPrice) * curr.quantity + acc;

  }, 0);
  return totalPrice.toFixed(2);
};