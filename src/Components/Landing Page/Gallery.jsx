import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";

const Gallery = () => {
  return (
    <section className="relative text-customDarkRed w-full py-12 lg:py-20 flex flex-col items-center justify-center gap-8 sm:gap-16">
      <div id="gallery" className="absolute -top-16 "></div>

      <div className="space-y-6 text-center">
        <h2 className="text-4xl font-bold text-customDarkRed ">
          Our Work in Action
        </h2>
        <p className="text-black max-w-5xl text-lg text-center">
          Explore our gallery to see the quality craftsmanship and diverse
          projects we've completed. From small-scale builds to large
          developments, each image showcases our dedication to excellence and
          attention to detail.
        </p>
      </div>

      <PhotoProvider speed={() => 200}>
        <div className="w-full max-w-screen-2xl ">
          <div className="grid sm:grid-cols-12">
            <PhotoView src="/used_landing_page/used_our_work/Picture 1.jpg">
              <div className="col-span-4 h-full">
                <img
                  src="/used_landing_page/used_our_work/Picture 1.jpg"
                  alt="Left Image"
                  className="w-full h-full object-cover"
                />
              </div>
            </PhotoView>

            <PhotoView src="/used_landing_page/used_our_work/Picture 2.jpg">
              <div className="col-span-4 h-full">
                <img
                  src="/used_landing_page/used_our_work/Picture 2.jpg"
                  alt="Middle Image"
                  className="w-full h-full object-cover"
                />
              </div>
            </PhotoView>

            <PhotoView src="/used_landing_page/used_our_work/Picture 3.jpg">
              <div className="col-span-4 h-full">
                <img
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
                  src="/used_landing_page/used_our_work/Picture 4.png"
                  alt="Left Image"
                  className="w-full h-full object-cover"
                />
              </div>
            </PhotoView>

            <PhotoView src="/used_landing_page/used_our_work/Picture 5.png">
              <div className="sm:col-span-6 h-full">
                <img
                  src="/used_landing_page/used_our_work/Picture 5.png"
                  alt="Middle Image"
                  className="w-full h-[11rem] md:h-[15rem] xl:h-[340px] object-cover"
                />
              </div>
            </PhotoView>

            <PhotoView src="/used_landing_page/used_our_work/Picture 6.png">
              <div className="sm:col-span-3 h-full">
                <img
                  src="/used_landing_page/used_our_work/Picture 6.png"
                  alt="Right Image"
                  className="w-full h-full object-cover"
                />
              </div>
            </PhotoView>
          </div>

          <div className="hidden sm:grid sm:grid-cols-11">
            <PhotoView src="/used_landing_page/used_our_work/Picture 7.jpg">
              <div className="sm:col-span-4 h-full">
                <img
                  src="/used_landing_page/used_our_work/Picture 7.jpg"
                  alt="Left Image"
                  className="w-full h-[11rem] md:h-[15rem] xl:h-[340px] object-cover"
                />
              </div>
            </PhotoView>

            <PhotoView src="/used_landing_page/used_our_work/Picture 8.jpg">
              <div className="sm:col-span-4 h-full">
                <img
                  src="/used_landing_page/used_our_work/Picture 8.jpg"
                  alt="Middle Image"
                  className="w-full h-[11rem] md:h-[15rem] xl:h-[340px] object-cover"
                />
              </div>
            </PhotoView>

            <PhotoView src="/used_landing_page/used_our_work/Picture 9.jpg">
              <div className="sm:col-span-3 h-full">
                <img
                  src="/used_landing_page/used_our_work/Picture 9.jpg"
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
                  src="/used_landing_page/used_our_work/Picture 10.jpg"
                  alt="Left Image"
                  className="w-full h-full object-cover"
                />
              </div>
            </PhotoView>

            <PhotoView src="/used_landing_page/used_our_work/Picture 11.jpg">
              <div className="col-span-4 h-full">
                <img
                  src="/used_landing_page/used_our_work/Picture 11.jpg"
                  alt="Middle Image"
                  className="w-full h-full object-cover"
                />
              </div>
            </PhotoView>

            <PhotoView src="/used_landing_page/used_our_work/Picture 12.jpg">
              <div className="col-span-4 h-full">
                <img
                  src="/used_landing_page/used_our_work/Picture 12.jpg"
                  alt="Right Image"
                  className="w-full h-full object-cover"
                />
              </div>
            </PhotoView>
          </div>
        </div>
      </PhotoProvider>

      <Link
        to="/gallery"
        className="italic text-center w-full max-w-[9rem] px-4 py-2 font-bold bg-customOrange hover:bg-customOrange/90 text-black rounded-full"
      >
        See All
      </Link>
    </section>
  );
};

export default Gallery;
