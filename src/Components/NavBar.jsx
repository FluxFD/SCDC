import React, { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav
      className="shadow-md fixed w-full z-10"
      style={{ backgroundColor: '#333333' }}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-white">
          <img src="./scdc1.png" alt="logo" className="w-100 h-20" />
        </div>

        <div className="hidden md:flex space-x-6 font-bold">
          <a href="#about" className="text-white hover:text-gray-600">
            About Us
          </a>
          <a href="#services" className="text-white hover:text-gray-600">
            Services
          </a>
          <a href="#gallery" className="text-white hover:text-gray-600">
            Gallery
          </a>
          <a href="#contacts" className="text-white hover:text-gray-600">
            Contacts
          </a>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 items-center">
          <button className="navBtn text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200">
            Call Us
          </button>
          <button className="navBtn text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-200">
            Get a Quote
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
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
        <div className="md:hidden bg-white shadow-md">
          <div className="px-4 pb-4 space-y-2">
            <a
              href="#about"
              className="block text-gray-800 hover:text-gray-600"
            >
              About Us
            </a>
            <a
              href="#services"
              className="block text-gray-800 hover:text-gray-600"
            >
              Services
            </a>
            <a
              href="#gallery"
              className="block text-gray-800 hover:text-gray-600"
            >
              Gallery
            </a>
            <a
              href="#contacts"
              className="block text-gray-800 hover:text-gray-600"
            >
              Contacts
            </a>
            <button className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200">
              Call Us
            </button>
            <button className="w-full bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-200">
              Get a Quote
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
