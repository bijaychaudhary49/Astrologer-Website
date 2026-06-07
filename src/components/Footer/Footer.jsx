import { Link } from "react-router-dom";
import { GiCrystalBall } from "react-icons/gi";
import { FaWhatsapp, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Shop", path: "/shop" },
    { name: "Insights", path: "/insights" },
    { name: "Contact", path: "/contact" },
  ];

  const services = [
    "Birth Chart Analysis",
    "Marriage Compatibility",
    "Career Guidance",
    "Gemstone Consultation",
    "Vastu Shastra",
    "Numerology",
  ];

  return (
    <footer className="bg-cosmic-navy text-soft-ivory/80">
      {/* Gold Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-royal-purple to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 group">
              <GiCrystalBall className="text-royal-purple text-2xl group-hover:rotate-12 transition-transform duration-300" />
              <div>
                <h3 className="font-heading text-xl font-bold text-soft-ivory">
                  Jyotish<span className="text-royal-purple">Guru</span>
                </h3>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-soft-ivory/60">
              Guiding souls through the wisdom of Vedic astrology. Discover your
              cosmic path with authentic Jyotish consultations and spiritual
              remedies.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://wa.me/9779821057199"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-soft-ivory/10 flex items-center justify-center hover:bg-royal-purple hover:text-cosmic-navy transition-all duration-300"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-royal-purple mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-soft-ivory/60 hover:text-royal-purple transition-colors duration-200 flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-royal-purple/50" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-royal-purple mb-5">
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-sm text-soft-ivory/60 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-royal-purple/50" />
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-royal-purple mb-5">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FaPhoneAlt className="text-royal-purple text-sm mt-1 shrink-0" />
                <div>
                  <p className="text-sm text-soft-ivory/60">+977 98XXXXXXXX</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <FaWhatsapp className="text-royal-purple text-sm mt-1 shrink-0" />
                <div>
                  <p className="text-sm text-soft-ivory/60">+977 98XXXXXXXX</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <FaEnvelope className="text-royal-purple text-sm mt-1 shrink-0" />
                <div>
                  <p className="text-sm text-soft-ivory/60">
                    contact@jyotishguru.com
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-royal-purple text-sm mt-1 shrink-0" />
                <div>
                  <p className="text-sm text-soft-ivory/60">
                    Kathmandu, Nepal
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-soft-ivory/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-soft-ivory/40">
              © {currentYear} JyotishGuru. All rights reserved.
            </p>
            <p className="text-xs text-soft-ivory/40">
              Crafted with 🙏 and cosmic energy
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
