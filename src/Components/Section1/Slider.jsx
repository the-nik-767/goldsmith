import React, { useState } from "react";
import { Button, Carousel } from "@material-tailwind/react";

const Slider = () => {
  const [array, setArray] = useState([
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
    },
  ]);
  // const [currentIndex, setCurrentIndex] = useState(0);

  // const handleIndicatorClick = (index) => {
  //   setCurrentIndex(index);
  // };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentIndex((prevIndex) => (prevIndex === 3 ? 0 : prevIndex + 1));
  //   }, 2000);
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div>
      <Carousel
        // style={{ justifyContent: "center", alignContent: "center" }}
        transition={{ duration: 2 }}
        className="rounded-xl"
        // autoplay
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div
            style={{ right: "5%" }}
            className="absolute bottom-4  z-50 flex -translate-x-2/4 gap-2"
          >
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "w-5 h-5 bg-white" : "w-4 h-4 bg-white/50"
                }`}
                onClick={() => {
                  setActiveIndex(i);
                }}
              />
            ))}
          </div>
        )}
      >
        {array.map((item, index) => {
          console.log("index====>", index);
          return (
            <div>
              <div
                style={{
                  backgroundImage: "url(" + `${item.image}` + ")",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  width: "100%",
                  height: "700px",
                }}
                alt="image 1"
                className="h-full w-full object-cover"
              >
                {console.log("item.id====>", item.id == item.id / 2)}

                {item.id == item.id / 2 ? (
                  <Button
                    style={{ right: "5%", top: "80%" }}
                    className="absolute"
                    size="sm"
                  >
                    helloe
                  </Button>
                ) : (
                  <Button
                    style={{ left: "5%", top: "80%" }}
                    className="absolute"
                    size="sm"
                  >
                    helloe
                  </Button>
                )}
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
    // <div className="custom-carousel">
    //   {[img1, img2, img3, img4].map((img, index) => (
    //     <div
    //       key={index}
    //       className={`carousel-slide ${currentIndex === index ? "active" : ""}`}
    //     >
    //       <div
    //         style={{
    //           backgroundImage: "url(" + img + ")",
    //           backgroundSize: "auto",
    //           backgroundSize: "contain",
    //           backgroundRepeat: "no-repeat",
    //           backgroundPosition: "center",
    //           width: "100vw",
    //           height: "48vh",
    //         }}
    //         alt={`Slide ${index + 1}`}
    //       >
    //         <div className="main">
    //           <div className="indicators">
    //             {[img1, img2, img3, img4].map((_, index) => (
    //               <button
    //                 key={index}
    //                 type="button"
    //                 className={`indicator ${
    //                   index === currentIndex ? "active" : ""
    //                 }`}
    //                 aria-current={index === currentIndex ? "true" : "false"}
    //                 onClick={() => handleIndicatorClick(index)}
    //               />
    //             ))}
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   ))}
    // </div>
  );
};

export default Slider;
