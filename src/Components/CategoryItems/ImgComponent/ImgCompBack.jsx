import React, { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Box, IconButton, Modal, Rating } from '@mui/material';
import { CiHeart } from "react-icons/ci";
import UserPage from '../../Header/User/UserPage';
import ShopInfosection1 from '../../ShopItems/ShopInfosection1';
import { IoEyeSharp } from "react-icons/io5";
import products from '../../../product.json'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../Redux/Action/action';

export const ImgCompBack = (props) => {
  const { openAddToCart, SetOpenAddToCart } = props;
  const [open, setOpen] = useState(false);
  const [openImgComp, setOpenImgComp] = useState(false);
  const navigate = useNavigate()
  const navigateShop = () => {
    navigate("/shop");
  }
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  
  const handleOpenImgComp = () => {
    setOpenImgComp(true);
  };

  const handleCloseImgComp = () => {
    setOpenImgComp(false);  
  };
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const myParam = searchParams.get("id");
  // console.log('myParam',myParam)
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCartClick = () => {
    let prd = products.find((x) => x.id === myParam);
  //  console.log('produts',products)
  //  console.log('prd',prd)
  //  console.log('myParam',myParam)
   
    const itemToAdd = {
      size: selectedSize,
      Img: prd.Img,
      title: prd.title,
      quantity:quantity,
      price: prd.price,
      // tax:tax,  
      
    };
    SetOpenAddToCart(true);
    dispatch(addToCart(itemToAdd)); 
    // SetOpenAddToCart(true);
    // setSelectedItem(props);

  };
  return (
    <>
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ width: 800, margin: '0 auto ' }}>
          <UserPage />
        </Box>
      </Modal>
      <Modal
        open={openImgComp}
        onClose={handleCloseImgComp}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box
          sx={{
            width: "1200px",
            margin: "0 auto ",
            backgroundColor: "white",
            padding: "10px",
            marginTop: "10px",
          }}
        >
          <ShopInfosection1 style={{ marginTop: "0" }} />
        </Box>
      </Modal>
      <div className=" ">
        <div className="rounded view1 overflow-hidden mt-5 my-3 p-5" style={{ maxWidth: '100%', maxHeight: '100%', height: '100%', width: '100%',  }}>
          <div className="md:grid-cols-2 relative" style={{border: '0.5px solid #d7cece'}}>
            <div className="img-hover-zoom--slowmo">
              <div
                className="img object-cover bg-no-repeat origin-center  img-hover-zoom--slowmo-img  icons bg-center"
                style={{ backgroundImage: 'url(' + props.Img + ')', backgroundSize: "cover", height: '30vh', width: '100%' }}
                onClick={navigateShop}
                alt={props.title}
              />

              <p className='label1'>{props.label}</p>
              <p
                onClick={handleAddToCartClick}
                className="addToCartText absolute lg:left-full text-center w-full transform   transition-opacity duration-300 bg-black text-white px-4 py-2  "
              >
                Add to cart
              </p>
              <IconButton
                aria-label="delete"
                className="IoEyeSharp"
                onClick={handleOpenImgComp}
              >
                <IoEyeSharp />
              </IconButton>
            </div>
            <IconButton aria-label="delete" className='heartIcons' onClick={handleOpen} sx={{
              "&:hover": {
                color: "#e53e3e",
                backgroundColor: "#fed7d7",
              },
            }}>
              <CiHeart />
            </IconButton>
            <div className="text-center">
              <div
                className="text-xl text-font    mt-3"
                style={{ color: " rgb(157 68 28 )" }}
              >
                {props.title}
              <div className="font-medium text-xl    text-black">
                {props.price}
              </div>
                <div style={{ fontSize: "10px",  }}>
                  <Rating value={3} style={{ }} className='mt-2'/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
