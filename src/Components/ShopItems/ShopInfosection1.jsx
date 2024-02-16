import React from 'react'
import { ShopImg } from './ShopImg'
import { ShopInfoRating } from './ShopInfoMain/ShopInfoRating'
import ShopInfoDropdown from './ShopInfoMain/ShopInfoDropdown'
import { ShopInfoAccordian } from './ShopInfoMain/ShopInfoAccordian'
import { IoCloseOutline } from "react-icons/io5";
import { IconButton } from '@mui/material'

function ShopInfosection1({ SetOpenAddToCart }) {
  return (
    <>
      {/* <IconButton aria-label="delete" className='IoEyeSharp' style={{color:'black'}}>
                <IoCloseOutline />
            </IconButton> */}
      <div className="flex justify-center">
        <div className=" shop1" style={{ direction: 'row' }}>
          <div className="image-info">
            <ShopImg />
            <div className=" infomain">
              <ShopInfoRating />
              <ShopInfoDropdown SetOpenAddToCart={SetOpenAddToCart} />
              <ShopInfoAccordian />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShopInfosection1
