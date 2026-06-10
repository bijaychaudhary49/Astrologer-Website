import { useState } from "react";
import { BsStars, BsSearch } from "react-icons/bs";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import { services, serviceCategories } from "../../data/services";

const Services = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredServices = services.filter((service) => {
    const matchCategory =
      activeCategory === "All" || service.category === activeCategory;
    const matchSearch =
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <main className="">
      {/* ═══ HERO ═══ */}
      <section className="py-16 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-10 w-64 h-64 bg-royal-purple/5 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-sm font-medium text-royal-purple tracking-widest uppercase flex items-center justify-center gap-2">
            <BsStars /> Our Services
          </span>
          <h1 className="font-heading text-4xl lg:text-5xl font-bold text-primary mt-4 mb-4">
            Vedic Astrology <span className="text-royal-purple">Services</span>
          </h1>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Explore our comprehensive range of Jyotish services designed to
            illuminate your path and empower your decisions.
          </p>
        </div>
      </section>

      {/* ═══ FILTERS ═══ */}
      <section className="py-8 bg-surface z-30">
        <div className="px-4 sm:px-6 lg:px-16 max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-end border-b border-theme pb-4 gap-6">
          {/* Categories */}
          <div className="flex gap-8 overflow-x-auto no-scrollbar w-full sm:w-auto">
            {serviceCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-xs font-semibold uppercase tracking-widest pb-2 whitespace-nowrap transition-colors cursor-pointer ${
                  activeCategory === cat
                    ? "text-royal-purple border-b-2 border-royal-purple"
                    : "text-muted hover:text-primary"
                }`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full sm:w-72 mb-4 md:mb-0">
            <BsSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
            <input
              type="text"
              placeholder="Search services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-primary border border-theme text-primary placeholder-muted text-sm focus:outline-none focus:ring-2 focus:ring-royal-purple/50 focus:border-royal-purple transition-all rounded-full"
            />
          </div>
        </div>
      </section>

      {/* ═══ SERVICES GRID ═══ */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredServices.length > 0 ? (
            <>
              <p className="text-sm text-muted mb-6">
                Showing {filteredServices.length} service
                {filteredServices.length !== 1 ? "s" : ""}
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredServices.map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-20">
              <BsSearch className="text-muted text-4xl mx-auto mb-4" />
              <p className="text-lg text-secondary">No services found</p>
              <p className="text-sm text-muted mt-1">
                Try adjusting your search or category filter.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Services;
