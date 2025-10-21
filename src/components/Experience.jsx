const experiences = [
  {
    role: "Auto Service Management System (Final Project)",
    company: "Prince of Songkla University",
    date: "July 2023 - March 2024",
    description: [
      "Designed and developed a web application for managing auto service businesses.",
      "Implemented features for repair data recording, repair history access, and summary report generation.",
      "Integrated LINE Messaging API to notify customers of repair status updates.",
      "Developed responsive layouts optimized for desktop and tablet devices.",
    ],
    tech: [
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
    ],
  },
  {
    role: "Programmer (Intern)",
    company: "Phuket Innovative Development CO., LTD.",
    date: "April 2023 - June 2023",
    description: [
      "Developed business websites with multiple sections: Home, Welcome, About, Product, Gallery, Reference, Seller, Blog, Contact, and Footer.",
      "Integrated multilingual support with language switching.",
      "Implemented fully responsive design for seamless experience across desktop, tablet, and mobile.",
    ],
    tech: ["React.js", "Javascript", "HTML", "SCSS"],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="lg:min-h-screen py-14 sm:py-16 xl:pt-24 bg-white"
    >
      <div className="px-6 sm:px-0 sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto">
        <h2 className="text-xl sm:text-2xl md:text-3xl xl:text-4xl font-bold text-center py-2 xl:py-4 mb-4 sm:mb-6 lg:mb-8 xl:mb-14">
          EXPERIENCE
        </h2>

        <div className="space-y-8 sm:space-y-12">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="border-l-3 sm:border-l-4 border-primary pl-4 sm:pl-6 lg:pl-8"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 gap-2">
                <div>
                  <h3 className="text-base sm:text-lg xl:text-xl font-bold">
                    {exp.role}
                  </h3>
                  <p className="text-sm lg:text-base font-semibold text-primary">
                    {exp.company}
                  </p>
                </div>
                <span className="text-sm lg:text-base text-gray-500">
                  {exp.date}
                </span>
              </div>

              <ul className="text-sm sm:text-base xl:text-lg text-gray-700 lg:leading-relaxed mb-3 lg:mb-4 space-y-1">
                {exp.description.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-sm xl:text-base text-gray-700 bg-gray-100 px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
