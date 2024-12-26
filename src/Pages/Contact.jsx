import ContactForm from "../Components/Contact/ContactForm";

const Contact = () => {
  return (
    <div className="w-full min-h-screen flex flex-col font-inter pt-[64px] lg:pt-[80px]">
      <section className="bg-customLightgray py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-10">
              <div className="space-y-4">
                <h2 className="text-5xl font-bold text-customDarkRed mb-4">
                  Inquiries
                </h2>

                <div className="italic text-2xl font-light">
                  <p>We Build with Passion.</p>
                  <p>Plan with Precision.</p>
                  <p>Deliver with Excellence.</p>
                </div>
              </div>

              <div className="space-y-6">
                <p className="max-w-lg">
                  For any inquiries, questions, commendations, or quote. Please
                  fill out the following form or reach us out via the provided
                  contact details
                </p>

                <div>
                  <p className="font-bold">Email</p>
                  <a className="italic" href="mailto:sanluiscdc.inquiries@gmail.com">
                  sanluiscdc.inquiries@gmail.com
                  </a>
                </div>
                <div>
                  <p className="font-bold">Contact Number</p>
                  <p className="italic">+ 63 910-310-4127</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-10">
            <div className="space-y-4">
              <h2 className="text-5xl font-bold mb-4 text-customDarkRed">
                Visit Us
              </h2>

              <p className="max-w-4xl">
                Discover how SCDC is redefining the construction industry
                through innovative methods and sustainable practices. Our
                commitment to exceeding expectations and driving infrastructural
                advancement ensures every project contributes to community
                growth and sustainable development.
              </p>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <p className="font-bold text-xl text-customDarkRed">
                  Office Address
                </p>
                <ul className="list-disc list-inside italic">
                  <li>
                    5930 San Luis Compound National Highway Brgy. Patimbao Sta.
                    Cruz, Laguna 4009
                  </li>
                  <li>Lot 7 Blk 6 Campo Verde Subd. Malvar, Batangas</li>
                </ul>
              </div>
              <div className="space-y-2">
                <p className="font-bold text-xl text-customDarkRed">
                  Opening Hours
                </p>
                <div className="italic flex items-center gap-12">
                  <p>Mon - Sat </p>
                  <p>8:00 am - 5:00 pm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-customLightgray py-16 px-4 sm:px-6 lg:px-8 border-t border-white border-opacity-20">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15483.502654622283!2d121.16196124317996!3d14.025383625532621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd6ead87dcb7e3%3A0xeb8e4218ca3a97a4!2sCampo%20Verde%20Subdivision!5e0!3m2!1sen!2sph!4v1734279926594!5m2!1sen!2sph"
          width="600"
          height="600"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full max-w-7xl mx-auto"
        ></iframe>
      </section>

      {/* <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-white border-opacity-20">
        <div className="w-full max-w-7xl mx-auto grid grid-cols-2 gap-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15483.502654622283!2d121.16196124317996!3d14.025383625532621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd6ead87dcb7e3%3A0xeb8e4218ca3a97a4!2sCampo%20Verde%20Subdivision!5e0!3m2!1sen!2sph!4v1734279926594!5m2!1sen!2sph"
            width="600"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full max-w-7xl mx-auto"
          ></iframe>
          <div className="space-y-10">
            <div className="space-y-4">
              <h2 className="text-5xl font-bold mb-4 text-customDarkRed">
                Visit Us
              </h2>

              <p className="max-w-4xl">
                Discover how SCDC is redefining the construction industry
                through innovative methods and sustainable practices. Our
                commitment to exceeding expectations and driving infrastructural
                advancement ensures every project contributes to community
                growth and sustainable development.
              </p>
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <p className="font-bold text-xl text-customDarkRed">
                  Office Address
                </p>
                <ul className="list-disc list-inside italic">
                  <li>
                    5930 San Luis Compound National Highway Brgy. Patimbao Sta.
                    Cruz, Laguna 4009
                  </li>
                  <li>Lot 7 Blk 6 Campo Verde Subd. Malvar, Batangas</li>
                </ul>
              </div>
              <div className="space-y-2">
                <p className="font-bold text-xl text-customDarkRed">
                  Opening Hours
                </p>
                <div className="italic flex items-center gap-12">
                  <p>Mon - Sat </p>
                  <p>8:00 am - 5:00 pm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Contact;
