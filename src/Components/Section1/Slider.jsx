import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './style/silder.css';


const Slider = () => {
  // const [array, setArray] = useState([
  //   {
  //     id: 1,
  //     image:
  //       "https://images.pexels.com/photos/4639591/pexels-photo-4639591.jpeg",
  //     buttonText: "Button 1",
  //     buttonPosition: { left: "5%", top: "50%" }
  //   },
  //   {
  //     id: 2,
  //     image:
  //       "https://images.pexels.com/photos/3641059/pexels-photo-3641059.jpeg",
  //     buttonText: "Button 2",
  //     buttonPosition: { bottom: "10%", left: "50%" }
  //   },
  //   {
  //     id: 3,
  //     image:
  //       "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //     buttonText: "Button 3",
  //     buttonPosition: { right: "10%", bottom: "10%" }
  //   },
  // ]);
  const onChange = (index) => {
    // console.log("Slide changed to index", index);
  };

  const onClickItem = (index, item) => {
    // console.log("Clicked item", index, item);
  };

  const onClickThumb = (index) => {
    // console.log("Clicked thumb", index);
  };
  return (
    <div style={{ width: "100%", height: "764px" }}>
      {/* <Carousel
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
      </Carousel> */}

      <Carousel showArrows={true} onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb}  infiniteLoop={true} showThumbs={false}  autoPlay={true}>
        <div style={{height:'500px'}}> 
          <img src="https://images.pexels.com/photos/4639591/pexels-photo-4639591.jpeg" style={{ width: "100%", height: "800px" }}/>
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src= "https://images.pexels.com/photos/3641059/pexels-photo-3641059.jpeg" style={{ width: "100%", height: "800px" }}/>
          <p className="legend2">Legend 2</p>
        </div>
        <div>
          <img src= "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" style={{ width: "100%", height: "800px" }}/>
          <p className="legend3">Legend 3</p>
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1514927465065-bbdc86c7a76c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8amV3ZWxsZXJ5JTIwaW1hZ2UlMjBqcGd8ZW58MHx8MHx8fDA%3D" style={{ width: "100%", height: "800px" }}/>
          <p className="legend4">Legend 4</p>
        </div>
      </Carousel>
    </div>

  );
};

export default Slider;

