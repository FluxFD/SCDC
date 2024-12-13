/* eslint-disable react/prop-types */
const Jobs = ({ jobTitle, location }) => {
  const allJobs = [
    { title: "Civil Engineer", location: "New York" },
    { title: "Laborers", location: "California" },
    { title: "HR Officer", location: "Remote" },
  ];

  const filteredJobs = allJobs.filter(
    (job) =>
      job.title.toLowerCase().includes(jobTitle.toLowerCase()) &&
      job.location.toLowerCase().includes(location.toLowerCase())
  );

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
            <button className="mt-auto bg-[#8c1717] text-white py-2 px-4 rounded hover:bg-[#8c1717]/80 transition-colors">
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jobs;
