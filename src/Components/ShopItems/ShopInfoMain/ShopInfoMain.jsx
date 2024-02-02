import React from "react";
import  ShopInfoDropdown  from "./ShopInfoDropdown";
import { ShopInfoAccordian } from "./ShopInfoAccordian";
import { ShopInfoRating } from "./ShopInfoRating";
import "./ShopInfoMain.css";
const ShopInfoMain = () => {
  return (
    <div className="lg:w-80 infomain">
      <ShopInfoRating />
      <ShopInfoDropdown />
      <ShopInfoAccordian />
    </div>
  );
};

export default ShopInfoMain;
