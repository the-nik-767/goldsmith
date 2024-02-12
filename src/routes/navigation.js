import Home from "../page/home/home";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Shop from "../page/shop/shop";
import Category from "../page/category/category";
import UserLogo from "../Components/Header/User/UserLogo";
import BuyNowMain from "../Components/ShopItems/BuyNow/BuyNowMain";
import Navbar from "../Components/Header/Navbar/Navbar";
import { useState } from "react";

function MainNavigator() {
  const [openAddToCart,SetOpenAddToCart] = useState(false)
  return (
    <BrowserRouter>
    <Navbar openAddToCart={openAddToCart} SetOpenAddToCart={SetOpenAddToCart}/>
      <Routes>
        <Route path="/" element={<Home openAddToCart={openAddToCart} SetOpenAddToCart={SetOpenAddToCart}/>} />
        <Route path="/shop" element={<Shop SetOpenAddToCart={SetOpenAddToCart}/>} /> 
        <Route path="/category" element={<Category />} />  
        <Route path="/user" element={<UserLogo />} />  
        <Route path="/buyNow" element={<BuyNowMain />} />  
        <Route path="/shop" element={<Shop />} />
        {/* <Route path="/addtocart" element={<AddtoCart />} /> */}
        {/* <Route path="/shop/:id" element={<ShopImg />} />  */}
      </Routes>
    </BrowserRouter>
  );
}

export default MainNavigator;
