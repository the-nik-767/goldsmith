import React, { useEffect, useState } from "react";
import "./CustomCarousel.css";
import img1 from "../../assets/navbar/slider1.jpg";
import img2 from "../../assets/navbar/slider2.jpg";
import img3 from "../../assets/navbar/slider3.jpg";
import img4 from "../../assets/navbar/slider4.jpg";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleIndicatorClick = (index) => {
    setCurrentIndex(index);
  };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentIndex((prevIndex) => (prevIndex === 3 ? 0 : prevIndex + 1));
  //   }, 2000);
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div className="custom-carousel">
      {[img1, img2, img3, img4].map((img, index) => (
        <div
          key={index}
          className={`carousel-slide ${currentIndex === index ? "active" : ""}`}
        >
          <div
            style={{
              backgroundImage: "url(" + img + ")",
              backgroundSize: "auto",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              width: "100vw",
              height: "48vh",
            }}
            alt={`Slide ${index + 1}`}
          >
            <div className="main">
              <div className="indicators">
                {[img1, img2, img3, img4].map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    className={`indicator ${
                      index === currentIndex ? "active" : ""
                    }`}
                    aria-current={index === currentIndex ? "true" : "false"}
                    onClick={() => handleIndicatorClick(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slider;
