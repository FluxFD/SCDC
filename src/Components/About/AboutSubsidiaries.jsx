const AboutSubsidiaries = () => {
  return (
    <div className="flex items-center justify-center p-4">
      <div className="container flex flex-col md:flex-row items-center w-full md:w-10/12">
        <div className="mb-4 md:mb-0 md:p-2 flex-shrink-0">
          <img
            src="/used_about/Conglomerate_structure.png"
            className="object-cover w-full md:w-full h-auto max-w-none"
            alt="Conglomerate structure"
          />
        </div>

        <div className="leading-relaxed text-justify max-w-3xl">
          <p className="mb-6 md:mb-10">
            The conglomerate structure allows SCDC to offer a comprehensive
            range of services related to construction and development. This
            integrated approach enables SCDC to provide a one-stop solution for
            clients&apos; needs.
          </p>
          <p>
            SCDC, as the main corporation, a construction and development
            corporation, operates with three subsidiaries: JSLE for trucking and
            material supply, Mey&apos;s Landscaping for outdoor beautification,
            and SL Human Resource for manpower management. This integrated
            approach offers comprehensive solutions for construction and
            development projects.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSubsidiaries;
