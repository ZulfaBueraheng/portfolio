const Home = () => {
  return (
    <section
      id="home"
      className="flex items-center justify-center h-screen  sm:h-[512px] lg:min-h-screen bg-[#e9ebed] bg-[url('data:image/svg+xml,%3Csvg%20width=%2764%27%20height=%2780%27%20viewBox=%270%200%2064%2080%27%20xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cg%20fill=%27%23dcdfe3%27%20fill-opacity=%270.4%27%20fill-rule=%27evenodd%27%3E%3Cpath%20d=%27M32%200v80L0%2040M64%200v40L32%200M64%2040v40H32%27/%3E%3C/g%3E%3C/svg%3E')] bg-repeat sm:bg-[#DCDFE3] md:bg-none text-white"
    >
      <div className="absolute sm:-left-65 lg:-left-85 xl:-left-65 sm:top-[256px] lg:top-1/2 -translate-y-1/2 mt-6 sm:h-100 lg:h-140 xl:h-160 sm:w-100 md:w-120 lg:w-140 xl:w-160 rounded-full bg-[#E9EBED]"></div>
      <div className="absolute mt-12 lg:mt-6 px-10 sm:px-2 lg:px-10 xl:px-0 grid w-full max-w-6xl grid-cols-1 sm:grid-cols-2 items-center lg:gap-12">
        {/* Left Side */}
        <div className="sm:pl-10 lg:pl-16 xl:pl-0 text-center sm:text-left">
          <h1 className="text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl font-bold leading-[1.2] mb-3 xl:mb-6">
            <span className="text-transparent text-stroke">Hello,</span>
            <br />
            <span className="text-primary">I'm Zulfa</span>
          </h1>
          <p className="text-xl sm:text-1xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-black mb-2 lg:mb-4">
            Full-Stack Developer
          </p>
          <p className="text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-medium leading-relaxed text-gray-600 mb-4 lg:mb-6">
            I create web experiences that are clean, scalable, and user-first.
          </p>
          <a
            href="/Resume_ZulfaBueraheng.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-sm md:text-base lg:text-lg xl:text-xl font-semibold text-white bg-accent hover:bg-secondary px-8 lg:px-10 py-2 lg:py-3 rounded-full transition-colors"
          >
            View Resume
          </a>
        </div>

        {/* Right Side */}
        <div className="flex items-center justify-center">
          <div className="w-80 sm:w-80 md:w-100 lg:w-120 xl:w-140 mt-6 sm:mt-0">
            <svg
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-auto"
            >
              <defs>
                <clipPath id="blobClip">
                  <path
                    d="M47.1,-55.7C63.3,-42.6,80.1,-29.9,84.2,-13.8C88.3,2.3,79.7,21.7,69.1,39.6C58.4,57.6,45.7,74,30.3,76.8C15,79.6,-3,68.6,-19.7,60C-36.5,51.4,-52,45.2,-58.9,33.7C-65.7,22.3,-64,5.7,-61.3,-11C-58.6,-27.7,-54.9,-44.4,-44.5,-58.4C-34.2,-72.5,-17.1,-83.9,-0.8,-82.9C15.5,-82,31,-68.7,47.1,-55.7Z"
                    transform="translate(90 100) scale(1.2)"
                  />
                </clipPath>
              </defs>
              <path
                fill="#4A698A"
                d="M47.1,-55.7C63.3,-42.6,80.1,-29.9,84.2,-13.8C88.3,2.3,79.7,21.7,69.1,39.6C58.4,57.6,45.7,74,30.3,76.8C15,79.6,-3,68.6,-19.7,60C-36.5,51.4,-52,45.2,-58.9,33.7C-65.7,22.3,-64,5.7,-61.3,-11C-58.6,-27.7,-54.9,-44.4,-44.5,-58.4C-34.2,-72.5,-17.1,-83.9,-0.8,-82.9C15.5,-82,31,-68.7,47.1,-55.7Z"
                transform="translate(90 100) scale(1.2)"
              />
              <image
                href="/image.png"
                x="40"
                y="40"
                width="120"
                height="200"
                clipPath="url(#blobClip)"
                preserveAspectRatio="xMidYMid slice"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
