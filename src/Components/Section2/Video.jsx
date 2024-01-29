import React from "react";

const Video = () => {
  return (
    <div
      className="relative overflow-hidden max-w-full mt-9"
      style={{ height: "720px" }}
    >
      <video autoPlay loop playsInline muted style={{ width: "100%" }}>
        <source
          src="https://vod-progressive.akamaized.net/exp=1706519098~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F1194%2F25%2F630974928%2F2902661888.mp4~hmac=40674ed491c4070535c875b792be491a7c127ed88d75e1fc0d555b2973de4bab/vimeo-prod-skyfire-std-us/01/1194/25/630974928/2902661888.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default Video;
