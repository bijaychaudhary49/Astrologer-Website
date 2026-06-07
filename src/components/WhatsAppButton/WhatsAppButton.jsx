import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/+9779821057199"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-royal-purple hover:bg-royal-purple-light text-white rounded-full shadow-glow-whatsapp transition-all duration-300 hover:scale-110 active:scale-95 group"
      aria-label="Chat with us on WhatsApp"
    >
      <div className="absolute -inset-2 bg-royal-purple rounded-full opacity-20 group-hover:opacity-40 animate-ping" style={{ animationDuration: '3s' }} />
      <FaWhatsapp className="text-3xl relative z-10" />

      {/* Tooltip */}
      <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-4 py-2 bg-cosmic-navy text-white text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none shadow-theme">
        Chat with Guruji
      </span>
    </a>
  );
};

export default WhatsAppButton;
