const Home = () => {
  return (
    <section
      id="home"
      className="bg-primary text-white px-22 sm:px-22 md:px-22 lg:px-12 py-20 min-h-screen flex items-center justify-center"
    >
      
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-4">
            <span className="text-transparent text-stroke">Hello,</span>
            <br />
            <span className="text-secondary">I'm Zulfa</span>
          </h1>
          <p className="text-xl sm:text-2xl lg:text-4xl mb-2">
            Full-Stack Developer
          </p>
          <p className="text-base sm:text-lg lg:text-2xl text-gray-300 mb-8 leading-relaxed">
            I create web experiences that are clean, scalable, and user-first.
          </p>
          <a
            href="/Resume_ZulfaBueraheng.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm sm:text-lg inline-block text-tertiaty bg-secondary hover:text-secondary hover:bg-tertiaty px-6 sm:px-8 py-3 rounded-full font-semibold transition-colors"
          >
            View Resume
          </a>
        </div>

        <div className="flex justify-center items-center">
          <div className="group cursor-pointer">
            <div className="text-[6rem] sm:text-[10rem] md:text-[14rem] lg:text-[20rem] text-orange-500 transition-colors duration-300 group-hover:text-purple-600 group-hover:animate-bounce">
              👩‍💻
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
