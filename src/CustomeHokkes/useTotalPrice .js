import { useSelector } from "react-redux";

export const useTotalPrice = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  
  const totalPrice = cartItems.reduce((acc, curr) =>
    curr.prdprice * curr.quantity + acc
  , 0);

  return totalPrice;
};