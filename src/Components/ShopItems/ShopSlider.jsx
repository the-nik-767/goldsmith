import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";

export const ShopSlider = ({ selectedImageId, images }) => {
  const [leftImages, setLeftImages] = useState([]);

  useEffect(() => {
    if (images && images.length > 0) {
      setLeftImages(images.slice(0, 4));
    }
  }, [images]);

  const handleCarouselChange = (index) => {
    setLeftImages(images.slice(index, index + 4));
  };

  return (
    <div className="shopslider-container">
      <Carousel
        className="shopslider"
        onChange={handleCarouselChange}
        showArrows={true}
      >
        {images &&
          images.map((x, index) =>
            x.prdimg &&
            JSON.parse(x.prdimg).map((image, i) => (
              <img
                key={`${index}-${i}`}
                src={image.url}
                alt={x.title}
                style={{ width: "100%", height: "100%" }}
              />
            ))
          )}
      </Carousel>
      <div className="left-images">
        {leftImages.map((image, index) => (
          <img
            key={index}
            src={image.url}
            alt={image.title}
            style={{ width: "100%", height: "100%" }}
          />
        ))}
      </div>
    </div>
  );
};
