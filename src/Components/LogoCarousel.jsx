import React from "react";

const LogoCarousel = () => {
  return (
    <div className="w-full flex space-x-[25rem] overflow-hidden group bg-white">
      <div className="flex space-x-8  animate-loop-scroll group-hover:paused-carousel ">
        <LogoContainer />
      </div>

      <div
        className=" flex space-x-8 animate-loop-scroll group-hover:paused-carousel "
        aria-hidden="true"
      >
        <LogoContainer />
      </div>
    </div>
  );
};

const LogoContainer = () => {
  return (
    <>
      <img
        src="./scdc1.png"
        alt="Brand"
        className="w-[10rem] aspect-video object-contain"
      />
      <img
        src="./scdc1.png"
        alt="Brand"
        className="w-[10rem] aspect-video object-contain"
      />
      <img
        src="./scdc1.png"
        alt="Brand"
        className="w-[10rem] aspect-video object-contain"
      />
      <img
        src="./scdc1.png"
        alt="Brand"
        className="w-[10rem] aspect-video object-contain"
      />
      <img
        src="./scdc1.png"
        alt="Brand"
        className="w-[10rem] aspect-video object-contain"
      />
      <img
        src="./scdc1.png"
        alt="Brand"
        className="w-[10rem] aspect-video object-contain"
      />
      <img
        src="./scdc1.png"
        alt="Brand"
        className="w-[10rem] aspect-video object-contain"
      />
      <img
        src="./scdc1.png"
        alt="Brand"
        className="w-[10rem] aspect-video object-contain"
      />
    </>
  );
};

export default LogoCarousel;
