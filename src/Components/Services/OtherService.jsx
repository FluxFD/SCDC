import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
const OtherService = () => {
  const [modalContent, setModalContent] = useState(null);
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const targetElement = document.getElementById(hash.substring(1));
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);
  const closeModal = () => setModalContent(null);

  const items = [
    {
      title: "Landscape Solution",
      imageUrl: "/used_services/Landscape_solution.jpg",
      link:"/other-services#landscaping"
    },
    {
      title: "Aggregates Transport Solutions (Trucking)",
      imageUrl: "/used_services/Trucking.jpg",
      link:"/other-services#trucking"
    },
    {
      title: "Rental of Equipment",
      imageUrl: "/used_services/Rental.jpg",
      link:"/other-services#rental"
    },
  ];

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 md:px-6">
        {items.map((item, index) => (
          <Link to= {item.link}>
          <div
            key={index}
            className="w-full px-6 md:border-r border-white last:border-r-0 scale-on-hover-trans"
            // onClick={() => setModalContent(item)}
          >
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-48 aspect-video object-cover rounded-lg shadow-md mt-2"
            />
            <div className="space-y-2 mt-2">
              <p className="text-lg text-white md:text-xl font-bold">
                {item.title}
              </p>
            </div>
          </div>
          </Link>
        ))}
      </div>

      {modalContent && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-2/3 lg:w-1/2 p-2 relative">
            <div className="flex justify-end mb-2">
              <button
                className="text-gray-500 hover:text-gray-700 p-2 rounded-full"
                onClick={closeModal}
              >
                ✕
              </button>
            </div>
            <img
              src={modalContent.imageUrl}
              alt={modalContent.title}
              className="w-full h-auto aspect-video object-cover rounded-lg mb-4"
            />
            <h2 className="text-lg md:text-xl font-bold text-center">
              {modalContent.title}
            </h2>
          </div>
        </div>
      )}
    </>
  );
};

export default OtherService;
