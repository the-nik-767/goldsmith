import React from "react";
import { ShopImg } from "./ShopImg";
import ShopInfoMain from "./ShopInfoMain/ShopInfoMain";
import Sec1Main from "./Section1/Sec1Main";
import Section2Main from "./Section2/Section2Main";
import Main from "../fotter/Main"
import { ShopInfoRating } from "./ShopInfoMain/ShopInfoRating";
import ShopInfoDropdown from "./ShopInfoMain/ShopInfoDropdown";
import { ShopInfoAccordian } from "./ShopInfoMain/ShopInfoAccordian";
// import "./ShopInfoMain.css";
import "../ShopItems/ShopInfoMain/ShopInfoMain.css"


const ShopMain = () => {
  return (
    <>
      <div className="flex justify-center shopmain">
        <ShopImg />
        <div className="lg:w-80 infomain">
          <ShopInfoRating />
          <ShopInfoDropdown />
          <ShopInfoAccordian />
        </div>
        {/* <ShopInfoMain /> */}
      </div>
      <div>
        <Sec1Main />
        <Section2Main />
        <Main />
      </div>
    </>
  );
};

export default ShopMain;
