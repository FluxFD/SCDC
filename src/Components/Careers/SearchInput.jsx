/* eslint-disable react/prop-types */
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const SearchInput = ({ onSearch }) => {
  const [title, setTitle] = useState("");
  const [loc, setLoc] = useState("");

  const handleSearch = () => {
    onSearch(title, loc);
  };
  return (
    <div className="py-20 px-2">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row rounded-lg shadow-lg bg-white overflow-hidden">
          <div className="flex-1 relative">
            <SearchIcon className="absolute text-gray-400 top-1/2 -translate-y-1/2 left-4" />
            <input
              type="text"
              placeholder="Job title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full h-14 px-12 border-b sm:border-r sm:border-b-0 focus:outline-none"
            />
          </div>

          <div className="flex-1 relative">
            <span className="absolute text-gray-400 top-1/2 -translate-y-1/2 left-4">
              <LocationOnIcon />
            </span>
            <input
              type="text"
              placeholder="Location"
              value={loc}
              onChange={(e) => setLoc(e.target.value)}
              className="w-full h-14 px-12 border-b sm:border-b-0 focus:outline-none"
            />
          </div>

          <button
            className="bg-[#8c1717] text-white px-8 h-14 hover:bg-[#8c1717]/80 transition-colors"
            onClick={handleSearch}
          >
            Find jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
