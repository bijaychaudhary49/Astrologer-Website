import { useState } from "react";
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import ArticleCard from "../../components/ArticleCard/ArticleCard";
import { articles, articleCategories } from "../../data/articles";

const Insights = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("Latest");

  const filteredArticles = articles
    .filter((article) => {
      const matchCategory =
        activeCategory === "All" || article.category === activeCategory;
      const matchSearch =
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchSearch;
    })
    .sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return sortOrder === "Latest" ? dateB - dateA : dateA - dateB;
    });

  const featuredArticle = filteredArticles.find((a) => a.featured);
  const remainingArticles = filteredArticles.filter(
    (a) => a.id !== featuredArticle?.id
  );

  return (
    <main className="pt-10 pb-24 bg-white">
      {/* ═══ FEATURED ARTICLE (HERO BANNER) ═══ */}
      {featuredArticle && (
        <section className="px-4 sm:px-6 lg:px-16 max-w-7xl mx-auto mb-20">
          <Link
            to={`/insights/${featuredArticle.id}`}
            className="relative group cursor-pointer overflow-hidden h-[600px] flex items-end w-full block"
          >
            <img
              src={featuredArticle.image}
              alt={featuredArticle.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="relative p-12 max-w-2xl">
              <span className="inline-block px-3 py-1 bg-royal-purple text-white text-xs font-semibold mb-6 uppercase tracking-widest">
                Featured Insight
              </span>
              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                {featuredArticle.title}
              </h1>
              <p className="text-white/80 leading-relaxed mb-8 text-lg">
                {featuredArticle.excerpt}
              </p>
              <button className="border border-white/40 text-white px-8 py-3 rounded-full hover:bg-white hover:text-primary transition-colors text-xs font-semibold uppercase tracking-widest">
                READ ARTICLE
              </button>
            </div>
          </Link>
        </section>
      )}

      {/* ═══ CATEGORIES & FILTER NAV ═══ */}
      <div className="px-4 sm:px-6 lg:px-16 max-w-7xl mx-auto mb-12 flex flex-col md:flex-row md:justify-between md:items-end border-b border-theme pb-4 gap-6">
        <div className="flex gap-8 overflow-x-auto no-scrollbar">
          {["All", "Monthly Predictions", "Planetary Analysis", "Spiritual Insights"].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-xs font-semibold uppercase cursor-pointer tracking-widest pb-2 whitespace-nowrap transition-colors ${activeCategory === cat
                ? "text-royal-purple border-b-2 border-royal-purple"
                : "text-muted hover:text-primary"
                }`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>
        <button 
          onClick={() => setSortOrder(sortOrder === "Latest" ? "Oldest" : "Latest")}
          className="flex items-center gap-2 text-muted mb-4 md:mb-0 hover:text-primary transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined text-sm">sort</span>
          <span className="text-xs font-semibold uppercase tracking-widest">
            {sortOrder} FIRST
          </span>
        </button>
      </div>

      {/* ═══ BLOG GRID ═══ */}
      <section className="px-4 sm:px-6 lg:px-16 max-w-7xl mx-auto">
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">
            {remainingArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <BsSearch className="text-muted text-4xl mx-auto mb-4" />
            <p className="text-lg text-secondary">No articles found</p>
            <p className="text-sm text-muted mt-1">
              Try adjusting your category filter.
            </p>
          </div>
        )}
      </section>

      {/* ═══ NEWSLETTER SECTION ═══ */}
      <section className="mt-32 px-4 sm:px-6 lg:px-16 max-w-7xl mx-auto">
        <div className="bg-white p-16 flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden border border-theme shadow-theme rounded-2xl">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-royal-purple/5 rounded-full blur-3xl"></div>
          <div className="max-w-md relative z-10">
            <h2 className="font-heading text-4xl font-bold text-primary mb-4">
              Cosmic Updates
            </h2>
            <p className="text-secondary leading-relaxed">
              Join our exclusive circle of seekers. Receive monthly forecasts, ritual guides, and planetary insights directly in your inbox.
            </p>
          </div>
          <div className="w-full md:w-auto relative z-10 flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row gap-4 items-end">
               <input
                className="w-full rounded-full bg-transparent border-0 border-b border-theme py-3 px-4 text-base focus:ring-0 focus:outline-none focus:border-royal-purple transition-colors placeholder:text-muted text-primary text-center sm:text-left"
                placeholder="Email Address"
                required
                type="email"
              />
              <button className="bg-cosmic-navy flex justify-center cursor-pointer rounded-full text-white text-xs px-8 py-3.5 font-semibold uppercase tracking-widest whitespace-nowrap border-2 border-cosmic-navy btn-dwc btn-dwc-fill-light hover:text-cosmic-navy w-full sm:w-auto">
             <span>  Subscribe</span>
              </button>
            </div>
            <p className="text-[10px] text-muted uppercase tracking-tighter">
              By subscribing, you agree to our Privacy Policy and Terms of Service.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Insights;
