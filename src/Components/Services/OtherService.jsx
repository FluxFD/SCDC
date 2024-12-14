const OtherService = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 md:px-6">
      <div className="w-full px-6 md:border-r border-white">
        <img
          src="/used_services/Landscape_solution.jpg"
          alt=""
          className="w-full h-48 aspect-video object-cover rounded-lg shadow-md mt-2"
        />
        <div className="space-y-2 mt-2">
          <p className="text-lg text-white md:text-xl font-bold">
            Landscape Solution
          </p>
        </div>
      </div>

      <div className="w-full px-6 md:border-r border-white">
        <img
          src="/used_services/Trucking.jpg"
          alt=""
          className="w-full h-48 aspect-video object-cover rounded-lg shadow-md mt-2"
        />
        <div className="space-y-2 mt-2">
          <p className="text-lg text-white md:text-xl font-bold">
            Aggregates Transport Soluions (Trucking)
          </p>
        </div>
      </div>

      <div className="w-full">
        <img
          src="/used_services/Rental.jpg"
          alt=""
          className="w-full h-48 aspect-video object-cover rounded-lg shadow-md mt-2"
        />
        <div className="space-y-2 mt-2">
          <p className="text-lg text-white md:text-xl font-bold">
            Rental of Equipment
          </p>
        </div>
      </div>
    </div>
  );
};

export default OtherService;
