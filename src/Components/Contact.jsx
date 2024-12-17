import { useState } from "react";
import { FaFacebook, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import useEmail from "../hooks/useEmail";

const Contact = () => {
  const { sendEmail, isSubmitting, statusMessage } = useEmail();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.termsAccepted) {
      alert("Please accept the terms and conditions to proceed.");
      return;
    }

    sendEmail(formData);
    setFormData({
      fullName: "",
      email: "",
      message: "",
      termsAccepted: false,
    });
  };

  return (
    <section
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(./contactbg.png)`,
      }}
      className="relative text-white w-full px-4 py-16 lg:p-20 flex justify-center items-center"
    >
      <div id="contacts" className="absolute -top-16 "></div>

      <div className="absolute z-10 w-full h-full bg-[#424645]/70 opacity-90 "></div>

      <div className="text-center sm:text-start relative z-20 w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-8">
        <div className="w-full space-y-8 my-auto">
          <h2 className=" text-3xl sm:text-5xl font-extrabold">
            Get In-Touch with us
          </h2>

          <div className="sm:ml-6 space-y-8 lg:space-y-16">
            <div className="text-lg sm:text-2xl font-extrabold italic space-y-2 sm:space-y-4">
              <p>We build with Passion</p>
              <p>Plan with Precision </p>
              <p>Deliver with Excellece.</p>
            </div>

            <div className="text-start space-y-4 max-w-lg italic text-lg text-customLightgray">
              <div className="flex gap-4">
                <FaLocationDot className="size-6 text-customOrange" />
                <p>
                  Lot 7 Blk 6 Campo Verde Subd. Malvar, Batangas
                </p>
              </div>

              <div className="flex gap-4">
                <FaPhoneAlt className="size-5 text-customOrange" />
                <div className="flex gap-2">
                  <p>Contact:</p>
                  <div>
                    <p>+63 910-310-4127</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <IoMdMail className="size-6 text-customOrange" />
                <a href="mailto:sanluiscdc@gmail.com">
                  Email: sanluiscdc@gmail.com
                </a>
              </div>

              <div className="flex gap-4">
                <FaFacebook className="size-6 text-customOrange" />
                <a href="mailto:sanluiscdc@gmail.com">----</a>
              </div>
            </div>
          </div>
        </div>

        {/* CONTACT FORM */}
        <div className="w-full flex justify-center items-center">
          <div className="w-full max-w-lg flex flex-col items-center gap-6 py-6 px-8 rounded-2xl bg-white/20">
            <p className="text-2xl font-extrabold">Request a Call back</p>

            <form className="space-y-4 text-black" onSubmit={handleSubmit}>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full bg-white rounded-xl px-4 py-2 outline-none"
                placeholder="Full Name"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-white rounded-xl px-4 py-2 outline-none"
                placeholder="Email Address"
                required
              />
              <textarea
                rows={10}
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full max-h-52 bg-white rounded-xl px-4 py-2 outline-none"
                placeholder="Message"
                required
              />

              <div className="flex gap-2 items-start">
                <input
                  type="checkbox"
                  name="termsAccepted"
                  checked={formData.termsAccepted}
                  onChange={handleChange}
                  className="mt-1"
                  required
                />
                <p className="text-sm font-light text-customLightgray italic">
                  By submitting this form, you agree to provide accurate
                  information. We are committed to protecting your privacy, and
                  your data will only be used to process your request and
                  provide a response. Terms and Conditions and Privacy Policy
                  apply.
                </p>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-4 w-full px-4 py-2 font-bold bg-customOrange hover:bg-customOrange/90 text-black rounded-lg"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
              {statusMessage && (
                <p className="text-center text-white mt-4">{statusMessage}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
