import React from "react";

const Video = () => {
  return (
    <div
      className="relative overflow-hidden max-w-full mt-9"
      style={{ height: "720px" }}
    >
      <video autoPlay loop playsInline muted style={{ width: "100%" }}>
        <source
          src="https://vod-progressive.akamaized.net/exp=1706365123~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F1194%2F25%2F630974928%2F2902661888.mp4~hmac=9f0b7b0ecd14226404631e33adae0876d85d858dc29bd964379965f0244721de/vimeo-prod-skyfire-std-us/01/1194/25/630974928/2902661888.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default Video;
