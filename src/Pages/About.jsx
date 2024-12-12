import AboutSection from "../Components/About/AboutSection";
import AboutHeader from "../Components/About/AboutHeader";
import AboutFounders from "../Components/About/AboutFounders";

function About() {
  return (
    <div
      className="w-full min-h-screen flex flex-col font-inter pt-[64px] lg:pt-[80px] text-[17px]"
      style={{ backgroundColor: "#333333" }}
    >
      <AboutHeader />
      <AboutFounders />
      <AboutSection />
    </div>
  );
}

export default About;
