import React from 'react'
import { ShopImg } from './ShopImg'
import { ShopInfoRating } from './ShopInfoMain/ShopInfoRating'
import ShopInfoDropdown from './ShopInfoMain/ShopInfoDropdown'
import { ShopInfoAccordian } from './ShopInfoMain/ShopInfoAccordian'
import { IoCloseOutline } from "react-icons/io5";
import { IconButton } from '@mui/material'

function ShopInfosection1({SetOpenAddToCart}) {
    return (
        <>
            {/* <IconButton aria-label="delete" className='IoEyeSharp' style={{color:'black'}}>
                <IoCloseOutline />
            </IconButton> */}

            <div className='flex '>
                <ShopImg />
                <div className="lg:w-80 infomain">
                    <ShopInfoRating />
                    <ShopInfoDropdown SetOpenAddToCart={SetOpenAddToCart}/>
                    <ShopInfoAccordian />
                </div>
            </div>
        </>
    )
}

export default ShopInfosection1
