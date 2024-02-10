import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { CiHeart } from "react-icons/ci";
import UserPage from '../Header/User/UserPage';
import { IconButton, Box, Modal } from '@mui/material';
import { Rating } from "@material-tailwind/react";
const AllItem = (props) => {

  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const navigateShop = () => {
    navigate('/shop');
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

      <div className="flex justify-center">
        <div className="rounded overflow-hidden mt-5 my-3" style={{ maxWidth: '100%', maxHeight: '100%', height: '100%', width: '100%', border: '0.5px solid #d7cece' }}>
          <div className="md:grid-cols-2 relative">
            <div className="img-hover-zoom--slowmo">
              <div
                className="img object-cover bg-no-repeat origin-center  img-hover-zoom--slowmo-img  icons bg-center"
                style={{ backgroundImage: 'url(' + props.Img + ')', backgroundSize: "cover", height: '50vh', width: '100%' }}
                onClick={navigateShop}
                alt={props.title}
              />

              <p className='label1'>{props.label}</p>
            </div>
            <IconButton aria-label="delete" className='heartIcons' onClick={handleOpen} sx={{
              "&:hover": {
                color: "#e53e3e",
                backgroundColor: "#fed7d7",
              },
            }}>
              <CiHeart />
            </IconButton>
            <div className="px-6">
              <div className="text-xl text-font flex justify-between" style={{ color: ' rgb(157 68 28 )' }}>
                {props.title}
                <div>
                  <Rating value={4} />
                </div>
              </div>
              <div className="font-medium text-xl   text-black">
                {props.price}
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default AllItem