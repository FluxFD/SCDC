import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/pagination";

import SwiperCore, { Pagination } from "swiper";

SwiperCore.use([Pagination]);

// Testimonials Data
const testimonialsData = [
  {
    text: "SCDC has been an absolute pleasure to work with. They’re very approachable and always easy to talk to. They took the time to listen to our needs and delivered exceptional results for our commercial construction project. Highly recommend their services!",
    name: "Anonymous",
    role: "Commercial Client",
  },
  {
    text: "What stands out most about SCDC is their commitment to quality and customer satisfaction. They were always available to answer any questions and provided top-notch service throughout our residential construction project. I felt supported every step of the way.",
    name: "Anonymous",
    role: "Residential Client",
  },
  {
    text: "We’ve worked with SCDC for both landscaping and equipment rental services. They are incredibly easy to communicate with, and their team is very professional. They made sure everything was completed on time and with the highest quality. Very trustworthy!",
    name: "Anonymous",
    role: "Industrial Client",
  },
  {
    text: "SCDC’s team is extremely dedicated to getting the job done right. They worked tirelessly on our industrial project, and their approachability made the entire process seamless. It’s rare to find such a committed team.",
    name: "Anonymous",
    role: "Industrial Client",
  },
  {
    text: "I can always rely on SCDC to provide high-quality aggregates and equipment when we need them. They’re prompt, dependable, and truly easy to work with. You can tell they really care about their clients.",
    name: "Anonymous",
    role: "Supply & Rental Client",
  },
  {
    text: "From the start, SCDC made our landscaping project easy and stress-free. Their team is approachable, professional, and incredibly committed to making sure the job is done perfectly. They truly care about delivering great results!",
    name: "Anonymous",
    role: "Residential Client",
  },
];

const Testimonials = () => {
  // Split testimonials into chunks for Swiper slides (e.g., 3 per slide)
  const testimonialsChunks = [];
  for (let i = 0; i < testimonialsData.length; i += 3) {
    testimonialsChunks.push(testimonialsData.slice(i, i + 3));
  }

  return (
    <section className="text-customDarkRed w-full px-4 py-20 lg:p-20 flex flex-col items-center justify-center gap-16 bg-customLightgray">
      <div className="space-y-6 text-center">
        <h2 className="text-4xl font-bold ">Hear From Our Satisfied Clients</h2>
        <p className="italic font-medium text-lg text-center">
          “Real feedback from clients who have experienced our commitment to
          quality and professionalism”
        </p>
      </div>

      <Swiper
        pagination={true}
        modules={[Pagination]}
        className="w-full"
        style={{
          paddingBottom: "40px",
        }}
        grabCursor
        spaceBetween={20}
      >
        {testimonialsChunks.map((chunk, chunkIndex) => (
          <SwiperSlide key={chunkIndex}>
            <div className="w-full max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {chunk.map((testimonial, index) => (
                <div
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay={index * 100}
                  key={index}
                >
                  <Testimonial {...testimonial} />
                </div>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

const Testimonial = ({ text, name, role }) => {
  return (
    <div className="w-full p-6 space-y-6 bg-white rounded-xl shadow">
      <div className="flex items-center gap-3">
        <img
          src="/48X48.png"
          alt="Avatar Placeholder"
          className="size-[50px] rounded-full object-cover"
        />
        <div>
          <p className="font-bold">{name}</p>
          <p className="text-sm italic">{role}</p>
        </div>
      </div>

      <p className="italic">“{text}”</p>
    </div>
  );
};

export default Testimonials;
