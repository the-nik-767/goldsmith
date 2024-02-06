import React from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { IoBagOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, updateCartItems } from "../../../Redux/Action/action";

const AddtoCart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const [openRight, setOpenRight] = React.useState(false);

  const openDrawerRight = () => setOpenRight(true);
  const closeDrawerRight = () => setOpenRight(false);

  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item));
  };

  const handleQuantityChange = (item, change) => {
    const updatedCartItems = cartItems.map((cartItem) => {
      if (cartItem === item) {
        const updatedQuantity = cartItem.quantity + change;
        return {
          ...cartItem,
          quantity: updatedQuantity > 0 ? updatedQuantity : 1,
        };
      }
      return cartItem;
  });
  dispatch(updateCartItems(updatedCartItems));
};

  return (
    <React.Fragment>
      <div>
        <IoBagOutline onClick={openDrawerRight} />
      </div>
      <Drawer
        placement="right"
        open={openRight}
        onClose={closeDrawerRight}
        className="p-4"
      >
        <div className="mb-6 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray" className="uppercase ">
            cart
          </Typography>
          <IconButton
            variant="text"
            color="blue-gray"
            onClick={closeDrawerRight}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <div>
          <Typography>
            {cartItems.map((item, index) => (
              <div key={index} className="text-sm flex">
                <div className="me-3">
                  <img
                    src={item.Img}
                    alt={`Product ${index}`}
                    style={{ height: "80px", width: "80px" }}
                  />
                </div>
                <div>
                  <div>{item.title}</div>
                  <div> {item.price*item.quantity}</div>
                  <div> Size: {item.size} </div>
                  <div>
                  <div className="flex items-center gap-4 mb-5">
                    <Button onClick={() => handleQuantityChange(item, -1)}>-</Button>
                    <div className="font-bold">{item.quantity}</div>
                    <Button onClick={() => handleQuantityChange(item, 1)}>+</Button>
                  </div>
                  <div onClick={() => handleRemoveFromCart(item)} className="cursor-pointer">Remove</div>
                </div>
                </div>
              </div>
            ))}

          </Typography>
        </div>
      </Drawer>
    </React.Fragment>
  );
};

export default AddtoCart;