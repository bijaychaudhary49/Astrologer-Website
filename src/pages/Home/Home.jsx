import { Link } from "react-router-dom";
import { FaWhatsapp, FaStar, FaQuoteLeft } from "react-icons/fa";
import { BsArrowRight, BsStars } from "react-icons/bs";
import { GiCrystalBall, GiMoonOrbit, GiSunrise } from "react-icons/gi";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import ArticleCard from "../../components/ArticleCard/ArticleCard";
import { services } from "../../data/services";
import { articles } from "../../data/articles";

const testimonials = [
  {
    name: "Rajesh Sharma",
    location: "Kathmandu",
    text: "Guruji's predictions about my career were incredibly accurate. His remedies helped me get the promotion I had been waiting for years. Truly a life-changing experience.",
    rating: 5,
  },
  {
    name: "Sunita Devi",
    location: "Pokhara",
    text: "I was worried about my marriage compatibility. Guruji analyzed both charts thoroughly and suggested perfect remedies. We are happily married now. Thank you, Guruji!",
    rating: 5,
  },
  {
    name: "Amit Patel",
    location: "Biratnagar",
    text: "The gemstone recommendation from Guruji changed my fortune completely. His knowledge of Vedic astrology is remarkable and his approach is very genuine.",
    rating: 5,
  },
];

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "10K+", label: "Consultations" },
  { value: "5K+", label: "Happy Clients" },
  { value: "98%", label: "Accuracy" },
];

const Home = () => {
  const featuredServices = services.slice(0, 6);
  const featuredArticles = articles.filter((a) => a.featured).slice(0, 3);

  return (
    <main>
      {/* ═══ HERO SECTION ═══ */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-hero constellation-bg" id="hero">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-royal-purple/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-royal-purple/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-royal-purple/5 rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-royal-purple/5 rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <div className="animate-slide-up">
              <div className="flex items-center gap-2 mb-6">
                <BsStars className="text-royal-purple" />
                <span className="text-xs font-semibold text-royal-purple tracking-[0.1em] uppercase">
                  Vedic Astrology & Spiritual Guidance
                </span>
              </div>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-primary leading-tight mb-6">
                Unlock Your{" "}
                <span className="text-royal-purple">Cosmic</span>{" "}
                Destiny
              </h1>
              <p className="text-lg text-secondary leading-relaxed mb-8 max-w-lg">
                Discover the ancient wisdom of Jyotish Shastra. Get personalized
                birth chart analysis, gemstone recommendations, and spiritual
                guidance to navigate life's journey with confidence.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border border-theme text-primary font-semibold rounded transition-all duration-300 hover:shadow-theme-lg active:scale-[0.98]"
                  id="hero-cta-services"
                >
                  Explore Services
                  <BsArrowRight />
                </Link>
                <a
                  href="https://wa.me/9779821057199"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-cosmic-navy hover:bg-cosmic-navy/90 text-white font-semibold rounded transition-all duration-300 shadow-theme hover:shadow-theme-lg active:scale-[0.98]"
                  id="hero-cta-whatsapp"
                >
                  <FaWhatsapp size={20} />
                  Consult Now
                </a>
              </div>
            </div>

            {/* Right: Decorative */}
            <div className="hidden lg:flex justify-center items-center animate-fade-in">
              <div className="relative">
                <div className="w-80 h-80 rounded-full bg-gradient-to-br from-royal-purple/20 to-royal-purple/20 flex items-center justify-center animate-glow">
                  <div className="w-60 h-60 rounded-full bg-gradient-to-br from-royal-purple/30 to-royal-purple/30 flex items-center justify-center">
                    <GiCrystalBall className="text-royal-purple text-8xl opacity-80" />
                  </div>
                </div>
                <GiMoonOrbit className="absolute -top-4 -right-4 text-royal-purple-light text-4xl animate-float" />
                <GiSunrise className="absolute -bottom-4 -left-4 text-royal-purple text-4xl animate-float" style={{ animationDelay: "2s" }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ STATS ═══ */}
      <section className="py-20 bg-surface border-y border-theme">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl lg:text-4xl font-bold text-royal-purple font-heading">
                  {stat.value}
                </p>
                <p className="text-sm text-secondary mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FEATURED SERVICES ═══ */}
      <section className="py-32 bg-primary" id="featured-services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold text-royal-purple tracking-[0.1em] uppercase">
              What We Offer
            </span>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-primary mt-3">
              Our Astrology Services
            </h2>
            <p className="text-secondary mt-4 max-w-2xl mx-auto">
              From birth chart analysis to gemstone recommendations, we offer
              comprehensive Vedic astrology services tailored to your unique
              cosmic blueprint.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-3 border border-theme text-primary hover:bg-surface-hover font-semibold rounded transition-all duration-300"
            >
              View All Services
              <BsArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ ABOUT PREVIEW ═══ */}
      <section className="py-32 bg-surface" id="about-preview">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image/Decorative Side */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-2xl bg-gradient-to-br from-royal-purple/30 to-royal-purple/20 flex items-center justify-center rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-2xl bg-gradient-to-br from-cosmic-navy to-dark-indigo flex items-center justify-center -rotate-3 hover:rotate-0 transition-transform duration-500 overflow-hidden">
                    <div className="text-center">
                      <GiCrystalBall className="text-royal-purple text-7xl mx-auto mb-3 opacity-80" />
                      <p className="text-royal-purple font-heading text-2xl font-bold">
                        Guruji
                      </p>
                      <p className="text-soft-ivory/60 text-sm mt-1">
                        Vedic Astrologer
                      </p>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded bg-royal-purple/20 border border-royal-purple/30 flex items-center justify-center">
                  <span className="text-royal-purple font-heading font-bold text-lg">
                    15+
                  </span>
                </div>
              </div>
            </div>

            {/* Text */}
            <div>
              <span className="text-xs font-semibold text-royal-purple tracking-[0.1em] uppercase">
                About Your Astrologer
              </span>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-primary mt-3 mb-6">
                Guided by the Stars, Rooted in Tradition
              </h2>
              <p className="text-secondary leading-relaxed mb-4">
                With over 15 years of dedicated practice in Vedic astrology,
                Guruji has helped thousands of individuals discover their true
                potential and navigate life's challenges with cosmic wisdom.
              </p>
              <p className="text-secondary leading-relaxed mb-6">
                Trained in the ancient Parashari and Jaimini systems of Jyotish
                Shastra, Guruji combines traditional knowledge with compassionate
                guidance to provide accurate predictions and effective remedies.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-royal-purple font-semibold hover:gap-3 transition-all duration-300"
              >
                Read Full Story
                <BsArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section className="py-32 bg-primary" id="testimonials">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold text-royal-purple tracking-[0.1em] uppercase">
              Client Stories
            </span>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-primary mt-3">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-theme p-6 shadow-theme hover:shadow-theme-lg transition-all duration-300 hover:-translate-y-1"
              >
                <FaQuoteLeft className="text-royal-purple/30 text-2xl mb-4" />
                <p className="text-secondary text-sm leading-relaxed mb-6">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-theme">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-royal-purple to-royal-purple flex items-center justify-center text-white font-bold text-sm">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-primary">
                      {t.name}
                    </p>
                    <p className="text-xs text-muted">{t.location}</p>
                  </div>
                  <div className="ml-auto flex gap-0.5">
                    {[...Array(t.rating)].map((_, j) => (
                      <FaStar key={j} size={12} className="text-royal-purple" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FEATURED INSIGHTS ═══ */}
      <section className="py-32 bg-surface" id="featured-insights">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold text-royal-purple tracking-[0.1em] uppercase">
              Knowledge & Wisdom
            </span>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-primary mt-3">
              Astrology Insights
            </h2>
            <p className="text-secondary mt-4 max-w-2xl mx-auto">
              Explore our collection of articles on planetary transits, spiritual
              practices, and ancient wisdom.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/insights"
              className="inline-flex items-center gap-2 px-6 py-3 border border-theme text-primary hover:bg-surface-hover font-semibold rounded transition-all duration-300"
            >
              View All Articles
              <BsArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ CTA SECTION ═══ */}
      <section className="py-32 bg-gradient-to-r from-cosmic-navy via-dark-indigo to-cosmic-navy" id="cta">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <BsStars className="text-royal-purple text-4xl mx-auto mb-6" />
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-soft-ivory mb-4">
            Ready to Discover Your Cosmic Path?
          </h2>
          <p className="text-soft-ivory/70 mb-8 max-w-2xl mx-auto">
            Take the first step towards understanding your destiny. Connect with
            Guruji today for a personalized astrology consultation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/9779821057199"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-royal-purple hover:bg-royal-purple-light text-white font-semibold rounded transition-all duration-300 shadow-theme hover:shadow-theme-lg"
            >
              <FaWhatsapp size={20} />
              Chat on WhatsApp
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 border border-soft-ivory/30 text-soft-ivory hover:bg-soft-ivory/10 font-semibold rounded transition-all duration-300"
            >
              Contact Us
              <BsArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
