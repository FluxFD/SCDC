import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

SwiperCore.use([Autoplay]);

const IndustryExpertise = () => {
  const swiperRef = useRef();

  return (
    <section style={{
      backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/bgused.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }} className="text-customDarkRed w-full px-4 py-20 lg:p-20 flex flex-col items-center justify-center gap-16 bg-customLightgray">
      
      <div className="space-y-6 text-center">
        <h2 className="text-5xl font-bold text-white ">
          Industry Expertise
        </h2>
        <p className="text-white max-w-5xl text-2xl text-center">
          SCDC is a comprehensive construction and infrastructure solutions
          provider
        </p>
      </div>

      <Swiper
        ref={swiperRef}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop
        modules={[Autoplay]}
        className="w-full"
      >
        <div className="w-full max-w-5xl mx-auto flex justify-end pb-2">
          <div className="flex items-center gap-3">
            <div
              data-aos="zoom-in"
              data-aos-duration="2000"
              onClick={() => swiperRef.current?.swiper.slidePrev()}
              className="size-12 sm:size-16 rounded-full border-4 border-[#ffda38] flex justify-center items-center cursor-pointer transform transition-transform duration-200 hover:scale-105 active:scale-100"
            >
              <FaArrowLeft className="size-6 sm:size-9 text-[#ffda38]" />
            </div>
            <div
              data-aos="zoom-in"
              data-aos-duration="2000"
              onClick={() => swiperRef.current?.swiper.slideNext()}
              className="size-12 sm:size-16 rounded-full border-4 border-[#ffda38] flex justify-center items-center cursor-pointer transform transition-transform duration-200 hover:scale-105 active:scale-100"
            >
              <FaArrowRight className="size-6 sm:size-9 text-[#ffda38]" />
            </div>
          </div>
        </div>

        <SwiperSlide className="relative w-full h-full flex items-center pb-16">
          <a href="/services#" className="mx-auto">
            <div className="relative w-full max-w-4xl mx-auto ">
              <img
                loading="lazy"
                src="/used_landing_page/used_industry_expertise/Picture 1.png"
                alt=""
                className="object-cover aspect-video h-full w-full rounded-lg"
              />

              <div className="absolute z-10 -bottom-8 right-16 py-4 px-8 text-xl sm:text-2xl font-bold text-center text-white bg-[#5a0707] rounded-lg">
                Pre - Construction
              </div>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide className="relative w-full h-full flex items-center pb-16">
          <a href="/services#" className="mx-auto">
            <div className="relative w-full max-w-4xl mx-auto ">
              <img
                loading="lazy"
                src="/used_landing_page/used_industry_expertise/d5c30235-4610-4e99-8f13-cd34fa5606f4.jpg"
                alt=""
                className="object-cover aspect-video h-full w-full rounded-lg"
              />

              <div className="absolute z-10 -bottom-8 right-16 py-4 px-8 text-xl sm:text-2xl font-bold text-center text-white bg-[#5a0707] rounded-lg">
                General Construction
              </div>
            </div>
          </a>
        </SwiperSlide>
        <SwiperSlide className="relative w-full h-full flex items-center pb-16">
          <a href="/services#" className="mx-auto">
            <div className="relative w-full max-w-4xl mx-auto ">
              <img
                loading="lazy"
                src="/used_landing_page/used_industry_expertise/Picture 3.jpg"
                alt=""
                className="object-cover aspect-video h-full w-full rounded-lg"
              />

              <div className="absolute z-10 -bottom-8 right-12 sm:right-16 py-4 px-8 text-lg sm:text-2xl font-bold text-center text-white bg-[#5a0707] rounded-lg">
                Construction Management
              </div>
            </div>
          </a>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default IndustryExpertise;
