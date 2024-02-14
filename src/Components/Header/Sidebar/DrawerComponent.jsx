import React, { useState } from "react";
import { Dropdown } from "./Dropdown";
import { MdOutlineAccountCircle } from "react-icons/md";
import { useNavigate } from "react-router-dom/dist";
import './style/sidebar.css'
import { Box, Divider, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { Button, Drawer, List, ListItem } from "@material-tailwind/react";
import { TfiAlignJustify } from "react-icons/tfi";
import { IoMdClose } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";


export const DrawerComponent = ({ isOpen, onClose }) => {
  const [leftDrawerOpen, setLeftDrawerOpen] = useState(false);
  const [showProducts, setShowProducts] = useState(false);
  let navigate = useNavigate();

  const [state, setState] = React.useState({
    left: false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      setLeftDrawerOpen(open);
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const toggleProducts = () => {
    setShowProducts(!showProducts);
  };
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >  
      <Divider /> 
    </Box>
  );


  return (

    <>
      <div className="" onClick={toggleDrawer('left', true)}>
        <TfiAlignJustify />
      </div>
      <Drawer
        anchor={'left'}
        open={state['left']}
        onClose={toggleDrawer('left', false)}
        style={{ width: '250px', maxWidth: '250px' }}
      >
        <div className="flex justify-between">
          <span className=" m-6 text-3node xl pe-5 ms-10 text-3xl text-gray-400 bg-transparent " onClick={() => navigate('/user')}> <MdOutlineAccountCircle  className="cursor-pointer"/></span>
          <span className=" m-6 text-3node xl pe-5 ms-10 text-3xl text-gray-400 bg-transparent " onClick={toggleDrawer('left', false)}><IoMdClose  className="cursor-pointer"/></span>
        </div>
        <span >
        </span>
        {showProducts ? (
          <div className="my-6 mx-0">
            <div>
              <ul>
                <li className="my-4 mx-10">
                  <p className="flex justify-between IoIosArrowBack ">
                    <IoIosArrowBack onClick={() => setShowProducts(false)}  className="cursor-pointer"/> Products{' '}
                  </p>
                </li>
                <hr />
                <li className="my-4 mx-10">Ring</li>
                <hr />
                <li className="my-4 mx-10">Earrings</li>
                <hr />
                <li className="my-4 mx-10">Bracelet</li>
                <hr />
                <li className="my-4 mx-10">Necklace</li>
                <hr />
              </ul>
            </div>
          </div>
        ) : (
          <div className="my-6 mx-0">
            <div>
              <ul>
                <li className="my-4 mx-10">
                  <a href="">Home</a>
                </li>
                <hr />
                <li className="my-4 mx-10" onClick={toggleProducts}>
                  <p className="flex justify-between">
                    Products <IoIosArrowForward className="mt-1,cursor-pointer" />
                  </p>
                </li>
                <hr />
                <li className="my-4 mx-10">
                  <a href="">About Us</a>
                </li>
                <hr />
                <li className="my-4 mx-10">
                  <a href="">Contact Us</a>
                </li>
              </ul>
            </div>
          </div>
        )}
        <div className="flex">
          <div class="contact_number ">
            <p><a href="" bgcolor="black"><img src="//thefoomer.in/cdn/shop/t/47/assets/order-tracking_small.jpg?v=88311329181762376151706097645" alt="Tracking Icon" className="imgSideBar oneBox" /><span className="text-xs">Track<br /> Orders</span></a></p>
            <p><a href="" bgcolor="black"><img src="//thefoomer.in/cdn/shop/t/47/assets/whatsapp_small.jpg?v=98417115858127822171706097645" alt="Whatsapp Icon" className="imgSideBar twoBox" /><span className="text-xs">WhatsApp</span></a></p>
            <p><a href="" bgcolor="black"><img src="https://cdn.shopify.com/s/files/1/0687/6171/4968/files/email.png?v=1687943020" alt="Mail Icon" className="imgSideBar" /><span className="text-xs">Mail</span></a></p>
          </div>
        </div>
      </Drawer>
    </>
  );
};

