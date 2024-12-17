import { ChevronDown, ChevronUp, PhoneCall } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const NAV_LINKS = [
  {
    title: "About Us",
    href: "/#about",
  },
  {
    title: "Services",
    href: "/services",
    dropdownItems: [
      { title: "Other-Services", href: "/other-services" },
      // {
      //   title: "Aggregates Transport Solutions (Trucking)",
      //   href: "/other-services#trucking",
      // },
      // { title: "Rental of Equipment", href: "/other-services#rental" },
    ],
  },
  {
    title: "Projects",
    href: "/projects",
  },
  {
    title: "Gallery",
    href: "/#gallery",
  },
  {
    title: "Careers",
    href: "/careers",
  },
  // {
  //   title: "Other Services",
  //   href: "#other-services",
  //   dropdownItems: [
  //     { title: "Landscape Solution", href: "/other-services#landscaping" },
  //     {
  //       title: "Aggregates Transport Solutions (Trucking)",
  //       href: "/other-services#trucking",
  //     },
  //     { title: "Rental of Equipment", href: "/other-services#rental" },
  //   ],
  // },
  {
    title: "Contacts",
    href: "/contact-us",
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

        <ul className="hidden lg:flex space-x-8 font-medium text-lg">
          {NAV_LINKS.map((link, index) => (
            <li key={index} className="relative group">
              <a
                key={link.title}
                href={link.href}
                className="text-white hover:text-white/80"
              >
                {link.title}
              </a>
              {link.dropdownItems && (
                <ul className="absolute -left-1 hidden pt-2 group-hover:block">
                  {link.dropdownItems.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="bg-customDarkGray hover:bg-customDarkGray/95 mt-3"
                    >
                      <a
                        href={item.href}
                        className="block px-6 py-2 text-base text-white whitespace-nowrap"
                      >
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Desktop Links */}
        <div className="hidden lg:flex space-x-4 items-center">
          {/* <button className="italic font-medium flex items-center gap-2 px-6 py-2 rounded-lg bg-customOrange hover:bg-customOrange/90">
            <PhoneCall className="size-5" />
            Call Us
          </button> */}
          <Link to="/contact-us">
            <button className="italic font-medium flex items-center gap-2 px-6 py-2 rounded-lg bg-customOrange hover:bg-customOrange/90">
              Get a Quote
            </button>
          </Link>
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
      {isOpen && <MobileNav />}
    </nav>
  );
};

export function MobileNav() {
  const [isOtherServicesOpen, setIsOtherServicesOpen] = useState(false);

  return (
    <div className="lg:hidden bg-white shadow-lg px-4 py-4">
      <div className="space-y-2">
        {NAV_LINKS.map((link) => (
          <div key={link.title} className="text-gray-800">
            {link.dropdownItems ? (
              <div>
                <button
                  onClick={() => setIsOtherServicesOpen(!isOtherServicesOpen)}
                  className="flex items-center justify-between w-full py-2 hover:text-gray-600"
                >
                  {link.title}
                  {isOtherServicesOpen ? (
                    <ChevronUp className="h-5 w-5" />
                  ) : (
                    <ChevronDown className="h-5 w-5" />
                  )}
                </button>
                {isOtherServicesOpen && (
                  <div className="pl-4 space-y-2 mt-2">
                    {link.dropdownItems.map((item) => (
                      <a
                        key={item.title}
                        href={item.href}
                        className="block py-2 text-gray-600 hover:text-gray-800"
                      >
                        {item.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a href={link.href} className="block py-2 hover:text-gray-600">
                {link.title}
              </a>
            )}
          </div>
        ))}

        <div className="space-y-2 pt-4">
          <a href="/contact-us" className="block w-full">
            <button className="w-full flex items-center justify-center gap-2 bg-customOrange font-semibold px-4 py-2 rounded-lg hover:bg-customOrange/90 transition duration-200">
              <PhoneCall className="h-5 w-5" />
              Call Us
            </button>
          </a>
          <a href="/contact-us" className="block w-full">
            <button className="w-full bg-customDarkGray/50 text-white px-4 py-2 rounded-lg hover:bg-customDarkGray/40 transition duration-200">
              Get a Quote
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
