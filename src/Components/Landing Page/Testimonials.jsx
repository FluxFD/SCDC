import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/pagination";

import SwiperCore, { Pagination } from "swiper";

SwiperCore.use([Pagination]);

const Testimonials = () => {
  return (
    <section className="text-customDarkRed w-full px-4 py-20 lg:p-20 flex flex-col items-center justify-center gap-16 bg-customLightgray">
      <div className="space-y-6 text-center">
        <h2 className="text-4xl font-bold ">Hear From Our Satisfied Clients</h2>
        <p className="italic font-medium text-lg  text-center">
          “Real feedback from clients who have experienced our commitment to
          quality and professionalism”
        </p>
      </div>

      <Swiper
        pagination={true}
        modules={[Pagination]}
        className="w-full "
        style={{
          paddingBottom: "40px",
        }}
        grabCursor
        spaceBetween={20}
      >
        <SwiperSlide>
          <div className="w-full max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Testimonial />
            <Testimonial />
            <Testimonial />
            <Testimonial />
            <Testimonial />
            <Testimonial />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Testimonial />
            <Testimonial />
            <Testimonial />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

const Testimonial = () => {
  return (
    <div className="w-full p-6 space-y-6 bg-white rounded-xl shadow">
      <div className="flex items-center gap-3">
        <img
          src="https://placehold.co/50x50"
          alt="Avatar Placeholder"
          className="size-[50px] rounded-full"
        />
        <div>
          <p className="font-bold">Steve Jobs</p>
          <p className="text-sm italic">Commercial</p>
        </div>
      </div>

      <p className="italic">
        “Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
        Lorem ipsum Lorem ipsum Lorem ipsum “
      </p>
    </div>
  );
};

export default Testimonials;
