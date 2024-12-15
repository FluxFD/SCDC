import AboutHeader from "../Components/About/AboutHeader";
import AboutFounders from "../Components/About/AboutFounders";
import AboutSubsidiaries from "../Components/About/AboutSubsidiaries";

function About() {
  return (
    <div className="w-full min-h-screen flex flex-col font-inter pt-[64px] lg:pt-[80px] text-[17px]">
      <div>
        <AboutHeader />
      </div>
      <div>
        <AboutFounders />
      </div>
      <div className="bg-[#e8e8e8] h-auto">
        <AboutSubsidiaries />
      </div>
      <div></div>
    </div>
  );
}

export default About;
