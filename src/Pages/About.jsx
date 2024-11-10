import AboutSection from "../Components/AboutSection";

function About() {
  return (
    <div
      className="w-full min-h-screen flex flex-col font-inter pt-[64px] lg:pt-[80px]"
      style={{ backgroundColor: "#333333" }}
    >
      <div className="container flex flex-col lg:flex-row mt-5 px-5 sm:px-10 lg:px-20 justify-center lg:justify-between items-center w-full h-auto gap-8">
        <div className="flex justify-center lg:justify-start w-full lg:w-auto text-center lg:text-left ">
          <h1 className="text-xl sm:text-2xl font-bold text-white">
            San Luis Construction and Development Corporation
          </h1>
        </div>
        <div className="flex justify-center lg:justify-end w-full lg:w-auto text-center lg:text-right sm:px-0">
          <blockquote className="pl-4 text-white italic text-sm sm:text-base">
            <p className="mb-4">
              &quot;SCDC aims to further enhance its capabilities and industry
              standing.
            </p>
            <p>
              The company aims to ascend to an even higher category in the
              future.&quot;
            </p>
          </blockquote>
        </div>
      </div>
      <div className="mt-12 w-full flex justify-center">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/connectifylocal-299a6.appspot.com/o/photos%2FDSC06094.jpg?alt=media&token=7cb259f9-465f-4eda-b540-31badf185e79"
          alt="About Image"
          className="w-full h-auto object-cover sm:w-full md:w-full lg:w-full"
        />
      </div>
      <div className="bg-white p-8 sm:p-12 lg:p-20 text-center items-center">
        <h1 className="text-xl sm:text-2xl font-bold text-red-900">About Us</h1>
        <div className="flex items-center mt-5 w-1/2 max-w-sm mx-auto">
          <div className="w-4 h-4 rotate-45 bg-red-900" />
          <div className="h-1 flex-1 bg-red-900" />
          <div className="w-4 h-4 rotate-45 bg-red-900" />
        </div>
        <div className="mt-12 sm:mt-16">
          <h1 className="text-3xl sm:text-4xl font-semibold text-red-900">
            WE DESIGN, BUILD AND CARE
          </h1>
          <div className="flex justify-center mt-16 sm:mt-8">
            <img
              src="/scdc.png"
              alt="logo"
              className="w-3/5 sm:w-2/5 md:w-1/4 lg:w-1/5"
            />
          </div>
          <div className="container pt-12 sm:pt-16 w-10/12 mx-auto flex items-center justify-center">
            <span className="text-justify md:text-justify leading-relaxed">
              <p>
                SANLUIS CONSTRUCTION AND DEVELOPMENT CORPORATION (SCDC) is a
                part of the construction industry, currently classified under
                Category AA by the Philippine Contractors Accreditation Board
                (PCAB). SCDC aims to further enhance its capabilities and
                industry standing. The company aims to ascend to an even higher
                category in the future. Focused on construction, SCDC goes
                beyond traditional building activities, it provides complete
                development solutions. This includes managing every aspect of a
                project from conception through to completion—incorporating
                design, execution, and final detailing. This full-service
                approach ensures that all projects are not only constructed with
                precision but are also tailored to meet the specific needs and
                visions of their clients. SCDC is dedicated to adapting
                innovative construction methods and sustainable practices,
                aiming to set new standards in the industry. The company&apos;s
                goal is to exceed expectations on every project, contributing to
                infrastructural advancement and sustainable development across
                communities. This strategic focus positions SCDC as a
                forward-thinking leader in the construction sector.
              </p>
            </span>
          </div>
          <div className="container w-10/12 mt-20 mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
              <div className="flex flex-col items-center gap-4">
                <div className="w-48 h-48 overflow-hidden bg-gray-50 flex-shrink-0">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/connectifylocal-299a6.appspot.com/o/id%2FDSC06359.jpg?alt=media&token=90fc8711-6165-4488-a73a-38da1add92d7"
                    className="object-cover"
                  />
                </div>
                <h2 className="text-2xl font-medium text-center">
                  Jeff San Luis
                </h2>
              </div>
              <div className="flex-1 text-justify md:text-justify leading-relaxed max-w-3xl">
                <p>
                  The story of SCDC (San Luis Construction and Development
                  Corporation) reflects a narrative of strategic evolution and
                  expansion in the business landscape. It all began with the
                  visionary entrepreneur, Mr. Jeff San Luis. With over 12 years
                  of expertise, the journey began with Jeff Sanluis Enterprises,
                  a company entrenched in the construction industry, laying down
                  the groundwork of experience and market presence, established
                  year 2013.
                </p>
              </div>
            </div>
            <div className="flex items-center w-full">
              <div className="w-3 h-3 rotate-45 bg-red-900" />
              <div className="h-0.5 flex-1 bg-red-900" />
              <div className="w-3 h-3 rotate-45 bg-red-900" />
            </div>
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
                  Meyrina San Luis then extended the conglomerate&apos;s reach
                  by founding MEY&apos;s Landscaping in 2014, which introduced a
                  new dimension of aesthetic and environmental design to the
                  group&apos;s offerings. The latest addition, SL Human Resource
                  Management Services, emerged under MEY&apos;s Landscaping in
                  2023, adding a critical component by managing the
                  conglomerate&apos;s human capital.
                </p>
              </div>
            </div>
            <div className="flex items-center w-full">
              <div className="w-3 h-3 rotate-45 bg-red-900" />
              <div className="h-0.5 flex-1 bg-red-900" />
              <div className="w-3 h-3 rotate-45 bg-red-900" />
            </div>
          </div>
        </div>
      </div>
      <AboutSection />
    </div>
  );
}

export default About;
