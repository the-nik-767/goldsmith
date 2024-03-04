import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { CiHeart } from "react-icons/ci";
import UserPage from '../Header/User/UserPage';
import { IconButton, Box, Modal } from '@mui/material';
import { Card, Rating } from "@material-tailwind/react";
import { IoEyeSharp } from "react-icons/io5";
import ShopInfosection1 from '../ShopItems/ShopInfosection1';
import { openAddToCard } from '../../Redux/Action/action';
import { useDispatch, useSelector } from 'react-redux';
import '../style/responsive.css'
import { IKImage } from 'imagekitio-react';
import { IoClose } from "react-icons/io5";
import { addToCartHandler } from '../addToCartHandler';
import Eyes from '../ShopItems/Eyes';
// import { Bars } from "react-loader-spinner";

const AllItem = React.memo((props) => {

  const [openUserPage, setOpenUserPage] = useState(false);
  const [openImgComp, setOpenImgComp] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  // const [dialogLoading, setDialogLoading] = useState(false);
  const allPrdData = useSelector(state => state.product.data);
  const cartItems = useSelector(state => state.cart.cartItems);

  const [state, setState] = useState({
    right: false,
  });

  const handleOpenUserPage = () => {setOpenUserPage(true);}

  const handleCloseUserPage = () => {setOpenUserPage(false);}

  const handleOpenImgComp = () => {
    console.log('open image')
    console.log('props.id',props.id)
    setSelectedItem(props.id)
    setOpenImgComp(true);
  }

  const handleCloseImgComp = () => {setOpenImgComp(false);}

  const navigateShop = (e) => {
    if (props.id) {
      const id = (props.id);
      navigate(`/shop?id=${id}`);
    }
  };

  const handleAddToCartClick = () => {
    // dispatch(getApidataPaymentMethod());
    //   console.log("object")
    //   dispatch(trueLoading())

    //   dispatch(openAddToCard(true))

    //   if (props.id) {
    //     let img = allPrdData.find((x) => x.id === props.id);
    //     if (img) {

    //       const existingItem = cartItems.find((item) => item.id === props.id);
    //       if (existingItem) {

    //         existingItem.quantity++;
    //         dispatch(updateCartItems(existingItem, cartItems));
    //         dispatch(openAddToCard(true))
    //       } else {

    //         const itemToAdd = {
    //           id: props.id,
    //           prdimg: img.prdimg,
    //           prdname: img.prdname,
    //           quantity: quantity,
    //           prdprice: img.prdprice,
    //         };
    //         //dispatch(openAddToCard(true))
    //         dispatch(addToCart(itemToAdd));
    //         dispatch(openAddToCard(true))
    //       }
    //     } else {
    //       console.error(`Product with ID ${props.id} not found.`);
    //     }
    //   } else {
    //     console.error("No product ID found in the URL.");
    // };
    // }
console.log('click ------')
    addToCartHandler(props.id, quantity, allPrdData, cartItems, dispatch, openAddToCard);
    
  }
  return (
    <div>
      {/* {dialogLoading && (
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
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
      <Modal
        open={openUserPage}
        onClose={handleCloseUserPage}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"

      >
        <Box sx={{ margin: "0 auto ", }} >
          <UserPage />
        </Box>
      </Modal>

      {openImgComp && (
        <Modal
          open={openImgComp}
          onClose={handleCloseImgComp}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
          style={{ backgroundColor: "white" }}
        >
          <Box
            sx={{
              width: "1100px",
              margin: "0 auto ",
              backgroundColor: "white",
              padding: "10px",
              // marginTop: "10px",
            }}
          >
            <div className='flex justify-end mt-10' >
              <IconButton onClick={handleCloseImgComp} className='text-3xl bg-white mt-5'>
                <IoClose />
              </IconButton>
            </div>
            <Eyes style={{ marginTop: "0 !important" }} itemId={selectedItem} />
          </Box>
        </Modal>
      )}

      <Card className=" flex justify-center ">
        <div
          className="rounded overflow-hidden mt-5 my-3 p-0 "
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            height: "97%",
            width: "100%",
            border: "0.5px solid #d7cece",
          }}
        >
          <div className="md:grid-cols-2 relative ">
            <div className="img-hover-zoom--slowmo ">

              {props.prdimg && typeof props.prdimg === 'string' && (
                <IKImage
                  src={JSON.parse(props.prdimg)[0]?.url}
                  style={{ width: "100%" }}
                  className='allArrivalCard'
                  onClick={navigateShop}
                />
              )}

              {props.prddiscount === "enable" && (
                <p className="label1">{props.discountlable}</p>
              )}

              <p onClick={handleAddToCartClick}
                className="addToCartText absolute lg:left-full text-center w-full transform   transition-opacity duration-300 bg-black text-white px-4 py-2  "
              >
                Add to cart
              </p>
              <IconButton
                aria-label="delete"
                className="IoEyeSharp"
                onClick={handleOpenImgComp}

              >
                <IoEyeSharp style={{ fontSize: '20px' }} />
              </IconButton>
            </div>
            <IconButton
              aria-label="delete"
              className="heartIcons"
              onClick={handleOpenUserPage}
            // sx={{
            //   "&:hover": {
            //     color: "#e53e3e",
            //     backgroundColor: "#fed7d7",
            //   },
            // }}
            >
              <CiHeart style={{ fontSize: '20px' }} />
            </IconButton>

            {/* <Typography> */}
            <div
              className="text-xl text-font mt-3 overflow-hidden "
              style={{ color: " rgb(157 68 28 )" }}
            >
              <div className="truncate " style={{ maxWidth: '99%', padding: '0px 15px' }}>
                {props.prdname}
              </div>
            </div>
            <div className='flex justify-between' style={{ padding: '5px 15px' }}>
              <span className="font-medium text-lg   text-gray">
                {props.prdprice}/-
              </span>
              <span><Rating value={3} style={{ fontSize: "10px", }} readonly /></span>
            </div>
            {/* </Typography> */}
          </div>
        </div>
      </Card>
    </div>
  );
})

export default AllItem