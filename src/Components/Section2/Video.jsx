import React from "react";

const Video = () => {
  return (
    <div
      className="relative overflow-hidden max-w-full mt-9"
      style={{ height: "720px" }}
    >
      <video autoPlay loop playsInline muted style={{ width: "100%" }}>
        <source
          src="https://player.vimeo.com/external/630974928.sd.mp4?s=d6fcff3345c5e1b2cb1b7c45c616701524a8f30a&profile_id=164&oauth2_token_id=57447761"
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export default Video;
