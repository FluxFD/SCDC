import React, { useEffect, useState } from "react";
import ProjectBox from "../Components/Projects/ProjectBox";
import ProjectModal from "../Components/Projects/ProjectModal";
import { IoCaretDownSharp } from "react-icons/io5";
import Contact from "../Components/Contact";
import ProjectGallery from "../Components/Projects/ProjectGallery";
import { useLocation } from "react-router-dom";

export const projects = [
  
  // Residential projects
  {
    id: "1",
    title: "Seafront Residences",
    category: "Residential",
    images: [
      "/used_projects/RESIDENTIAL/Seafront.png",
      "/used_projects/RESIDENTIAL/Seafront 2.jpg",
      "/used_projects/RESIDENTIAL/SEAFRONT.jpg",
    ],
    description: "Luxurious beachfront apartments with panoramic ocean views.",
    location: "Coastal City",
    area: "10,000 sqm",
    status: "Completed",
  },
  {
    id: "2",
    title: "The Villages at Lipa",
    category: "Residential",
    images: [
      "/used_projects/RESIDENTIAL/THE VILLAGES AT LIPA/a.jpg",
      "/used_projects/RESIDENTIAL/THE VILLAGES AT LIPA/20241206_135716.jpg",
      "/used_projects/RESIDENTIAL/THE VILLAGES AT LIPA/20241206_135624.jpg",
    ],
    description:
      "A master-planned community with modern amenities and green spaces.",
    location: "Lipa City",
    area: "50,000 sqm",
    status: "Ongoing",
  },
  {
    id: "3",
    title: "Ajoya",
    category: "Residential",
    images: ["/used_projects/RESIDENTIAL/Ajoya.png"],
    description: "Contemporary homes designed for comfort and style.",
    location: "Suburban Area",
    area: "15,000 sqm",
    status: "Completed",
  },
  // Commercial projects
  {
    id: "4",
    title: "Batangas Lakelands",
    category: "Commercial",
    images: [
      "/used_projects/COMMERCIAL/BATANGAS LAKELANDS/COVER PHOTO.png",
      "/used_projects/COMMERCIAL/BATANGAS LAKELANDS/Picture 1.jpg",
      "/used_projects/COMMERCIAL/BATANGAS LAKELANDS/Picture 2.jpg",
    ],
    description: "A mixed-use development featuring retail spaces and offices.",
    location: "Batangas",
    area: "30,000 sqm",
    status: "In Planning",
  },
  {
    id: "5",
    title: "The Outlets At Lipa",
    category: "Commercial",
    images: [
      "/used_projects/COMMERCIAL/THE OUTLETS AT LIPA/227B9779.jpg",
      "/used_projects/COMMERCIAL/THE OUTLETS AT LIPA/227B9781.jpg",
      "/used_projects/COMMERCIAL/THE OUTLETS AT LIPA/227B9784.jpg",
      "/used_projects/COMMERCIAL/THE OUTLETS AT LIPA/227B9795.jpg",
      "/used_projects/COMMERCIAL/THE OUTLETS AT LIPA/227B9867.jpg",
      "/used_projects/COMMERCIAL/THE OUTLETS AT LIPA/DJI_0304.jpg",
    ],
    description: "A premier outlet shopping destination with various brands.",
    location: "Lipa City",
    area: "25,000 sqm",
    status: "Completed",
  },
  {
    id: "6",
    title: "Lima Commercial",
    category: "Commercial",
    images: [
      "/used_projects/COMMERCIAL/LIMA COMMERCIAL LOTS/COVER PHOTO.jpg",
      "/used_projects/COMMERCIAL/LIMA COMMERCIAL LOTS/Picture 1.jpg",
      "/used_projects/COMMERCIAL/LIMA COMMERCIAL LOTS/Picture 3.jpg",
      "/used_projects/COMMERCIAL/LIMA COMMERCIAL LOTS/lima tower one outside parking eco pavers installation/Picture 1.jpg",
      "/used_projects/COMMERCIAL/LIMA COMMERCIAL LOTS/lima tower one outside parking eco pavers installation/Picture 2.jpg",
    ],
    description: "A state-of-the-art business park with modern office spaces.",
    location: "Lima",
    area: "40,000 sqm",
    status: "Ongoing",
  },
  // Industrial projects
  {
    id: "8",
    title: "East Bay Water Treatment Plant",
    category: "Industrial",
    images: ["/used_projects/INDUSTRIAL/East Bay WTP Project.jpg"],
    description:
      "State-of-the-art water treatment facility serving the East Bay area with modern purification systems.",
    location: "East Bay",
    area: "20,000 sqm",
    status: "Operational",
  },
  {
    id: "9",
    title: "Embankment of Filling Materials",
    category: "Industrial",
    images: ["/used_projects/INDUSTRIAL/Embankment of Filling Materials.jpg"],
    description:
      "Advanced materials processing and storage facility with modern equipment and efficient logistics.",
    location: "Industrial Zone",
    area: "15,000 sqm",
    status: "Operational",
  },
  {
    id: "10",
    title: "Lima Estate",
    category: "Industrial",
    images: ["/used_projects/INDUSTRIAL/LIMA ESTATE.jpg"],
    description:
      "Premium industrial estate featuring modern facilities and strategic location for businesses.",
    location: "Lima Technology Center",
    area: "45,000 sqm",
    status: "Operational",
  },
  // Landscaping projects
  {
    id: "11",
    title: "Lima Commercial Landscaping",
    category: "Landscaping",
    images: [
      "/used_projects/LANDSCAPING AND MAINTENANCE/LIMA COMMERCIAL LOTS LANDSCAPE AND MAINTENANCE/Picture 1.jpg",
      "/used_projects/LANDSCAPING AND MAINTENANCE/LIMA COMMERCIAL LOTS LANDSCAPE AND MAINTENANCE/Picture 2.jpg",
      "/used_projects/LANDSCAPING AND MAINTENANCE/LIMA COMMERCIAL LOTS LANDSCAPE AND MAINTENANCE/Picture 3.jpg",
    ],
    description:
      "Expertly designed and maintained commercial landscapes with sustainable features.",
    location: "Lima Commercial Area",
    area: "5,000 sqm",
    status: "Ongoing Maintenance",
  },
  {
    id: "12",
    title: "The Outlets at Lipa Landscaping",
    category: "Landscaping",
    images: [
      "/used_projects/LANDSCAPING AND MAINTENANCE/THE OUTLETS AT LIPA LANDSCAPE AND MAINTENANCE/227B9810.jpg",
      "/used_projects/LANDSCAPING AND MAINTENANCE/THE OUTLETS AT LIPA LANDSCAPE AND MAINTENANCE/227B9848.jpg",
      "/used_projects/LANDSCAPING AND MAINTENANCE/THE OUTLETS AT LIPA LANDSCAPE AND MAINTENANCE/DSC07420.jpg",
      "/used_projects/LANDSCAPING AND MAINTENANCE/THE OUTLETS AT LIPA LANDSCAPE AND MAINTENANCE/DSC07425.jpg",
      "/used_projects/LANDSCAPING AND MAINTENANCE/THE OUTLETS AT LIPA LANDSCAPE AND MAINTENANCE/DSC07439.jpg",
      "/used_projects/LANDSCAPING AND MAINTENANCE/THE OUTLETS AT LIPA LANDSCAPE AND MAINTENANCE/DSC07467.jpg",
    ],
    description:
      "Beautiful retail environment with seasonal gardens and decorative elements.",
    location: "Lipa City",
    area: "3,000 sqm",
    status: "Ongoing Maintenance",
  },
  {
    id: "13",
    title: "Seafront Residences Landscaping",
    category: "Landscaping",
    images: [
      "/used_projects/LANDSCAPING AND MAINTENANCE/SEAFRONT RESIDENCES LANDSCAPE MAINTENANCE/DSC07110.jpg",
      "/used_projects/LANDSCAPING AND MAINTENANCE/SEAFRONT RESIDENCES LANDSCAPE MAINTENANCE/DSC07080.jpg",
      "/used_projects/LANDSCAPING AND MAINTENANCE/SEAFRONT RESIDENCES LANDSCAPE MAINTENANCE/DSC07143.jpg",
    ],
    description:
      "Coastal-inspired landscape design with native plants and sustainable features.",
    location: "Seafront Area",
    area: "4,000 sqm",
    status: "Ongoing Maintenance",
  },
  {
    id: "14",
    title: "The Villages At Lipa Landscaping",
    category: "Landscaping",
    images: [
      "/used_projects/LANDSCAPING AND MAINTENANCE/THE VILLAGES AT LIPA/20241206_135716.jpg",
      "/used_projects/LANDSCAPING AND MAINTENANCE/THE VILLAGES AT LIPA/20241206_135624.jpg",
      "/used_projects/LANDSCAPING AND MAINTENANCE/THE VILLAGES AT LIPA/20241206_140024.jpg",
    ],
    description:
      "Comprehensive landscape maintenance for residential communities with tropical elements.",
    location: "Lipa City",
    area: "6,000 sqm",
    status: "Ongoing Maintenance",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const categories = ["Residential", "Commercial", "Industrial", "Landscaping"];
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const targetElement = document.getElementById(hash.substring(1));
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);
  // Disable scrolling when a project is selected
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  return (
    <div className="w-full min-h-screen flex flex-col font-inter pt-[64px] lg:pt-[80px]">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {categories.map((category) => (
          <div key={category} className="mb-8">
            <div className="w-fit flex items-center gap-2 mb-4 text-[#8c1717] border-b-2 border-[#8c1717]">
              <h2 className="text-2xl font-bold">{category}</h2>
              <IoCaretDownSharp />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects
                .filter((project) => project.category === category)
                .map((project, index) => (
                  <div
                    data-aos="fade-up"
                    data-aos-duration="1500"
                    data-aos-delay={index * 100}
                    key={project.id}
                  >
                    <ProjectBox
                      project={project}
                      onClick={() => setSelectedProject(project)}
                    />
                  </div>
                ))}
            </div>
          </div>
        ))}
        <hr/>
        <div id="gallery">
          <ProjectGallery  />
          </div>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>

      <Contact />
    </div>
  );
};

export default Projects;
