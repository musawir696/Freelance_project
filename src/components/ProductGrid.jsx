import React, { useState } from "react";
import { FaHeart, FaShoppingCart, FaEye } from "react-icons/fa";

export default function ProductGrid({ products = [] }) {
  const [favorites, setFavorites] = useState(new Set());

  const toggleFavorite = (productId) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(productId)) {
      newFavorites.delete(productId);
    } else {
      newFavorites.add(productId);
    }
    setFavorites(newFavorites);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="group relative bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
        >
          {/* Product Image */}
          <div className="relative overflow-hidden rounded-t-xl">
            <div className={`${product.bgColor || "bg-gray-100"} p-4 h-48 flex items-center justify-center`}>
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Overlay Actions */}
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
              <button
                onClick={() => toggleFavorite(product.id)}
                className="p-2 bg-white/90 hover:bg-white rounded-full"
              >
                <FaHeart
                  className={`w-4 h-4 ${
                    favorites.has(product.id) ? "text-red-500" : "text-gray-500"
                  }`}
                />
              </button>
              <button className="p-2 bg-white/90 hover:bg-white rounded-full">
                <FaEye className="w-4 h-4 text-gray-700" />
              </button>
            </div>

            {/* Badge */}
            {product.badges?.includes("Best Selling") && (
              <div className="absolute top-2 left-2">
                <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">SALE</span>
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="p-4">
            <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{product.name}</h3>

            <div className="flex flex-wrap gap-1 mb-3">
              {product.badges?.map((badge, index) => (
                <span
                  key={index}
                  className={`text-xs px-2 py-1 rounded-full ${
                    badge === "New"
                      ? "bg-blue-100 text-blue-700"
                      : badge === "Best Selling"
                      ? "bg-green-100 text-green-700"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  {badge}
                </span>
              ))}
            </div>

            {/* Pricing */}
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-green-600 font-bold">{product.salePrice}</span>
                <span className="text-gray-500 line-through text-sm">{product.originalPrice}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-900 font-medium text-sm">{product.salePriceUSD}</span>
                <span className="text-gray-400 line-through text-xs">{product.originalPriceUSD}</span>
              </div>
            </div>

            <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded flex items-center justify-center gap-2">
              <FaShoppingCart className="w-4 h-4" />
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
