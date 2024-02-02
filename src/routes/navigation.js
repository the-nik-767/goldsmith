import Home from "../page/home/home";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Shop from "../page/shop/shop";
import Category from "../page/category/category";

function MainNavigator() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} /> 
        <Route path="/category" element={<Category />} />     
      </Routes>
    </BrowserRouter>
  );
}

export default MainNavigator;
