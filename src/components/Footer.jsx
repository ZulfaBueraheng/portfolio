import { Heart } from "lucide-react"; // Make sure this is imported

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-tertiaty text-white">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-300">
            © {currentYear} Zulfa Bueraheng. All rights reserved.
          </div>
          <div className="flex items-center space-x-2 text-gray-300">
            <span>Made with</span>
            <Heart size={16} className="text-red-500 animate-pulse" />
            <span>in Thailand</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
