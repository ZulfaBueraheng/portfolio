import { useState } from "react";
import { Menu, X } from "lucide-react"; // icon จาก lucide-react หรือใช้ svg ตรง ๆ ก็ได้

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { href: "#home", label: "HOME" },
    { href: "#about", label: "ABOUT" },
    { href: "#experience", label: "EXPERIENCE" },
    { href: "#projects", label: "PROJECT" },
    { href: "#contact", label: "CONTACT" },
  ];

  return (
    <nav className="fixed z-50 w-full text-tertiaty bg-gray-200/10 backdrop-blur-md shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-2 flex items-center justify-between">
        <div className="text-xl font-bold">Zulfa</div>
        <div className="hidden md:flex space-x-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-4 rounded-full transition-all duration-200 hover:bg-secondary hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </div>

        <button className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden px-6 pb-4 space-y-2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 rounded-full transition-all duration-200 hover:bg-secondary hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
