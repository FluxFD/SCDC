const IndustyExpertiseImages = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 md:px-6">
      {/* First Item */}
      <div className="w-full px-6 md:border-r border-gray-400">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/connectifylocal-299a6.appspot.com/o/photos%2FDSC07199.jpg?alt=media&token=989df2ee-2a70-4a36-b9b0-4bfaefac6e74"
          alt=""
          className="w-full h-48 aspect-video object-cover rounded-lg shadow-md mt-2"
        />
        <div className="space-y-2 mt-2">
          <p className="text-lg md:text-xl font-bold">Pre - Construction</p>
          <div className="text-wrap px-4">
            <p className="text-customDarkGray">
              Providing essential planning, design, and budgeting services to
              ensure successful project initiation.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full px-6 md:border-r border-customDarkGray">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/connectifylocal-299a6.appspot.com/o/photos%2FDSC07024.jpg?alt=media&token=0b613add-30ca-499a-b800-9f14cfc77c1a"
          alt=""
          className="w-full h-48 aspect-video object-cover rounded-lg shadow-md mt-2"
        />
        <div className="space-y-2 mt-2">
          <p className="text-lg md:text-xl font-bold">General Construction</p>
          <div className="text-wrap px-4">
            <p className="text-customDarkGray">
              Delivering high-quality construction services for residential,
              commercial, and industrial projects.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/connectifylocal-299a6.appspot.com/o/photos%2FDSC07309.jpg?alt=media&token=27c19096-bb73-4049-b716-cc847f26fa3e"
          alt=""
          className="w-full h-48 aspect-video object-cover rounded-lg shadow-md mt-2"
        />
        <div className="space-y-2 mt-2">
          <p className="text-lg md:text-xl font-bold">
            Construction Management
          </p>
          <div className="text-wrap px-4">
            <p className="text-customDarkGray">
              Overseeing and managing construction processes to ensure
              efficiency, safety, and timely completion.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustyExpertiseImages;
