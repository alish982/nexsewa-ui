"use client";

import PropTypes from "prop-types";
import { CategoryCard } from "../listing/CategoryCard";

export const CategoryList = ({ categories }) => {
  if (!categories?.length) return null;

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
      {categories.map((category, index) => (
        <div
          key={category.id}
          className="animate-fade-in"
          style={{ animationDelay: `${index * 0.05}s` }}
        >
          <CategoryCard category={category} />
        </div>
      ))}
    </div>
  );
};

CategoryList.propTypes = {
  categories: PropTypes.array.isRequired,
};
