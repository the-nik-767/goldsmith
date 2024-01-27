import React from "react";
import Navbar from "../../components/Header/Navbar/Navbar";
import Slider from "../../components/Section1/Slider";
import Video from "../../components/Section2/Video";

import Picture1 from "../../components/newArrival/Picture1";
import SingleImg from "../../components/FRENCH CROWN FOR KINGS/SingleImg"
// import SingleImgInQuenns from "../../components/FRENCH CROWN FOR QUEENS/SingleImgInQuenns"
import AllNewsletter from "../../components/NEWSLETTER/AllNewsletter"
// import SingleImgInNewCollection from "../../components/NewCollection/SingleImgInNewCollection"
import Main from "../../components/fotter/Main"
import SingleImgInQuenns from "../../Components/FRENCH CROWN FOR QUEENS/SingleImgInQuenns";
import SingleImgInNewCollection from "../../Components/NewCollection/SingleImgInNewCollection";

const Home = () => {
  return(
    <div>
      <Navbar/>
      <Slider/>
      <Video/>
      <Picture1/>
      <SingleImg/>
      <SingleImgInQuenns />
      <AllNewsletter/>
      <SingleImgInNewCollection/>
      <Main/>
    </div>
    
     );
  
  }
