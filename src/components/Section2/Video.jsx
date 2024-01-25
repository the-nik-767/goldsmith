import React from "react";
import Video1 from "../../assets/navbar/section2.mp4";

const Video = () => {
  return (
    <div className="relative overflow-hidden max-w-full mt-9" style={{height:"500px"}}>
      <video controls autoPlay={true} loop style={{ height: "100%", width: "100%" }}>
        <source src={Video1} type="video/mp4" />
      </video>
    </div>
  );
};

export default Video;
