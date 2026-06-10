import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const ArticleCard = ({ article, featured = false }) => {
  return (
    <Link
      to={`/insights/${article.id}`}
      className="group block"
      id={`article-${article.id}`}
    >
      {/* Image */}
      <div className="mb-6 overflow-hidden h-64 w-full">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Category */}
      <span className="text-xs font-semibold text-royal-purple mb-3 uppercase tracking-widest block">
        {article.category}
      </span>

      {/* Title */}
      <h3 className="font-heading text-2xl font-bold text-primary line-clamp-2 mb-3 group-hover:text-royal-purple transition-colors">
        {article.title}
      </h3>

      {/* Excerpt */}
      <p className="text-secondary leading-relaxed line-clamp-2 mb-4">
        {article.excerpt}
      </p>

      {/* Read More link */}
      <div className="mt-auto pt-2 inline-block">
        <span className="text-xs uppercase tracking-widest rounded-full font-semibold text-primary border py-3 px-7  group-hover:gap-3 transition-all flex items-center gap-2">
          EXPLORE <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </span>
      </div>
    </Link>
  );
};

export default ArticleCard;
