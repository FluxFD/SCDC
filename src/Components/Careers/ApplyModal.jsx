import { useEffect, useState } from "react";
import useApply from "../../hooks/useApply";
/* eslint-disable react/prop-types */
const ApplyModal = ({ isOpen, onClose, jobTitle }) => {
  const { sendApplication, isSubmitting, statusMessage } = useApply();

  const [formData, setFormData] = useState({
    jobTitle: jobTitle,
    name: "",
    email: "",
    contactNo: "",
    address: "",
    message: "",
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      sendApplication(formData, jobTitle);
      alert(statusMessage || "Application submitted successfully!");
      setFormData({
        jobTitle: jobTitle,
        name: "",
        email: "",
        contactNo: "",
        address: "",
        message: "",
      });
      onClose();
    } catch (error) {
      console.error("Error submitting application:", error);
      alert("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 backdrop-blur-sm">
      <div className="bg-white p-4 rounded shadow-lg max-w-md relative">
        <h2 className="text-lg font-bold mb-2 flex justify-between items-center">
          Apply for {jobTitle}
          <button
            className="text-gray-500 hover:text-gray-800"
            onClick={onClose}
          >
            &times;
          </button>
        </h2>
        <p className="text-sm mb-3">Fill out your details below:</p>
        <form className="space-y-4 text-black" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            className="mb-2 p-2 border rounded w-full"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email"
            className="mb-2 p-2 border rounded w-full"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <input
            type="tel"
            placeholder="Contact No"
            className="mb-2 p-2 border rounded w-full"
            value={formData.contactNo}
            onChange={(e) =>
              setFormData({ ...formData, contactNo: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Address"
            className="mb-3 p-2 border rounded w-full"
            value={formData.address}
            onChange={(e) =>
              setFormData({ ...formData, address: e.target.value })
            }
          />

          <textarea
            placeholder="Your message"
            className="mb-3 p-2 border rounded w-full"
            rows="4"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
          />
          <div className="flex justify-end">
            <button
              className="bg-customDarkGray text-white py-1 px-3 rounded hover:bg-customDarkGray/80 transition-colors mr-2"
              onClick={onClose}
            >
              Close
            </button>
            <button
              className="bg-[#8c1717] text-white py-1 px-3 rounded hover:bg-[#8c1717]/80 transition-colors"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplyModal;
