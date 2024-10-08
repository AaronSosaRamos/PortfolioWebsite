import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon, SunIcon, MoonIcon } from '@heroicons/react/24/outline';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    document.querySelector(targetId)?.scrollIntoView({
      behavior: 'smooth',
    });
    setIsOpen(false);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  return (
    <nav className="bg-gradient-to-r from-purple-800 to-black fixed w-full z-10 top-0 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="/#main" onClick={(e) => handleLinkClick(e, '#main')}>
                <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 cursor-pointer">
                  WilfredoSosaAI
                </span>
              </a>
            </div>
          </div>

          {/* Sección del menú y toggle alineados */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="/#experience" onClick={(e) => handleLinkClick(e, '#experience')}>
              <span className="text-gray-300 hover:bg-purple-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer transition duration-300 ease-in-out">
                Experience
              </span>
            </a>
            <a href="/#projects" onClick={(e) => handleLinkClick(e, '#projects')}>
              <span className="text-gray-300 hover:bg-purple-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer transition duration-300 ease-in-out">
                Projects
              </span>
            </a>
            <a href="/#repositories" onClick={(e) => handleLinkClick(e, '#repositories')}>
              <span className="text-gray-300 hover:bg-purple-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer transition duration-300 ease-in-out">
                Repositories
              </span>
            </a>
            <a href="/#courses" onClick={(e) => handleLinkClick(e, '#courses')}>
              <span className="text-gray-300 hover:bg-purple-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer transition duration-300 ease-in-out">
                Courses
              </span>
            </a>
            <Link href="/#researches" onClick={(e) => handleLinkClick(e, '#researches')}>
              <span className="text-gray-300 hover:bg-purple-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer transition duration-300 ease-in-out">
                Researches
              </span>
            </Link>
            <Link href="/#contact" onClick={(e) => handleLinkClick(e, '#contact')}>
              <span className="text-gray-300 hover:bg-purple-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer transition duration-300 ease-in-out">
                Contact
              </span>
            </Link>

            {/* Toggle Dark Mode Alineado */}
            <button
              onClick={toggleDarkMode}
              className="text-gray-300 hover:text-white focus:outline-none ml-4"
            >
              {isDarkMode ? <SunIcon className="h-6 w-6" /> : <MoonIcon className="h-6 w-6" />}
            </button>
          </div>

          <div className="mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
            >
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {/* Links del menú móvil */}
            <a href="/#experience" onClick={(e) => handleLinkClick(e, '#experience')}>
              <span className="text-gray-300 hover:bg-purple-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer transition duration-300 ease-in-out">
                Experience
              </span>
            </a>
            <a href="/#projects" onClick={(e) => handleLinkClick(e, '#projects')}>
              <span className="text-gray-300 hover:bg-purple-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer transition duration-300 ease-in-out">
                Projects
              </span>
            </a>
            <a href="/#repositories" onClick={(e) => handleLinkClick(e, '#repositories')}>
              <span className="text-gray-300 hover:bg-purple-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer transition duration-300 ease-in-out">
                Repositories
              </span>
            </a>
            <a href="/#courses" onClick={(e) => handleLinkClick(e, '#courses')}>
              <span className="text-gray-300 hover:bg-purple-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer transition duration-300 ease-in-out">
                Courses
              </span>
            </a>
            <Link href="/#researches" onClick={(e) => handleLinkClick(e, '#researches')}>
              <span className="text-gray-300 hover:bg-purple-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer transition duration-300 ease-in-out">
                Researches
              </span>
            </Link>
            <Link href="/#contact" onClick={(e) => handleLinkClick(e, '#contact')}>
              <span className="text-gray-300 hover:bg-purple-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer transition duration-300 ease-in-out">
                Contact
              </span>
            </Link>
            
            {/* Toggle Dark Mode para móvil */}
            <div className="mt-4 flex justify-center">
              <button
                onClick={toggleDarkMode}
                className="text-gray-300 hover:text-white focus:outline-none"
              >
                {isDarkMode ? <SunIcon className="h-6 w-6" /> : <MoonIcon className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
