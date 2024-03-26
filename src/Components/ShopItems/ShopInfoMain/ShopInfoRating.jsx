import React, { useEffect, useState } from "react";
import { Rating } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { getApidataOnePrdData } from "../../../Redux/Action/productAction";
import { useLocation } from "react-router-dom";
import { calculateDiscountedPrice } from "../../../utils";

export const ShopInfoRating = () => {
  let dispatch = useDispatch()
  const location = useLocation();
  const searchParams1 = new URLSearchParams(location.search);
  const imgid = searchParams1.get("id");

  // useEffect(() => {
  //   dispatch(getApidataOnePrdData(imgid))
  // }, [])
  const data = useSelector(state => state.oneproduct.data);
  const DiscountedPrice = (price, discountLabel) => {
    return calculateDiscountedPrice(price, discountLabel);
  };
  return (
    <div>
      {/* <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      /> */}
      {data && data.map((x, i) => (
        <div key={i}>
          <div>
            <p className="mb-2 mt-2 text-slate-500 title-in-shoppage">{x.prdname}</p>
            <p className="mb-3 text-slate-500">  € {DiscountedPrice(x.prdprice, x.discountlable)} </p>
          </div>
          <div className="flex mb-3 justify-center align-center rating">
            <div>
              <Rating value={4} readOnly />
            </div>
            <p className=" ms-2 text-md text-slate-500">reviews</p>
          </div>
        </div>
      ))}
    </div>
  );
};
