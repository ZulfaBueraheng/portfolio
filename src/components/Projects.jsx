import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import home from "../assets/projects/auto-service/Home.png";
import history from "../assets/projects/auto-service/History.png";
import report from "../assets/projects/auto-service/Report.png";

const projectData = [
  {
    id: 1,
    title: "Auto Service Management",
    description:
      "A full-featured system for managing repair data, notifying customers, and generating reports.",
    images: [home, history, report],
    link: "/projects/auto-service",
  },
];

const CustomPrevArrow = ({ onClick }) => (
  <button
    className="absolute z-10 left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow p-1"
    onClick={onClick}
    aria-label="Previous Slide"
  >
    <ChevronLeft size={20} />
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button
    className="absolute z-10 right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow p-1"
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
            className="h-60 p-4 flex items-center justify-center rounded-lg"
          >
            <img
              src={img}
              alt={`${title} image ${index + 1}`}
              loading="lazy"
              className="h-full max-w-full object-contain object-center"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="project">
      <div className="min-h-screen bg-gradient-to-b from-white to-secondary py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-primary">
            PROJECTS
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectData.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-transform duration-300 transform hover:-translate-y-1 hover:scale-[1.02]"
              >
                <ProjectCarousel
                  images={project.images}
                  title={project.title}
                />
                <div className="p-5 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <a
                    href={project.link}
                    className="inline-block bg-primary text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300 text-sm sm:text-base"
                  >
                    View Project
                  </a>
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
