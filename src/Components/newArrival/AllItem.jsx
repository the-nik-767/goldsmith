import React from 'react'
import { FaPlus } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { FaRegHeart } from "react-icons/fa6";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import UserPage from '../Header/User/UserPage';

const AllItem = (props) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);
  let navigate = useNavigate()
  const navigateShop = () => {
    navigate('/shop')
  }
  return (
    <>

      <Dialog
        open={open}
        handler={handleOpen}
        // animate={{
        //   mount: { scale: 1, y: 0 },
        //   unmount: { scale: 0.9, y: -100 },
        // }}
        style={{width: '100%', height: '100%'}}
      >
        
       <div>

           <UserPage />
           {/* <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button> */}
       </div>
      
      </Dialog>



      <div className="flex justify-center " >
        <div className=" rounded overflow-hidden mt-5 my-3 " style={{ maxWidth: '100%', maxHeight: '100%', height: '100%', width: '100%' }}>
          <div className="md:grid-cols-2  ">
            <div className="img-hover-zoom--slowmo">
              <div
                className="img object-cover bg-no-repeat origin-center  img-hover-zoom--slowmo-img  icons bg-center"
                style={{ backgroundImage: 'url(' + props.Img + ')', backgroundSize: "cover", height: '60vh', width: '100%' }}
                onClick={navigateShop}
                alt={props.title}
              >
                <div className="relative" ></div>
              </div>
              <Button onClick={handleOpen} variant="gradient" className='relative'>
                <FaRegHeart className='heartIcons  absolute top-40 right-40' />
              </Button>
            </div>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-center text-black">
                {props.title}
              </div>
              <div className="font-bold text-xl mb-2 text-center text-black" >
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