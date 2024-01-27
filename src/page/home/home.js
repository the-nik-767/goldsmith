import React from "react";
import Navbar from "../../Components/Header/Navbar/Navbar";
import Slider from "../../Components/Section1/Slider";
import Video from "../../Components/Section2/Video";

import Picture1 from "../../Components/newArrival/Picture1";
import SingleImg from "../../Components/FRENCHCROWNFORKINGS/SingleImg"
// import SingleImgInQuenns from "../../components/FRENCH CROWN FOR QUEENS/SingleImgInQuenns"
import AllNewsletter from "../../Components/NEWSLETTER/AllNewsletter"
// import SingleImgInNewCollection from "../../components/NewCollection/SingleImgInNewCollection"
import Main from "../../Components/fotter/Main"
import SingleImgInQuenns from "../../Components/FRENCHCROWNFORQUEENS/SingleImgInQuenns";
// import SingleImgInNewCollection from "../../Components/NewCollection/SingleImgInNewCollection";
import SingleImgInNewCollection from "../../Components/NewCollection/SingleImgInNewCollection"

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

  export default Home;
