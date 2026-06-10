import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { GiCrystalBall } from "react-icons/gi";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Shop", path: "/shop" },
  { name: "Insights", path: "/insights" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={`z-40 sticky max-w-7xl w-full mx-auto transition-all duration-300 ${
        scrolled ? "top-4" : "top-0"
      }`}
    >
      <div
        className={`rounded-full px-4 sm:px-6 lg:px-8
        ${
          scrolled
            ? "bg-surface/20 backdrop-blur-xl shadow-theme-lg border-2 border-white"
            : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 group"
            id="navbar-logo"
          >
            <GiCrystalBall className="text-royal-purple text-2xl lg:text-3xl group-hover:rotate-12 transition-transform duration-300" />
            <div>
              <h1 className="font-heading text-lg lg:text-xl font-bold text-primary leading-tight">
                Jyotish<span className="text-royal-purple">Guru</span>
              </h1>
              <p className="text-[10px] text-muted tracking-widest uppercase hidden sm:block">
                Vedic Astrology
              </p>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                  location.pathname === link.path
                    ? "text-royal-purple"
                    : "text-secondary hover:text-primary"
                }`}
                id={`nav-${link.name.toLowerCase()}`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-royal-purple rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* Right Section */}
          {/* <div className="flex items-center gap-3"> */}
            {/* <ThemeToggle /> */}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg text-primary hover:bg-surface-hover transition-colors"
              aria-label="Toggle menu"
              id="mobile-menu-toggle"
            >
              {isOpen ? (
                <HiOutlineX size={24} />
              ) : (
                <HiOutlineMenuAlt3 size={24} />
              )}
            </button>
          {/* </div> */}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-surface/95 backdrop-blur-xl border-t border-theme px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                location.pathname === link.path
                  ? "bg-royal-purple/10 text-royal-purple"
                  : "text-secondary hover:bg-surface-hover hover:text-primary"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
