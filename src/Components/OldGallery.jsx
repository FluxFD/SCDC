import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";

const Gallery = () => {
  return (
    <section className="relative text-customDarkRed w-full px-8 py-12 lg:p-20 flex flex-col items-center justify-center gap-8 sm:gap-16">
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
        <div className="w-full space-y-2 max-w-5xl rounded-2xl overflow-hidden">
          {/* GRID 1 */}
          <div className="grid grid-cols-3 gap-2">
            <div className="space-y-2">
              <PhotoView src="https://firebasestorage.googleapis.com/v0/b/connectifylocal-299a6.appspot.com/o/photos%2FDSC07179.jpg?alt=media&token=607176ce-c50e-45b0-8cd4-d665fc4fcee8">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/connectifylocal-299a6.appspot.com/o/photos%2FDSC07179.jpg?alt=media&token=607176ce-c50e-45b0-8cd4-d665fc4fcee8"
                  alt=""
                  className="aspect-[5/4] object-cover"
                />
              </PhotoView>
              <PhotoView src="https://firebasestorage.googleapis.com/v0/b/connectifylocal-299a6.appspot.com/o/photos%2FDSC07046.jpg?alt=media&token=6bb3d733-75e6-4f19-8f86-6a706e8cea59">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/connectifylocal-299a6.appspot.com/o/photos%2FDSC07046.jpg?alt=media&token=6bb3d733-75e6-4f19-8f86-6a706e8cea59"
                  alt=""
                  className="aspect-[5/6] object-cover"
                />
              </PhotoView>
            </div>

            <div className="space-y-2">
              <PhotoView src="https://firebasestorage.googleapis.com/v0/b/connectifylocal-299a6.appspot.com/o/drone%2FDJI_0272.jpg?alt=media&token=ab8b2696-9bc5-4807-8c2f-6dcb6283bde7">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/connectifylocal-299a6.appspot.com/o/drone%2FDJI_0272.jpg?alt=media&token=ab8b2696-9bc5-4807-8c2f-6dcb6283bde7"
                  alt=""
                  className="aspect-[3/4] object-cover"
                />
              </PhotoView>
              <PhotoView src="https://firebasestorage.googleapis.com/v0/b/connectifylocal-299a6.appspot.com/o/photos%2FDSC07024.jpg?alt=media&token=0b613add-30ca-499a-b800-9f14cfc77c1a">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/connectifylocal-299a6.appspot.com/o/photos%2FDSC07024.jpg?alt=media&token=0b613add-30ca-499a-b800-9f14cfc77c1a"
                  alt=""
                  className="object-cover"
                />
              </PhotoView>
            </div>

            <div className="space-y-2">
              <PhotoView src="https://firebasestorage.googleapis.com/v0/b/connectifylocal-299a6.appspot.com/o/photos%2FDSC07140.jpg?alt=media&token=758b1820-df46-4f06-93f3-d8fc19d28136">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/connectifylocal-299a6.appspot.com/o/photos%2FDSC07140.jpg?alt=media&token=758b1820-df46-4f06-93f3-d8fc19d28136"
                  alt=""
                  className="object-cover"
                />
              </PhotoView>
              <PhotoView>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/connectifylocal-299a6.appspot.com/o/drone%2FDJI_0279.jpg?alt=media&token=806367ff-0e45-4808-b240-6e72a0936309"
                  alt=""
                  className="aspect-[3/4] object-cover"
                />
              </PhotoView>
            </div>
          </div>

          {/* GRID 2 */}
          <div className="grid grid-cols-2 gap-2">
            <div className="space-y-2">
              <div className="grid grid-cols-2 gap-2">
                <div className="space-y-2">
                  <PhotoView>
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/connectifylocal-299a6.appspot.com/o/photos%2FDSC07517.jpg?alt=media&token=afeb8340-d647-4e5b-af6f-3b204ab2a35a"
                      alt=""
                      className="aspect-[4/3] object-cover"
                    />
                  </PhotoView>
                  <PhotoView src="https://firebasestorage.googleapis.com/v0/b/connectifylocal-299a6.appspot.com/o/photos%2FDSC07504.jpg?alt=media&token=03e305fe-b141-463c-ad94-92b0448b3d6c">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/connectifylocal-299a6.appspot.com/o/photos%2FDSC07504.jpg?alt=media&token=03e305fe-b141-463c-ad94-92b0448b3d6c"
                      alt=""
                      className="aspect-[5/6] object-cover"
                    />
                  </PhotoView>
                </div>

                <div className="space-y-2">
                  <PhotoView src="https://firebasestorage.googleapis.com/v0/b/connectifylocal-299a6.appspot.com/o/photos%2FDSC07533.jpg?alt=media&token=ea5d2aee-da90-4942-9ecd-1c43e8629bdf">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/connectifylocal-299a6.appspot.com/o/photos%2FDSC07533.jpg?alt=media&token=ea5d2aee-da90-4942-9ecd-1c43e8629bdf"
                      alt=""
                      className="aspect-[5/6] object-cover"
                    />
                  </PhotoView>
                  <PhotoView src="https://firebasestorage.googleapis.com/v0/b/connectifylocal-299a6.appspot.com/o/photos%2FDSC07420.jpg?alt=media&token=1462d856-7018-47e2-9536-5229556ac537">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/connectifylocal-299a6.appspot.com/o/photos%2FDSC07420.jpg?alt=media&token=1462d856-7018-47e2-9536-5229556ac537"
                      alt=""
                      className="aspect-[4/3] object-cover"
                    />
                  </PhotoView>
                </div>
              </div>

              <PhotoView src="https://firebasestorage.googleapis.com/v0/b/connectifylocal-299a6.appspot.com/o/photos%2FDSC07309.jpg?alt=media&token=27c19096-bb73-4049-b716-cc847f26fa3e">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/connectifylocal-299a6.appspot.com/o/photos%2FDSC07309.jpg?alt=media&token=27c19096-bb73-4049-b716-cc847f26fa3e"
                  alt=""
                  className="w-full object-cover"
                />
              </PhotoView>
            </div>

            <div className="space-y-2">
              <div>
                <PhotoView src="https://firebasestorage.googleapis.com/v0/b/connectifylocal-299a6.appspot.com/o/photos%2FDSC07429.jpg?alt=media&token=ba3dbfc6-180b-44ac-aae9-366176c69a5f">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/connectifylocal-299a6.appspot.com/o/photos%2FDSC07429.jpg?alt=media&token=ba3dbfc6-180b-44ac-aae9-366176c69a5f"
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </PhotoView>
              </div>
              <div className="h-full">
                <PhotoView src="https://firebasestorage.googleapis.com/v0/b/connectifylocal-299a6.appspot.com/o/drone%2FDJI_0342.jpg?alt=media&token=6a2d5913-ca19-4ca9-b24d-135764ecb2c6">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/connectifylocal-299a6.appspot.com/o/drone%2FDJI_0342.jpg?alt=media&token=6a2d5913-ca19-4ca9-b24d-135764ecb2c6"
                    alt=""
                    className="w-full h-full object-cover object-top"
                  />
                </PhotoView>
              </div>
            </div>
          </div>
        </div>
      </PhotoProvider>

      <Link
        to="/gallery"
        className="italic text-center w-full max-w-[9rem] px-4 py-2 font-bold bg-customOrange hover:bg-customOrange/90 text-black rounded-xl"
      >
        See More
      </Link>
    </section>
  );
};

export default Gallery;
