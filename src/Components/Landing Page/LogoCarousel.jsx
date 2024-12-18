import React from "react";

const LogoCarousel = () => {
  return (
    <div className="w-full flex gap-[92rem] px-10 overflow-hidden group bg-customLightgray">
      <div className="w-full flex space-x-10  z-10 animate-loop-scroll group-hover:paused-carousel">
        <LogoContainer />
      </div>

      <div
        className="w-full flex space-x-10 animate-loop-scroll group-hover:paused-carousel"
        aria-hidden="true"
      >
        <LogoContainer />
      </div>
    </div>
  );
};

const LogoContainer = () => {
  return (
    <>
      <img
        loading="lazy"
        src="./clients/6VFWZXRTBVBXEND6WA7U-588010d1.png"
        alt="Brand"
        className="h-[5rem] aspect-video object-contain"
      />
      <img
        loading="lazy"
        src="./clients/301152490_546812180581350_7393387599569379120_n.png"
        alt="Brand"
        className="h-[5rem] aspect-video object-contain"
      />
      <img
        loading="lazy"
        src="./clients/446934495_854520850026572_6034645225647009183_n.png"
        alt="Brand"
        className="h-[5rem] aspect-video object-contain"
      />
      <img
        loading="lazy"
        src="./clients/1711076320276.png"
        alt="Brand"
        className="h-[5rem] aspect-video object-contain"
      />
      <img
        loading="lazy"
        src="./clients/Aboitiz_Equity_Ventures_logo.svg.png"
        alt="Brand"
        className="h-[5rem] aspect-video object-contain"
      />
      <img
        loading="lazy"
        src="./clients/aboitiz-infracapital-logo.png"
        alt="Brand"
        className="h-[5rem] aspect-video object-contain"
      />
      <img
        loading="lazy"
        src="./clients/ABOITIZLAND-logo-logo.png"
        alt="Brand"
        className="h-[5rem] aspect-video object-contain"
      />
      <img
        loading="lazy"
        src="./clients/png-transparent-shimizu-corporation-architectural-engineering-general-contractor-limited-company-shimizu-blue-building-company.png"
        alt="Brand"
        className="h-[5rem] aspect-video object-contain"
      />
      <img
        loading="lazy"
        src="./clients/wdkzoqwvwm4d6zkxawid.png"
        alt="Brand"
        className="h-[5rem] aspect-video object-contain"
      />
      <img
        loading="lazy"
        src="./clients/zuellig_therapeutics_cover.png"
        alt="Brand"
        className="h-[5rem] aspect-video object-contain"
      />
    </>
  );
};

export default LogoCarousel;
