import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const ContactForm = () => {
  return (
    <form className="space-y-6">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="px-4 py-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm "
          required
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="px-4 py-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm "
          required
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="px-4 py-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm "
          required
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="px-4 py-2 mt-1 block w-full max-h-[300px] min-h-[100px] rounded-md border-gray-300 shadow-sm "
          required
        ></textarea>
      </div>
      <div>
        <button
          type="submit"
          className="w-full text-center x-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm bg-customOrange hover:bg-customOrange/90"
        >
          Send Message
          {/* <Send className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" /> */}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
