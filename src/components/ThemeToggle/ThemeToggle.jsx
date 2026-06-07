import { useTheme } from "../../utils/ThemeContext";
import { FiSun, FiMoon } from "react-icons/fi";

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative w-14 h-7 rounded-full bg-dark-indigo dark:bg-royal-purple/20 border border-theme transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-royal-purple/50 group"
      aria-label="Toggle theme"
    >
      <span
        className={`absolute top-0.5 left-0.5 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
          isDark
            ? "translate-x-7 bg-royal-purple text-cosmic-navy"
            : "translate-x-0 bg-royal-purple text-cosmic-navy"
        }`}
      >
        {isDark ? <FiMoon size={14} /> : <FiSun size={14} />}
      </span>
    </button>
  );
};

export default ThemeToggle;
