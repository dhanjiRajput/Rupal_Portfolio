import { motion } from 'framer-motion';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useDarkMode } from '../contexts/DarkModeContext';

const DarkModeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <motion.button
      onClick={toggleDarkMode}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-linear-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <motion.div
        key={isDarkMode ? 'dark' : 'light'}
        initial={{ rotate: -180, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        exit={{ rotate: 180, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {isDarkMode ? (
          <FaSun className="text-yellow-300 text-xl" />
        ) : (
          <FaMoon className="text-white text-xl" />
        )}
      </motion.div>
    </motion.button>
  );
};

export default DarkModeToggle;
