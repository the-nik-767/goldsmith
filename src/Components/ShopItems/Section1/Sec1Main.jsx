import React, { useEffect, useState } from "react";
import "./section1.css";
import '../../CategoryItems/ImgComponent/style/ImgComp.css'
import { Card } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getApidataAllProduct } from "../../../Redux/Action/productAction";
import AllItem from "../../newArrival/AllItem";

const Sec1Main = ({openAddToCart, SetOpenAddToCart}) => {


    let navigate = useNavigate()
    let dispatch = useDispatch()

    const navigateCategory = () => {
        navigate('/category')
        window.scrollTo(0, 0);
    }

    useEffect( () => {
        // // setLoading(true)
         dispatch(getApidataAllProduct())
        // // setLoading(false)
       
    }, [])

    const data = useSelector(state => state.product.data);
    // console.log("data in sec1mains", data)


  return (
    <div>
      {/* <hr className="mt-5 mb-5 " /> */}
      <div className=" text-center text-xl uppercase font-mono  mb-10 relative sec1-heading">
        <h1 className="sec1-heading">You might also like</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid:cols-4 gap-8 mx-8 justify-center">
        {data.slice(0, 4).map((x,i) => {
          return (
            <AllItem key={i} {...x} prdimg={x.prdimg} prdname={x.prdname} prdprice={x.prdprice} openAddToCart={openAddToCart} SetOpenAddToCart={SetOpenAddToCart}/>
          );
        })}
      </div>
     
    </div>
  );
};

export default Sec1Main;
