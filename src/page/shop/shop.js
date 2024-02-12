import React from "react";
import Navbar from "../../Components/Header/Navbar/Navbar";
import ShopMain from "../../Components/ShopItems/ShopMain";

const Shop = ({SetOpenAddToCart}) => {
  return (
    <div>
      <ShopMain SetOpenAddToCart={SetOpenAddToCart}/>
    </div>
  );
};

export default Shop;
