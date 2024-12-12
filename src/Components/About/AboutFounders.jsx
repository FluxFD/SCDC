const AboutFounders = () => {
  return (
    <div className="bg-white p-8 sm:p-12 lg:p-20 text-center items-center">
      <div className="mt-2 sm:mt-2">
        <div className="container pt-2 w-10/12 mx-auto flex items-center justify-center">
          <span className="text-justify md:text-justify leading-relaxed">
            <p>
              Sanluis Construction and Development Corporation represents an
              evolutionary leap in the construction industry and premier
              corporation of Mr. Jeff San Luis, classified as PCAB category AA.
              At SCDC, We pride ourselves with offering complete development
              solutions. With a main office in Sta. Cruz, Laguna, and satellite
              offices in San Juan and Malvar, Batangas, we provide comprehensive
              development solutions.
            </p>
          </span>
        </div>
        <h2 className="text-4xl font-bold mt-12 text-[#f9b22b]">
          Founders of SCDC
        </h2>
        <div className="container w-10/12 mt-14 mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
            <div className="flex flex-col items-center gap-4">
              <div className="w-48 h-48 overflow-hidden bg-gray-50 flex-shrink-0">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/connectifylocal-299a6.appspot.com/o/id%2FDSC06354.jpg?alt=media&token=f595493c-b42c-4b8d-af14-472db727be40"
                  className="object-cover"
                />
              </div>
              <h2 className="text-2xl font-medium text-center">
                Jeff San Luis
              </h2>
            </div>
            <div className="flex-1 text-justify md:text-justify leading-relaxed max-w-3xl">
              <p>
                The story of SCDC (SanLuis Construction and Development
                Corporation) reflects a narrative of strategic evolution and
                expansion in the business landscape. It all began with the
                visionary entrepreneur, Mr. Jeff San Luis. With over 13 years of
                expertise, the journey began with Jeff Sanluis Enterprises, a
                company entrenched in the construction industry, laying down the
                groundwork of experience and market presence, established year
                2013.
              </p>
            </div>
          </div>
          {/* <div className="flex items-center w-full">
            <div className="w-3 h-3 rotate-45 bg-red-900" />
            <div className="h-0.5 flex-1 bg-red-900" />
            <div className="w-3 h-3 rotate-45 bg-red-900" />
          </div> */}
        </div>
        <div className="container w-10/12 mt-20 mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
            {/* Image comes first on mobile */}
            <div className="flex flex-col items-center gap-4 md:order-2">
              <div className="w-48 h-48 overflow-hidden bg-gray-50 flex-shrink-0">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/connectifylocal-299a6.appspot.com/o/id%2FDSC06382.jpg?alt=media&token=579c33e6-0a42-49b0-a8f6-53bf4397b52d"
                  className="object-cover"
                />
              </div>
              <h2 className="text-2xl font-medium text-center">
                Meyrina San Luis
              </h2>
            </div>
            {/* Text comes after on mobile, before on larger screens */}
            <div className="flex-1 text-justify md:text-justify leading-relaxed max-w-3xl md:order-1">
              <p>
                Meyrina San Luis then extended the conglomerate&apos;s reach by
                founding <b>MEY&apos;s Landscaping</b> in 2014, which introduced
                a new dimension of aesthetic and environmental design to the
                group&apos;s offerings. The latest addition, SL Human Resource
                Management Services, emerged under MEY&apos;s Landscaping in
                2023, adding a critical component by managing the
                conglomerate&apos;s human capital.
              </p>
            </div>
          </div>
          {/* <div className="flex items-center w-full">
            <div className="w-3 h-3 rotate-45 bg-red-900" />
            <div className="h-0.5 flex-1 bg-red-900" />
            <div className="w-3 h-3 rotate-45 bg-red-900" />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default AboutFounders;
