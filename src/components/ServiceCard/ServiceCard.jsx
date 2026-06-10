import { useState } from "react";
import { Link } from "react-router-dom";
import BookingModal from "../BookingModal/BookingModal";

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

const ServiceCard = ({ service }) => {
  const [showModal, setShowModal] = useState(false);
  const iconName = iconMap[service.icon] || "auto_awesome";

  return (
    <>
      <div className="bg-white p-10 border border-theme hover:shadow-theme-lg transition-all duration-500 group flex flex-col h-full">
        {/* Icon & Content wrapped in a link */}
        <Link to={`/services/${service.id}`} className="flex-1 block outline-none">
          {/* Icon */}
          <span className="material-symbols-outlined text-royal-purple text-4xl mb-6 inline-block">
            {iconName}
          </span>

          {/* Content */}
          <h3 className="font-heading text-2xl font-bold text-primary mb-4 group-hover:text-royal-purple transition-colors">
            {service.name}
          </h3>
          <p className="text-secondary leading-relaxed mb-8 line-clamp-4">
            {service.description}
          </p>
        </Link>

        {/* Footer */}
        <div className="mt-auto pt-2 flex items-center justify-between">
          <p className="text-xl font-bold text-primary">
            ₹{service.price.toLocaleString()}
          </p>
          <button
            onClick={() => setShowModal(true)}
            className="text-[10px] uppercase tracking-widest border px-5 py-2.5 rounded-full cursor-pointer font-semibold text-royal-purple hover:text-cosmic-navy group-hover:gap-3 transition-all flex items-center gap-2"
            id={`book-btn-${service.id}`}
          >
            BOOK NOW <span className="material-symbols-outlined text-sm">chat</span>
          </button>
        </div>
      </div>

      {showModal && (
        <BookingModal
          service={service}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
};

export default ServiceCard;
