import React, { useEffect } from "react";
import { TreesIcon as Tree, Truck, Tractor } from "lucide-react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { useLocation } from "react-router-dom";

const OtherServices = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const targetElement = document.getElementById(hash.substring(1));
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  return (
    <div className="w-full min-h-screen flex flex-col font-inter pt-[64px] lg:pt-[80px]">
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1)), url(https://firebasestorage.googleapis.com/v0/b/connectifylocal-299a6.appspot.com/o/photos%2FDSC07177.jpg?alt=media&token=e608478f-aed8-4bb6-9647-c6fe9dcb3ae4)`,
        }}
        className="w-full h-[30vh] sm:h-[40vh] py-8 flex justify-center items-center bg-cover bg-center"
      >
        <div className="text-white p-4 flex flex-col gap-4 items-center text-center">
          <h1 className="text-3xl lg:text-6xl font-extrabold uppercase tracking-wide">
            Other Services
          </h1>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-16 space-y-20 sm:space-y-28">
        <section className="relative flex flex-col md:flex-row items-center gap-8">
          <div id="landscaping" className="absolute -top-[10rem] "></div>

          <div
            data-aos="fade-right"
            data-aos-delay="500"
            data-aos-duration="1500"
            className="md:w-1/2"
          >
            <Tree className="w-24 h-24 text-[#641717] mb-4" strokeWidth={1} />
            <h2 className="text-3xl font-bold mb-4 text-customDarkRed">
              Landscape Solution
            </h2>
            <p className="text-gray-700 mb-4">
              Our landscape solutions are designed to transform your outdoor
              spaces into beautiful, functional areas. We offer a range of
              services including garden design, planting, hardscaping, and
              ongoing maintenance to keep your landscape looking its best
              year-round.
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration="1500"
            className="md:w-1/2 space-y-2"
          >
            <PhotoProvider speed={() => 200}>
              <PhotoView src="/used_other_services/DSC07423.jpg">
                <img
                  loading="lazy"
                  src="/used_other_services/DSC07423.jpg"
                  alt="Grid 1"
                  className="aspect-video object-cover object-top rounded-lg"
                />
              </PhotoView>

              <div className="grid grid-cols-3 gap-2">
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
              </div>
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
            <Truck className="w-24 h-24 text-[#641717] mb-4" strokeWidth={1} />
            <h2 className="text-3xl font-bold mb-4 text-customDarkRed">
              Aggreegates Transport Solutions (Trucking)
            </h2>
            <p className="text-gray-700 mb-4">
              Our aggregates transport solutions provide efficient and reliable
              trucking services for construction materials. We specialize in the
              transportation of sand, gravel, crushed stone, and other bulk
              materials, ensuring timely delivery to your project sites.
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration="1500"
            className="md:w-1/2 space-y-2"
          >
            <PhotoProvider speed={() => 200}>
              <PhotoView src="/used_other_services/Picture 6.png">
                <img
                  loading="lazy"
                  src="/used_other_services/Picture 6.png"
                  alt="Grid 1"
                  className="aspect-video object-cover object-top rounded-lg"
                />
              </PhotoView>

              <div className="flex items-center gap-2">
                <div>
                  <PhotoView src="/used_other_services/DSC05831.jpg">
                    <img
                      loading="lazy"
                      src="/used_other_services/DSC05831.jpg"
                      alt="Grid 1"
                      className="w-full aspect-video object-cover rounded-lg"
                    />
                  </PhotoView>
                </div>
                <div>
                  <PhotoView src="/used_other_services/DSC05873.jpg">
                    <img
                      loading="lazy"
                      src="/used_other_services/DSC05873.jpg"
                      alt="Grid 1"
                      className="w-full aspect-video object-cover rounded-lg"
                    />
                  </PhotoView>
                </div>
                <div>
                  <PhotoView src="/used_other_services/Trucking.jpg">
                    <img
                      loading="lazy"
                      src="/used_other_services/Trucking.jpg"
                      alt="Grid 1"
                      className="w-full aspect-video object-cover rounded-lg"
                    />
                  </PhotoView>
                </div>
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
            <Tractor
              className="w-24 h-24 text-[#641717] mb-4"
              strokeWidth={1}
            />
            <h2 className="text-3xl font-bold mb-4 text-customDarkRed">
              Rental of Equipment
            </h2>
            <p className="text-gray-700 mb-4">
              Our equipment rental service offers a wide range of high-quality
              machinery for construction, landscaping, and earthmoving projects.
              From excavators and bulldozers to smaller tools, we provide
              flexible rental options to meet your project needs.
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration="1500"
            className="md:w-1/2 space-y-2"
          >
            <PhotoProvider speed={() => 200}>
              <PhotoView src="/used_other_services/Rental.jpg">
                <img
                  loading="lazy"
                  src="/used_other_services/Rental.jpg"
                  alt="Grid 1"
                  className="aspect-video object-cover object-top rounded-lg"
                />
              </PhotoView>

              <div className="flex items-center gap-2">
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
              </div>
            </PhotoProvider>
          </div>
        </section>
      </main>
    </div>
  );
};

export default OtherServices;
