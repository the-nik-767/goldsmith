import Home from "../page/home/home";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Shop from "../page/shop/shop";
import Category from "../page/category/category";
import BuyNowMain from "../Components/ShopItems/BuyNow/BuyNowMain";
import Navbar from "../Components/Header/Navbar/Navbar";
import { useState } from "react";
import UserPage from "../Components/Header/User/UserPage";
import Main from "../Components/fotter/Main";
import '../Components/style/responsive.css'

function MainNavigator() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/shop" element={<Shop />} /> 
        <Route path="/category" element={<Category />} />  
        <Route path="/user" element={<UserPage />} />  
        <Route path="/buyNow" element={<BuyNowMain />} />  
        {/* <Route path="/shop" element={<Shop />} /> */}
        {/* <Route path="/addtocart" element={<AddtoCart />} /> */}
        {/* <Route path="/shop/:id" element={<ShopImg />} />  */}
      </Routes>
      <Main/>
    </BrowserRouter>
  );
}

export default MainNavigator;
