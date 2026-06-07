import { useState } from "react";
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
        {/* Icon */}
        <span className="material-symbols-outlined text-royal-purple text-4xl mb-6 inline-block">
          {iconName}
        </span>

        {/* Content */}
        <div className="flex-1">
          <h3 className="font-heading text-2xl font-bold text-primary mb-4">
            {service.name}
          </h3>
          <p className="text-secondary leading-relaxed mb-8 line-clamp-4">
            {service.description}
          </p>
        </div>

        {/* Footer */}
        <div className="mt-auto pt-2 flex items-center justify-between">
          <p className="text-xl font-bold text-primary">
            ₹{service.price.toLocaleString()}
          </p>
          <button
            onClick={() => setShowModal(true)}
            className="text-[10px] uppercase tracking-widest font-semibold text-royal-purple group-hover:gap-3 transition-all flex items-center gap-2"
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
