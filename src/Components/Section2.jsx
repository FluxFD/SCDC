import React from "react";

const Section2 = () => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url(https://firebasestorage.googleapis.com/v0/b/connectifylocal-299a6.appspot.com/o/photos%2FDSC05845.jpg?alt=media&token=2a946647-6c02-4b21-9bf8-bd9fdf197e56)`,
      }}
      className="text-center text-white w-full sm:h-[80vh] px-4 py-16 lg:p-10 flex flex-col items-center justify-center gap-8 bg-cover bg-center bg-no-repeat"
    >
      <h2 className="text-4xl font-bold">Expertise You Can Trust Nationwide</h2>
      <p className="italic text-lg">
        We are proud of our extensive across numerous projects throughout the
        Philippines.
      </p>

      <h3 className="text-3xl font-bold mt-6">Our Impact</h3>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="w-[15rem] h-[8rem] text-center flex flex-col items-center justify-center gap-2 p-6 rounded-xl bg-white/10 backdrop-blur-sm border">
          <p className="text-customOrange text-4xl font-extrabold">200+</p>
          <p className="text-lg font-medium">Finished Projects</p>
        </div>

        <div className="relative w-[15rem] h-[8rem] text-center flex flex-col items-center justify-center gap-2 p-6 rounded-xl bg-white/10 backdrop-blur-sm border">
          <p className="text-customOrange text-4xl font-extrabold">7</p>
          <p className="text-lg font-medium">Major Projects</p>
          <p className="text-xs absolute bottom-2 text-white/80">(ONGOING)</p>
        </div>

        <div className="w-[15rem] h-[8rem] text-center flex flex-col items-center justify-center gap-2 p-6 rounded-xl bg-white/10 backdrop-blur-sm border">
          <p className="text-customOrange text-4xl font-extrabold">100</p>
          <p className="text-lg font-medium">Satisfied Clients</p>
        </div>

        <div className="w-[15rem] h-[8rem] text-center flex flex-col items-center justify-center gap-2 p-6 rounded-xl bg-white/10 backdrop-blur-sm border">
          <p className="text-customOrange text-4xl font-extrabold">13</p>
          <p className="text-lg font-medium">Years of Experience</p>
        </div>
      </div>

      <button className="italic mt-4 w-full max-w-[12rem] px-4 py-2 font-bold bg-customOrange hover:bg-customOrange/90 text-black rounded-lg">
        Apply Now
      </button>
    </div>
  );
};

export default Section2;
