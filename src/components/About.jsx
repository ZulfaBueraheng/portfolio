const About = () => {
  return (
    <section
      id="about"
      className="px-4 sm:px-6 lg:px-8 py-16 bg-gray-50 min-h-screen"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">ABOUT ME</h2>
        <div className="w-20 h-1 bg-secondary rounded-full mx-auto mb-6"></div>
        <p className="text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto text-base sm:text-lg">
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
          <div className="" style={{ textIndent: "2rem" }}>
            <p className="text-gray-700 mb-6 leading-relaxed text-base sm:text-lg">
              I’m a Full Stack Developer who enjoys turning complex problems
              into simple, intuitive solutions. With experience building both
              the user interface and backend logic, I take pride in delivering
              applications that are not only functional but also user-centric
              and reliable.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed text-base sm:text-lg">
              I enjoy exploring new technologies and constantly challenge myself
              to improve both in code and in the way I think about product
              design and user experience. I believe great software is built
              through collaboration, continuous learning, and attention to
              detail.
            </p>

            <p className="text-gray-700 mb-8 leading-relaxed text-base sm:text-lg">
              I’m open to job opportunities where I can contribute, learn, and
              grow. If you have a good opportunity that matches my skills and
              experience, please don’t hesitate to contact me.
            </p>

            <a
              href="#contact"
              className="bg-primary hover:bg-green-700 text-white px-6 py-2 rounded-full font-semibold transition-colors"
            >
              CONTACT
            </a>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="font-semibold mb-3 text-lg">Frontend Skills</h3>
              <div className="flex flex-wrap gap-2">
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
                    className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3 text-lg">Backend Skills</h3>
              <div className="flex flex-wrap gap-2">
                {["Node.js", "Express.js", "MongoDB"].map((skill) => (
                  <span
                    key={skill}
                    className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3 text-lg">Tools & Others</h3>
              <div className="flex flex-wrap gap-2">
                {["Git", "Github", "Figma", "LINE Messaging API"].map(
                  (tool) => (
                    <span
                      key={tool}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
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
