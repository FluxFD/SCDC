function About() {
  return (
    <div className="pt-48">
      {/* Image Section */}
      <div className="w-full flex justify-center">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/connectifylocal-299a6.appspot.com/o/photos%2FDSC06094.jpg?alt=media&token=7cb259f9-465f-4eda-b540-31badf185e79"
          alt="About Image"
          className="h-auto w-full object-cover sm:w-full md:w-3/4 lg:w-2/3"
        />
      </div>

      {/* Content Section */}
      <section className="py-8 px-4 md:py-16 md:px-8 flex bg-black flex-col items-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
          About Us
        </h2>
        <p className="max-w-xl text-center text-white">
          Welcome to our website! Here, we aim to connect and engage with
          individuals through innovative solutions. Our mission is to bring
          people closer through technology, bridging gaps, and fostering a sense
          of community.
        </p>
      </section>
    </div>
  );
}

export default About;
