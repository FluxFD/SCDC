const OtherService = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 md:px-6">
      <div className="w-full px-6 md:border-r border-white">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/connectifylocal-299a6.appspot.com/o/photos%2FDSC07199.jpg?alt=media&token=989df2ee-2a70-4a36-b9b0-4bfaefac6e74"
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
          src="https://firebasestorage.googleapis.com/v0/b/connectifylocal-299a6.appspot.com/o/photos%2FDSC05826.jpg?alt=media&token=b7dd0074-1f0e-4a62-a71b-1a6ac9e288db"
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
          src="https://firebasestorage.googleapis.com/v0/b/connectifylocal-299a6.appspot.com/o/photos%2FDSC07352.jpg?alt=media&token=9db2028c-e00b-4f40-8ed1-8685f7c228a0"
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
