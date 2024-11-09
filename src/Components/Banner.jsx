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

      <div className="w-full h-full md:w-auto md:h-fit text-white text-center absolute bottom-0 md:bottom-8 md:left-8 p-10 flex flex-col items-center justify-center gap-4 bg-customDarkGray/70 md:rounded-xl">
        <p className="text-xl font-extrabold">
          Building Tomorrow's World Today <br />
          Your Reliable Building Partner
        </p>

        <div className="w-[10rem] h-1 bg-customOrange rounded-full"></div>

        <div className="flex items-center gap-4">
          <button className="text-sm mt-4 px-4 py-2 font-bold bg-customOrange hover:bg-customOrange/90 text-black rounded-lg">
            Quote Now
          </button>

          <button className="text-sm mt-4 px-4 py-2 font-bold bg-white/20 hover:bg-customDarkGray/90 rounded-lg">
            See Gallery
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
