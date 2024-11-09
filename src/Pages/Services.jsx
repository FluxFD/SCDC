import React from "react";
import { FaRegCircleCheck } from "react-icons/fa6";

const Services = () => {
  return (
    <div className="w-full min-h-screen flex flex-col font-inter pt-[64px] lg:pt-[80px]">
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(./PHOTOS/DSC07177.jpg)`,
        }}
        className="w-full lg:h-[50vh] py-8 flex justify-center items-center bg-cover bg-center"
      >
        <div className="text-white p-4 flex flex-col gap-8 items-center text-center">
          <h1 className="text-3xl lg:text-4xl font-extrabold">
            SANLUIS CONSTRUCTION AND DEVELOPMENT CORPORATION
          </h1>

          <p className="text-xl lg:text-2xl italic text-customOrange ">
            “Your vision becomes our Mission. Your reliable building partner,
            every step of the way”
          </p>

          <button className="italic w-full max-w-[9rem] px-4 py-2 font-bold bg-customOrange hover:bg-customOrange/90 text-black rounded-lg">
            Contact Us
          </button>
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto space-y-28 px-6 py-20">
        {/* SECTION 1 */}
        <div className="space-y-8">
          <div className="space-y-2 text-customDarkRed">
            <h2 className="text-3xl font-extrabold ">
              Explore some of our projects
            </h2>
            <p className="italic  max-w-xl">
              SCDC Construction is committed to serving as a trusted partner for
              all your construction needs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
            <Service />
            <Service />
            <Service />
            <Service />
            <Service />
            <Service />
          </div>
        </div>

        {/* SECTION 2 */}
        <div className="w-full space-y-8">
          <div className="space-y-2 text-customDarkRed">
            <h2 className="text-3xl font-extrabold ">
              Discover more about our Extensive Expertise
            </h2>
            <p className="italic  max-w-xl">
              Building a legacy of excellence through innovative solutions and
              proven results
            </p>
          </div>

          <div class="relative overflow-x-auto shadow sm:rounded-lg">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 ">
              <thead class="text-xs text-customDarkRed uppercase bg-gray-50  ">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    Client
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Location
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Type and Date
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-gray-50 border-b ">
                  <th
                    scope="row"
                    class="w-1/3 px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    The Villages at Lipa
                  </th>
                  <td class="w-1/3 px-6 py-4">
                    Lima Land Inc, Lipa City, Batangas
                  </td>
                  <td class="w-1/3 px-6 py-4">Land Development, 2023</td>
                </tr>
                <tr class="bg-gray-50 border-b ">
                  <th
                    scope="row"
                    class="w-1/3 px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    Batangas Lakelands
                  </th>
                  <td class="w-1/3 px-6 py-4">
                    Lima Park Hotel, Balete Batangas
                  </td>
                  <td class="w-1/3 px-6 py-4">Land Development, 2021</td>
                </tr>
                <tr class="bg-gray-50 border-b ">
                  <th
                    scope="row"
                    class="w-1/3 px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    The Outlets at Lipa/Lima Exchange
                  </th>
                  <td class="w-1/3 px-6 py-4">
                    Lima Land Inc, Lipa City, Batangas
                  </td>
                  <td class="w-1/3 px-6 py-4">
                    Land Development/Hardscape, 2021
                  </td>
                </tr>
                <tr class="bg-gray-50 border-b ">
                  <th
                    scope="row"
                    class="w-1/3 px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    Seafront Residences
                  </th>
                  <td class="w-1/3 px-6 py-4">Calubcob II, San Juan</td>
                  <td class="w-1/3 px-6 py-4">Housing Package, 2023</td>
                </tr>
                <tr class="bg-gray-50 border-b ">
                  <th
                    scope="row"
                    class="w-1/3 px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    JTI Embankment
                  </th>
                  <td class="w-1/3 px-6 py-4">Sta. Clara International</td>
                  <td class="w-1/3 px-6 py-4">Embankment, 2019</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* SECTION 3 Achivements */}
      <div className="w-full bg-customDarkGray text-white px-6 py-20">
        <div className="max-w-7xl mx-auto space-y-6 lg:space-y-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-extrabold">Achievements</h2>
            <p className="italic text-customLightgray max-w-xl">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Inventore velit cupiditate quis veniam minima sequi!
            </p>
          </div>

          <div className="w-full grid md:grid-cols-2 gap-4">
            <img src="./PHOTOS/DSC05845.jpg" alt="" className="rounded-xl" />

            <div className="grid gap-4">
              <div className="w-full text-center flex items-center justify-center gap-4 p-6 rounded-xl bg-white/10 backdrop-blur-sm border">
                <p className="lg:min-w-[100px] text-end text-customOrange text-3xl sm:text-4xl font-extrabold">
                  150
                </p>
                <p className="lg:min-w-[200px] text-start text-lg font-medium">
                  Finished Projects
                </p>
              </div>
              <div className="w-full text-center flex items-center justify-center gap-4 p-6 rounded-xl bg-white/10 backdrop-blur-sm border">
                <p className="lg:min-w-[100px] text-end text-customOrange text-3xl sm:text-4xl font-extrabold">
                  7
                </p>
                <p className="lg:min-w-[200px] text-start text-lg font-medium">
                  Ongoing Major Projects
                </p>
              </div>
              <div className="w-full text-center flex items-center justify-center gap-4 p-6 rounded-xl bg-white/10 backdrop-blur-sm border">
                <p className="lg:min-w-[100px] text-end text-customOrange text-3xl sm:text-4xl font-extrabold">
                  13
                </p>
                <p className="lg:min-w-[200px] text-start text-lg font-medium">
                  Years of Experience
                </p>
              </div>
            </div>
          </div>

          <p className="text-customLightgray italic text-lg text-justify">
            Ground Breaking of Lima Commercial Lot at Lima Technology Cent(From
            left) Meyrina San Luis of JSL Enterprises,; Batangas Vice Governor
            Mark Leviste; Jean Traballo, division chief for Domestic Investments
            Promotions Service of the Board of Investments: Mayor Cristeta Reyes
            of Malvar; Fernandez de Mesa, Batangas GovernorHermilando Mandans,
            and; AECOM Philippines vice president Sylvester Wong.
          </p>
        </div>
      </div>

      {/* SECTION 4 Timeline */}
      <div
        style={{
          backgroundImage: `url(./9.png)`,
        }}
        className="w-full lg:min-h-screen text-white px-6 py-20 bg-cover bg-center"
      >
        <div className="max-w-7xl mx-auto flex justify-center items-center ">
          <img
            src="./timeline.png"
            alt="Company Timeline"
            className="hidden sm:block"
          />

          <div className="flex sm:hidden flex-col items-center">
            <div className="text-center flex flex-col items-center gap-2">
              <p className="text-customLightgray">
                <span className="font-bold text-white">JEFF SAN LUIS</span>{" "}
                started small projects locally
              </p>
              <p className="w-full max-w-[200px] px-4 py-4 font-extrabold text-xl bg-[#A21919]">
                2004
              </p>
            </div>

            <div className="w-px h-10 bg-white"></div>

            <div className="text-center flex flex-col items-center gap-2">
              <p className="text-customLightgray">
                First Proejct LIMA Technology Center with Alcantara Group
              </p>
              <p className="w-full max-w-[200px] px-4 py-4 font-extrabold text-xl bg-[#A21919]">
                2011
              </p>
            </div>

            <div className="w-px h-10 bg-white"></div>

            <div className="text-center flex flex-col items-center gap-2">
              <p className="text-customLightgray">
                <span className="font-bold text-white">JSLE</span> was
                established as a Sole Proprietorship.
              </p>
              <p className="w-full max-w-[200px] px-4 py-4 font-extrabold text-xl bg-[#A21919]">
                2013
              </p>
            </div>

            <div className="w-px h-10 bg-white"></div>

            <div className="text-center flex flex-col items-center gap-2">
              <p className="text-customLightgray">
                <span className="font-bold text-white">Mey's Landscaping</span>{" "}
                was established.
              </p>
              <p className="w-full max-w-[200px] px-4 py-4 font-extrabold text-xl bg-[#A21919]">
                2014
              </p>
            </div>

            <div className="w-px h-10 bg-white"></div>

            <div className="text-center flex flex-col items-center gap-2">
              <p className="text-customLightgray">
                Had our first breakthough; Major Land Development Project of
                Lima Land under Aboitiz Group.
              </p>
              <p className="w-full max-w-[200px] px-4 py-4 font-extrabold text-xl bg-[#A21919]">
                2015
              </p>
            </div>

            <div className="w-px h-10 bg-white"></div>

            <div className="text-center flex flex-col items-center gap-2">
              <p className="text-customLightgray">
                Founded manpower solutions entity named
                <span className="font-bold text-white">
                  SL Human Resources and Management Services
                </span>
              </p>
              <p className="w-full max-w-[200px] px-4 py-4 font-extrabold text-xl bg-[#A21919]">
                2023
              </p>
            </div>

            <div className="w-px h-10 bg-white"></div>

            <div className="text-center flex flex-col items-center gap-2">
              <p className="text-customLightgray">
                Created the premier corporation of the 3 entities aforementioned
                named,{" "}
                <span className="font-bold text-white">
                  SanLuis Construction and Development Corporation
                </span>
              </p>
              <p className="w-full max-w-[200px] px-4 py-4 font-extrabold text-xl bg-[#A21919]">
                2024 / Present
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 5 Resources */}
      <div
        style={{
          backgroundImage: `url(./resourcesbg.png)`,
        }}
        className="w-full min-h-screen bg-customDarkGray text-white px-6 py-20 bg-cover bg-center"
      >
        <div className="max-w-7xl mx-auto space-y-6 lg:space-y-12">
          <div className="space-y-2 flex flex-col justify-center items-center text-center">
            <h2 className="text-3xl font-extrabold">Resources</h2>
            <p className="italic max-w-xl">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Inventore velit cupiditate quis veniam minima sequi!
            </p>
          </div>

          <div className="italic w-full max-w-4xl  mx-auto grid sm:grid-cols-2 gap-2">
            <div className="w-full flex items-center gap-4 bg-customLightgray/20 backdrop-blur-sm p-6 rounded">
              <p className="text-3xl font-extrabold text-customOrange">20</p>
              <p className="text-lg font-medium">
                Units of Hydraulic Excavator
              </p>
            </div>
            <div className="w-full flex items-center gap-4 bg-customLightgray/20 backdrop-blur-sm p-6 rounded">
              <p className="text-3xl font-extrabold text-customOrange">2</p>
              <p className="text-lg font-medium">Units of Self-Loading Truck</p>
            </div>
            <div className="w-full flex items-center gap-4 bg-customLightgray/20 backdrop-blur-sm p-6 rounded">
              <p className="text-3xl font-extrabold text-customOrange">5</p>
              <p className="text-lg font-medium">Units of Bulldozer</p>
            </div>
            <div className="w-full flex items-center gap-4 bg-customLightgray/20 backdrop-blur-sm p-6 rounded">
              <p className="text-3xl font-extrabold text-customOrange">3</p>
              <p className="text-lg font-medium">
                Units of Tractor with Lowbed
              </p>
            </div>
            <div className="w-full flex items-center gap-4 bg-customLightgray/20 backdrop-blur-sm p-6 rounded">
              <p className="text-3xl font-extrabold text-customOrange">4</p>
              <p className="text-lg font-medium">Units of Motor Grader</p>
            </div>
            <div className="w-full flex items-center gap-4 bg-customLightgray/20 backdrop-blur-sm p-6 rounded">
              <p className="text-3xl font-extrabold text-customOrange">20</p>
              <p className="text-lg font-medium">Units of Service Vehicle</p>
            </div>
            <div className="w-full flex items-center gap-4 bg-customLightgray/20 backdrop-blur-sm p-6 rounded">
              <p className="text-3xl font-extrabold text-customOrange">5</p>
              <p className="text-lg font-medium">Units of Road Roller</p>
            </div>
            <div className="w-full flex items-center gap-4 bg-customLightgray/20 backdrop-blur-sm p-6 rounded">
              <p className="text-3xl font-extrabold text-customOrange">3</p>
              <p className="text-lg font-medium">Units of Fuel Tanker</p>
            </div>
            <div className="w-full flex items-center gap-4 bg-customLightgray/20 backdrop-blur-sm p-6 rounded">
              <p className="text-3xl font-extrabold text-customOrange">30</p>
              <p className="text-lg font-medium">
                Units of 10 Wheeler Dump Trucks
              </p>
            </div>
            <div className="w-full flex items-center gap-4 bg-customLightgray/20 backdrop-blur-sm p-6 rounded">
              <p className="text-3xl font-extrabold text-customOrange">10</p>
              <p className="text-lg font-medium">Units of Elf Dropside</p>
            </div>
            <div className="w-full flex items-center gap-4 bg-customLightgray/20 backdrop-blur-sm p-6 rounded">
              <p className="text-3xl font-extrabold text-customOrange">3</p>
              <p className="text-lg font-medium">Units of Water Truck</p>
            </div>
            <div className="w-full flex items-center gap-4 bg-customLightgray/20 backdrop-blur-sm p-6 rounded">
              <p className="text-3xl font-extrabold text-customOrange">5</p>
              <p className="text-lg font-medium">Units of Boomtruck</p>
            </div>
            <div className="w-full flex items-center gap-4 bg-customLightgray/20 backdrop-blur-sm p-6 rounded">
              <p className="text-3xl font-extrabold text-customOrange">2</p>
              <p className="text-lg font-medium">Units of Manlift Truck</p>
            </div>
            <div className="w-full flex items-center gap-4 bg-customLightgray/20 backdrop-blur-sm p-6 rounded">
              <p className="text-3xl font-extrabold text-customOrange">5</p>
              <p className="text-lg font-medium">Units of Minidump</p>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 6 Services */}
      <div className="w-full bg-customLightgray px-6 py-12 lg:py-20">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-extrabold">Services</h2>
            <p className="italic max-w-xl">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Inventore velit cupiditate quis veniam minima sequi!
            </p>
          </div>

          <div className="w-fit grid lg:grid-cols-2 mx-auto gap-10 sm:gap-12">
            {/* Service 1 */}
            <div className="flex gap-6">
              <div className="hidden sm:block">
                <div className="size-20 rounded-full bg-customDarkRed-light flex justify-center items-center">
                  <FaRegCircleCheck className="text-white size-12" />
                </div>
              </div>

              <div className="space-y-2">
                <p className="font-extrabold text-2xl text-customDarkRed-light drop-shadow">
                  WE CONSTRUCT
                </p>

                <div className="space-y-1">
                  <p className="font-semibold">● Land Development</p>

                  <div>
                    <p className="font-semibold">
                      ● Civil and Structural Construction
                    </p>
                    <p className="ml-4 italic">
                      - Infrustructures such as roads, utilities and facilities.
                    </p>
                  </div>

                  <p className="font-semibold">
                    ● Recidential, Commercial & Industrial Spaces
                  </p>

                  <div>
                    <p className="font-semibold">● Amenities</p>
                    <p className="ml-4 italic">- Street lights</p>
                    <p className="ml-4 italic">- Water Features</p>
                    <p className="ml-4 italic">- Landscaping works</p>
                    <p className="ml-4 italic">- Irrigations</p>
                  </div>
                </div>
              </div>
            </div>

            {/* SERVICE 2 */}
            <div className="flex gap-6">
              <div className="hidden sm:block">
                <div className="size-20 rounded-full bg-customDarkRed-light flex justify-center items-center">
                  <FaRegCircleCheck className="text-white size-12" />
                </div>
              </div>

              <div className="space-y-2">
                <p className="font-extrabold text-2xl text-customDarkRed-light drop-shadow">
                  WE OFFER RENTAL OF EQUIPMENTS
                </p>

                <div className="space-y-1">
                  <p className="font-semibold">● Lorem, ipsum dolor.</p>

                  <div>
                    <p className="font-semibold">
                      ● Lorem ipsum dolor sit amet.
                    </p>
                    <p className="ml-4 italic">
                      - Lorem ipsum dolor sit amet consectetur adipisicing.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* SERVICE 3 */}
            <div className="flex gap-6">
              <div className="hidden sm:block">
                <div className="size-20 rounded-full bg-customDarkRed-light flex justify-center items-center">
                  <FaRegCircleCheck className="text-white size-12" />
                </div>
              </div>

              <div className="space-y-2">
                <p className="font-extrabold text-2xl text-customDarkRed-light drop-shadow">
                  WE SUPPLY CONSTRUCTION MATERIALS
                </p>

                <div className="space-y-1">
                  <p className="font-semibold">● Filling Materials</p>
                  <p className="font-semibold">● Aggregates</p>
                </div>
              </div>
            </div>

            {/* SERVICE 4 */}
            <div className="flex gap-6">
              <div className="hidden sm:block">
                <div className="size-20 rounded-full bg-customDarkRed-light flex justify-center items-center">
                  <FaRegCircleCheck className="text-white size-12" />
                </div>
              </div>

              <div className="space-y-2">
                <p className="font-extrabold text-2xl text-customDarkRed-light drop-shadow">
                  WE OFFER MANPOWER SERVICES
                </p>

                <div className="space-y-1">
                  <p className="font-semibold">● Lorem ipsum dolor sit.</p>

                  <div>
                    <p className="font-semibold">
                      ● Lorem ipsum dolor sit amet.
                    </p>
                    <p className="ml-4 italic">
                      - Lorem ipsum dolor sit amet consectetur adipisicing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Service = () => {
  return (
    <div className="space-y-2 transition duration-200 ease-in-out cursor-pointer">
      <img
        src="https://firebasestorage.googleapis.com/v0/b/connectifylocal-299a6.appspot.com/o/photos%2FDSC07199.jpg?alt=media&token=989df2ee-2a70-4a36-b9b0-4bfaefac6e74"
        alt=""
        className="aspect-video object-cover"
      />

      <div className="space-y-2">
        <p className="text-xl font-bold">Residential</p>

        <div className="text-black text-wrap">
          <p className="font-medium">Land Development and Exterior work</p>
          <p>The Outlets and Lima Exchange</p>
          <p className="italic text-customDarkGray ">Malvar Batangas</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
