import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineX } from "react-icons/hi";

const BookingModal = ({ service, onClose }) => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `Hello Guruji,

I would like to book a consultation.

Service: ${service.name}
Name: ${form.name}
Phone: ${form.phone}
Date: ${form.date}
Message: ${form.message}`;

    const url = `https://wa.me/9779821057199?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-overlay animate-fade-in">
      <div
        className="bg-surface rounded-2xl w-full max-w-lg shadow-theme-lg border border-theme animate-scale-in overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative bg-gradient-to-r from-royal-purple to-cosmic-navy p-6">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <HiOutlineX size={24} />
          </button>
          <h3 className="font-heading text-xl font-bold text-white pr-8">
            Book Consultation
          </h3>
          <p className="text-sm text-white/70 mt-1">{service.name}</p>
          <p className="text-royal-purple font-semibold mt-2">
            ₹{service.price.toLocaleString()}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-[0.1em] text-muted mb-2">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Enter your full name"
              className="w-full input-underline"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase tracking-[0.1em] text-muted mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              placeholder="Your phone number"
              className="w-full input-underline"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase tracking-[0.1em] text-muted mb-2">
              Preferred Date
            </label>
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              required
              className="w-full input-underline"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase tracking-[0.1em] text-muted mb-2">
              Message (Optional)
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={2}
              placeholder="Any specific concerns or questions..."
              className="w-full bg-transparent border-0 border-b-2 border-theme rounded-none px-0 py-2 placeholder-muted focus:ring-0 focus:border-royal-purple focus:outline-none transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-cosmic-navy text-white font-semibold rounded-md transition-all duration-300 hover:shadow-theme-lg active:scale-[0.98] mt-8"
          >
            <FaWhatsapp size={20} />
            Book via WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingModal;
