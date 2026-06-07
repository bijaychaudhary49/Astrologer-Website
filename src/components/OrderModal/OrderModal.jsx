import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineX } from "react-icons/hi";

const OrderModal = ({ product, qty, onClose, image }) => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
  });

  const total = product.price * qty;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `Hello Guruji,

I want to order:

Product: ${product.name}
Quantity: ${qty}
Price per item: Rs. ${product.price.toLocaleString()}
Total: Rs. ${total.toLocaleString()}

Name: ${form.name}
Phone: ${form.phone}`;

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
        <div className="relative bg-gradient-to-r from-royal-purple/90 to-royal-purple p-6">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-cosmic-navy/70 hover:text-cosmic-navy hover:rotate-90 transition-all duration-300 transform origin-center"
            aria-label="Close modal"
          >
            <HiOutlineX size={24} />
          </button>
          <h3 className="font-heading text-xl font-bold text-cosmic-navy pr-8">
            Complete Your Order
          </h3>
          <div className="mt-3 flex items-center gap-4">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-16 h-16 object-cover rounded shadow-sm border border-theme" 
            />
            <div>
              <p className="text-sm font-medium text-cosmic-navy">
                {product.name}
              </p>
              <p className="text-sm text-cosmic-navy/70">
                Qty: {qty} × ₹{product.price.toLocaleString()} ={" "}
                <span className="font-bold text-cosmic-navy">
                  ₹{total.toLocaleString()}
                </span>
              </p>
            </div>
          </div>
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

          {/* Order Summary */}
          <div className="bg-primary rounded p-6 border border-theme mt-8">
            <h4 className="text-xs font-semibold uppercase tracking-[0.1em] text-primary mb-4">
              Order Summary
            </h4>
            <div className="space-y-2 text-sm text-secondary">
              <div className="flex justify-between">
                <span>Product</span>
                <span className="text-primary">{product.name}</span>
              </div>
              <div className="flex justify-between">
                <span>Quantity</span>
                <span className="text-primary">{qty}</span>
              </div>
              <div className="flex justify-between">
                <span>Price per item</span>
                <span className="text-primary">
                  ₹{product.price.toLocaleString()}
                </span>
              </div>
              <div className="border-t border-theme pt-3 mt-3 flex justify-between font-semibold">
                <span className="text-primary">Total</span>
                <span className="text-royal-purple">
                  ₹{total.toLocaleString()}
                </span>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-cosmic-navy text-white font-semibold rounded-md border-2 border-cosmic-navy btn-dwc btn-dwc-fill-light hover:text-cosmic-navy active:scale-[0.98] mt-8"
          >
            <FaWhatsapp size={20} />
            Order via WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
};

export default OrderModal;
