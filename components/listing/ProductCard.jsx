"use client";

import React, { useState } from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import { ShoppingCart, Heart, Eye } from "lucide-react";
import { Badge } from "../commons/Badge";

export const ProductCard = ({ product, onAddToCart }) => {
  const [isHovered] = useState(false);

  return (
    <div className="group relative bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in">
      {product.badge && (
        <Badge variant={product.badge}>
          {product.badge === "sale" && product.discount
            ? `${product.discount}% off`
            : product.badge.toUpperCase()}
        </Badge>
      )}

      <div className="relative h-48 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          height={144}
          width={258}
          className={`object-cover transition-transform duration-500 mt-12 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
        />

        <div className="absolute top-2 right-2 flex flex-col gap-2 transition-all duration-300 opacity-100 translate-x-0">
          {!product.feature ? (
            <button className="p-2 bg-white rounded-full shadow-md hover:bg-primary-50 transition-colors border border-green-500">
              <Heart className="w-5 h-5 text-green-500" />
            </button>
          ) : (
            ""
          )}
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-quicksand font-[600] text-gray-800 mb-2 line-clamp-1">
          {product.name}
        </h3>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-sm text-gray-400 line-through">
            ${product.originalPrice.toFixed(2)}
          </span>
          <span className="text-xl font-bold text-primary-600">
            ${product.price.toFixed(2)}
          </span>{" "}
          /kg
        </div>

        <div className="flex items-center gap-2 mb-3">
          <span className="text-sm font-quicksand text-[#9CA3AF]">
            Delivery: ${product.delivery.toFixed(2)}
          </span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="pl-3 md:pl-0 inline-flex items-center rounded-lg w-fit">
            <button className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center text-gray-600 hover:text-gray-900 border rounded-s-md transition-colors">
              −
            </button>

            <span className="w-10 sm:w-12 h-8 sm:h-9 flex items-center justify-center font-medium bg-gray-50 text-gray-900 border-y border-gray-200">
              1
            </span>

            <button className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center text-gray-600 hover:text-gray-900 border rounded-e-md transition-colors">
              +
            </button>
          </div>

          <button
            onClick={() => onAddToCart && onAddToCart(product, quantity)}
            className="w-full sm:w-10 h-10 flex items-center justify-center 
               rounded-lg sm:rounded-full
               bg-custom hover:bg-primary-700 
               transition-colors"
          >
            <ShoppingCart className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    originalPrice: PropTypes.number,
    discount: PropTypes.number,
    image: PropTypes.string.isRequired,
    delivery: PropTypes.number.isRequired,
    unit: PropTypes.string.isRequired,
    badge: PropTypes.oneOf(["sale", "new"]),
    feature: PropTypes.bool.isRequired,
  }).isRequired,
};
