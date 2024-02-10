import Home from "../page/home/home";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Shop from "../page/shop/shop";
import Category from "../page/category/category";
import UserLogo from "../Components/Header/User/UserLogo";
import ByuNow from "../Components/ShopItems/BuyNow/ByuNow";
import Checkout from "../Components/ShopItems/BuyNow/checkOutFrom/Checkout";
import BuyNowMain from "../Components/ShopItems/BuyNow/BuyNowMain";
import AllField from "../Components/ShopItems/BuyNow/checkOutFrom/AllField";
import PaymentMain from "../Components/ShopItems/BuyNow/Payment/PaymentMain";
// import { ShopImg } from "../Components/ShopItems/ShopImg";

function MainNavigator() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} /> 
        <Route path="/category" element={<Category />} />  
        <Route path="/user" element={<UserLogo />} />  
        <Route path="/buyNow" element={<BuyNowMain />} />  
        <Route path="/shop" element={<Shop />} />
        {/* <Route path="/shop/:id" element={<ShopImg />} />  */}
        <Route path="/category" element={<Category />} />     
      </Routes>
    </BrowserRouter>
  );
}

export default MainNavigator;
