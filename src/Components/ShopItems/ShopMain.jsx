import React from "react";
import { ShopImg } from "./ShopImg";
import ShopInfoMain from "./ShopInfoMain/ShopInfoMain";
import Sec1Main from "./Section1/Sec1Main";
import Section2Main from "./Section2/Section2Main";
import Main from "../fotter/Main"

const ShopMain = () => {
  return (
    <>
      <div className="flex justify-center shopmain">
        <ShopImg />
        <ShopInfoMain />
      </div>
      <div>
        <Sec1Main/>
        <Section2Main/>
        <Main/>
      </div>
    </>
  );
};

export default ShopMain;
