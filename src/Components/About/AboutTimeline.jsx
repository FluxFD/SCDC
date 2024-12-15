import { useRef, useState, useEffect } from "react";
import { ArrowForward, ArrowBack } from "@mui/icons-material";

const TimelineCarousel = () => {
  const timelineContainer = useRef(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const checkScrollPosition = () => {
    if (timelineContainer.current) {
      const scrollLeft = timelineContainer.current.scrollLeft;
      const scrollWidth = timelineContainer.current.scrollWidth;
      const clientWidth = timelineContainer.current.clientWidth;

      setIsAtStart(scrollLeft === 0);
      setIsAtEnd(scrollLeft + clientWidth === scrollWidth);
    }
  };

  const scroll = (direction) => {
    const scrollAmount = 300;
    if (timelineContainer.current) {
      timelineContainer.current.scrollBy({
        left: direction === "next" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
      checkScrollPosition();
    }
  };

  useEffect(() => {
    checkScrollPosition();
  }, []);

  return (
    <div className="relative">
      <div
        className="overflow-x-auto whitespace-nowrap scroll-smooth scrollbar-hidden"
        ref={timelineContainer}
      >
        <div className="flex space-x-8 lg:space-x-12">
          <div className="timeline-item flex-none mx-4 p-2 text-center md:w-1/4 sm:w-full">
            <div className="flex justify-center mb-2">
              <img
                src="/used_about/2024.jpg"
                alt="2024 SANLUIS Construction Corporation milestone"
                className="w-auto h-52 rounded-lg object-cover"
              />
            </div>
            <div className="text-xl font-semibold">2024</div>
            <div className="mt-2 text-justify break-words whitespace-normal overflow-hidden">
              Created the premier corporation of the three entities
              aforementioned,{" "}
              <b>SANLUIS CONSTRUCTION AND DEVELOPMENT CORPORATION.</b>
            </div>
          </div>

          <div className="timeline-item flex-none mx-2 p-2 text-center md:w-1/4 sm:w-full">
            <div className="flex justify-center mb-2">
              <img
                src="/used_about/2023.png"
                alt="2024 SANLUIS Construction Corporation milestone"
                className="w-auto h-52 rounded-lg object-cover"
              />
            </div>
            <div className="text-xl font-semibold">2023</div>
            <div className="mt-2 text-justify break-words whitespace-normal overflow-hidden">
              Founded SL Human Resource Management Services, subsidiary of Mey’s
              Landscaping focusing on manpower
            </div>
          </div>

          <div className="timeline-item flex-none mx-4 p-2 text-center md:w-1/4 sm:w-full">
            <div className="flex justify-center mb-2">
              <img
                src="/used_about/2020.jpg"
                alt="2024 SANLUIS Construction Corporation milestone"
                className="w-auto h-52 rounded-lg object-cover"
              />
            </div>
            <div className="text-xl font-semibold">2020</div>
            <div className="mt-2 text-justify break-words whitespace-normal overflow-hidden">
              Granted the new major project, &quot;Lima Project Batch 3,&quot;
              by Lima Land Inc.
            </div>
          </div>

          <div className="timeline-item flex-none mx-4 p-2 text-center md:w-1/4 sm:w-full">
            <div className="flex justify-center mb-2">
              <img
                src="/used_about/2015.png"
                alt="2024 SANLUIS Construction Corporation milestone"
                className="w-auto h-52 rounded-lg object-cover"
              />
            </div>
            <div className="text-xl font-semibold">2015</div>
            <div className="mt-2 text-justify break-words whitespace-normal overflow-hidden">
              Had our first breakthrough; Major Land Development Project of Lima
              Land under Aboitiz Group
            </div>
          </div>

          <div className="timeline-item flex-none mx-4 p-2 text-center md:w-1/4 sm:w-full">
            <div className="flex justify-center mb-2">
              <img
                src="/used_about/2014.jpg"
                alt="2024 SANLUIS Construction Corporation milestone"
                className="w-auto h-52 rounded-lg object-cover"
              />
            </div>
            <div className="text-xl font-semibold">2014</div>
            <div className="mt-2 text-justify break-words whitespace-normal overflow-hidden">
              Mey’s Landscaping, the landscaping arm of SCDC, was established.
            </div>
          </div>

          <div className="timeline-item flex-none mx-4 p-2 text-center md:w-1/4 sm:w-full">
            <div className="flex justify-center mb-2">
              <img
                src="/used_about/2013.jpg"
                alt="2024 SANLUIS Construction Corporation milestone"
                className="w-auto h-52 rounded-lg object-cover"
              />
            </div>
            <div className="text-xl font-semibold">2013</div>
            <div className="mt-2 text-justify break-words whitespace-normal overflow-hidden">
              Jeff San Luis Enterprises (JSLE) was made as Sole Propriertorship{" "}
            </div>
          </div>

          <div className="timeline-item flex-none mx-4 p-2 text-center md:w-1/4 sm:w-full">
            <div className="flex justify-center mb-2">
              <img
                src="/used_about/2011.jpg"
                alt="2024 SANLUIS Construction Corporation milestone"
                className="w-auto h-52 rounded-lg object-cover"
              />
            </div>
            <div className="text-xl font-semibold">2011</div>
            <div className="mt-2 text-justify break-words whitespace-normal overflow-hidden">
              First Project LIMA Technology Center with Alcantara Group{" "}
            </div>
          </div>

          <div className="timeline-item flex-none mx-4 p-2 text-center md:w-1/4 sm:w-full">
            <div className="flex justify-center mb-2">
              <img
                src="/used_about/2004.jpg"
                alt="2024 SANLUIS Construction Corporation milestone"
                className="w-auto h-52 rounded-lg object-cover"
              />
            </div>
            <div className="text-xl font-semibold">2004</div>
            <div className="mt-2 text-justify break-words whitespace-normal overflow-hidden">
              Mr. Jeff San Luis started with small projects locally{" "}
            </div>
          </div>
        </div>
      </div>

      {!isAtStart && (
        <div
          onClick={() => scroll("prev")}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full cursor-pointer z-10 sm:left-2"
        >
          <ArrowBack className="w-6 h-6" />
        </div>
      )}

      {!isAtEnd && (
        <div
          onClick={() => scroll("next")}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full cursor-pointer z-10 sm:right-2"
        >
          <ArrowForward className="w-6 h-6" />
        </div>
      )}
    </div>
  );
};

export default TimelineCarousel;
