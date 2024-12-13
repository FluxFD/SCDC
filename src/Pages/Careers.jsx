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
          backgroundImage: `url(/Career/Career_banner.png)`,
          backgroundPosition: "top center",
          backgroundSize: "cover",
        }}
        className="w-full lg:h-[75vh] py-8 flex justify-center bg-cover bg-center"
      >
        <div className="text-[#8c1717] p-4 flex flex-col gap-8 justify-end items-center text-center">
          <div className="bg-black bg-opacity-15 p-4">
            <h1 className="text-2xl lg:text-6xl font-extrabold">
              BUILD YOUR CAREER WITH US
            </h1>
            <h2 className="text-xl lg:text-1xl">BE PART OF SCDC TEAM NOW!</h2>
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
