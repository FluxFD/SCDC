const ProjectBox = ({ project, onClick }) => {
  return (
    <div
      data-aos="fade-up"
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
      onClick={onClick}
    >
      <img
        loading="lazy"
        src={project.images?.[0]}
        alt={project.title}
        className="object-cover h-56 w-full object-right"
      />

      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
        <p className="text-gray-600 text-sm">
          {project.description.substring(0, 100)}...
        </p>
      </div>
    </div>
  );
};

export default ProjectBox;
