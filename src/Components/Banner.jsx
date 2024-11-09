import React from "react";

const Banner = () => {
  return (
    <div className="relative w-full lg:h-[calc(100vh-80px)]">
      <video
        src="https://firebasestorage.googleapis.com/v0/b/connectifylocal-299a6.appspot.com/o/SCDC%20VIDEO.mp4?alt=media&token=993713b8-8086-44fb-97c8-92232bdaaf69"
        autoPlay
        loop
        muted
        className="h-full w-full object-cover"
      />

      <div className="scale-in-center w-full h-[25vh] md:w-[98%] md:h-[95%] text-white text-center absolute inset-0 m-auto sm:p-10 flex flex-col items-center justify-center gap-4 md:gap-8 bg-customDarkGray/50 md:rounded-xl">
        <p className="text-xl sm:text-4xl lg:text-5xl font-extrabold ">
          Building Tomorrow's World Today <br />
          Your Reliable Building Partner
        </p>

        <div className="w-[10rem] h-[2px] sm:h-1 bg-customOrange rounded-full"></div>

        <div className="flex items-center gap-4">
          <button className="text-sm md:text-base px-4 py-2 font-bold bg-customOrange hover:bg-customOrange/90 text-black rounded-lg">
            Quote Now
          </button>

          <a
            href="#gallery"
            className="text-sm md:text-base px-4 py-2 font-bold bg-white/20 hover:bg-customDarkGray/90 rounded-lg"
          >
            See Gallery
          </a>
        </div>
      </div>

      <div className="hidden lg:flex absolute bottom-8 left-[47.5%] transform -translate-x-1/2 flex-col items-center animate-bounce">
        <span className="text-white">Scroll down</span>
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Banner;
