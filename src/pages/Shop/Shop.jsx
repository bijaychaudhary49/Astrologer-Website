import { useState } from "react";
import { BsStars, BsSearch } from "react-icons/bs";
import ProductCard from "../../components/ProductCard/ProductCard";
import { products, productCategories } from "../../data/products";

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("default");

  let filteredProducts = products.filter((product) => {
    const matchCategory =
      activeCategory === "All" || product.category === activeCategory;
    const matchSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  // Sort
  if (sortBy === "price-low") {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  } else if (sortBy === "price-high") {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  } else if (sortBy === "rating") {
    filteredProducts = [...filteredProducts].sort((a, b) => b.rating - a.rating);
  }

  return (
    <main className="">
      {/* ═══ HERO ═══ */}
      <section className="py-16 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-royal-purple/5 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-xs font-semibold text-royal-purple tracking-[0.1em] uppercase flex items-center justify-center gap-2">
            <BsStars /> Sacred Shop
          </span>
          <h1 className="font-heading text-4xl lg:text-5xl font-bold text-primary mt-4 mb-4">
            Spiritual <span className="text-royal-purple">Products</span>
          </h1>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Explore our curated collection of energized gemstones, authentic
            Rudraksha, sacred Yantras, and spiritual items.
          </p>
        </div>
      </section>

      {/* ═══ FILTERS ═══ */}
      <section className="py-6 bg-surface border-b border-theme sticky top-16 lg:top-20 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
            {/* Search */}
            <div className="relative w-full sm:w-72">
              <BsSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                className="w-full pl-10 pr-4 py-2.5 rounded-full bg-primary border border-theme text-primary placeholder-muted text-sm focus:outline-none focus:ring-2 focus:ring-royal-purple/50 focus:border-royal-purple transition-all"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2 flex-1">
              {productCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full cursor-pointer text-sm font-medium transition-all duration-200 ${activeCategory === cat
                      ? "bg-royal-purple text-white"
                      : "bg-primary border border-theme text-secondary hover:border-royal-purple/50 hover:text-primary"
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2.5 rounded-full bg-primary border border-theme text-primary text-sm focus:outline-none focus:ring-2 focus:ring-royal-purple/50 focus:border-royal-purple transition-all"
            >
              <option value="default">Sort: Default</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>
      </section>

      {/* ═══ PRODUCTS GRID ═══ */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProducts.length > 0 ? (
            <>
              <p className="text-sm text-muted mb-6">
                Showing {filteredProducts.length} product
                {filteredProducts.length !== 1 ? "s" : ""}
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-20">
              <BsSearch className="text-muted text-4xl mx-auto mb-4" />
              <p className="text-lg text-secondary">No products found</p>
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

export default Shop;
