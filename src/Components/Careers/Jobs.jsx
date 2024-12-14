/* eslint-disable react/prop-types */
import { useState } from "react";
import ApplyModal from "./ApplyModal";

const Jobs = ({ jobTitle, location }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJobTitle, setSelectedJobTitle] = useState("");

  const allJobs = [
    { title: "Civil Engineer", location: "Sta. Cruz, Laguna" },
    { title: "Laborers", location: "Sta. Cruz, Laguna" },
    { title: "HR Officer", location: "Sta. Cruz, Laguna" },
  ];

  const filteredJobs = allJobs.filter(
    (job) =>
      job.title.toLowerCase().includes(jobTitle.toLowerCase()) &&
      job.location.toLowerCase().includes(location.toLowerCase())
  );

  const handleApplyClick = (title) => {
    setSelectedJobTitle(title);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedJobTitle("");
  };

  return (
    <div className="flex flex-col items-center mb-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl px-4">
        {filteredJobs.map((job, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 flex flex-col"
          >
            <h3 className="text-lg font-semibold mb-2">{job.title}</h3>
            <p className="text-sm text-gray-600 mb-4">
              Location: {job.location}
            </p>
            <button
              className="mt-auto bg-[#8c1717] text-white py-2 px-4 rounded hover:bg-[#8c1717]/80 transition-colors"
              onClick={() => handleApplyClick(job.title)}
            >
              Apply Now
            </button>
          </div>
        ))}
      </div>
      <ApplyModal
        isOpen={isModalOpen}
        onClose={closeModal}
        jobTitle={selectedJobTitle}
      />
    </div>
  );
};

export default Jobs;
