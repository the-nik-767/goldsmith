import { Button, Carousel } from "@material-tailwind/react";
import { useState } from "react";

export function CarouselTransition() {
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



  return (
    <div>
      <Carousel
        // style={{ justifyContent: "center", alignContent: "center" }}
        transition={{ duration: 2 }}
        className="rounded-xl"
        autoplay
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
                  height: "500px",
                }}
                // src={item.image}
                alt="image 1"
                className="h-full w-full object-cover"
              >
                {/* {index == index/2 ? (
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
                )} */}

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

                {/* <Button
                  style={{
                    marginTop:
                      index === 0 ? "25%" : index === 1 ? "30%" : "30%",
                    marginLeft:
                      index === 0 ? "10%" : index === 1 ? "50%" : "90%",
                  }}
                  className="rounded-full"
                >
                  {index === 0
                    ? "Filled left"
                    : index === 1
                    ? "Fill center"
                    : "Fill right"}
                </Button> */}
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
