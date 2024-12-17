const AboutTeam = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="container w-full md:w-10/12">
        <div className="text-white flex flex-col md:flex-row justify-center items-center p-5">
          <div className="md:w-1/2 p-4 ">
            <div className="text-center">
              <div className="font-extrabold text-5xl">
                <h1>OUR TEAM</h1>
              </div>
              <div className="mt-2 italic text-xl">
                <p>A Family of Builders </p>
              </div>
            </div>

            <div className="max-w-xl mx-auto p-6 lg:text-2xl text-xl">
              <p>
                At SCDC, we believe that our greatest asset is our people. It’s
                the dedication, expertise, and unwavering commitment of our team
                that has propelled us to become a leading construction company.
              </p>
              <p className="mt-5">
                Our team is a diverse group of highly skilled professionals,
                from architects and engineers to dedicated laborers. Many of our
                employees have been with us since the very beginning, growing
                and evolving alongside the company.
              </p>

              <p className="mt-5">
                We value open communication, mutual respect, and a supportive
                work environment. We invest in our employees&apos; professional
                development, offering opportunities for training and
                advancement.
              </p>
            </div>
          </div>
          <div className="md:w-1/2 p-4 text-center">
            <div className="max-w-xl mx-auto p-8">
              <div className="mb-5">
                <img
                  src="/used_about/Our_team_1.jpg"
                  alt="Team 1"
                  className="h-auto w-96"
                />
              </div>
              <div className="mb-5">
                <img
                  src="/used_about/Our_team_2.png"
                  alt="Team 2"
                  className="h-auto w-96"
                />
              </div>
              <div>
                <img
                  src="/used_about/Our_team_3.jpg"
                  alt="Team 3"
                  className="h-auto w-96"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTeam;
