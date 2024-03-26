import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { CiHeart } from "react-icons/ci";
import UserPage from '../Header/User/UserPage';
import { IconButton, Box, Modal } from '@mui/material';
import { Card, Rating } from "@material-tailwind/react";
import { IoEyeSharp } from "react-icons/io5";
import ShopInfosection1 from '../ShopItems/ShopInfosection1';
import { openAddToCard, updateCartItems } from '../../Redux/Action/action';
import { useDispatch, useSelector } from 'react-redux';
import '../style/responsive.css'
import { IKImage } from 'imagekitio-react';
import { IoClose } from "react-icons/io5";
import Eyes from '../ShopItems/Eyes';
import { addToCartHandler, calculateDiscountedPrice } from '../../utils';
import Login from '../Header/User/Login';
// import { Bars } from "react-loader-spinner";

const AllItem = React.memo((props) => {
  const [openUserPage, setOpenUserPage] = useState(false);
  const [openImgComp, setOpenImgComp] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  // const [dialogLoading, setDialogLoading] = useState(false);
  const allPrdData = useSelector(state => state.product.data);
  const cartItems = useSelector(state => state.cart.cartItems);

  const handleOpenUserPage = () => { setOpenUserPage(true); }

  const handleCloseUserPage = () => { setOpenUserPage(false); }

  const handleOpenImgComp = () => {
    setSelectedItem(props.id)
    setOpenImgComp(true);
  }

  const handleCloseImgComp = () => { setOpenImgComp(false); }

  const navigateShop = (e) => {
    if (props.id) {
      const id = (props.id);
      navigate(`/shop?id=${id}`);
    }
  };

  const handleAddToCartClick = () => {
    addToCartHandler(props.id, quantity, allPrdData, cartItems, dispatch, openAddToCard);
  }

  const DiscountedPrice = (price, discountLabel) => {
     return calculateDiscountedPrice(price, discountLabel);
  };
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
        <Box sx={{ margin: "0 auto ", }} className='bg-white'>
          <Login />
        </Box>
      </Modal>


      <Modal
        open={openImgComp}
        onClose={handleCloseImgComp}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box className="eyes-box">
          <div className='flex justify-end ' >
            <IconButton onClick={handleCloseImgComp} className='text-3xl bg-white mt-5'>
              <IoClose />
            </IconButton>
          </div>
          <Eyes style={{ marginTop: "0 !important" }} itemId={selectedItem} />
          {/* <ShopInfosection1 style={{ marginTop: "0 !important" }} itemId={selectedItem} /> */}
        </Box>
      </Modal>


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
            <div className='m-2' >
              <div
                className="text-xl text-font mt-3 overflow-hidden flex justify-between  "
                style={{ color: " rgb(157 68 28 )" }}
              >
                <div className="truncate " >
                  {props.prdname}
                </div>
                <span><Rating value={3} style={{ fontSize: "10px", }} readOnly /></span>
              </div>
              <div className="flex justify-between overflow-hidden">
                <div>
                  <div className="truncate ">
                    <span>Material </span>
                    <span> {props.jwelleryMaterial}</span>
                  </div>
                  <div className="truncate w-32">
                    <span>Diamond </span>
                    <span className='text-ellipsis'> {props.diamondType}</span>
                  </div>
                </div>
                <div>
                  <div>
                    {props.prddiscount === "enable" && (
                      <span className="font-medium text-lg text-red ">
                        € {DiscountedPrice(props.prdprice, props.discountlable)}
                      </span>
                    )}
                  </div>

                  <span className='flex justify-end'>
                    {props.prddiscount === "enable" ? (
                      <del className="font-medium text-base text-gray text-end">
                        € {props.prdprice}
                      </del>
                    ) : (
                      <p className="font-medium text-xl text-gray text-end">
                        € {props.prdprice}
                      </p>
                    )}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card >
    </div >
  );
})

export default AllItem