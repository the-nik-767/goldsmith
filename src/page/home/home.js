import React from "react";
import Navbar from "../../Components/Header/Navbar/Navbar";
import Slider from "../../Components/Section1/Slider";
import Video from "../../Components/Section2/Video";
import Picture1 from "../../Components/newArrival/Picture1";
import SingleImg from "../../Components/FRENCHCROWNFORKINGS/SingleImg"
import AllNewsletter from "../../Components/NEWSLETTER/AllNewsletter"
import Main from "../../Components/fotter/Main"
import SingleImgInQuenns from "../../Components/FRENCHCROWNFORQUEENS/SingleImgInQuenns";
import SingleImgInNewCollection from "../../Components/NewCollection/SingleImgInNewCollection"
import '../../Components/style/FontFamilyUsing.css'

const Home = ({openAddToCart , SetOpenAddToCart}) => {
  return(
    <div>
      
      <Slider/>
      <Video/>
      <Picture1 openAddToCart={openAddToCart} SetOpenAddToCart={SetOpenAddToCart}/>
      <SingleImg/>
      <SingleImgInQuenns />
      <AllNewsletter/>
      <SingleImgInNewCollection/>
      {/* <Main/> */}
    </div>
    
     );
  
  }

  export default Home;
