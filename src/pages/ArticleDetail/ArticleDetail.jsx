import { useParams, Link } from "react-router-dom";
import { articles } from "../../data/articles";

const ArticleDetail = () => {
  const { id } = useParams();
  const article = articles.find((a) => a.id === parseInt(id));

  const relatedArticles = articles
    .filter((a) => a.id !== parseInt(id))
    .slice(0, 2);

  if (!article) {
    return (
      <main className="pt-20">
        <div className="max-w-4xl mx-auto px-4 py-32 text-center">
          <span className="material-symbols-outlined text-muted text-5xl mb-4 block">
            search_off
          </span>
          <h1 className="font-heading text-2xl font-bold text-primary mb-4">
            Article Not Found
          </h1>
          <p className="text-secondary mb-8">
            The article you're looking for doesn't exist.
          </p>
          <Link
            to="/insights"
            className="inline-flex items-center gap-2 text-royal-purple font-semibold hover:gap-3 transition-all"
          >
            <span className="material-symbols-outlined text-sm">
              arrow_back
            </span>
            Back to Insights
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-20">
      {/* ═══ HERO IMAGE BANNER ═══ */}
      <section className="relative max-w-7xl mx-auto h-[716px] overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 w-full px-5 md:px-16 pb-12 max-w-[1280px] mx-auto">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold text-white tracking-widest uppercase mb-4 block">
              {article.category}
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              {article.title}
            </h1>
            <div className="flex items-center gap-4 text-muted">
              <span className="text-xs uppercase tracking-widest">
                {new Date(article.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <span className="h-px w-8 bg-theme" />
              <span className="text-xs uppercase tracking-widest">
                By Guruji
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CONTENT GRID ═══ */}
      <section className="px-5 md:px-16 max-w-[1280px] mx-auto py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Main Article */}
          <article className="lg:col-span-8">
            <div className="max-w-none">
              {article.content.split("\n\n").map((paragraph, i) =>
                i === 0 ? (
                  <p
                    key={i}
                    className="text-lg text-secondary mb-12 leading-relaxed first-letter:text-7xl first-letter:font-heading first-letter:mr-3 first-letter:float-left first-letter:text-primary first-letter:font-bold"
                  >
                    {paragraph}
                  </p>
                ) : (
                  <p
                    key={i}
                    className="text-base text-secondary mb-8 leading-relaxed"
                  >
                    {paragraph}
                  </p>
                )
              )}
            </div>

            {/* Blockquote */}
            <div className="my-16 border-l-2 border-royal-purple pl-8 py-4">
              <blockquote className="font-heading text-2xl italic text-primary">
                "The universe does not speak in words; it speaks in rhythms. To
                understand the stars is to learn the choreography of your own
                soul."
              </blockquote>
            </div>

            {/* Author Bio */}
            <div className="mt-20 p-10 bg-white rounded flex flex-col md:flex-row items-center md:items-start gap-8 border border-theme">
              <div className="w-32 h-32 bg-royal-purple/10 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-royal-purple text-5xl">
                  person
                </span>
              </div>
              <div>
                <span className="text-xs font-semibold text-royal-purple uppercase tracking-widest mb-2 block">
                  The Author
                </span>
                <h3 className="font-heading text-2xl font-semibold text-primary mb-3">
                  Guruji
                </h3>
                <p className="text-secondary mb-4 leading-relaxed">
                  Guruji is a Vedic astrology consultant with over 15 years of
                  experience navigating the intersection of ancient celestial
                  wisdom and modern life. His insights have helped thousands of
                  individuals discover their cosmic path.
                </p>
                <div className="flex gap-4">
                  <Link
                    to="/contact"
                    className="text-royal-purple hover:underline text-xs font-semibold uppercase tracking-widest"
                  >
                    Contact
                  </Link>
                  <Link
                    to="/services"
                    className="text-royal-purple hover:underline text-xs font-semibold uppercase tracking-widest"
                  >
                    Book Consultation
                  </Link>
                </div>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-12">
            {/* Newsletter */}
            <div className="bg-cosmic-navy p-10 rounded text-white">
              <h3 className="font-heading text-xl font-bold mb-4">
                Cosmic Updates
              </h3>
              <p className="text-sm text-white/70 mb-8">
                Receive bi-weekly celestial forecasts and exclusive ritual guides
                directly to your inbox.
              </p>
              <form
                className="space-y-6"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="relative">
                  <input
                    className="w-full bg-transparent border-0 border-b border-white/30 py-3 text-xs uppercase tracking-widest focus:outline-none focus:border-white transition-colors placeholder:text-white/40 text-white"
                    placeholder="EMAIL ADDRESS"
                    type="email"
                  />
                </div>
                <button className="w-full bg-white rounded-full text-cosmic-navy py-4 text-xs font-semibold tracking-widest uppercase hover:bg-white/90 transition-colors">
                  SUBSCRIBE
                </button>
              </form>
            </div>

            {/* Related Insights */}
            <div>
              <h3 className="text-xs font-semibold text-primary uppercase tracking-widest border-b border-theme pb-4 mb-8">
                RELATED INSIGHTS
              </h3>
              <div className="space-y-10">
                {relatedArticles.map((relArticle) => (
                  <Link
                    key={relArticle.id}
                    to={`/insights/${relArticle.id}`}
                    className="group block"
                  >
                    <div className="overflow-hidden mb-4">
                      <img
                        src={relArticle.image}
                        alt={relArticle.title}
                        className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <span className="text-xs font-semibold text-royal-purple uppercase tracking-widest mb-2 block">
                      {relArticle.category}
                    </span>
                    <h4 className="font-heading text-lg font-semibold text-primary group-hover:text-royal-purple transition-colors">
                      {relArticle.title}
                    </h4>
                  </Link>
                ))}
              </div>
            </div>

            {/* Personal Guidance CTA */}
            <div className="sticky top-28 p-8 border border-theme rounded bg-white">
              <h4 className="font-heading text-lg font-semibold text-primary mb-4">
                Personal Guidance
              </h4>
              <p className="text-sm text-secondary mb-6">
                How do current transits affect your specific chart? Book a
                private deep-dive session.
              </p>
              <Link
                to="/services"
                className="w-full block text-center border-2 rounded-full border-cosmic-navy py-4 text-xs font-semibold uppercase tracking-widest text-cosmic-navy btn-dwc btn-dwc-fill-dark hover:text-white transition-all"
              >
                VIEW SERVICES
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
};

export default ArticleDetail;
