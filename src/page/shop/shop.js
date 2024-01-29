import React from 'react'
import Navbar from '../../Components/Header/Navbar/Navbar'
import { ShopImg } from '../../Components/ShopItems/ShopImg'
import { ShopSlider } from '../../Components/ShopItems/ShopSlider'
import { ShopInfo } from '../../Components/ShopItems/ShopInfo'
import ShopMain from '../../Components/ShopItems/ShopMain'

const Shop = () => {
  return (
    <div>
        <Navbar/>
        <ShopMain/>
        {/* <ShopImg/> */}
        {/* <ShopSlider/> */}
        {/* <ShopInfo/> */}
    </div>
  )
}

export default Shop