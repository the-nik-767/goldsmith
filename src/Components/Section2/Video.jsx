import { IKVideo } from "imagekitio-react";
import React from "react";
// import video1 from '../../assets/video/video3.mp4'

const Video = () => {
  return (
    <div
      className="relative overflow-hidden "
      style={{  width: "100%" }}
    >
      {/* <video
        autoPlay
        loop
        playsInline
        muted
        style={{ width: "100%", height: "100%" }}
      >
        <source
          src="https://ik.imagekit.io/saufrbirqu/video/video123.mp4?updatedAt=1707905749537"
          type="video/mp4"
        />
      </video> */}

      <IKVideo
        src="https://ik.imagekit.io/saufrbirqu/video/video123.mp4?updatedAt=1707905749537"
        autoPlay
        loop
        playsInline
        muted
        style={{ width: "100%" }}
      />
    </div>
  );
};

export default Video;
