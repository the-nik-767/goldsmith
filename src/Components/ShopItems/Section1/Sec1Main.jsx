import React from "react";
import Sec1 from "./Sec1";
import "./section1.css";
import '../../CategoryItems/ImgComponent/style/ImgComp.css'

const Sec1Main = () => {
  let arr = [
    {
      Img: "https://images.unsplash.com/photo-1549439602-43ebca2327af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8",
      title: "New Style Earrings",
      price : "999"
    },
    {
      Img: "https://images.unsplash.com/photo-1607703829739-c05b7beddf60?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8",
      title: "Old Style Ring",
      price :"999"
    },
    {
      Img: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8",
      title: "Faceted crystal bracelet",
      price :"999"
    },
    {
      Img: "https://images.unsplash.com/photo-1561828995-aa79a2db86dd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
      title: "Rhinestone crystal earring",
      price :"999"
      
    },
  ];
  return (
    <>
      {/* <hr className="mt-5 mb-5 " /> */}
      <div className=" text-center text-xl uppercase font-mono mt-24 mb-10 relative ">
        <h1 className="underline">You might also like</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid:cols-4 gap-3 justify-center">
        {arr.map((x) => {
          return (
            <Sec1 Img={x.Img} title={x.title} price={x.price} key={x.title} />
          );
        })}
      </div>
      {/* <div className="text-center "><a href="" className='bg-black hvr-sweep-to-right text-white  py-2 px-8 hover:bg-white  hover:border-solid border-2 border-black hover:text-black'>View All</a> </div> */}
      {/* <hr className='mt-10 mb-10 '/> */}
    </>
  );
};

export default Sec1Main;
