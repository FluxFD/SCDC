import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";

const ProjectGallery = () => {
  return (
    <section className="relative text-customDarkRed w-full py-12  lg:py-20 flex flex-col items-center justify-center gap-8 sm:gap-16">
      <div id="gallery" className="absolute -top-16 "></div>
      <PhotoProvider speed={() => 200}>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="w-full max-w-screen-2xl "
        >
          <div className="grid sm:grid-cols-12">
            <PhotoView src="/used_landing_page/used_our_work/Picture 1.jpg">
              <div className="col-span-4 h-full">
                <img
                  loading="lazy"
                  src="/used_landing_page/used_our_work/Picture 1.jpg"
                  alt="Left Image"
                  className="w-full h-full object-cover"
                />
              </div>
            </PhotoView>

            <PhotoView src="/used_landing_page/used_our_work/Picture 2.jpg">
              <div className="col-span-4 h-full">
                <img
                  loading="lazy"
                  src="/used_landing_page/used_our_work/Picture 2.jpg"
                  alt="Middle Image"
                  className="w-full h-full object-cover"
                />
              </div>
            </PhotoView>

            <PhotoView src="/used_landing_page/used_our_work/Picture 3.jpg">
              <div className="col-span-4 h-full">
                <img
                  loading="lazy"
                  src="/used_landing_page/used_our_work/Picture 3.jpg"
                  alt="Right Image"
                  className="w-full h-full object-cover"
                />
              </div>
            </PhotoView>
          </div>

          <div className="grid sm:grid-cols-12">
            <PhotoView src="/used_landing_page/used_our_work/Picture 4.png">
              <div className="sm:col-span-3 h-full">
                <img
                  loading="lazy"
                  src="/used_landing_page/used_our_work/Picture 4.png"
                  alt="Left Image"
                  className="w-full h-full object-cover"
                />
              </div>
            </PhotoView>

            <PhotoView src="/used_landing_page/used_our_work/Picture 5.png">
              <div className="sm:col-span-6 h-full">
                <img
                  loading="lazy"
                  src="/used_landing_page/used_our_work/Picture 5.png"
                  alt="Middle Image"
                  className="w-full h-[11rem] md:h-[15rem] xl:h-[340px] object-cover"
                />
              </div>
            </PhotoView>

            <PhotoView src="/used_landing_page/used_our_work/Picture 6.png">
              <div className="sm:col-span-3 h-full">
                <img
                  loading="lazy"
                  src="/used_landing_page/used_our_work/Picture 6.png"
                  alt="Right Image"
                  className="w-full h-full object-cover"
                />
              </div>
            </PhotoView>
          </div>

          <div className="hidden sm:grid sm:grid-cols-11">
            <PhotoView src="/used_landing_page/used_our_work/picture 13.jpg">
              <div className="sm:col-span-4 h-full">
                <img
                  loading="lazy"
                  src="/used_landing_page/used_our_work/picture 13.jpg"
                  alt="Left Image"
                  className="w-full h-[11rem] md:h-[15rem] xl:h-[340px] object-cover"
                />
              </div>
            </PhotoView>

            <PhotoView src="/used_landing_page/used_our_work/Picture 8.jpg">
              <div className="sm:col-span-4 h-full">
                <img
                  loading="lazy"
                  src="/used_landing_page/used_our_work/Picture 8.jpg"
                  alt="Middle Image"
                  className="w-full h-[11rem] md:h-[15rem] xl:h-[340px] object-cover"
                />
              </div>
            </PhotoView>

            <PhotoView src="/used_landing_page/used_our_work/picture 14.jpg">
              <div className="sm:col-span-3 h-full">
                <img
                  loading="lazy"
                  src="/used_landing_page/used_our_work/picture 14.jpg"
                  alt="Right Image"
                  className="w-full h-full object-cover"
                />
              </div>
            </PhotoView>
          </div>

          <div className="grid sm:grid-cols-12">
            <PhotoView src="/used_landing_page/used_our_work/Picture 10.jpg">
              <div className="col-span-4 h-full">
                <img
                  loading="lazy"
                  src="/used_landing_page/used_our_work/Picture 10.jpg"
                  alt="Left Image"
                  className="w-full h-full object-cover"
                />
              </div>
            </PhotoView>

            <PhotoView src="/used_landing_page/used_our_work/Picture 11.jpg">
              <div className="col-span-4 h-full">
                <img
                  loading="lazy"
                  src="/used_landing_page/used_our_work/Picture 11.jpg"
                  alt="Middle Image"
                  className="w-full h-full object-cover"
                />
              </div>
            </PhotoView>

            <PhotoView src="/used_landing_page/used_our_work/Picture 12.jpg">
              <div className="col-span-4 h-full">
                <img
                  loading="lazy"
                  src="/used_landing_page/used_our_work/Picture 12.jpg"
                  alt="Right Image"
                  className="w-full h-full object-cover"
                />
              </div>
            </PhotoView>
          </div>

          <div className="hidden sm:grid sm:grid-cols-11">
            <PhotoView src="/used_projects/RESIDENTIAL/Seafront.png">
              <div className="sm:col-span-4 h-full">
                <img
                  loading="lazy"
                  src="/used_projects/RESIDENTIAL/Seafront.png"
                  alt="Left Image"
                  className="w-full h-[11rem] md:h-[15rem] xl:h-[340px] object-cover"
                />
              </div>
            </PhotoView>

            <PhotoView src="/used_projects/RESIDENTIAL/Seafront 2.jpg">
              <div className="sm:col-span-4 h-full">
                <img
                  loading="lazy"
                  src="/used_projects/RESIDENTIAL/Seafront 2.jpg"
                  alt="Middle Image"
                  className="w-full h-[11rem] md:h-[15rem] xl:h-[340px] object-cover"
                />
              </div>
            </PhotoView>

            <PhotoView src="/used_projects/RESIDENTIAL/SEAFRONT.jpg">
              <div className="sm:col-span-3 h-full">
                <img
                  loading="lazy"
                  src="/used_projects/RESIDENTIAL/SEAFRONT.jpg"
                  alt="Right Image"
                  className="w-full h-full object-cover"
                />
              </div>
            </PhotoView>
          </div>

          <div className="grid sm:grid-cols-12">
            <PhotoView src="/used_projects/RESIDENTIAL/THE VILLAGES AT LIPA/a.jpg">
              <div className="col-span-4 h-full">
                <img
                  loading="lazy"
                  src="/used_projects/RESIDENTIAL/THE VILLAGES AT LIPA/a.jpg"
                  alt="Left Image"
                  className="w-full h-full object-cover"
                />
              </div>
            </PhotoView>

            <PhotoView src="/used_projects/RESIDENTIAL/THE VILLAGES AT LIPA/20241206_135716.jpg">
              <div className="col-span-4 h-full">
                <img
                  loading="lazy"
                  src="/used_projects/RESIDENTIAL/THE VILLAGES AT LIPA/20241206_135716.jpg"
                  alt="Middle Image"
                  className="w-full h-full object-cover"
                />
              </div>
            </PhotoView>

            <PhotoView src="/used_projects/RESIDENTIAL/THE VILLAGES AT LIPA/20241206_135624.jpg">
              <div className="col-span-4 h-full">
                <img
                  loading="lazy"
                  src="/used_projects/RESIDENTIAL/THE VILLAGES AT LIPA/20241206_135624.jpg"
                  alt="Right Image"
                  className="w-full h-full object-cover"
                />
              </div>
            </PhotoView>
          </div>

          <div className="hidden sm:grid sm:grid-cols-11">
            <PhotoView src="/used_projects/COMMERCIAL/BATANGAS LAKELANDS/Picture 2.jpg">
              <div className="sm:col-span-4 h-full">
                <img
                  loading="lazy"
                  src="/used_projects/COMMERCIAL/BATANGAS LAKELANDS/Picture 2.jpg"
                  alt="Left Image"
                  className="w-full h-[11rem] md:h-[15rem] xl:h-[340px] object-cover"
                />
              </div>
            </PhotoView>

            <PhotoView src="/used_projects/COMMERCIAL/BATANGAS LAKELANDS/COVER PHOTO.png">
              <div className="sm:col-span-4 h-full">
                <img
                  loading="lazy"
                  src="/used_projects/COMMERCIAL/BATANGAS LAKELANDS/COVER PHOTO.png"
                  alt="Middle Image"
                  className="w-full h-[11rem] md:h-[15rem] xl:h-[340px] object-cover"
                />
              </div>
            </PhotoView>

            <PhotoView src="/used_projects/COMMERCIAL/BATANGAS LAKELANDS/Picture 1.jpg">
              <div className="sm:col-span-3 h-full">
                <img
                  loading="lazy"
                  src="/used_projects/COMMERCIAL/BATANGAS LAKELANDS/Picture 1.jpg"
                  alt="Right Image"
                  className="w-full h-full object-cover"
                />
              </div>
            </PhotoView>
          </div>

          <div className="grid sm:grid-cols-12">
            <PhotoView src="/used_projects/COMMERCIAL/THE OUTLETS AT LIPA/227B9779.jpg">
              <div className="col-span-4 h-full">
                <img
                  loading="lazy"
                  src="/used_projects/COMMERCIAL/THE OUTLETS AT LIPA/227B9779.jpg"
                  alt="Left Image"
                  className="w-full h-full object-cover"
                />
              </div>
            </PhotoView>

            <PhotoView src="/used_projects/COMMERCIAL/THE OUTLETS AT LIPA/227B9781.jpg">
              <div className="col-span-4 h-full">
                <img
                  loading="lazy"
                  src="/used_projects/COMMERCIAL/THE OUTLETS AT LIPA/227B9781.jpg"
                  alt="Middle Image"
                  className="w-full h-full object-cover"
                />
              </div>
            </PhotoView>

            <PhotoView src="/used_projects/COMMERCIAL/THE OUTLETS AT LIPA/227B9784.jpg">
              <div className="col-span-4 h-full">
                <img
                  loading="lazy"
                  src="/used_projects/COMMERCIAL/THE OUTLETS AT LIPA/227B9784.jpg"
                  alt="Right Image"
                  className="w-full h-full object-cover"
                />
              </div>
            </PhotoView>
          </div>

          <div className="hidden sm:grid sm:grid-cols-11">
            <PhotoView src="/used_projects/COMMERCIAL/THE OUTLETS AT LIPA/227B9795.jpg">
              <div className="sm:col-span-4 h-full">
                <img
                  loading="lazy"
                  src="/used_projects/COMMERCIAL/THE OUTLETS AT LIPA/227B9795.jpg"
                  alt="Left Image"
                  className="w-full h-[11rem] md:h-[15rem] xl:h-[340px] object-cover"
                />
              </div>
            </PhotoView>

            <PhotoView src="/used_projects/COMMERCIAL/THE OUTLETS AT LIPA/227B9867.jpg">
              <div className="sm:col-span-4 h-full">
                <img
                  loading="lazy"
                  src="/used_projects/COMMERCIAL/THE OUTLETS AT LIPA/227B9867.jpg"
                  alt="Middle Image"
                  className="w-full h-[11rem] md:h-[15rem] xl:h-[340px] object-cover"
                />
              </div>
            </PhotoView>

            <PhotoView src="/used_projects/COMMERCIAL/THE OUTLETS AT LIPA/DJI_0304.jpg">
              <div className="sm:col-span-3 h-full">
                <img
                  loading="lazy"
                  src="/used_projects/COMMERCIAL/THE OUTLETS AT LIPA/DJI_0304.jpg"
                  alt="Right Image"
                  className="w-full h-full object-cover"
                />
              </div>
            </PhotoView>
          </div>

          <div className="hidden sm:grid sm:grid-cols-11">
            <PhotoView src="/used_projects/COMMERCIAL/LIMA COMMERCIAL LOTS/COVER PHOTO.jpg">
              <div className="sm:col-span-4 h-full">
                <img
                  loading="lazy"
                  src="/used_projects/COMMERCIAL/LIMA COMMERCIAL LOTS/COVER PHOTO.jpg"
                  alt="Left Image"
                  className="w-full h-[11rem] md:h-[15rem] xl:h-[340px] object-cover"
                />
              </div>
            </PhotoView>

            <PhotoView src="/used_projects/COMMERCIAL/LIMA COMMERCIAL LOTS/Picture 1.jpg">
              <div className="sm:col-span-4 h-full">
                <img
                  loading="lazy"
                  src="/used_projects/COMMERCIAL/LIMA COMMERCIAL LOTS/Picture 1.jpg"
                  alt="Middle Image"
                  className="w-full h-[11rem] md:h-[15rem] xl:h-[340px] object-cover"
                />
              </div>
            </PhotoView>

            <PhotoView src="/used_projects/COMMERCIAL/LIMA COMMERCIAL LOTS/Picture 3.jpg">
              <div className="sm:col-span-3 h-full">
                <img
                  loading="lazy"
                  src="/used_projects/COMMERCIAL/LIMA COMMERCIAL LOTS/Picture 3.jpg"
                  alt="Right Image"
                  className="w-full h-full object-cover"
                />
              </div>
            </PhotoView>
          </div>

          <div className="grid sm:grid-cols-12">
            <PhotoView src="/used_projects/COMMERCIAL/LIMA COMMERCIAL LOTS/lima tower one outside parking eco pavers installation/Picture 1.jpg">
              <div className="col-span-4 h-full">
                <img
                  loading="lazy"
                  src="/used_projects/COMMERCIAL/LIMA COMMERCIAL LOTS/lima tower one outside parking eco pavers installation/Picture 1.jpg"
                  alt="Left Image"
                  className="w-full h-full object-cover"
                />
              </div>
            </PhotoView>

            <PhotoView src="/used_projects/COMMERCIAL/LIMA COMMERCIAL LOTS/lima tower one outside parking eco pavers installation/Picture 2.jpg">
              <div className="col-span-4 h-full">
                <img
                  loading="lazy"
                  src="/used_projects/COMMERCIAL/LIMA COMMERCIAL LOTS/lima tower one outside parking eco pavers installation/Picture 2.jpg"
                  alt="Middle Image"
                  className="w-full h-full object-cover"
                />
              </div>
            </PhotoView>

            <PhotoView src="/used_projects/INDUSTRIAL/East Bay WTP Project.jpg">
              <div className="col-span-4 h-full">
                <img
                  loading="lazy"
                  src="/used_projects/INDUSTRIAL/East Bay WTP Project.jpg"
                  alt="Right Image"
                  className="w-full h-full object-cover"
                />
              </div>
            </PhotoView>
          </div>

          <div className="hidden sm:grid sm:grid-cols-11">
            <PhotoView src="/used_projects/INDUSTRIAL/Embankment of Filling Materials.jpg">
              <div className="sm:col-span-4 h-full">
                <img
                  loading="lazy"
                  src="/used_projects/INDUSTRIAL/Embankment of Filling Materials.jpg"
                  alt="Left Image"
                  className="w-full h-[11rem] md:h-[15rem] xl:h-[340px] object-cover"
                />
              </div>
            </PhotoView>

            <PhotoView src="/used_projects/INDUSTRIAL/LIMA ESTATE.jpg">
              <div className="sm:col-span-4 h-full">
                <img
                  loading="lazy"
                  src="/used_projects/INDUSTRIAL/LIMA ESTATE.jpg"
                  alt="Middle Image"
                  className="w-full h-[11rem] md:h-[15rem] xl:h-[340px] object-cover"
                />
              </div>
            </PhotoView>

            <PhotoView src="/used_projects/RESIDENTIAL/Ajoya.png">
              <div className="sm:col-span-3 h-full">
                <img
                  loading="lazy"
                  src="/used_projects/RESIDENTIAL/Ajoya.png"
                  alt="Right Image"
                  className="w-full h-full object-cover"
                />
              </div>
            </PhotoView>
          </div>


          <div className="hidden sm:grid sm:grid-cols-11">
            <PhotoView src="/used_projects/LANDSCAPING AND MAINTENANCE/LIMA COMMERCIAL LOTS LANDSCAPE AND MAINTENANCE/Picture 1.jpg">
              <div className="sm:col-span-4 h-full">
                <img
                  loading="lazy"
                  src="/used_projects/LANDSCAPING AND MAINTENANCE/LIMA COMMERCIAL LOTS LANDSCAPE AND MAINTENANCE/Picture 1.jpg"
                  alt="Left Image"
                  className="w-full h-[11rem] md:h-[15rem] xl:h-[340px] object-cover"
                />
              </div>
            </PhotoView>

            <PhotoView src="/used_projects/LANDSCAPING AND MAINTENANCE/LIMA COMMERCIAL LOTS LANDSCAPE AND MAINTENANCE/Picture 2.jpg">
              <div className="sm:col-span-4 h-full">
                <img
                  loading="lazy"
                  src="/used_projects/LANDSCAPING AND MAINTENANCE/LIMA COMMERCIAL LOTS LANDSCAPE AND MAINTENANCE/Picture 2.jpg"
                  alt="Middle Image"
                  className="w-full h-[11rem] md:h-[15rem] xl:h-[340px] object-cover"
                />
              </div>
            </PhotoView>

            <PhotoView src="/used_projects/LANDSCAPING AND MAINTENANCE/LIMA COMMERCIAL LOTS LANDSCAPE AND MAINTENANCE/Picture 3.jpg">
              <div className="sm:col-span-3 h-full">
                <img
                  loading="lazy"
                  src="/used_projects/LANDSCAPING AND MAINTENANCE/LIMA COMMERCIAL LOTS LANDSCAPE AND MAINTENANCE/Picture 3.jpg"
                  alt="Right Image"
                  className="w-full h-full object-cover"
                />
              </div>
            </PhotoView>
          </div>

          <div className="grid sm:grid-cols-12">
            <PhotoView src="/used_projects/LANDSCAPING AND MAINTENANCE/THE OUTLETS AT LIPA LANDSCAPE AND MAINTENANCE/227B9810.jpg">
              <div className="col-span-4 h-full">
                <img
                  loading="lazy"
                  src="/used_projects/LANDSCAPING AND MAINTENANCE/THE OUTLETS AT LIPA LANDSCAPE AND MAINTENANCE/227B9810.jpg"
                  alt="Left Image"
                  className="w-full h-full object-cover"
                />
              </div>
            </PhotoView>

            <PhotoView src="/used_projects/LANDSCAPING AND MAINTENANCE/THE OUTLETS AT LIPA LANDSCAPE AND MAINTENANCE/227B9848.jpg">
              <div className="col-span-4 h-full">
                <img
                  loading="lazy"
                  src="/used_projects/LANDSCAPING AND MAINTENANCE/THE OUTLETS AT LIPA LANDSCAPE AND MAINTENANCE/227B9848.jpg"
                  alt="Middle Image"
                  className="w-full h-full object-cover"
                />
              </div>
            </PhotoView>

            <PhotoView src="/used_projects/LANDSCAPING AND MAINTENANCE/THE OUTLETS AT LIPA LANDSCAPE AND MAINTENANCE/DSC07420.jpg">
              <div className="col-span-4 h-full">
                <img
                  loading="lazy"
                  src="/used_projects/LANDSCAPING AND MAINTENANCE/THE OUTLETS AT LIPA LANDSCAPE AND MAINTENANCE/DSC07420.jpg"
                  alt="Right Image"
                  className="w-full h-full object-cover"
                />
              </div>
            </PhotoView>
          </div>

          <div className="hidden sm:grid sm:grid-cols-11">
            <PhotoView src="/used_projects/LANDSCAPING AND MAINTENANCE/THE OUTLETS AT LIPA LANDSCAPE AND MAINTENANCE/DSC07425.jpg">
              <div className="sm:col-span-4 h-full">
                <img
                  loading="lazy"
                  src="/used_projects/LANDSCAPING AND MAINTENANCE/THE OUTLETS AT LIPA LANDSCAPE AND MAINTENANCE/DSC07425.jpg"
                  alt="Left Image"
                  className="w-full h-[11rem] md:h-[15rem] xl:h-[340px] object-cover"
                />
              </div>
            </PhotoView>

            <PhotoView src="/used_projects/LANDSCAPING AND MAINTENANCE/THE OUTLETS AT LIPA LANDSCAPE AND MAINTENANCE/DSC07439.jpg">
              <div className="sm:col-span-4 h-full">
                <img
                  loading="lazy"
                  src="/used_projects/LANDSCAPING AND MAINTENANCE/THE OUTLETS AT LIPA LANDSCAPE AND MAINTENANCE/DSC07439.jpg"
                  alt="Middle Image"
                  className="w-full h-[11rem] md:h-[15rem] xl:h-[340px] object-cover"
                />
              </div>
            </PhotoView>

            <PhotoView src="/used_projects/LANDSCAPING AND MAINTENANCE/THE OUTLETS AT LIPA LANDSCAPE AND MAINTENANCE/DSC07467.jpg">
              <div className="sm:col-span-3 h-full">
                <img
                  loading="lazy"
                  src="/used_projects/LANDSCAPING AND MAINTENANCE/THE OUTLETS AT LIPA LANDSCAPE AND MAINTENANCE/DSC07467.jpg"
                  alt="Right Image"
                  className="w-full h-full object-cover"
                />
              </div>
            </PhotoView>
          </div>
          
          <div className="hidden sm:grid sm:grid-cols-11">
            <PhotoView src="/used_projects/LANDSCAPING AND MAINTENANCE/SEAFRONT RESIDENCES LANDSCAPE MAINTENANCE/DSC07110.jpg">
              <div className="sm:col-span-4 h-full">
                <img
                  loading="lazy"
                  src="/used_projects/LANDSCAPING AND MAINTENANCE/SEAFRONT RESIDENCES LANDSCAPE MAINTENANCE/DSC07110.jpg"
                  alt="Left Image"
                  className="w-full h-[11rem] md:h-[15rem] xl:h-[340px] object-cover"
                />
              </div>
            </PhotoView>

            <PhotoView src="/used_projects/LANDSCAPING AND MAINTENANCE/SEAFRONT RESIDENCES LANDSCAPE MAINTENANCE/DSC07080.jpg">
              <div className="sm:col-span-4 h-full">
                <img
                  loading="lazy"
                  src="/used_projects/LANDSCAPING AND MAINTENANCE/SEAFRONT RESIDENCES LANDSCAPE MAINTENANCE/DSC07080.jpg"
                  alt="Middle Image"
                  className="w-full h-[11rem] md:h-[15rem] xl:h-[340px] object-cover"
                />
              </div>
            </PhotoView>

            <PhotoView src="/used_projects/LANDSCAPING AND MAINTENANCE/SEAFRONT RESIDENCES LANDSCAPE MAINTENANCE/DSC07143.jpg">
              <div className="sm:col-span-3 h-full">
                <img
                  loading="lazy"
                  src="/used_projects/LANDSCAPING AND MAINTENANCE/SEAFRONT RESIDENCES LANDSCAPE MAINTENANCE/DSC07143.jpg"
                  alt="Right Image"
                  className="w-full h-full object-cover"
                />
              </div>
            </PhotoView>
          </div>

          <div className="grid sm:grid-cols-12">
            <PhotoView src="/used_projects/LANDSCAPING AND MAINTENANCE/THE VILLAGES AT LIPA/20241206_135716.jpg">
              <div className="col-span-4 h-full">
                <img
                  loading="lazy"
                  src="/used_projects/LANDSCAPING AND MAINTENANCE/THE VILLAGES AT LIPA/20241206_135716.jpg"
                  alt="Left Image"
                  className="w-full h-full object-cover"
                />
              </div>
            </PhotoView>

            <PhotoView src="/used_projects/LANDSCAPING AND MAINTENANCE/THE VILLAGES AT LIPA/20241206_135624.jpg">
              <div className="col-span-4 h-full">
                <img
                  loading="lazy"
                  src="/used_projects/LANDSCAPING AND MAINTENANCE/THE VILLAGES AT LIPA/20241206_135624.jpg"
                  alt="Middle Image"
                  className="w-full h-full object-cover"
                />
              </div>
            </PhotoView>

            <PhotoView src="/used_projects/LANDSCAPING AND MAINTENANCE/THE VILLAGES AT LIPA/20241206_140024.jpg">
              <div className="col-span-4 h-full">
                <img
                  loading="lazy"
                  src="/used_projects/LANDSCAPING AND MAINTENANCE/THE VILLAGES AT LIPA/20241206_140024.jpg"
                  alt="Right Image"
                  className="w-full h-full object-cover"
                />
              </div>
            </PhotoView>
          </div>
        </div>
      </PhotoProvider>

    </section>
  );
};

export default ProjectGallery;
