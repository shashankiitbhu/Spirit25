import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    const debounce = (fn, delay) => {
      let timer;
      return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => fn(...args), delay);
      };
    };
    const debouncedScroll = debounce(handleScroll, 100);

    window.addEventListener("scroll", debouncedScroll);
    return () => window.removeEventListener("scroll", debouncedScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#" },
    { name: "Schedule", href: "#schedule" },
    { name: "Speakers", href: "#speakers" },
    { name: "Events", href: "#events" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div className="fixed left-0 right-0 top-0 z-[1000]">
      <nav
        className={`w-full transition-all duration-300 ${
          scrolled
            ? "bg-white/80 backdrop-blur-lg shadow-md"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between h-20 px-4">
            {/* Logo Section */}
            <div className="flex items-center space-x-4">
              <img
                src="./images/logo_2.png"
                alt="Spirit'25 Logo"
                className="h-12 w-12"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-sky-600 to-sky-400 bg-clip-text text-transparent">
                SPIRIT'25
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-sky-500 transition-colors relative group font-medium"
                >
                  {item.name}
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-sky-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                </a>
              ))}
              <a
                href="https://drive.google.com/file/d/1pYQbkwUnh6I-bSo8-yMyvb_eaDVUHijw/view"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 py-3 text-lg overflow-hidden rounded-full border-2 border-sky-600 text-sky-600 transition-all duration-300 hover:text-white"
              >
                <span className="relative z-10">Schedule</span>
                <div className="absolute inset-0 bg-sky-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full hover:text-white"></div>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-700 transition-colors duration-200 hover:text-sky-600 text-2xl font-bold p-2"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? "×" : "☰"}
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            id="mobile-menu"
            className={`md:hidden transition-all duration-300 ease-in-out ${
              isOpen
                ? "opacity-100 max-h-96"
                : "opacity-0 max-h-0 overflow-hidden"
            }`}
            role="menu"
          >
            <div className="px-4 pt-2 pb-4 space-y-2 bg-white/80 backdrop-blur-lg shadow-md rounded-b-lg">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-2 text-gray-700 hover:bg-sky-100 hover:text-sky-600 rounded-lg transition-colors duration-200"
                  role="menuitem"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="https://drive.google.com/file/d/1pYQbkwUnh6I-bSo8-yMyvb_eaDVUHijw/view"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-8 py-3 text-center rounded-full border-2 border-sky-600 text-sky-600 transition-all duration-300 hover:text-white group relative overflow-hidden"
                role="menuitem"
              >
                <span className="relative z-10">Schedule</span>
                <div className="absolute inset-0 bg-sky-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></div>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
