import React from "react";
import Picture1 from "../../Components/newArrival/Picture1";
import SingleImg from "../../Components/FRENCH CROWN FOR KINGS/SingleImg";
import SingleImgInQuenns from "../../Components/FRENCH CROWN FOR QUEENS/SingleImgInQuenns";
import AllNewsletter from "../../Components/NEWSLETTER/AllNewsletter";
import SingleImgInNewCollection from "../../Components/NewCollection/SingleImgInNewCollection";
import Main from "../../Components/fotter/Main";

const Home = () => {
  return (
    <>
      <Picture1 />
      <SingleImg />
      <SingleImgInQuenns />
      <AllNewsletter/>
      <SingleImgInNewCollection/>
      <Main/>
    </>
  );
};

export default Home;
