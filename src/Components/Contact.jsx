import React from "react";
import { FaFacebook, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const Contact = () => {
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
              <p>We work with passion and love</p>
              <p>We deliver quality service</p>
              <p>We prioritize your needs</p>
            </div>

            <div className="text-start space-y-4 max-w-lg italic text-lg text-customLightgray">
              <div className="flex gap-4">
                <FaLocationDot className="size-6 text-customOrange" />
                <p>
                  Address: 5930 San Luis Compound National Highway Brgy.
                  Patimbao Sta. Cruz, Laguna 4009
                </p>
              </div>

              <div className="flex gap-4">
                <FaPhoneAlt className="size-5 text-customOrange" />
                <div className="flex gap-2">
                  <p>Contact:</p>
                  <div>
                    <p>+63 917-527-2658</p>
                    <p>+63 917-529-2654</p>
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

            <form className="space-y-4 text-black">
              <input
                type="text"
                className="w-full bg-white rounded-xl px-4 py-2 outline-none"
                placeholder="Full Name"
              />
              <input
                type="text"
                className="w-full bg-white rounded-xl px-4 py-2 outline-none"
                placeholder="Email Address"
              />
              <textarea
                rows={10}
                className="w-full max-h-52 bg-white rounded-xl px-4 py-2 outline-none"
                placeholder="Message"
              />

              <div className="flex gap-2 items-start">
                <input type="checkbox" className="mt-1 " />
                <p className="text-sm font-light text-customLightgray italic">
                  By submitting this form, you agree to provide accurate
                  information. We are committed to protecting your privacy, and
                  your data will only be used to process your request and
                  provide a response. Terms and Conditions and Privacy Policy
                  apply.
                </p>
              </div>

              <button className="mt-4 w-full px-4 py-2 font-bold bg-customOrange hover:bg-customOrange/90 text-black rounded-lg">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
