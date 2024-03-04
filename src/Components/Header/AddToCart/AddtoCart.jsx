import React, { useEffect, useState } from "react";
import { IoBagOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { openAddToCard, removeFromCart, trueLoading, updateCartItems } from "../../../Redux/Action/action";
import { useNavigate } from "react-router-dom/dist";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import './style/addtocard.css'
import { MdDelete } from "react-icons/md";
import { IKImage } from "imagekitio-react";
import { Bars } from "react-loader-spinner";
import { FaOpencart } from "react-icons/fa";
 
const AddtoCart = ({ isChecked }) => {
  const [state, setState] = useState({
    right: false,
    isChecked: {}
  });

  const navigator = useNavigate()
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const allPrdData = useSelector(state => state.product.data);
  const openAddToCart = useSelector((state) => state.cart.openAddToCart);
  // console.log('openAddToCart',openAddToCart, cartItems)

  // const [openRight, setOpenRight] = useState(false);
  const [dialogLoading, setDialogLoading] = useState(false);
  const [cartItems1, setCartItems1] = useState([]);


  useEffect(() => {
    setState({ right: openAddToCart })

  }, [openAddToCart])

  // const handleCheckboxChange = (event) => {
  //   setState({
  //     ...state,
  //     isChecked: event.target.checked,
  //   });
  //   // console.log(event) 
  // };
  // const handleCheckboxChange = (event, itemId) => {
  //   setState(prevState => ({
  //     ...prevState,
  //     isChecked: {
  //       ...prevState.isChecked,
  //       [itemId]: event.target.checked,
  //     },
  //   }));
  // };

  const toggleDrawer =(anchor, open) =>(event) => {
     if (event.type === 'keydown' &&((event.key === 'Tab' || event.key === 'Shift'))) {
          return;
        }

        setState({ ...state, [anchor]: open });
        // dispatch(trueLoading())
        // console.log('true------')
        dispatch(openAddToCard(open))
        // dispatch(trueLoading())

      };

  // const openDrawerRight = () => setOpenRight(true);
  // const closeDrawerRight = () => setOpenRight(false);

  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item));
  };
  const handleQuantityChange = (item, change) => {
    let img = allPrdData.find((x) => x.id === item.id)
    if (img) {
      const existingItem = cartItems.find((x) => x.id === item.id);
      if (existingItem) {

        existingItem.quantity += change;
        dispatch(updateCartItems(existingItem, cartItems));
        const updatedCartItems = cartItems.map((cartItem) =>
          cartItem.id === existingItem.id ? existingItem : cartItem
        );
        setCartItems1(updatedCartItems);
      }
    }
  };
  // const handleQuantityChangedec = (item, change) => {
  //   let img = allPrdData.find((x) => x.id === item.id)

  //   if (img) {
  //     const existingItem = cartItems.find((x) => x.id === item.id);
  //     if (existingItem) {

  //       existingItem.quantity--;
  //       dispatch(updateCartItems(existingItem, cartItems));
  //       const updatedCartItems = cartItems.map((cartItem) =>
  //         cartItem.id === existingItem.id ? existingItem : cartItem
  //       );

  //       setCartItems1(updatedCartItems);
  //     }
  //   }
  // };

  // const handleQuantityChange = (item, change) => {
  //   const updatedCartItems = cartItems.map((cartItem) => {
  //     // console.log('cartItems ---',cartItems)
  //     if (cartItem === item) {
  //       const updatedQuantity = cartItem.quantity + change;
  //       // console.log('cartItem.quantity------>',cartItem.quantity + change)
  //       // console.log('change---->',change)
  //       console.log('updatedQuantity--->',updatedQuantity)
  //       return {
  //         ...cartItem,
  //         quantity: updatedQuantity > 0 ? updatedQuantity : 1,
  //         // price: cartItem.price * updatedQuantity,
  //       };  
  //     }
  //     // console.log('return cartItem---->',cartItem)
  //     return cartItem;
  //   });
  //   console.log('updatedCartItems----',updatedCartItems)
  //   dispatch(updateCartItems(updatedCartItems, cartItems));
  // };


  const buyNow = () => {
    // setDialogLoading(true);
    // if (state.isChecked == true) {
    // const checkedItemIds = Object.keys(state.isChecked).filter(itemId => state.isChecked[itemId]);
    // if (checkedItemIds.length > 0) {
    navigator("/buyNow");
    // } else {

    // alert("Please select item and  buy");
    // }
    // "<p>Please select item to buy</p>";
    dispatch(openAddToCard(false))
    setDialogLoading(false);
  }



  return (
    <React.Fragment >
      <IconButton onClick={toggleDrawer('right', true)} style={{ color: 'black' }}>
      <FaOpencart />
      </IconButton>
      <Drawer
        anchor={'right'}
        open={openAddToCart}
        onClose={toggleDrawer('right', false)}
        className="p-4 " 
      >
        <div className=" flex items-center justify-between ">
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
        <div style={{ overflow: 'auto', }} >
          <Typography>
            {cartItems.map((item, index) => (
              <div key={index} className="text-sm flex  p-5">
                {/* {console.log(cartItems)}  */}
                <div className="me-3">
                  <IKImage
                    src={JSON.parse(item.prdimg)[0]?.url}
                    style={{ width: "150px", height: '150px' }}
                  />
                </div>
                <div>
                  <div>Name:{item.prdname}</div>
                  <div>Price: {item.prdprice * item.quantity}</div>
                  <div>Size: {item.sizes} </div>

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
        <div style={{ padding: ' 15px 10px',position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: 'white' }}>
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
        {/* {dialogLoading && (
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: '' }}>

            <Bars
              height="80"
              width="80"
              color="#00727D"
              ariaLabel="bars-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />

          </div>
        )} */}
      </Drawer>
    </React.Fragment>


  );
};
export default AddtoCart;