import React, { useEffect, useState } from 'react'
import { ShopImg } from './ShopImg'
import { ShopInfoRating } from './ShopInfoMain/ShopInfoRating'
import ShopInfoDropdown from './ShopInfoMain/ShopInfoDropdown'
import { ShopInfoAccordian } from './ShopInfoMain/ShopInfoAccordian'
import { IoCloseOutline } from "react-icons/io5";
import { IconButton } from '@mui/material'
import { getApidataOnePrdData } from '../../Redux/Action/productAction'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

function ShopInfosection1({ itemId }) {

  let dispatch = useDispatch()

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const paramId = searchParams.get("id");
  const productId = paramId || itemId;

  useEffect(() => {
    // // setLoading(true)
    if (productId) {
      dispatch(getApidataOnePrdData(productId));
    }
    // // setLoading(false)
  }, [])
  const data = useSelector(state => state.product.data);

  return (


    <div className="flex justify-center">
      <div className=" shop1" style={{ direction: 'row' }}>
        <div className="image-info">
          <ShopImg />
          <div className=" infomain">
            <ShopInfoRating />
            <ShopInfoDropdown />
            <ShopInfoAccordian />
          </div>
        </div>
      </div>
    </div>

  );
}

export default ShopInfosection1
