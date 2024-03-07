import Home from "../page/home/home";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Shop from "../page/shop/shop";
import Category from "../page/category/category";
import BuyNowMain from "../Components/ShopItems/BuyNow/BuyNowMain";
import Navbar from "../Components/Header/Navbar/Navbar";
import { useState } from "react";
import UserPage from "../Components/Header/User/UserPage";
import Main from "../Components/fotter/Main";
import "../Components/style/responsive.css";
import AddtoCart from "../Components/Header/AddToCart/AddtoCart";
import { useDispatch, useSelector } from "react-redux";
import { openAddToCard } from "../Redux/Action/action";
import { DrawerComponent2 } from "../Components/Header/Sidebar/DrawerComponent2";

function MainNavigator() {
  const dispatch = useDispatch();
  const toggleCartDrawer = () => {
    // setCartOpen(!isCartOpen);
    dispatch(openAddToCard(false));
  };

  return (
    <BrowserRouter>
      <Navbar />
      <DrawerComponent2 onClose={toggleCartDrawer} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/category" element={<Category />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/buyNow" element={<BuyNowMain />} />
      </Routes>

      <Main />
    </BrowserRouter>
  );
}

export default MainNavigator;
