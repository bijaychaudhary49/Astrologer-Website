import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-theme">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-5 md:px-16 py-16 max-w-[1280px] mx-auto">
        {/* Brand */}
        <div className="space-y-6">
          <Link to="/" className="block">
            <div className="font-heading text-2xl font-bold text-primary">
              Jyotish<span className="text-royal-purple">Guru</span>
            </div>
          </Link>
          <p className="text-secondary text-sm max-w-xs leading-relaxed">
            Connecting the celestial dots for the modern conscious explorer.
            Wisdom passed through generations.
          </p>
        </div>

        {/* Explore */}
        <div className="flex flex-col gap-4">
          <h5 className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">
            Explore
          </h5>
          <Link
            to="/"
            className="text-secondary hover:text-royal-purple transition-colors text-sm"
          >
            Home
          </Link>
          <Link
            to="/services"
            className="text-secondary hover:text-royal-purple transition-colors text-sm"
          >
            Services
          </Link>
          <Link
            to="/shop"
            className="text-secondary hover:text-royal-purple transition-colors text-sm"
          >
            Shop
          </Link>
          <Link
            to="/about"
            className="text-secondary hover:text-royal-purple transition-colors text-sm"
          >
            About
          </Link>
          <Link
            to="/insights"
            className="text-secondary hover:text-royal-purple transition-colors text-sm"
          >
            Insights
          </Link>
        </div>

        {/* Legal */}
        <div className="flex flex-col gap-4">
          <h5 className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">
            Legal
          </h5>
          <a
            href="#"
            className="text-secondary hover:text-royal-purple transition-colors text-sm"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-secondary hover:text-royal-purple transition-colors text-sm"
          >
            Terms of Service
          </a>
        </div>

        {/* Follow / Contact */}
        <div className="space-y-6">
          <h5 className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">
            Connect
          </h5>
          <div className="flex gap-6">
            <a
              href="https://wa.me/9779821057199"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-royal-purple transition-all"
              aria-label="WhatsApp"
            >
              <span className="material-symbols-outlined">chat</span>
            </a>
            <a
              href="mailto:contact@jyotishguru.com"
              className="text-secondary hover:text-royal-purple transition-all"
              aria-label="Email"
            >
              <span className="material-symbols-outlined">mail</span>
            </a>
            <Link
              to="/contact"
              className="text-secondary hover:text-royal-purple transition-all"
              aria-label="Contact"
            >
              <span className="material-symbols-outlined">public</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-theme py-8 px-5 md:px-16 max-w-[1280px] mx-auto flex flex-col sm:flex-row justify-between items-center text-muted">
        <span className="text-xs font-semibold tracking-widest">
          © {currentYear} JyotishGuru. Ancient Wisdom for Modern Souls.
        </span>
        <div className="flex gap-4 mt-3 sm:mt-0">
          <span className="w-1.5 h-1.5 bg-royal-purple rounded-full" />
          <span className="w-1.5 h-1.5 bg-cosmic-navy rounded-full" />
          <span className="w-1.5 h-1.5 bg-royal-purple/50 rounded-full" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
