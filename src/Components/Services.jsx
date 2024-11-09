import { CircleChevronRight } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Services = () => {
  return (
    <section className="relative text-customDarkRed w-full px-4 py-16 lg:p-20 flex flex-col items-center justify-center bg-customLightgray">
      <div id="services" className="absolute -top-16 "></div>

      <div className="space-y-6 text-center">
        <h2 className="text-4xl font-bold ">Service Expertise</h2>
        <p className="italic font-light text-lg  text-center">
          WE OFFER COMPLETE DEVELOPMENT SOLUTIONS. From planning, installling
          and maintaining.
        </p>
      </div>

      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        <Link to= "/services">
          <div className="space-y-4 hover:bg-white/50 hover:shadow p-4 rounded-lg transition duration-200 ease-in-out cursor-pointer">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/connectifylocal-299a6.appspot.com/o/photos%2FDSC07199.jpg?alt=media&token=989df2ee-2a70-4a36-b9b0-4bfaefac6e74"
              alt=""
              className="aspect-video object-cover"
            />

            <div className="space-y-2">
              <p className="text-2xl font-bold">Residential</p>
              <div className="w-full flex items-center justify-between">
                <p className="text-black max-w-[60%] text-wrap text-sm">
                  Click here to explore Residential Projects
                </p>

                <CircleChevronRight />
              </div>
            </div>
          </div>
        </Link>
        <Link to="/services">
          <div className="space-y-4 hover:bg-white/50 hover:shadow p-4 rounded-lg transition duration-200 ease-in-out cursor-pointer">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/connectifylocal-299a6.appspot.com/o/photos%2FDSC07148.jpg?alt=media&token=c4bea332-a9dd-44bd-a989-a0d173d3902f"
              alt=""
              className="aspect-video object-cover"
            />

            <div className="space-y-2">
              <p className="text-2xl font-bold">Commercial</p>
              <div className="w-full flex items-center justify-between">
                <p className="text-black max-w-[60%] text-wrap text-sm">
                  Click here to explore Commercial Projects
                </p>

                <CircleChevronRight />
              </div>
            </div>
          </div>
        </Link>

        <Link to="/services">
          <div className="space-y-4 hover:bg-white/50 hover:shadow p-4 rounded-lg transition duration-200 ease-in-out cursor-pointer">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/connectifylocal-299a6.appspot.com/o/drone%2FDJI_0300.jpg?alt=media&token=ec418882-c620-4a5e-8de9-d0ce6d32d876"
              alt=""
              className="aspect-video object-cover"
            />

            <div className="space-y-2">
              <p className="text-2xl font-bold">Industrial</p>
              <div className="w-full flex items-center justify-between">
                <p className="text-black max-w-[60%] text-wrap text-sm">
                  Click here to explore Industrial Projects
                </p>

                <CircleChevronRight />
              </div>
            </div>
          </div>
        </Link>
      </div>

      <a
        href="/services"
        className="italic text-center mt-8 w-full max-w-[9rem] px-4 py-2 font-bold bg-customOrange hover:bg-customOrange/90 text-black rounded-lg"
      >
        See more
      </a>
    </section>
  )
}

export default Services
