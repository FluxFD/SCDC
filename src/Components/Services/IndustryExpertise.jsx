import { useState, useEffect } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { TreesIcon as Tree, Truck, Tractor } from "lucide-react";

const IndustyExpertiseImages = () => {
  const [modalContent, setModalContent] = useState(null);

  const closeModal = () => setModalContent(null);

  const items = [
    {
      title: "Pre - Construction",
      description:
        "Providing essential planning, design, and budgeting services to ensure successful project initiation.",
      imageUrl: ["/used_services/Pre_construction.png"],
    },
    {
      title: "General Construction",
      description:
        "Delivering high-quality construction services for residential, commercial, and industrial projects.",
      imageUrl: [
        "/used_services/d5c30235-4610-4e99-8f13-cd34fa5606f4.jpg",
        "/used_services/e3915132-1be4-4bca-a5dc-fe71d0f0ce69.jpg",
        "/used_services/b016ea36-6145-4a6b-a27a-9e8baf721afd.jpg",
      ],
    },
    {
      title: "Construction Management",
      description:
        "Overseeing and managing construction processes to ensure efficiency, safety, and timely completion.",
      imageUrl: ["/used_services/Construction_management.jpg"],
    },
  ];

  return (
    <>
      {/* Main Grid */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 md:px-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="w-full px-6 md:border-r border-gray-400 last:border-r-0"
            // onClick={() => setModalContent(item)}
          >
            <PhotoProvider speed={() => 200}>
              <PhotoView src={item.imageUrl?.[0]}>
                <img
                  src={item.imageUrl?.[0]}
                  alt={item.title}
                  className="w-full h-48 aspect-video object-cover rounded-lg shadow-md mt-2"
                />
              </PhotoView>
              {item.imageUrl?.length > 1 &&
                item?.imageUrl
                  ?.slice(1)
                  ?.map((img) => <PhotoView src={img}></PhotoView>)}
            </PhotoProvider>
            <div className="space-y-2 mt-2">
              <p className="text-lg md:text-xl font-bold">{item.title}</p>
              <div className="text-wrap px-4">
                <p className="text-customDarkGray">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div> */}

      <main className="max-w-7xl mx-auto px-4 py-16 space-y-20 sm:space-y-28">
        <section className="relative flex flex-col md:flex-row items-center gap-8">
          <div id="landscaping" className="absolute -top-[10rem] "></div>

          <div
            data-aos="fade-right"
            data-aos-delay="500"
            data-aos-duration="1500"
            className="md:w-1/2"
          >
            {/* <Tree className="w-24 h-24 text-[#641717] mb-4" strokeWidth={1} /> */}
            <h2 className="text-3xl font-bold mb-4 text-customDarkRed">
            Pre - Construction
            </h2>
            <p className="text-gray-700 mb-4">
            Providing essential planning, design, 
            and budgeting services to ensure successful project initiation.
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration="1500"
            className="md:w-1/2 space-y-2"
          >
            <PhotoProvider speed={() => 200}>
              <PhotoView src="/used_services/Pre_construction.png">
                <img
                  loading="lazy"
                  src="/used_services/Pre_construction.png"
                  alt="Grid 1"
                  className="aspect-video object-cover object-top rounded-lg"
                />
              </PhotoView>

              {/* <div className="grid grid-cols-3 gap-2">
                <div>
                  <PhotoView src="/used_other_services/Landscape_solution.jpg">
                    <img
                      loading="lazy"
                      src="/used_other_services/Landscape_solution.jpg"
                      alt="Grid 1"
                      className="w-full aspect-video object-cover rounded-lg"
                    />
                  </PhotoView>
                </div>
                <div>
                  <PhotoView src="/used_other_services/DSC07433.jpg">
                    <img
                      loading="lazy"
                      src="/used_other_services/DSC07433.jpg"
                      alt="Grid 1"
                      className="w-full aspect-video object-cover rounded-lg"
                    />
                  </PhotoView>
                </div>
                <div>
                  <PhotoView src="/used_other_services/Picture 10.jpg">
                    <img
                      loading="lazy"
                      src="/used_other_services/Picture 10.jpg"
                      alt="Grid 1"
                      className="w-full aspect-video object-cover rounded-lg"
                    />
                  </PhotoView>
                </div>
              </div> */}
            </PhotoProvider>
          </div>
        </section>

        <section className="relative flex flex-col md:flex-row-reverse items-center gap-8">
          <div id="trucking" className="absolute sm:-top-[120px] "></div>

          <div
            data-aos="fade-left"
            data-aos-delay="500"
            data-aos-duration="1500"
            className="md:w-1/2"
          >
            {/* <Truck className="w-24 h-24 text-[#641717] mb-4" strokeWidth={1} /> */}
            <h2 className="text-3xl font-bold mb-4 text-customDarkRed">
              General Construction
            </h2>
            <p className="text-gray-700 mb-4">
            Delivering high-quality construction services for residential, 
            commercial, and industrial projects.
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration="1500"
            className="md:w-1/2 space-y-2"
          >
            <PhotoProvider speed={() => 200}>
              <PhotoView src="/used_services/d5c30235-4610-4e99-8f13-cd34fa5606f4.jpg">
                <img
                  loading="lazy"
                  src="/used_services/d5c30235-4610-4e99-8f13-cd34fa5606f4.jpg"
                  alt="Grid 1"
                  className="aspect-video object-cover object-top rounded-lg"
                />
              </PhotoView>

              <div className="flex items-center gap-2">
                <div>
                  <PhotoView src="/used_services/e3915132-1be4-4bca-a5dc-fe71d0f0ce69.jpg">
                    <img
                      loading="lazy"
                      src="/used_services/e3915132-1be4-4bca-a5dc-fe71d0f0ce69.jpg"
                      alt="Grid 1"
                      className="w-full aspect-video object-cover rounded-lg"
                    />
                  </PhotoView>
                </div>
                <div>
                  <PhotoView src="/used_services/7ce133d0-480a-4a20-b967-f87c8719fd87.jpg">
                    <img
                      loading="lazy"
                      src="/used_services/7ce133d0-480a-4a20-b967-f87c8719fd87.jpg"
                      alt="Grid 1"
                      className="w-full aspect-video object-cover rounded-lg"
                    />
                  </PhotoView>
                </div>
                {/* <div>
                  <PhotoView src="/used_other_services/b016ea36-6145-4a6b-a27a-9e8baf721afd.jpg">
                    <img
                      loading="lazy"
                      src="/used_other_services/b016ea36-6145-4a6b-a27a-9e8baf721afd.jpg"
                      alt="Grid 1"
                      className="w-full aspect-video object-cover rounded-lg"
                    />
                  </PhotoView>
                </div> */}
              </div>
            </PhotoProvider>
          </div>
        </section>

        <section
          id="rental"
          className="flex flex-col md:flex-row items-center gap-8"
        >
          <div
            data-aos="fade-right"
            data-aos-delay="500"
            data-aos-duration="1500"
            className="md:w-1/2"
          >
            {/* <Tractor
              className="w-24 h-24 text-[#641717] mb-4"
              strokeWidth={1}
            /> */}
            <h2 className="text-3xl font-bold mb-4 text-customDarkRed">
            Construction Management
            </h2>
            <p className="text-gray-700 mb-4">
            Overseeing and managing construction processes to ensure efficiency, 
            safety, and timely completion.
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration="1500"
            className="md:w-1/2 space-y-2"
          >
            <PhotoProvider speed={() => 200}>
              <PhotoView src="/used_services/Construction_management.jpg">
                <img
                  loading="lazy"
                  src="/used_services/Construction_management.jpg"
                  alt="Grid 1"
                  className="aspect-video object-cover object-top rounded-lg"
                />
              </PhotoView>

              {/* <div className="flex items-center gap-2">
                <div>
                  <PhotoView src="/used_other_services/Picture 8-1.jpg">
                    <img
                      loading="lazy"
                      src="/used_other_services/Picture 8-1.jpg"
                      alt="Grid 1"
                      className="w-full aspect-video object-cover rounded-lg"
                    />
                  </PhotoView>
                </div>
                <div>
                  <PhotoView src="/used_other_services/Rental.jpg">
                    <img
                      loading="lazy"
                      src="/used_other_services/Rental.jpg"
                      alt="Grid 1"
                      className="w-full aspect-video object-cover rounded-lg"
                    />
                  </PhotoView>
                </div>
                <div>
                  <PhotoView src="/used_other_services/Picture 9.jpg">
                    <img
                      loading="lazy"
                      src="/used_other_services/Picture 9.jpg"
                      alt="Grid 1"
                      className="w-full aspect-video object-cover rounded-lg"
                    />
                  </PhotoView>
                </div>
              </div> */}
            </PhotoProvider>
          </div>
        </section>
      </main>

      {modalContent && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-2/3 lg:w-1/2 p-2 relative">
            <div className="flex justify-end mb-2">
              <button
                className="text-gray-500 hover:text-gray-700 p-2 rounded-full"
                onClick={closeModal}
              >
                ✕
              </button>
            </div>
            <img
              src={modalContent.imageUrl?.[0]}
              alt={modalContent.title}
              className="w-full h-auto aspect-video object-cover rounded-lg mb-4"
            />
            <h2 className="text-lg md:text-xl font-bold text-center">
              {modalContent.title}
            </h2>
            <p className="text-customDarkGray mt-2 text-center">
              {modalContent.description}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default IndustyExpertiseImages;
