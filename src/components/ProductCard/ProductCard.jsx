import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMinus, FiPlus } from "react-icons/fi";
import OrderModal from "../OrderModal/OrderModal";

const ProductCard = ({ product }) => {
  const [qty, setQty] = useState(1);
  const [showModal, setShowModal] = useState(false);

  const incrementQty = (e) => {
    e.preventDefault();
    setQty((prev) => Math.min(prev + 1, 10));
  };
  const decrementQty = (e) => {
    e.preventDefault();
    setQty((prev) => Math.max(prev - 1, 1));
  };

  return (
    <>
      <div className="group flex flex-col space-y-4 ">
        {/* Product Image Area */}
        <Link to={`/shop/product/${product.id}`} className="relative aspect-square bg-white flex items-center justify-center overflow-hidden">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          {/* Category Badge */}
          <div className="absolute top-4 left-4 bg-white/90 dark:bg-surface/90 backdrop-blur-md px-3 py-1 border rounded-full border-theme">
            <span className="text-[10px] text-primary uppercase font-semibold tracking-widest">
              {product.category}
            </span>
          </div>
        </Link>

        {/* Content */}
        <Link to={`/shop/product/${product.id}`} className="flex justify-between items-start">
          <div className="space-y-1">
            <h3 className="font-heading text-lg font-semibold text-primary">
              {product.name}
            </h3>
            <p className="text-[10px] text-secondary tracking-widest uppercase">
              {product.category}
            </p>
          </div>
          <span className="font-heading text-lg font-semibold text-primary">
            ₹{product.price.toLocaleString()}
          </span>
        </Link>

        {/* Action Area */}
        <div className="flex items-center gap-4 pt-2">
          {/* Quantity Selector */}
          <div className="flex items-center border border-theme h-12 rounded-full">
            <button
              onClick={decrementQty}
              className="px-3 hover:bg-surface-hover transition-colors h-full cursor-pointer"
              aria-label="Decrease quantity"
            >
              <FiMinus size={14} className="text-primary" />
            </button>
            <input
              type="text"
              value={qty}
              readOnly
              className="w-10 text-center border-none bg-transparent font-medium text-primary p-0 focus:ring-0"
            />
            <button
              onClick={incrementQty}
              className="px-3 hover:bg-surface-hover transition-colors h-full cursor-pointer"
              aria-label="Increase quantity"
            >
              <FiPlus size={14} className="text-primary" />
            </button>
          </div>

          {/* Order Button */}
          <button
            onClick={() => setShowModal(true)}
            className="flex-1 bg-cosmic-navy text-white h-12 text-[10px] cursor-pointer rounded-full font-semibold uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-cosmic-navy/90 active:scale-[0.98] transition-all"
            id={`order-btn-${product.id}`}
          >
            ORDER VIA WHATSAPP
          </button>
        </div>
      </div>

      {showModal && (
        <OrderModal
          product={product}
          qty={qty}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
};

export default ProductCard;
