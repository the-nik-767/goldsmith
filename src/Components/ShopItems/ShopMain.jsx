import React from 'react'
import { ShopImg } from './ShopImg'
import { ShopSlider } from './ShopSlider'
import { ShopInfo } from './ShopInfo'

const ShopMain = () => {
  return (
    <div className='flex'>
        <ShopImg/>
        <ShopSlider/>
        <ShopInfo/>   
    </div>
  )
}

export default ShopMain