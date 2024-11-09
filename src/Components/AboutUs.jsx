import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";

const AboutUs = () => {
  return (
    <section className="relative w-full p-10 lg:p-20 flex justify-center items-center">
      <div id="about" className="absolute -top-16 "></div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="flex flex-col justify-center gap-6">
          <p className="text-4xl font-extrabold text-customDarkRed">About Us</p>
          <p className="text-lg sm:max-w-[90%] ">
            SCDC is dedicated to adapting innovative construction methods and
            sustainable practices, aiming to set new standards in the industry.
            The company's goal is to exceed expectations on every project,
            contributing to infrastructural advancement and sustainable
            development across communities. This strategic focus positions SCDC
            as a forward-thinking leader in the construction sector.
          </p>
          <button className="italic w-full max-w-[9rem] px-4 py-2 font-bold bg-customOrange hover:bg-customOrange/90 text-black rounded-lg">
            Learn More
          </button>
        </div>

        <div className="space-y-2">
          <PhotoProvider speed={() => 200}>
            <PhotoView src="https://firebasestorage.googleapis.com/v0/b/connectifylocal-299a6.appspot.com/o/photos%2FDSC06100.jpg?alt=media&token=1fa579c5-edbb-48a5-a723-a804cf8e2d37">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/connectifylocal-299a6.appspot.com/o/photos%2FDSC06100.jpg?alt=media&token=1fa579c5-edbb-48a5-a723-a804cf8e2d37"
                alt="Grid 1"
                className="aspect-video object-cover object-top rounded-2xl"
              />
            </PhotoView>

            <div className="flex items-center gap-2">
              <div>
                <PhotoView src="https://firebasestorage.googleapis.com/v0/b/connectifylocal-299a6.appspot.com/o/photos%2FDSC07403.jpg?alt=media&token=3abe769d-ece7-4370-abe2-b5a9e8aae1af">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/connectifylocal-299a6.appspot.com/o/photos%2FDSC07403.jpg?alt=media&token=3abe769d-ece7-4370-abe2-b5a9e8aae1af"
                    alt="Grid 1"
                    className="w-full aspect-video object-cover rounded-xl"
                  />
                </PhotoView>
              </div>
              <div>
                <PhotoView src="https://firebasestorage.googleapis.com/v0/b/connectifylocal-299a6.appspot.com/o/photos%2FDSC05849.jpg?alt=media&token=d3e00800-47a8-44d8-957b-e518bae9a9b2">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/connectifylocal-299a6.appspot.com/o/photos%2FDSC05849.jpg?alt=media&token=d3e00800-47a8-44d8-957b-e518bae9a9b2"
                    alt="Grid 1"
                    className="w-full aspect-video object-cover rounded-xl"
                  />
                </PhotoView>
              </div>
              <div>
                <PhotoView src="https://firebasestorage.googleapis.com/v0/b/connectifylocal-299a6.appspot.com/o/photos%2FDSC07490.jpg?alt=media&token=b908acca-ec6c-4e9c-bf26-4081b49a5ef7">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/connectifylocal-299a6.appspot.com/o/photos%2FDSC07490.jpg?alt=media&token=b908acca-ec6c-4e9c-bf26-4081b49a5ef7"
                    alt="Grid 1"
                    className="w-full aspect-video object-cover rounded-xl"
                  />
                </PhotoView>
              </div>
            </div>
          </PhotoProvider>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
