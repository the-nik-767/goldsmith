import React, { useState } from "react";
import { MdOutlineAccountCircle } from "react-icons/md";
import { IoBagOutline } from "react-icons/io5";
import { DrawerButton } from "../Sidebar/DrawerButton";
import { DrawerComponent } from "../Sidebar/DrawerComponent";
import { useNavigate } from "react-router-dom";
import AddtoCart from "../AddToCart/AddtoCart";
import Logo from '../../../assets/image/Logo.png'
import { IconButton } from "@mui/material";


const Navbar = ({openAddToCart, SetOpenAddToCart}) => {
  let navigate = useNavigate()
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };
  const navigateHome = () => {
    navigate('/')
  }

  return (

    <header className="border border-gray w-full bg-white fixed top-0 left-0 z-50">
      <div className=" mx-auto flex items-center justify-between">
        {/* <DrawerButton onClick={toggleDrawer} /> */}
        <DrawerComponent isOpen={isDrawerOpen} onClose={toggleDrawer} />
        <span className="inline-block uppercase text-center text-3xl font-medium cursor-pointer" onClick={navigateHome}>
          <img src={Logo} alt="Logo" style={{ height: '100px', width: '240px', objectFit: 'cover' }} />
        </span>
        <div className="text-end">

          <IconButton style={{color:'black'}} className="hidden sm:inline-block text-2xl pe-5 " onClick={() => navigate('/user')}>
            <MdOutlineAccountCircle />
          </IconButton>
          <span className=" sm:inline-block text-2xl pe-10">
            {/* <IoBagOutline /> */}
            <AddtoCart openAddToCart={openAddToCart} SetOpenAddToCart={SetOpenAddToCart}/>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
