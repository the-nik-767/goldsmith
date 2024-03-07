import React, { useState } from "react";
import { MdOutlineAccountCircle } from "react-icons/md";
import { IoBagOutline } from "react-icons/io5";
import { DrawerComponent } from "../Sidebar/DrawerComponent";
import { DrawerComponent2 } from "../Sidebar/DrawerComponent2";
import { useNavigate } from "react-router-dom";
import AddtoCart from "../AddToCart/AddtoCart";
import Logo from '../../../assets/image/Logo.png'
import { IconButton } from "@mui/material";
import { IoMdCart } from "react-icons/io";
import { openAddToCard } from "../../../Redux/Action/action";
import { useDispatch, useSelector } from "react-redux";



const Navbar = () => {
  let navigate = useNavigate()
  const dispatch = useDispatch();
  const openAddToCartState = useSelector((state) => state.cart.openAddToCard);
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [isCartOpen, setCartOpen] = useState(false);


  const toggleCartDrawer = () => {

    // setCartOpen(!isCartOpen);
    dispatch(openAddToCard(false))
  };

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
    dispatch(openAddToCard(!openAddToCartState))
  };
  
  const navigateHome = () => {
    navigate('/')
  }

  const handleOpenAddToCart = () => {
    if (!openAddToCartState) {
      dispatch(openAddToCard(true));
    }
  };
  return (

    <div className="border border-gray  bg-white fixed top-0 left-0 z-50 w-full sm:p-0 md:p-5 lg:p-5" >
      <div className=" mx-auto flex items-center justify-between" style={{ maxHeight: '100vh' }}>
        {/* <DrawerButton onClick={toggleDrawer} /> */}
        <DrawerComponent isOpen={isDrawerOpen} onClose={toggleDrawer} />


        <span className="inline-block uppercase text-center text-3xl font-medium cursor-pointer" onClick={navigateHome}>
          <img src={Logo} alt="Logo" style={{ objectFit: 'cover' }} className="Logo" />
        </span>
        <div className="flex" style={{ paddingRight: '5px' }}>
          <IconButton style={{ color: 'black' }} className=" sm:inline-block text-3xl  " onClick={() => navigate('/user')}>
            <MdOutlineAccountCircle />
          </IconButton>
          <span className=" text-3xl ">
            {/* <IoBagOutline /> */}
            {/* <AddtoCart /> */}
            {/* <DrawerComponent2 isOpen={isCartOpen} onClose={toggleCartDrawer} /> */}

            <IconButton onClick={toggleDrawer} style={{ paddingLeft: '10px', cursor: 'pointer', color: 'black' }} className="text-2xl text-black">
              <IoMdCart />
            </IconButton>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
