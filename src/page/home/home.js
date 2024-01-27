import React from "react";
import Picture1 from "../../components/newArrival/Picture1";
import SingleImg from "../../components/FRENCH CROWN FOR KINGS/SingleImg"
import SingleImgInQuenns from "../../components/FRENCH CROWN FOR QUEENS/SingleImgInQuenns"
import AllNewsletter from "../../components/NEWSLETTER/AllNewsletter"
import SingleImgInNewCollection from "../../components/NewCollection/SingleImgInNewCollection"
import Main from "../../components/fotter/Main"

const Home = () => {
  return (
    <>
      <Picture1/>
      <SingleImg/>
      <SingleImgInQuenns />
      <AllNewsletter/>
      <SingleImgInNewCollection/>
      <Main/>
    </>
  );
};

export default Home;
