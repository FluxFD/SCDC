import React, { useEffect } from "react";
import AboutUs from "../Components/Landing Page/AboutUs";
import LogoCarousel from "../Components/Landing Page/LogoCarousel";
import Contact from "../Components/Contact";
import Testimonials from "../Components/Landing Page/Testimonials";
import Gallery from "../Components/Landing Page/Gallery";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import IndustryExpertise from "../Components/Landing Page/IndustryExpertise";
import CountUp from "react-countup";
import { Tractor, TreesIcon, Truck } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

SwiperCore.use([Autoplay]);

function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const targetElement = document.getElementById(hash.substring(1));
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  return (
    <div className="w-full min-h-screen flex flex-col font-inter pt-[64px] lg:pt-[80px]">
      <section className="relative w-full h-[40vh] sm:h-[calc(100vh-80px)]">
        {/* <div className="space-y-4 tracking-wide absolute z-10 left-10 top-1/2 -translate-y-1/2 text-6xl font-bold text-white">
          <h1>Your Reliable</h1>
          <h1>Building Partner</h1>
        </div> */}

        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop
          modules={[Autoplay]}
          className="w-full h-full"
        >
          <SwiperSlide
            className="w-full h-full bg-cover bg-center flex items-center p-6 sm:p-16"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1)), url('/used_landing_page/DJI_0344.jpg')`,
            }}
          >
            <div className="space-y-4 tracking-wide text-4xl sm:text-5xl md:text-7xl font-bold text-white">
              <h1>Your Reliable</h1>
              <h1>Building Partner</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide
            className="w-full h-full bg-cover bg-center flex items-center p-6 sm:p-16"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1)), url('/used_landing_page/DJI_0292.jpg')`,
            }}
          >
            <div className="space-y-4 tracking-wide text-4xl sm:text-5xl md:text-7xl font-bold text-white">
              <h1>Your Reliable</h1>
              <h1>Building Partner</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide
            className="w-full h-full bg-cover bg-center flex items-center p-6 sm:p-16"
            style={{
              backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1)), url('/used_landing_page/DJI_0281.jpg')`,
            }}
          >
            <div className="space-y-4 tracking-wide text-4xl sm:text-5xl md:text-7xl font-bold text-white">
              <h1>Your Reliable</h1>
              <h1>Building Partner</h1>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      <AboutUs />

      <section className="text-center text-white w-full sm:h-[50vh] px-4 py-16 lg:p-10 flex flex-col items-center justify-center gap-16 bg-[#5a0707]">
        <h2 data-aos="fade-up" className="text-4xl font-bold">
          With Over 15 Years of Building Trust and Excellence
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-8">
          <div
            data-aos="fade-up-right"
            data-aos-duration="1000"
            className="w-[17rem] h-[10rem] text-center flex flex-col items-center justify-center gap-2 p-6 bg-white  "
          >
            <p className="text-5xl font-extrabold ml-4 text-black">
              <CountUp
                start={0}
                end={200}
                duration={10}
                onEnd={({ start }) => start()}
              />
              +
            </p>
            <p className="text-lg font-bold text-[#f9b22b]">
              Completed Projects
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="relative w-[17rem] h-[10rem] text-center flex flex-col items-center justify-center gap-2 p-6 bg-white  "
          >
            <p className="text-5xl font-extrabold text-black">
              <CountUp
                start={0}
                end={7}
                duration={10}
                onEnd={({ start }) => start()}
              />
            </p>
            <p className="text-lg font-bold text-[#f9b22b]">
              Anchor Ongoing Projects
            </p>
          </div>

          <div
            data-aos="fade-up-left"
            data-aos-duration="1000"
            className="w-[17rem] h-[10rem] text-center flex flex-col items-center justify-center gap-2 p-6 bg-white  "
          >
            <p className="text-5xl font-extrabold text-black">
              <CountUp
                start={0}
                end={120}
                duration={10}
                onEnd={({ start }) => start()}
              />
            </p>
            <p className="text-lg font-bold text-[#f9b22b]">
              Satisfied Clients
            </p>
          </div>
        </div>
      </section>

      <IndustryExpertise />

      <section className="relative text-white w-full px-4 py-16 lg:p-20 flex flex-col items-center justify-center bg-[#5a0707]">
        <div id="other-services" className="absolute -top-16"></div>

        <div className="space-y-6 text-center">
          <h2 className="text-4xl font-bold">Other Services</h2>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="w-full max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-center sm:gap-24 mt-10"
        >
          <Link to="/other-services#landscaping">
            <div className="min-w-[13rem] p-6 text-center text-lg font-semibold flex flex-col items-center justify-between gap-4 rounded-xl ">
              <TreesIcon className="size-24 text-white" strokeWidth={1} />
              <p>
                Landscape <br />
                Solution
              </p>
            </div>
          </Link>

          <Link to="/other-services#trucking">
            <div className="min-w-[13rem] p-6 text-center text-lg font-semibold flex flex-col items-center justify-between gap-4 rounded-xl">
              {/* <img
                src="/used_landing_page/used_other_services/picture 2.png"
                alt=""
              /> */}
              <Truck className="size-24 text-white" strokeWidth={1} />
              <p>
                Aggreegates Transport <br />
                Solutions (Trucking)
              </p>
            </div>
          </Link>

          <Link to="/other-services#rental">
            <div className="mb-6 min-w-[13rem] p-6 text-center text-lg font-semibold flex flex-col items-center justify-between gap-4 rounded-xl">
              {/* <img
                src="/used_landing_page/used_other_services/picture 3.png"
                alt=""
              /> */}
              <Tractor className="size-24 text-white" strokeWidth={1} />
              <p>Rental of Equipment</p>
            </div>
          </Link>
        </div>
      </section>

      <Testimonials />
      <LogoCarousel />
      <Gallery />
      <Contact />
    </div>
  );
}

export default Home;
