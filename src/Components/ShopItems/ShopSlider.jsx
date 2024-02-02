import React from "react";
import { Carousel } from "@material-tailwind/react";
import "./ShopInfoMain/ShopInfoMain.css";

export const ShopSlider = ({ selectedImageId }) => {
  const images = [
    "https://images.unsplash.com/photo-1535556116002-6281ff3e9f36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D", // Replace with your actual image URLs
    "https://images.unsplash.com/photo-1528121238716-306799520ddc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
    "https://images.unsplash.com/photo-1608042314453-ae338d80c427?q=80&w=2010&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1459204195697-4de88edf3ab1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8",
  ];

  const reorderedImages = selectedImageId
    ? [
        images[selectedImageId - 1],
        ...images.slice(0, selectedImageId - 1),
        ...images.slice(selectedImageId),
      ]
    : images;

  return (
    <>
      <Carousel
        transition={{ duration: 2 }}
        style={{ height: "750px", marginTop: "110px" }}
        flex-auto
        className="shopslider"
      >
        {reorderedImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`image ${index + 1}`}
            className="h-full w-full object-cover"
          />
        ))}
      </Carousel>
    </>
  );
};
