import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import '../AddToCart/style/addtocard.css'
import { IKImage } from "imagekitio-react";
import './style/sidebar.css'
import { Drawer } from "@material-tailwind/react";
import { IoMdCart } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { openAddToCard, removeFromCart, trueLoading, updateCartItems } from "../../../Redux/Action/action";
import { calculateDiscountedPrice } from "../../../utils";


export const DrawerComponent2 = ({ onClose, event }) => {
  if (event) {
    event.stopPropagation();
  }

  const navigator = useNavigate()
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const allPrdData = useSelector(state => state.product.data);
  const openAddToCart = useSelector((state) => state.cart.openAddToCart);
  const [state, setState] = React.useState({
    left: false,
    sidebarHeight: "100vh"
  });

  useEffect(() => {

    const handleResize = () => {
      setState(prevState => ({
        ...prevState,
        sidebarHeight: window.innerHeight + "px"
      }));
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item));
  };
  const handleQuantityChange = (item, change) => {
    let img = allPrdData.find((x) => x.id === item.id)
    if (img) {
      const existingItem = cartItems.find((x) => x.id === item.id);
      if (existingItem) {

        existingItem.quantity += change;
        if (existingItem.quantity < 1) {
          existingItem.quantity = 1;
        }
        dispatch(updateCartItems(existingItem, cartItems));
        const updatedCartItems = cartItems.map((cartItem) =>
          cartItem.id === existingItem.id ? existingItem : cartItem
        );
        // setCartItems1(updatedCartItems);
      }
    }
  };
  const toggleDrawer = (isOpen) => {
    onClose();
    dispatch(openAddToCard(true))

  };
  const buyNow = () => {
    navigator("/buyNow");
    dispatch(openAddToCard(false))
    // setDialogLoading(false);
  }
  const handleIconButtonClick = (event) => {
    if (!openAddToCart) {
      event.stopPropagation();
    }
    toggleDrawer();
  };
  const DiscountedPrice = (price, discountLabel) => {
    return calculateDiscountedPrice(price, discountLabel);
  };
  return (

    <div>
      <IconButton onClick={() => handleIconButtonClick} style={{ paddingLeft: '10px', cursor: 'pointer', color: 'black' }} className="text-2xl text-black">
        <IoMdCart />
      </IconButton>
      <Drawer
        style={{ backdropFilter: ' blur(10px)' }}
        className="drawer-comp backdrop-filter-blur backdrop-blur-sm"
        placement={'right'}
        open={openAddToCart}
        onClose={() => onClose()}
      // sx={{ width: '250px', maxWidth: '250px' , maxHeight:'100lvh !important',}} 
      >
        {/* <div>Draawer Comp 2</div> */}
        {/* --------------------------------------------------------------------------- */}

        <div className=" flex items-center justify-between ">
          <Typography variant="h5" color="blue-gray" className="uppercase text-center p-5">
            cart
          </Typography>
          <IconButton
            variant="text"
            color="blue-gray"
            onClick={() => onClose()}
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


        <div style={{ overflow: 'auto', }} >
          <Typography>
            {cartItems?.map((item, index) => (
              <div key={index} className="text-sm flex  p-5">
                <div className="me-3">
                  <IKImage
                    src={JSON.parse(item.prdimg)[0]?.url}
                    style={{ width: "150px", height: '150px' }}
                  />
                </div>
                <div>
                  <div><strong>Name: </strong>{item.prdname}</div>
                  <div>
                    <strong>Price: </strong>
                    {item.prdprice}

                  </div>

                  <div>
                    <div className="flex items-center  mb-5">
                      <Button onClick={() => handleQuantityChange(item, -1)}>-</Button>
                      <div className="font-bold">{item.quantity}</div>
                      <Button onClick={() => handleQuantityChange(item, 1)}>+</Button>
                    </div>
                    <IconButton aria-label="delete" onClick={() => handleRemoveFromCart(item)} className="hover:text-black flex justify-end">
                      {/* <MdDelete fontSize="inherit" /> */}Remove
                    </IconButton>
                  </div>

                </div>
              </div>))}
          </Typography>
        </div>
        <div style={{ padding: ' 15px 10px', position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: 'white' }}>
          {/* position: 'absolute' */}
          <Button
            className="text-center f buy-now-btn" style={{ width: '100% !important', color: 'white', padding: '10px 13px 10px 13px', fontSize: '20px', backgroundColor: 'black', color: 'white' }}
            onClick={() => {
              // if (state.isChecked) {
              buyNow()
              // } else {
              //   alert("Please select an item to checkout.");
              // }
            }}
          >
            Buy Now
          </Button>
        </div>
      </Drawer>
    </div>
  );
};
