import React from "react";
import Banner from "../Components/Banner";
import Section2 from "../Components/Section2";
import Services from "../Components/Services";
import AboutUs from "../Components/AboutUs";
import Gallery from "../Components/Gallery";
import LogoCarousel from "../Components/LogoCarousel";
import Contact from "../Components/Contact";
import Testimonials from "../Components/Testimonials";

function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col font-inter pt-[64px] lg:pt-[80px]">
      <Banner />
      <Section2 />
      <Services />
      <AboutUs />
      <LogoCarousel />
      <Testimonials />
      <Gallery />
      <Contact />
    </div>
  );
}

export default Home;
