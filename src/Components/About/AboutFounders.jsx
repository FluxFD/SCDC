const AboutFounders = () => {
  return (
    <div className="bg-white p-8 sm:p-12 text-center items-center">
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
            <div className="flex flex-col items-center">
              <div className="w-48 h-48 overflow-hidden bg-gray-50 flex-shrink-0">
                <img src="/used_about/Jeff.jpg" className="object-cover" />
              </div>
            </div>
            <div className="flex-1 text-justify md:text-justify leading-relaxed max-w-5xl">
              <p>
                The story of{" "}
                <b>SCDC (SanLuis Construction and Development Corporation)</b>{" "}
                reflects a narrative of strategic evolution and expansion in the
                business landscape. It all began with the visionary
                entrepreneur, Mr. Jeff San Luis. With over 13 years of
                expertise, the journey began with Jeff Sanluis Enterprises, a
                company entrenched in the construction industry, laying down the
                groundwork of experience and market presence, established year
                2013.
              </p>
            </div>
          </div>
        </div>
        <div className="container w-10/12 mt-20 mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
            <div className="flex flex-col items-center gap-4 md:order-2">
              <div className="w-48 h-48 overflow-hidden bg-gray-50 flex-shrink-0">
                <img src="/used_about/Mey.jpg" className="object-cover" />
              </div>
            </div>
            <div className="flex-1 text-justify md:text-justify leading-relaxed max-w-5xl md:order-1">
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
        </div>
      </div>
    </div>
  );
};

export default AboutFounders;
