import { PhotoProvider, PhotoView } from "react-photo-view";
import { IoMdClose } from "react-icons/io";

const ProjectModal = ({ project, onClose }) => {
  const imagesLength = project?.images?.length;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div
        className={`${
          imagesLength === 1 ? "max-w-4xl" : "max-w-7xl"
        } relative bg-white rounded-lg w-full h-full sm:h-auto `}
      >
        <div
          onClick={onClose}
          className="size-8 absolute z-[70] -top-3 -right-3 shadow-md bg-white flex items-center justify-center rounded-full cursor-pointer"
        >
          <IoMdClose className="text-xl" />
        </div>

        <div className="flex flex-col sm:flex-row-reverse gap-6 p-4 sm:p-6 h-full sm:max-h-[92vh] overflow-auto overflow-x-hidden">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold mb-2 text-customDarkRed">
              {project.title}
            </h2>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold">Location</h3>
                <p>{project.location}</p>
              </div>
              <div>
                <h3 className="font-semibold">Area</h3>
                <p>{project.area}</p>
              </div>
              <div>
                <h3 className="font-semibold">Status</h3>
                <p>{project.status}</p>
              </div>
              <div>
                <h3 className="font-semibold">Category</h3>
                <p>{project.category}</p>
              </div>
            </div>
          </div>

          <PhotoProvider speed={() => 200}>
            {imagesLength === 1 ? (
              <PhotoView src={project.images[0]}>
                <img
                  loading="lazy"
                  src={project.images[0]}
                  alt={project.title}
                  className="object-cover max-h-96 md:w-1/2 rounded-lg"
                />
              </PhotoView>
            ) : (
              <div className={`md:w-1/2 grid sm:grid-cols-12 gap-2`}>
                {project?.images?.map((img) => (
                  <PhotoView src={img} key={img}>
                    <div className="sm:col-span-6 ">
                      <img
                        loading="lazy"
                        src={img}
                        alt={project.title}
                        className="object-cover max-h-52 w-full h-full rounded-lg"
                      />
                    </div>
                  </PhotoView>
                ))}
              </div>
            )}
          </PhotoProvider>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
