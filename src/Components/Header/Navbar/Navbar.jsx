import React, { useState } from "react";
import { MdOutlineAccountCircle } from "react-icons/md";
import { IoBagOutline } from "react-icons/io5";
import { DrawerComponent } from "../Sidebar/DrawerComponent";
import { useNavigate } from "react-router-dom";
import AddtoCart from "../AddToCart/AddtoCart";
import Logo from '../../../assets/image/Logo.png'
import { IconButton } from "@mui/material";


const Navbar = () => {
  let navigate = useNavigate()
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };
  const navigateHome = () => {
    navigate('/')
  }

  return (

    <header className="border border-gray  bg-white fixed top-0 left-0 z-50 w-full sm:p-0 md:p-5 lg:p-5" >
      <div className=" mx-auto flex items-center justify-between" style={{maxHeight:'100vh'}}>
        {/* <DrawerButton onClick={toggleDrawer} /> */}
        <DrawerComponent isOpen={isDrawerOpen} onClose={toggleDrawer}/>
        <span className="inline-block uppercase text-center text-3xl font-medium cursor-pointer" onClick={navigateHome}>
          <img src={Logo} alt="Logo" style={{  objectFit: 'cover' }} className="Logo"/>
        </span>
        <div className="flex" style={{paddingRight:'5px'}}>
          <IconButton style={{color:'black'}} className=" sm:inline-block text-3xl  " onClick={() => navigate('/user')}>
            <MdOutlineAccountCircle />
          </IconButton>
          <span className=" text-3xl ">
            {/* <IoBagOutline /> */}
            <AddtoCart />
          </span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
