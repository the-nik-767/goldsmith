import React from "react";
import Slider from "../../Components/Section1/Slider";
import Video from "../../Components/Section2/Video";
import Picture1 from "../../Components/newArrival/Picture1";
import SingleImg from "../../Components/All Category/SingleImg"
import AllNewsletter from "../../Components/NEWSLETTER/AllNewsletter"
import Main from "../../Components/fotter/Main"
import SingleImgInQuenns from "../../Components/FRENCHCROWNFORQUEENS/SingleImgInQuenns";
import SingleImgInNewCollection from "../../Components/NewCollection/SingleImgInNewCollection"
import '../../Components/style/FontFamilyUsing.css'
import Navbar from "../../Components/Header/Navbar/Navbar";

const Home = () => {
  return(
    <div>
     
      <Slider/>
      <Video/>
      <Picture1/>
      <SingleImg/>
      <SingleImgInQuenns />
      <AllNewsletter/>
      <SingleImgInNewCollection/>
      {/* <Main/> */}
    </div>
    
     );
  
  }

  export default Home;
