import Home from "../page/home/home";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Shop from "../page/shop/shop";

function MainNavigator() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />     
      </Routes>
    </BrowserRouter>
  );//element={<Navigate to='/login'
}

export default MainNavigator;
