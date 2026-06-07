import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { services } from "../../data/services";
import BookingModal from "../../components/BookingModal/BookingModal";

const iconMap = {
  chart: "auto_awesome",
  heart: "favorite",
  briefcase: "work",
  calendar: "calendar_today",
  gem: "diamond",
  home: "home",
  alert: "warning",
  hash: "tag",
  flame: "local_fire_department",
  baby: "child_care",
  health: "monitor_heart",
  money: "payments",
  clock: "schedule",
  hand: "pan_tool",
  shield: "shield",
  love: "favorite",
};

const ServiceDetail = () => {
  const { id } = useParams();
  const service = services.find((s) => s.id === parseInt(id));
  const [showModal, setShowModal] = useState(false);

  if (!service) {
    return (
      <main className="pt-20">
        <div className="max-w-[1280px] mx-auto px-5 md:px-16 py-32 text-center">
          <h1 className="font-heading text-3xl font-bold text-primary mb-4">
            Service Not Found
          </h1>
          <p className="text-secondary mb-8">
            The service you're looking for doesn't exist.
          </p>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-cosmic-navy text-cosmic-navy font-semibold btn-dwc btn-dwc-fill-dark hover:text-white transition-all duration-300 uppercase tracking-widest text-xs"
          >
            Back to Services
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
        </div>
      </main>
    );
  }

  const iconName = iconMap[service.icon] || "auto_awesome";

  return (
    <main className="pt-24 pb-20 bg-white min-h-screen">
      <div className="max-w-[1280px] mx-auto px-5 md:px-16">
        {/* Breadcrumbs */}
        <nav className="mb-12">
          <ol className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted">
            <li>
              <Link to="/services" className="hover:text-primary transition-colors">
                Services
              </Link>
            </li>
            <li>
              <span className="material-symbols-outlined text-sm">chevron_right</span>
            </li>
            <li>
              <span className="text-primary">{service.name}</span>
            </li>
          </ol>
        </nav>

        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Main Content Area */}
          <div className="lg:col-span-8">
            <div className="mb-12">
              <span className="material-symbols-outlined text-royal-purple text-6xl mb-8 inline-block">
                {iconName}
              </span>
              <span className="text-xs font-semibold text-royal-purple tracking-[0.2em] uppercase mb-4 block">
                {service.category}
              </span>
              <h1 className="font-heading text-4xl lg:text-5xl font-bold text-primary mb-8 leading-tight">
                {service.name}
              </h1>
              <div className="text-2xl font-bold text-primary mb-8">
                ₹{service.price.toLocaleString()}
              </div>
              <div className="prose prose-lg max-w-none text-secondary leading-relaxed">
                <p>{service.description}</p>
                <p className="mt-6">
                  Experience a profound consultation that brings clarity and guidance.
                  Our Vedic astrology services are deeply personalized to help you navigate
                  life's path with ancient wisdom.
                </p>
              </div>
            </div>

            {/* What's Included Section (Mock data) */}
            <div className="border-t border-theme pt-12 mt-12">
              <h2 className="font-heading text-2xl font-bold text-primary mb-6">
                What's Included
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-royal-purple text-xl shrink-0">check_circle</span>
                  <span className="text-secondary">Detailed chart analysis and planetary positioning report.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-royal-purple text-xl shrink-0">check_circle</span>
                  <span className="text-secondary">Personalized remedies and practical guidance.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-royal-purple text-xl shrink-0">check_circle</span>
                  <span className="text-secondary">Direct consultation session with Guruji.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Sticky Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 border border-theme p-8 bg-surface">
              <h3 className="font-heading text-xl font-bold text-primary mb-4">
                Book a Consultation
              </h3>
              <p className="text-secondary mb-8 text-sm">
                Reserve your session with Guruji. We will coordinate a suitable time for your comprehensive reading.
              </p>
              <button
                onClick={() => setShowModal(true)}
                className="w-full bg-cosmic-navy text-white px-8 py-4 text-xs font-semibold uppercase tracking-widest whitespace-nowrap border-2 border-cosmic-navy btn-dwc btn-dwc-fill-light hover:text-cosmic-navy flex items-center justify-center gap-2"
              >
                BOOK NOW
                <span className="material-symbols-outlined text-sm">event_available</span>
              </button>

              <div className="mt-8 pt-6 border-t border-theme">
                <p className="text-xs uppercase tracking-widest text-muted mb-4 font-semibold">
                  Need Help?
                </p>
                <div className="flex items-center gap-3 text-sm text-secondary">
                  <span className="material-symbols-outlined text-lg">mail</span>
                  <a href="mailto:support@jyotishguru.com" className="hover:text-primary transition-colors">
                    support@jyotishguru.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <BookingModal
          service={service}
          onClose={() => setShowModal(false)}
        />
      )}
    </main>
  );
};

export default ServiceDetail;
