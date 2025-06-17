const Experience = () => {
  return (
    <section
      id="experience"
      className="px-4 sm:px-6 py-16 sm:py-20 min-h-screen bg-white"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16">
          EXPERIENCE
        </h2>

        <div className="space-y-12">
          <div className="border-l-4 border-primary pl-4 sm:pl-8">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-2">
              <div>
                <h3 className="text-lg sm:text-xl font-bold">
                  Auto Service Management System
                </h3>
                <p className="text-primary font-semibold text-sm sm:text-base">
                  Prince of Songkla University
                </p>
              </div>
              <span className="text-gray-500 text-sm">
                July 2023 - March 2024
              </span>
            </div>
            <ul className="text-gray-700 mb-4 space-y-1 text-sm sm:text-base leading-relaxed">
              <li>
                • Designed and developed a web application for managing auto
                service businesses.
              </li>
              <li>
                • Features included repair data recording, repair history
                access, and summary report generation.
              </li>
              <li>
                • Integrated LINE Messaging API to notify customers of repair
                status updates.
              </li>
              <li>
                • Built a fully responsive design for optimal usability across
                devices.
              </li>
            </ul>
            <div className="flex flex-wrap gap-2">
              {[
                "React.js",
                "Node.js",
                "Express.js",
                "MongoDB",
                "Javascript",
                "HTML",
                "SCSS",
                "Material UI",
                "Bootstrap",
                "LINE Messaging API",
                "Figma",
              ].map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs sm:text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="border-l-4 border-primary pl-4 sm:pl-8">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-2">
              <div>
                <h3 className="text-lg sm:text-xl font-bold">
                  Programmer (Intern)
                </h3>
                <p className="text-primary font-semibold text-sm sm:text-base">
                  Phuket Innovative Development CO., LTD.
                </p>
              </div>
              <span className="text-gray-500 text-sm">
                April 2023 - June 2023
              </span>
            </div>
            <ul className="text-gray-700 mb-4 space-y-1 text-sm sm:text-base leading-relaxed">
              <li>
                • Developed an eCommerce website, including Home, About,
                Products, Blog, and Contact pages.
              </li>
              <li>
                • Integrated multilingual support with seamless language
                switching.
              </li>
              <li>
                • Ensured responsive design for a better user experience across
                different devices.
              </li>
            </ul>
            <div className="flex flex-wrap gap-2">
              {["React.js", "Javascript", "HTML", "SCSS"].map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs sm:text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
