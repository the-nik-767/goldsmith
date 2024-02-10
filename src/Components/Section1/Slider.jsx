import React, { useState } from "react";
import { Button, Carousel } from "@material-tailwind/react";

const Slider = () => {
  const [array, setArray] = useState([
    {
      id: 1,
      image:
        "https://images.pexels.com/photos/4639591/pexels-photo-4639591.jpeg",
      buttonText: "Button 1",
      buttonPosition: { left: "5%", top: "50%" }
    },
    {
      id: 2,
      image:
        "https://images.pexels.com/photos/3641059/pexels-photo-3641059.jpeg",
      buttonText: "Button 2",
      buttonPosition: { bottom: "10%", left: "50%" }
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      buttonText: "Button 3",
      buttonPosition: { right: "10%", bottom: "10%" }
    },
  ]);

  return (
    <div>
      <Carousel
        transition={{ duration: 2 }}
        className=""
        autoplay
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div
            style={{ right: "5%" }}
            className="absolute bottom-4  z-50 flex -translate-x-2/4 gap-2"
          >
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-5 h-5 bg-white" : "w-4 h-4 bg-white/50"
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
          return (
            <div>
              <div
                style={{
                  backgroundImage: "url(" + `${item.image}` + ")",
                  backgroundPosition: "center center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  width: "100%",
                  height: "700px",
                }}
                alt="image 1"
                className="h-full w-full object-cover"
              >
                {/* {index === 0 ? (
                  <Button
                    style={{ left: "5%", top: "50%" }}
                    className="absolute"
                    size="sm"
                  >
                    Button 1
                  </Button>
                ) : index === 1 ? (
                  <Button
                    style={{ bottom: "5%", left: "50%" }}
                    className="absolute"
                    size="sm"
                  >
                    Button 2
                  </Button>
                ) : (
                  <Button
                    style={{ right: "5%", top: "50%" }}
                    className="absolute"
                    size="sm"
                  >
                    Button 3
                  </Button>
                )} */}

                <Button
                  style={item.buttonPosition}
                  className="absolute"
                  size="sm"
                >
                  {item.buttonText}
                </Button>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>

  );
};

export default Slider;

