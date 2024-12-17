import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";

const ProjectGallery = () => {
  return (
    <section className="relative text-customDarkRed w-full py-12  lg:py-20 flex flex-col items-center justify-center gap-8 sm:gap-16">
      <div id="gallery" className="absolute -top-16 "></div>
      <PhotoProvider speed={() => 200}>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="w-full max-w-screen-2xl "
        >
          <div className="grid sm:grid-cols-12">
            <PhotoView src="/used_landing_page/used_our_work/Picture 1.jpg">
              <div className="col-span-4 h-full">
                <img
                  loading="lazy"
                  src="/used_landing_page/used_our_work/Picture 1.jpg"
                  alt="Left Image"
                  className="w-full h-full object-cover"
                />
              </div>
            </PhotoView>

            <PhotoView src="/used_landing_page/used_our_work/Picture 2.jpg">
              <div className="col-span-4 h-full">
                <img
                  loading="lazy"
                  src="/used_landing_page/used_our_work/Picture 2.jpg"
                  alt="Middle Image"
                  className="w-full h-full object-cover"
                />
              </div>
            </PhotoView>

            <PhotoView src="/used_landing_page/used_our_work/Picture 3.jpg">
              <div className="col-span-4 h-full">
                <img
                  loading="lazy"
                  src="/used_landing_page/used_our_work/Picture 3.jpg"
                  alt="Right Image"
                  className="w-full h-full object-cover"
                />
              </div>
            </PhotoView>
          </div>

          <div className="grid sm:grid-cols-12">
            <PhotoView src="/used_landing_page/used_our_work/Picture 4.png">
              <div className="sm:col-span-3 h-full">
                <img
                  loading="lazy"
                  src="/used_landing_page/used_our_work/Picture 4.png"
                  alt="Left Image"
                  className="w-full h-full object-cover"
                />
              </div>
            </PhotoView>

            <PhotoView src="/used_landing_page/used_our_work/Picture 5.png">
              <div className="sm:col-span-6 h-full">
                <img
                  loading="lazy"
                  src="/used_landing_page/used_our_work/Picture 5.png"
                  alt="Middle Image"
                  className="w-full h-[11rem] md:h-[15rem] xl:h-[340px] object-cover"
                />
              </div>
            </PhotoView>

            <PhotoView src="/used_landing_page/used_our_work/Picture 6.png">
              <div className="sm:col-span-3 h-full">
                <img
                  loading="lazy"
                  src="/used_landing_page/used_our_work/Picture 6.png"
                  alt="Right Image"
                  className="w-full h-full object-cover"
                />
              </div>
            </PhotoView>
          </div>

          <div className="hidden sm:grid sm:grid-cols-11">
            <PhotoView src="/used_landing_page/used_our_work/picture 13.jpg">
              <div className="sm:col-span-4 h-full">
                <img
                  loading="lazy"
                  src="/used_landing_page/used_our_work/picture 13.jpg"
                  alt="Left Image"
                  className="w-full h-[11rem] md:h-[15rem] xl:h-[340px] object-cover"
                />
              </div>
            </PhotoView>

            <PhotoView src="/used_landing_page/used_our_work/Picture 8.jpg">
              <div className="sm:col-span-4 h-full">
                <img
                  loading="lazy"
                  src="/used_landing_page/used_our_work/Picture 8.jpg"
                  alt="Middle Image"
                  className="w-full h-[11rem] md:h-[15rem] xl:h-[340px] object-cover"
                />
              </div>
            </PhotoView>

            <PhotoView src="/used_landing_page/used_our_work/picture 14.jpg">
              <div className="sm:col-span-3 h-full">
                <img
                  loading="lazy"
                  src="/used_landing_page/used_our_work/picture 14.jpg"
                  alt="Right Image"
                  className="w-full h-full object-cover"
                />
              </div>
            </PhotoView>
          </div>

          <div className="grid sm:grid-cols-12">
            <PhotoView src="/used_landing_page/used_our_work/Picture 10.jpg">
              <div className="col-span-4 h-full">
                <img
                  loading="lazy"
                  src="/used_landing_page/used_our_work/Picture 10.jpg"
                  alt="Left Image"
                  className="w-full h-full object-cover"
                />
              </div>
            </PhotoView>

            <PhotoView src="/used_landing_page/used_our_work/Picture 11.jpg">
              <div className="col-span-4 h-full">
                <img
                  loading="lazy"
                  src="/used_landing_page/used_our_work/Picture 11.jpg"
                  alt="Middle Image"
                  className="w-full h-full object-cover"
                />
              </div>
            </PhotoView>

            <PhotoView src="/used_landing_page/used_our_work/Picture 12.jpg">
              <div className="col-span-4 h-full">
                <img
                  loading="lazy"
                  src="/used_landing_page/used_our_work/Picture 12.jpg"
                  alt="Right Image"
                  className="w-full h-full object-cover"
                />
              </div>
            </PhotoView>
          </div>
        </div>
      </PhotoProvider>

    </section>
  );
};

export default ProjectGallery;
