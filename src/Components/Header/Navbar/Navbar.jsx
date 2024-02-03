import React, { useState } from "react";
import { MdOutlineAccountCircle } from "react-icons/md";
import { IoBagOutline } from "react-icons/io5";
import { DrawerButton } from "../Sidebar/DrawerButton";
import { DrawerComponent } from "../Sidebar/DrawerComponent";
import { useNavigate } from "react-router-dom";
import AddtoCart from "../AddToCart/AddtoCart";


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
   
    <header className="border border-black w-full bg-white fixed top-0 left-0 z-50">
    <div className=" mx-auto flex items-center justify-between py-5">
      <DrawerButton onClick={toggleDrawer} />
      <DrawerComponent isOpen={isDrawerOpen} onClose={toggleDrawer} />
      <span className="inline-block uppercase text-center text-3xl font-medium cursor-pointer" onClick={navigateHome}>
        goldsmith
      </span>
      <div className="text-end">
        <span className="hidden sm:inline-block text-2xl pe-5 " onClick={()=>navigate('/user')}>
          <MdOutlineAccountCircle />
        </span>
        <span className="hidden sm:inline-block text-2xl pe-10">
          {/* <IoBagOutline /> */}
          <AddtoCart/>
        </span>
      </div>
    </div>
  </header>
  );
};

export default Navbar;
