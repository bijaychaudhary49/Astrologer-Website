import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { BsArrowRight, BsShieldCheck } from "react-icons/bs";
import { FiPlus, FiMinus, FiChevronRight } from "react-icons/fi";
import { products } from "../../data/products";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const [openSection, setOpenSection] = useState(null);

  if (!product) {
    return (
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <h1 className="font-heading text-3xl font-bold text-primary mb-4">
            Product Not Found
          </h1>
          <p className="text-secondary mb-8">
            The product you're looking for doesn't exist.
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 px-6 py-3 border border-theme text-primary hover:bg-surface-hover font-semibold transition-all duration-300"
          >
            Back to Shop
            <BsArrowRight />
          </Link>
        </div>
      </main>
    );
  }

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const whatsappMessage = `Hi Guruji, I'm interested in ordering: ${product.name} (Rs. ${product.price.toLocaleString()})`;
  const whatsappLink = `https://wa.me/9779821057199?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <main className="pt-24 pb-20">
      {/* Breadcrumbs */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <ol className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted">
          <li>
            <Link to="/shop" className="hover:text-primary transition-colors">
              Shop
            </Link>
          </li>
          <li>
            <FiChevronRight size={12} />
          </li>
          <li>
            <Link to="/shop" className="hover:text-primary transition-colors">
              {product.category}
            </Link>
          </li>
          <li>
            <FiChevronRight size={12} />
          </li>
          <li className="text-secondary">{product.name}</li>
        </ol>
      </nav>

      {/* Product Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Image Column */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[4/5] bg-surface-hover overflow-hidden group">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-6 left-6 flex gap-3">
                <span className="bg-white/90 backdrop-blur-md px-4 py-1.5 text-xs font-semibold text-primary uppercase tracking-widest">
                  {product.category}
                </span>
                {product.inStock && (
                  <span className="bg-cosmic-navy text-white px-4 py-1.5 text-xs font-semibold uppercase tracking-widest">
                    In Stock
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Details Column */}
          <div className="lg:col-span-5 flex flex-col">
            {/* Title & Price */}
            <div className="mb-8">
              <h1 className="font-heading text-3xl lg:text-4xl font-bold text-primary mb-4 leading-tight">
                {product.name}
              </h1>
              <div className="flex items-baseline gap-4 mb-6">
                <span className="font-heading text-2xl lg:text-3xl font-bold text-primary">
                  ₹{product.price.toLocaleString()}
                </span>
                <span className="text-xs text-muted uppercase tracking-widest">
                  Inclusive of all taxes
                </span>
              </div>
              <p className="text-base text-secondary leading-relaxed">
                {product.detailedDescription || product.description}
              </p>
            </div>

            {/* CTA Actions */}
            <div className="flex flex-col gap-4 mb-12">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-royal-purple text-white w-full py-5 flex items-center justify-center gap-3 text-xs font-semibold tracking-[0.2em] uppercase hover:opacity-90 transition-opacity"
              >
                <FaWhatsapp size={20} />
                <span>Order via WhatsApp</span>
              </a>
              <Link
                to="/contact"
                className="border border-theme text-primary w-full py-5 text-xs font-semibold tracking-[0.2em] uppercase hover:bg-surface-hover transition-colors text-center"
              >
                Schedule Astro-Consultation
              </Link>
            </div>

            {/* Trust Badge */}
            <div className="p-6 bg-surface-hover border border-theme flex items-center gap-6 mb-12">
              <div className="w-16 h-16 border-2 border-royal-purple flex items-center justify-center shrink-0">
                <BsShieldCheck className="text-royal-purple text-2xl" />
              </div>
              <div>
                <h4 className="text-xs font-semibold text-primary uppercase tracking-widest mb-1">
                  Certified Authentic
                </h4>
                <p className="text-sm text-secondary">
                  Laboratory Certified. Guaranteed 100% natural and untreated.
                </p>
              </div>
            </div>

            {/* Accordion Sections */}
            <div className="space-y-0">
              {/* Vedic Properties */}
              {(product.planet || product.energy) && (
                <div className="border-b border-theme pb-0">
                  <button
                    onClick={() => toggleSection("vedic")}
                    className="w-full flex justify-between items-center py-6 text-left group"
                  >
                    <span className="text-xs font-semibold text-primary uppercase tracking-widest">
                      Vedic Properties
                    </span>
                    {openSection === "vedic" ? (
                      <FiMinus className="text-primary" />
                    ) : (
                      <FiPlus className="text-primary" />
                    )}
                  </button>
                  {openSection === "vedic" && (
                    <div className="pb-6 space-y-4 animate-fade-in">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-surface">
                          <p className="text-[10px] text-muted uppercase tracking-widest mb-1">
                            Alignment
                          </p>
                          <p className="text-sm font-medium text-primary">
                            {product.planet}
                          </p>
                        </div>
                        <div className="p-4 bg-surface">
                          <p className="text-[10px] text-muted uppercase tracking-widest mb-1">
                            Energy
                          </p>
                          <p className="text-sm font-medium text-primary">
                            {product.energy}
                          </p>
                        </div>
                      </div>
                      <p className="text-sm text-secondary italic">
                        {product.detailedDescription || product.description}
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* Product Details */}
              <div className="border-b border-theme pb-0">
                <button
                  onClick={() => toggleSection("details")}
                  className="w-full flex justify-between items-center py-6 text-left group"
                >
                  <span className="text-xs font-semibold text-primary uppercase tracking-widest">
                    Product Details
                  </span>
                  {openSection === "details" ? (
                    <FiMinus className="text-primary" />
                  ) : (
                    <FiPlus className="text-primary" />
                  )}
                </button>
                {openSection === "details" && (
                  <div className="pb-6 animate-fade-in">
                    <ul className="space-y-3">
                      <li className="flex justify-between text-sm">
                        <span className="text-muted">Category</span>
                        <span className="text-primary font-semibold">
                          {product.category}
                        </span>
                      </li>
                      <li className="flex justify-between text-sm">
                        <span className="text-muted">Rating</span>
                        <span className="text-primary font-semibold">
                          {product.rating} / 5.0
                        </span>
                      </li>
                      <li className="flex justify-between text-sm">
                        <span className="text-muted">Availability</span>
                        <span className="text-primary font-semibold">
                          {product.inStock ? "In Stock" : "Out of Stock"}
                        </span>
                      </li>
                      <li className="flex justify-between text-sm">
                        <span className="text-muted">Certification</span>
                        <span className="text-primary font-semibold">
                          Lab Certified
                        </span>
                      </li>
                    </ul>
                  </div>
                )}
              </div>

              {/* Shipping */}
              <div className="border-b border-theme pb-0">
                <button
                  onClick={() => toggleSection("shipping")}
                  className="w-full flex justify-between items-center py-6 text-left group"
                >
                  <span className="text-xs font-semibold text-primary uppercase tracking-widest">
                    Shipping & Returns
                  </span>
                  {openSection === "shipping" ? (
                    <FiMinus className="text-primary" />
                  ) : (
                    <FiPlus className="text-primary" />
                  )}
                </button>
                {openSection === "shipping" && (
                  <div className="pb-6 animate-fade-in">
                    <p className="text-sm text-secondary mb-4">
                      Free shipping within Nepal for orders above ₹5,000.
                      Delivery within 3-5 business days. International shipping
                      available upon request via WhatsApp.
                    </p>
                    <div className="bg-surface-hover border-l-2 border-royal-purple p-4">
                      <p className="text-sm text-secondary italic">
                        All gemstones come with a 7-day return guarantee if the
                        product does not match the description.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guided by the Stars Banner */}
      <section className="mt-32 py-24 bg-cosmic-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-8">
            Guided by the Stars
          </h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-white/70 text-base mb-12">
              Every gemstone in our collection is hand-selected not just for its
              aesthetic brilliance, but for its vibrational alignment with
              celestial movements.
            </p>
            <div className="flex justify-center gap-12">
              <div className="flex flex-col items-center">
                <BsShieldCheck className="text-3xl mb-2" />
                <span className="text-xs font-semibold uppercase tracking-widest">
                  Vedic Purity
                </span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl mb-2">💎</span>
                <span className="text-xs font-semibold uppercase tracking-widest">
                  Master Cut
                </span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl mb-2">📜</span>
                <span className="text-xs font-semibold uppercase tracking-widest">
                  Legacy Sourced
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductDetail;
