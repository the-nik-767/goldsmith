import React, { useEffect, useState } from "react";
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


const ShopMain = () => {
  useEffect(()=> {
    window.scrollTo(0, 0);
  }, [])
  
  return (
    
     <div>
     <div className=" shopmain">
        <ShopInfosection1 />
      </div>
      <div className="mt-5">
        <Sec1Main />
        <Section2Main />
        {/* <Main /> */}
      </div>
     </div>
    
  );
};

export default ShopMain;
