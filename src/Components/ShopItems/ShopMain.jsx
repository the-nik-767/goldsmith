import React, { useState } from "react";
import { ShopImg } from "./ShopImg";
import ShopInfoMain from "./ShopInfoMain/ShopInfoMain";
import Sec1Main from "./Section1/Sec1Main";
import Section2Main from "./Section2/Section2Main";
import Main from "../fotter/Main"
import { ShopInfoRating } from "./ShopInfoMain/ShopInfoRating";
import ShopInfoDropdown from "./ShopInfoMain/ShopInfoDropdown";
import { ShopInfoAccordian } from "./ShopInfoMain/ShopInfoAccordian";

import "../ShopItems/ShopInfoMain/ShopInfoMain.css"
import ShopInfosection1 from "./ShopInfosection1";


const ShopMain = ({SetOpenAddToCart}) => {
  
  return (
    <>
     <div className="">
     <div className="flex justify-center shopmain">
        <ShopInfosection1 SetOpenAddToCart={SetOpenAddToCart}/>
      </div>
      <div>
        <Sec1Main />
        <Section2Main />
        <Main />
      </div>
     </div>
    </>
  );
};

export default ShopMain;
