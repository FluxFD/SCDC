const AboutValues = () => {
  return (
    <div className="flex items-center justify-center p-4">
      <div className="container w-full md:w-10/12">
        {/* Mission and Vision */}
        <div className="bg-[#4b4a46]">
          <div className="text-white flex flex-col md:flex-row justify-between p-5">
            <div className="md:w-1/2 p-4 text-center">
              <div className="font-extrabold text-4xl">
                <h1>Mission</h1>
              </div>
              <div className="max-w-xl mx-auto p-8">
                <p>
                  Delivering excellence in integrated development through
                  innovative construction, landscaping, and skilled manpower,
                  focusing on design, seamless installation, and dedicated
                  maintenance.
                </p>
              </div>
            </div>
            <div className="hidden md:block border-l-2 border-white mx-4"></div>
            <div className="md:w-1/2 p-4 text-center">
              <div className="font-extrabold text-4xl">
                <h1>Vision</h1>
              </div>
              <div className="max-w-xl mx-auto p-8">
                <p>
                  To be recognized as one of the leading contractors not only in
                  the Philippines but across Asia, setting new standards of
                  excellence in every project we undertake.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="bg-[#4b4a46] mt-10">
          <div className="font-extrabold text-4xl text-white text-center p-4">
            <h1>Core Values</h1>
          </div>
          <div className="text-white flex justify-between p-5">
            <div className="flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 w-full gap-8">
              <div className="flex flex-col items-center w-full">
                <img src="/used_about/Integrity.png" className="w-20 h-20" />
                <h1 className="font-extrabold mt-2">Integrity</h1>
              </div>
              <div className="flex flex-col items-center w-full">
                <img
                  src="/used_about/Sustainability.png"
                  className="w-20 h-20"
                />
                <h1 className="font-extrabold mt-2">Sustainability</h1>
              </div>
              <div className="flex flex-col items-center w-full">
                <img src="/used_about/Safety.png" className="w-20 h-20" />
                <h1 className="font-extrabold mt-2">Safety</h1>
              </div>
              <div className="flex flex-col items-center w-full">
                <img src="/used_about/Excellence.png" className="w-20 h-20" />
                <h1 className="font-extrabold mt-2">Excellence</h1>
              </div>
              <div className="flex flex-col items-center w-full">
                <img src="/used_about/Community.png" className="w-20 h-20" />
                <h1 className="font-extrabold mt-2">Community</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutValues;
