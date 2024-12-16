import React from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full text-customDarkRed bg-[#C1C1C1] py-4 px-8 flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-6">
      <div>
        <img
          src="./scdc1.png"
          alt="logo"
          className="w-50 h-12 object-contain"
        />
        <p className="-mt-1 italic text-[#AE0C07] text-xs font-extrabold text-end">
          COPYRIGHT2024
        </p>
      </div>
      <p className="text-lg italic font-bold text-center">
        Your Reliable Building Partner
      </p>

      <div
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="font-semibold flex items-center gap-2 text-lg p-2 rounded-lg hover:bg-white/50 hover:backdrop-blur transition duration-200 ease-in-out cursor-pointer"
      >
        Go to top
        <FaArrowAltCircleUp className="size-8" />
      </div>
    </div>
  );
};

export default Footer;
