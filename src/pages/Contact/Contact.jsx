import { useState } from "react";
import { FaWhatsapp, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import { sendToWhatsApp } from "../../utils/whatsapp";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `Hello Guruji,

I am contacting you regarding: ${form.subject}

Name: ${form.name}
Phone: ${form.phone}
Message: ${form.message}`;

    sendToWhatsApp(msg);
  };

  return (
    <main className="pt-20">
      {/* ═══ HERO ═══ */}
      <section className="py-16 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-20 w-80 h-80 bg-royal-purple/5 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-sm font-medium text-royal-purple tracking-widest uppercase flex items-center justify-center gap-2">
            <BsStars /> Get in Touch
          </span>
          <h1 className="font-heading text-4xl lg:text-5xl font-bold text-primary mt-4 mb-4">
            Connect with <span className="text-royal-purple">Guruji</span>
          </h1>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Reach out for consultations, inquiries about our spiritual products,
            or to schedule an appointment.
          </p>
        </div>
      </section>

      {/* ═══ CONTACT SECTION ═══ */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Info & Map */}
            <div className="space-y-10">
              {/* Info Cards */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6 shadow-theme">
                  <div className="w-12 h-12 rounded bg-royal-purple/10 flex items-center justify-center mb-4">
                    <FaWhatsapp className="text-royal-purple text-xl" />
                  </div>
                  <h3 className="font-heading font-semibold text-primary mb-1">
                    WhatsApp Chat
                  </h3>
                  <p className="text-sm text-secondary mb-3">
                    Fastest way to reach us
                  </p>
                  <a
                    href="https://wa.me/9779821057199"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-royal-purple font-medium text-sm hover:underline"
                  >
                    +977 98XXXXXXXX
                  </a>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-theme">
                  <div className="w-12 h-12 rounded bg-surface-hover flex items-center justify-center mb-4">
                    <FaPhoneAlt className="text-secondary text-xl" />
                  </div>
                  <h3 className="font-heading font-semibold text-primary mb-1">
                    Phone Call
                  </h3>
                  <p className="text-sm text-secondary mb-3">
                    Mon-Sat, 10am - 6pm
                  </p>
                  <a
                    href="tel:+9779821057199"
                    className="text-secondary font-medium text-sm hover:underline"
                  >
                    +977 98XXXXXXXX
                  </a>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-theme">
                  <div className="w-12 h-12 rounded bg-surface-hover flex items-center justify-center mb-4">
                    <FaEnvelope className="text-secondary text-xl" />
                  </div>
                  <h3 className="font-heading font-semibold text-primary mb-1">
                    Email Us
                  </h3>
                  <p className="text-sm text-secondary mb-3">
                    For general queries
                  </p>
                  <a
                    href="mailto:contact@jyotishguru.com"
                    className="text-secondary font-medium text-sm hover:underline break-all"
                  >
                    contact@jyotishguru.com
                  </a>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-theme">
                  <div className="w-12 h-12 rounded bg-surface-hover flex items-center justify-center mb-4">
                    <FaMapMarkerAlt className="text-secondary text-xl" />
                  </div>
                  <h3 className="font-heading font-semibold text-primary mb-1">
                    Visit Clinic
                  </h3>
                  <p className="text-sm text-secondary mb-3">
                    By appointment only
                  </p>
                  <p className="text-secondary font-medium text-sm">
                    Kathmandu, Nepal
                  </p>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden border border-theme shadow-theme h-64 bg-white relative">
                {/* Embedded Map (Placeholder if actual location not provided) */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113032.64621415444!2d85.25065538234674!3d27.70894272671569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1bf18db1ea!2sKathmandu%2044600%2C%20Nepal!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps"
                  className="grayscale opacity-80"
                ></iframe>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-3xl border border-theme p-8 shadow-theme-lg">
              <h2 className="font-heading text-2xl font-bold text-primary mb-2">
                Send a Message
              </h2>
              <p className="text-sm text-secondary mb-8">
                Fill out the form below and we'll reply directly via WhatsApp.
              </p>

              <form onSubmit={handleSubmit} className="space-y-8 mt-8">
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
                    Phone Number (WhatsApp)
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    placeholder="Your WhatsApp number"
                    className="w-full input-underline"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-[0.1em] text-muted mb-2">
                    Subject
                  </label>
                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    className="w-full input-underline text-primary"
                  >
                    <option value="" disabled>
                      Select a topic
                    </option>
                    <option value="Consultation Inquiry">
                      Consultation Inquiry
                    </option>
                    <option value="Product Inquiry">Product Inquiry</option>
                    <option value="General Question">General Question</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-[0.1em] text-muted mb-2">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={3}
                    placeholder="How can we help you?"
                    className="w-full input-underline resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-cosmic-navy text-white font-semibold rounded-md border-2 border-cosmic-navy btn-dwc btn-dwc-fill-light hover:text-cosmic-navy active:scale-[0.98] mt-8"
                >
                  <FaWhatsapp size={20} />
                  Send Message via WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
