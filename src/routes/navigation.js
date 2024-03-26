import Home from "../page/home/home";
import { Route, Routes, BrowserRouter, useNavigate, Outlet } from "react-router-dom";
import Shop from "../page/shop/shop";
import Category from "../page/category/category";
import BuyNowMain from "../Components/ShopItems/BuyNow/BuyNowMain";
import Navbar from "../Components/Header/Navbar/Navbar";
import UserPage from "../Components/Header/User/UserPage";
import Main from "../Components/fotter/Main";
import "../Components/style/responsive.css";
import { useDispatch } from "react-redux";
import { openAddToCard } from "../Redux/Action/action";
import { DrawerComponent2 } from "../Components/Header/Sidebar/DrawerComponent2";
import Signup from "../Components/Header/User/Signup";
import Login from "../Components/Header/User/Login";
import UserProfileData from "../Components/Header/User/UserProfileData";
import UserOrderDtalis from "../Components/Header/User/UserOrderDtalis";
import { useState } from "react";
import ForgetPassword from "../Components/Header/User/ForgetPassword";
import UserProfilDataForm from "../Components/Header/User/UserProfilDataForm";
import UserAddressData from "../Components/Header/User/UserAddressData";

function MainNavigator() {
  const [isLogin, setIsLogin] = useState(
    JSON.parse(localStorage.getItem("UserLoginData"))
  );
  const dispatch = useDispatch();
  const toggleCartDrawer = () => {
    // setCartOpen(!isCartOpen);
    dispatch(openAddToCard(false));
    // openAddToCard(false) ? document.body.style.overflow = 'unset' : document.body.style.overflow = 'hidden';
  };
  const handleLogin = () => {
    setIsLogin(true);
  };

  return (
    <BrowserRouter>
      <Navbar />
      <DrawerComponent2 onClose={toggleCartDrawer} />
      <Routes>
        <Route path="/shop" element={<Shop />} />
        <Route path="/category" element={<Category />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/buyNow" element={<BuyNowMain />} />
        <Route path="/userData"> 
          <Route index={true} element={<UserProfileData />} />
          <Route path="userperinfo" element={<UserProfilDataForm />} />
          <Route path="useradd" element={<UserAddressData />} />
        </Route>
        <Route
          path="/userOrderDetalis/:orderId"
          element={<UserOrderDtalis />}
        />

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
      </Routes>
      {/* <Routes>
        {isLogin == true ? (
          <>x 
            <Route path="/shop" element={<Shop />} />
            <Route path="/category" element={<Category />} />
            <Route path="/user" element={<UserPage />} />
            <Route path="/buyNow" element={<BuyNowMain />} />
            <Route path="/userData" element={<UserProfileData />} />
            <Route
              path="/userOrderDetalis/:orderId"
              element={<UserOrderDtalis />}
            />
          </>
        ) : (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/signup" element={<Signup />} />
          </>
        )}
      </Routes> */}
      <Main />
    </BrowserRouter>
  );
}

export default MainNavigator;
