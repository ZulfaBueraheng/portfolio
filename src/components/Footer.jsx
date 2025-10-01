const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-white bg-primary">
      <div className="max-w-6xl mx-auto text-sm sm:text-base px-4 py-2">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-white">
            © {currentYear} Zulfa Bueraheng. All rights reserved.
          </div>
          <div className="flex items-center space-x-2 text-white">
            <span>Made with</span>
            <span>in Thailand</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
