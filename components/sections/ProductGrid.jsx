"use client";

import React from "react";
import PropTypes from "prop-types";
import { ProductCard } from "../listing/ProductCard";

export const ProductGrid = ({ products }) => {
  const pattern = [
    products[0],
    products[1],
    products[0],
    products[0],
    products[0],
  ];
  const itemsToRender = [...pattern, ...pattern];

  return (
    <div
      className="
      grid 
      grid-cols-2
      sm:grid-cols-3 
      md:grid-cols-4 
      lg:grid-cols-5
      gap-5
    "
    >
      {itemsToRender.map((product, index) =>
        product ? (
          <ProductCard key={`${product.id}-${index}`} product={product} />
        ) : null,
      )}
    </div>
  );
};

export const ProductGridFeatured = ({ products }) => {
  const featuredProducts = products.filter((product) => product.feature);

  return (
    <div
      className="
      grid 
      grid-cols-2
      sm:grid-cols-3 
      md:grid-cols-4 
      lg:grid-cols-5
      gap-5
    "
    >
      {featuredProducts.map((product, index) =>
        product ? (
          <ProductCard key={`${product.id}-${index}`} product={product} />
        ) : null,
      )}
    </div>
  );
};

export const ProductGridEnd = ({ products }) => {
  const featuredProducts = ["8", "2", "1", "2"]
    .map((id) => products.find((product) => product.id === id))
    .filter(Boolean)
    .map((product) => ({ ...product, badge: "" }));

  const repeatedProducts = Array(4).fill(featuredProducts).flat();

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {repeatedProducts.map((product, index) =>
        product ? (
          <ProductCard key={`${product.id}-${index}`} product={product} />
        ) : null,
      )}
    </div>
  );
};

ProductGrid.propTypes = {
  products: PropTypes.array.isRequired,
};
ProductGridFeatured.propTypes = {
  products: PropTypes.array.isRequired,
};
ProductGridEnd.propTypes = {
  products: PropTypes.array.isRequired,
};
4