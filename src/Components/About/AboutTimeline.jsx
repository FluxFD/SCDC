import { useRef, useState, useEffect } from "react";
import { ArrowForward, ArrowBack } from "@mui/icons-material";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";

SwiperCore.use([Autoplay]);

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
    year: "2022",
    image: "/used_about/2015.png",
    description:
      "SCDC Had the Privilege to Join the Lima Estate Phase 3 Groundbreaking Ceremony",
  },
  {
    year: "2020",
    image: "/used_about/2020.jpg",
    description:
      "Granted the new major project, 'Lima Project Batch 3,' by Lima Land Inc.",
  },
  {
    year: "2015",
    image: "/used_about/pic123.png",
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

const AboutTimeline = () => {
  const timelineContainer = useRef(null);
  // const [isAtStart, setIsAtStart] = useState(true);
  // const [isAtEnd, setIsAtEnd] = useState(false);

  // const checkScrollPosition = () => {
  //   if (timelineContainer.current) {
  //     const { scrollLeft, scrollWidth, clientWidth } =
  //       timelineContainer.current;
  //     setIsAtStart(scrollLeft === 0);
  //     setIsAtEnd(scrollLeft + clientWidth >= scrollWidth);
  //   }
  // };

  // const scroll = (direction) => {
  //   const scrollAmount = 300;
  //   if (timelineContainer.current) {
  //     timelineContainer.current.scrollBy({
  //       left: direction === "next" ? scrollAmount : -scrollAmount,
  //       behavior: "smooth",
  //     });
  //   }
  // };

  // useEffect(() => {
  //   checkScrollPosition();
  //   const container = timelineContainer.current;
  //   container?.addEventListener("scroll", checkScrollPosition);
  //   return () => container?.removeEventListener("scroll", checkScrollPosition);
  // }, []);

  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute top-[60px] flex-1 left-0 right-0 h-[2px] bg-gray-300" />

      <Swiper
        slidesPerView="auto"
        centeredSlides={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        loop
        modules={[Autoplay]}
        speed={5000}
        className=" swiper-transition w-full overflow-x-auto whitespace-nowrap scroll-smooth scrollbar-hidden relative"
      >
        {timelineData.map((item, index) => (
          <SwiperSlide
            key={index}
            style={{
              width: "auto",
            }}
            className="py-20 font-bold italic"
          >
            <div className="timeline-item flex-none p-4 text-center w-64 sm:w-72 md:w-80 relative">
              {/* Timeline dot */}
              <div className="absolute top-[-28px] left-1/2 transform -translate-x-1/2">
                <div className="w-4 h-4 bg-gray-600 rounded-full" />
                <div className="w-[2px] h-6 bg-gray-300 mx-auto mt-1" />
              </div>

              {/* Year */}
              <div className="absolute top-[-70px] left-1/2 transform -translate-x-1/2 text-xl font-semibold ">
                {item.year}
              </div>

              {/* Image */}
              <div className="flex justify-center mb-4">
                <img
                  src={item.image}
                  alt={`${item.year} milestone`}
                  className="w-full max-w-full sm:h-40 md:h-40 lg:h-40 rounded-lg object-cover"
                />
              </div>

              {/* Description */}
              <div className="mt-2 text-sm sm:text-base text-center break-words whitespace-normal overflow-hidden">
                {item.description}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* {!isAtStart && (
        <div
          onClick={() => scroll("prev")}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full cursor-pointer z-10"
        >
          <ArrowBack className="w-6 h-6" />
        </div>
      )}

      {!isAtEnd && (
        <div
          onClick={() => scroll("next")}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full cursor-pointer z-10"
        >
          <ArrowForward className="w-6 h-6" />
        </div>
      )} */}
    </div>
  );
};

export default AboutTimeline;
