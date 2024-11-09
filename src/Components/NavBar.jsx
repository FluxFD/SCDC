import { PhoneCall } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const NAV_LINKS = [
  {
    title: "About Us",
    href: "/#about",
  },
  {
    title: "Services",
    href: "/#services",
  },
  {
    title: "Gallery",
    href: "/#gallery",
  },
  {
    title: "Contacts",
    href: "/#contacts",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="shadow-lg fixed w-full z-50 bg-customDarkGray">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-white">
          <Link to="/">
            <img
              src="./scdc1.png"
              alt="logo"
              className="h-10 lg:h-14 object-contain "
            />
          </Link>
        </div>

        <div className="hidden lg:flex space-x-8 font-medium text-lg">
          {NAV_LINKS.map((link) => (
            <a
              key={link.title}
              href={link.href}
              className="text-white hover:text-white/80"
            >
              {link.title}
            </a>
          ))}
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex space-x-4 items-center">
          <button className="italic font-medium flex items-center gap-2 px-6 py-2 rounded-lg bg-customOrange hover:bg-customOrange/90">
            <PhoneCall className="size-5" />
            Call Us
          </button>
          <button className=" italic text-white font-medium flex items-center gap-2 px-6 py-2 rounded-lg bg-white/20 hover:bg-white/30">
            Get a Quote
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-lg px-4 py-4">
          <div className="space-y-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className="block text-gray-800 hover:text-gray-600"
              >
                {link.title}
              </a>
            ))}

            <div className="space-y-2">
              <button className="w-full flex items-center justify-center gap-2 bg-customOrange font-semibold px-4 py-2 rounded-lg hover:bg-customOrange/90 transition duration-200">
                <PhoneCall className="size-5" />
                Call Us
              </button>
              <button className="w-full bg-customDarkGray/50 text-white px-4 py-2 rounded-lg hover:bg-customDarkGray/40 transition duration-200">
                Get a Quote
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
