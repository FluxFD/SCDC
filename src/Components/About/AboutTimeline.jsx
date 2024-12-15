import { useRef, useState, useEffect } from "react";
import { ArrowForward, ArrowBack } from "@mui/icons-material";

const timelineData = [
  {
    year: "2024",
    image: "/used_about/2024.jpg",
    description:
      "Created the premier corporation of the three entities aforementioned, SANLUIS CONSTRUCTION AND DEVELOPMENT CORPORATION",
  },
  {
    year: "2023",
    image: "/used_about/2023.png",
    description:
      "Founded SL Human Resource  Management Services, subsidiary of Mey’s Landscaping focusing on manpower",
  },
  {
    year: "2020",
    image: "/used_about/2020.jpg",
    description:
      "Granted the new major project, 'Lima Project Batch 3,' by Lima Land Inc.",
  },
  {
    year: "2015",
    image: "/used_about/2015.png",
    description:
      "Had our first breakthrough; Major Land Development Project of Lima Land under Aboitiz Group",
  },
  {
    year: "2014",
    image: "/used_about/2014.jpg",
    description:
      "Mey’s Landscaping, the landscaping arm of SCDC, was established.",
  },
  {
    year: "2013",
    image: "/used_about/2013.jpg",
    description:
      "Jeff San Luis Enterprises (JSLE) was made as Sole Propriertorship.",
  },
  {
    year: "2011",
    image: "/used_about/2011.jpg",
    description: "First Project LIMA Technology Center with Alcantara Group.",
  },
  {
    year: "2004",
    image: "/used_about/2004.jpg",
    description: "Mr. Jeff San Luis started with small projects locally.",
  },
];

const TimelineCarousel = () => {
  const timelineContainer = useRef(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const checkScrollPosition = () => {
    if (timelineContainer.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        timelineContainer.current;
      setIsAtStart(scrollLeft === 0);
      setIsAtEnd(scrollLeft + clientWidth >= scrollWidth);
    }
  };

  const scroll = (direction) => {
    const scrollAmount = 300;
    if (timelineContainer.current) {
      timelineContainer.current.scrollBy({
        left: direction === "next" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    checkScrollPosition();
    const container = timelineContainer.current;
    container?.addEventListener("scroll", checkScrollPosition);
    return () => container?.removeEventListener("scroll", checkScrollPosition);
  }, []);

  return (
    <div className="relative">
      <div
        className="overflow-x-auto whitespace-nowrap scroll-smooth scrollbar-hidden"
        ref={timelineContainer}
      >
        <div className="flex space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-12 px-4">
          {timelineData.map((item, index) => (
            <div
              key={index}
              className="timeline-item flex-none p-4 text-center w-64 sm:w-72 md:w-80"
            >
              <div className="flex justify-center mb-4">
                <img
                  src={item.image}
                  alt={`${item.year} milestone`}
                  className="w-full max-w-full sm:h-40 md:h-40 lg:h-40 rounded-lg object-cover"
                />
              </div>
              <div className="text-lg sm:text-xl font-semibold">
                {item.year}
              </div>
              <div className="mt-2 text-sm sm:text-base text-justify break-words whitespace-normal overflow-hidden">
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Left Arrow */}
      {!isAtStart && (
        <div
          onClick={() => scroll("prev")}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full cursor-pointer z-10"
        >
          <ArrowBack className="w-6 h-6" />
        </div>
      )}

      {/* Right Arrow */}
      {!isAtEnd && (
        <div
          onClick={() => scroll("next")}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full cursor-pointer z-10"
        >
          <ArrowForward className="w-6 h-6" />
        </div>
      )}
    </div>
  );
};

export default TimelineCarousel;
