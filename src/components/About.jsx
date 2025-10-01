const About = () => {
  return (
    <section
      id="about"
      className="xl:min-h-screen py-14 sm:py-16 lg:pt-20 px-10 sm:px-15 md:px-6 xl:px-8 bg-[#F2F5F8]"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl xl:text-4xl font-bold py-2 xl:py-4">
          ABOUT ME
        </h2>
        <p className="text-xs sm:text-sm md:text-base xl:text-lg text-gray-600 leading-relaxed mb-4 sm:mb-6 xl:mb-12 max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto">
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-0 lg:gap-10 text-left">
          <div className="indent-8 text-sm sm:text-base xl:text-lg text-gray-700 text-justify lg:leading-relaxed">
            <p className="mb-2 sm:mb-3 lg:mb-6">
              I’m a Full Stack Developer who enjoys turning complex problems
              into simple, intuitive solutions. With experience building both
              the user interface and backend logic, I take pride in delivering
              applications that are not only functional but also user-centric
              and reliable.
            </p>

            <p className="mb-2 sm:mb-3 lg:mb-6">
              I enjoy exploring new technologies and constantly challenge myself
              to improve both in code and in the way I think about product
              design and user experience. I believe great software is built
              through collaboration, continuous learning, and attention to
              detail.
            </p>

            <p className="mb-2 sm:mb-3 lg:mb-6">
              I’m open to job opportunities where I can contribute, learn, and
              grow. If you have a good opportunity that matches my skills and
              experience, please don’t hesitate to contact me.
            </p>
          </div>

          <div className="md:pl-10 lg:pl-0 space-y-6 lg:space-y-8">
            <div>
              <h3 className="text-base xl:text-lg font-semibold mb-2 xl:mb-3">
                Frontend Skills
              </h3>
              <div className="flex flex-wrap gap-2 ">
                {[
                  "JavaScript",
                  "React",
                  "Vue",
                  "React Native",
                  "HTML",
                  "CSS",
                  "SCSS",
                  "Bootstrap",
                  "Material UI",
                  "Tailwind CSS",
                  "Responsive Design",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="text-xs sm:text-sm text-white bg-secondary px-3 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-base xl:text-lg font-semibold mb-2 xl:mb-3">
                Backend Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Node.js", "Express.js", "MongoDB"].map((skill) => (
                  <span
                    key={skill}
                    className="text-xs sm:text-sm text-white bg-primary px-3 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-base xl:text-lg font-semibold mb-2 xl:mb-3">
                Tools & Others
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Git", "Github", "Figma", "LINE Messaging API"].map(
                  (tool) => (
                    <span
                      key={tool}
                      className="text-xs sm:text-sm text-white bg-[#6D5C55] px-3 py-1 rounded-full"
                    >
                      {tool}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
