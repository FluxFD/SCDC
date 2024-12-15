import { useState } from "react";

const IndustyExpertiseImages = () => {
  const [modalContent, setModalContent] = useState(null);

  const closeModal = () => setModalContent(null);

  const items = [
    {
      title: "Pre - Construction",
      description:
        "Providing essential planning, design, and budgeting services to ensure successful project initiation.",
      imageUrl: "/used_services/Pre_construction.png",
    },
    {
      title: "General Construction",
      description:
        "Delivering high-quality construction services for residential, commercial, and industrial projects.",
      imageUrl: "/used_services/General_construction.jpg",
    },
    {
      title: "Construction Management",
      description:
        "Overseeing and managing construction processes to ensure efficiency, safety, and timely completion.",
      imageUrl: "/used_services/Construction_management.jpg",
    },
  ];

  return (
    <>
      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 md:px-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="w-full px-6 md:border-r border-gray-400 cursor-pointer last:border-r-0"
            onClick={() => setModalContent(item)}
          >
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-48 aspect-video object-cover rounded-lg shadow-md mt-2"
            />
            <div className="space-y-2 mt-2">
              <p className="text-lg md:text-xl font-bold">{item.title}</p>
              <div className="text-wrap px-4">
                <p className="text-customDarkGray">{item.description}</p>
              </div>
            </div>
          </div>
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
            <p className="text-customDarkGray mt-2 text-center">
              {modalContent.description}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default IndustyExpertiseImages;
