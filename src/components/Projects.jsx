import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import auto1 from "../assets/projects/auto-service/Home.png";
import auto2 from "../assets/projects/auto-service/History.png";
import auto3 from "../assets/projects/auto-service/Report.png";

const Projects = () => {
  const projectData = [
    {
      id: 1,
      title: "Auto Service Management",
      description:
        "A full-featured system for managing repair data, notifying customers, and generating reports.",
      images: [auto1, auto2, auto3],
      link: "/projects/auto-service",
    },
  ];

  const CustomPrevArrow = ({ onClick }) => (
    <button
      className="absolute left-2 top-1/2 z-10 transform -translate-y-1/2 p-1 bg-white rounded-full shadow 
            cursor-pointer transition-colors duration-300 hover:bg-secondary hover:text-white"
      onClick={onClick}
      aria-label="Previous Slide"
    >
      <ChevronLeft size={20} />
    </button>
  );

  const CustomNextArrow = ({ onClick }) => (
    <button
      className="absolute right-2 top-1/2 z-10 transform -translate-y-1/2 p-1 bg-white rounded-full shadow 
            cursor-pointer transition-colors duration-300 hover:bg-secondary hover:text-white"
      onClick={onClick}
      aria-label="Next Slide"
    >
      <ChevronRight size={20} />
    </button>
  );

  const ProjectCarousel = ({ images, title }) => {
    const sliderRef = useRef(null);

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      autoplay: false,
      autoplaySpeed: 1200,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: <CustomPrevArrow />,
      nextArrow: <CustomNextArrow />,
    };

    return (
      <div
        onMouseEnter={() => sliderRef.current?.slickPlay()}
        onMouseLeave={() => sliderRef.current?.slickPause()}
      >
        <Slider ref={sliderRef} {...settings}>
          {images.map((img, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 aspect-ratio rounded-lg"
            >
              <img
                src={img}
                alt={`${title} image ${index + 1}`}
                loading="lazy"
                className="h-auto max-w-full object-contain object-center"
              />
            </div>
          ))}
        </Slider>
      </div>
    );
  };

  return (
    <section id="projects">
      <div className="h-auto py-24 px-4 sm:px-6 lg:px-8 bg-primary">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-xl sm:text-2xl md:text-3xl xl:text-4xl font-bold text-white text-center mb-6 sm:mb-12">
            PROJECTS
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectData.map((project) => (
              <div
                key={project.id}
                className="bg-white pt-4 rounded-2xl overflow-hidden shadow-md transform transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl"
              >
                <ProjectCarousel
                  images={project.images}
                  title={project.title}
                />
                <div className="px-5 py-6 sm:px-6 sm:py-8">
                  <h3 className="text-base sm:text-lg xl:text-xl font-semibold text-gray-800 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-2">
                    {project.description}
                  </p>
                  <div className="flex justify-end">
                    <a
                      href={project.link}
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm sm:text-base px-4 py-2 text-white bg-accent rounded-full transition duration-300 hover:bg-secondary"
                    >
                      Project Detail
                      <span className="text-lg material-symbols-outlined">
                        arrow_circle_right
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
