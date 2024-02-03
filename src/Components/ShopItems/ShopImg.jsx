import React, { useEffect, useState } from "react";
import { ShopSlider } from "./ShopSlider";
import "./ShopInfoMain/ShopInfoMain.css";
import arr from "../../product.json"
import { useSearchParams } from 'react-router-dom';

export const ShopImg = () => {
  // let arr = [

  //   {
  //     Img: "https://images.unsplash.com/photo-1535556116002-6281ff3e9f36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D",
  //     title: "Long crystal earrings",
  //     id: 1,
  //     pid:1,
  //   },
  //   {
  //     Img: "https://images.unsplash.com/photo-1528121238716-306799520ddc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
  //     title: "Embossed hoop earrings",  
  //     id: 2,
  //     pid:1,
  //   },
  //   {
  //     Img: "https://images.unsplash.com/photo-1608042314453-ae338d80c427?q=80&w=2010&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     title: "Flower crystal ring",
  //     id: 3,
  //     pid:1,
  //   },
  //   {
  //     Img: "https://images.unsplash.com/photo-1459204195697-4de88edf3ab1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8",
  //     title: "Neck chain",
  //     id: 4,
  //     pid:1,
  //   },
  // ];

  const [searchParams, setSearchParams] = useSearchParams();

  const [selectedImageId, setSelectedImageId] = useState();

  const handleImageClick = (id) => {
    setSelectedImageId(id);
    setSearchParams({id});
  };

  useEffect(() => {
    if (arr.length > 0) {
      const firstImageId = arr[0].id;
      setSearchParams({ id: firstImageId });
    }
  }, []);
  return (
    <div style={{ display: "flex" }} className="shopimgflex">
      <div style={{ width: "100%" }} className="shopimg">
        {arr.map((x, index) => (
          <img
            key={x.id}
            src={x.Img}
            alt={x.title}
            style={{ height: "90px", width: "90px", marginTop: "10px" }}
            onClick={() => handleImageClick(x.id)}
          />
        ))}
      </div>
      <div>
        <ShopSlider selectedImageId={selectedImageId} />
      </div>
    </div>
  );
};


