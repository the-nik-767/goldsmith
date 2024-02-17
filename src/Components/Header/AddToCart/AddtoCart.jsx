import React, { useEffect, useState } from "react";
import { IoBagOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, updateCartItems } from "../../../Redux/Action/action";
import { useNavigate } from "react-router-dom/dist";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import './style/addtocard.css'
import { MdDelete } from "react-icons/md";
import { Checkbox, FormControlLabel } from "@mui/material";

const AddtoCart = ({ openAddToCart, SetOpenAddToCart }) => {
  // console.log('openAddToCart', openAddToCart)
  const [state, setState] = useState({
    right: false,
    isChecked: false
  });

  useEffect(() => {
    setState({ right: openAddToCart })
  }, [openAddToCart])

  const handleCheckboxChange = (event) => {
    setState({
      ...state,
      isChecked: event.target.checked,
    });
  };

  const toggleDrawer =
    (anchor, open) =>
      (event) => {
        // console.log("::::::::::")
        if (
          event.type === 'keydown' &&
          ((event.key === 'Tab' ||
            event.key === 'Shift'))
        ) {
          return;
        }

        setState({ ...state, [anchor]: open });
        SetOpenAddToCart(open)
      };
  const navigator = useNavigate()
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
          // price: cartItem.price * updatedQuantity,
        };
      }
      return cartItem;
    });
    dispatch(updateCartItems(updatedCartItems));
  };

  const buyNow = () => {
    navigator("/buyNow")
    SetOpenAddToCart(false)
  }

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
    </Box>
  );

  return (

    <div>
      <React.Fragment >
        <IconButton onClick={toggleDrawer('right', true)} style={{ color: 'black' }}>
          <IoBagOutline />
        </IconButton>
        <Drawer
          anchor={'right'}
          open={state['right']}
          onClose={toggleDrawer('right', false)}
          className="p-4"
        >
          <div className=" flex items-center justify-between">
            <Typography variant="h5" color="blue-gray" className="uppercase text-center p-5">
              cart
            </Typography>
            <IconButton
              variant="text"
              color="blue-gray"
              onClick={toggleDrawer('right', false)}
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
          <div className="" style={{ overflow: 'auto' }}>
            <Typography>
              {cartItems.map((item, index) => (
                <div key={index} className="text-sm flex p-5">
                  <div className="me-3">
                    <img
                      src={item.Img}
                      alt={`Product ${index}`}
                      style={{ height: "80px", width: "100px" }}
                    />
                  </div>
                  <div>
                    <div>Name:{item.title}</div>
                    <div>quantity: {item.price * item.quantity}</div>
                    <div>Size: {item.size} </div>
                    <div className="flex">
                      <div className="flex items-center gap-4 mb-5">
                        <Button onClick={() => handleQuantityChange(item, -1)}>-</Button>
                        <div className="font-bold">{item.quantity}</div>
                        <Button onClick={() => handleQuantityChange(item, 1)}>+</Button>
                      </div>
                      <IconButton aria-label="delete" size="large" onClick={() => handleRemoveFromCart(item)} style={{ marginTop: '-20px' }} className="hover:text-black">
                        <MdDelete fontSize="inherit" />
                      </IconButton>
                    </div>
                    <div className="" >
                      {/* <input type="checkbox" name="chkout" id="" checked={state.isChecked} onChange={handleCheckboxChange}/> Select item and checkout */}
                      {/* <FormControlLabel
                        value="Select item and checkout"
                        control={<Checkbox />}
                        label="Select item and checkout"
                        labelPlacement="end"
                        checked={state.isChecked} 
                        onChange={handleCheckboxChange}
                      /> */}
                    </div>
                  </div>
                </div>))}
            </Typography>
          </div>
          <div className="" style={{padding: '0 15px 10px', position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: '9999' }}>
            <Button
              className="text-center f buy-now-btn" style={{ width: '100% !important', color : 'white', padding: '10px 13px 10px 13px', fontSize: '20px', backgroundColor: 'black', color: 'white'}}
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
      </React.Fragment>
    </div>
  );
};
export default AddtoCart;