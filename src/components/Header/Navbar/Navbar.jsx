import React, { useState } from "react";
import { MdOutlineAccountCircle } from "react-icons/md";
import { IoBagOutline } from "react-icons/io5";
import { DrawerButton } from "../Sidebar/DrawerButton";
import { DrawerComponent } from "../Sidebar/DrawerComponent";

const Navbar = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="border border-black w-full bg-white flex items-center justify-between py-5">
      <DrawerButton onClick={toggleDrawer} />
      <DrawerComponent isOpen={isDrawerOpen} onClose={toggleDrawer} />
      <span className="inline-block uppercase text-center text-3xl font-medium	 flex-grow">
        goldsmith
      </span>
      <div className="text-end ">
        <span className="hidden sm:inline-block inline-block text-2xl pe-5">
          <MdOutlineAccountCircle />
        </span>
        <span className="hidden sm:inline-block inline-block text-2xl pe-10">
          <IoBagOutline />
        </span>
      </div>
    </div>
  );
};

export default Navbar;
