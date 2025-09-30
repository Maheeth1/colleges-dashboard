import { NavLink } from 'react-router-dom';
import useDarkMode from '../hooks/useDarkMode';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

const Navbar = () => {
  const [isDarkMode, toggleDarkMode] = useDarkMode();

  return (
    <header className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-sm sticky top-0 z-50 transition-colors duration-300">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <NavLink to="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              AspireNext
            </NavLink>
          </div>
          <div className="hidden sm:flex sm:items-center sm:space-x-4">
            {/* ✨ ADDED All Navigation Links */}
            <NavLink to="/" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Home</NavLink>
            <NavLink to="/colleges" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Colleges</NavLink>
            <NavLink to="/reviews" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Reviews</NavLink>
            <NavLink to="/favorites" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Favorites</NavLink>
            <NavLink to="/logout" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Logout</NavLink>
            
            {/* ✨ ADDED Dark Mode Toggle Button */}
            <button
              onClick={() => toggleDarkMode()}
              className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <SunIcon className="w-6 h-6" /> : <MoonIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;