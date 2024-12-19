import { useState } from "react";
import SearchInput from "../Components/Careers/SearchInput";
import Contact from "../Components/Contact";
import Jobs from "../Components/Careers/Jobs";

const Careers = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = (title, loc) => {
    setJobTitle(title);
    setLocation(loc);
  };

  return (
    <div className="w-full min-h-screen flex flex-col font-inter pt-[64px] lg:pt-[80px]">
      <div
        style={{
          backgroundImage: `url(/used_career/Career_banner_2.jpg)`,
          backgroundPosition: "top center",
          backgroundSize: "cover",
        }}
        className="w-full lg:h-[69vh] py-8 flex justify-center bg-cover bg-center"
      >
        <div className="w-full flex flex-col gap-8 text-center">
          <h1 className="text-xl lg:text-4xl text-[#f9b22b]">
            BE PART OF SCDC TEAM NOW!
          </h1>
          <div className="flex justify-center items-center h-full w-full">
            <div className="bg-black bg-opacity-25 flex flex-col items-center w-full">
              <h1
                className="text-white text-2xl lg:text-8xl font-extrabold"
                style={{ opacity: 0.77 }}
              >
                BUILD YOUR
              </h1>
              <h1
                className="text-white text-2xl lg:text-8xl font-extrabold"
                style={{ opacity: 0.77 }}
              >
                CAREER WITH US
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col bg-gray-300 ">
        <SearchInput onSearch={handleSearch} />
        <Jobs jobTitle={jobTitle} location={location} />
      </div>
      <div>
        <Contact />
      </div>
    </div>
  );
};

export default Careers;
