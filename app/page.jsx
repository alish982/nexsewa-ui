"use client";

import React, { useState } from "react";
import { HeroSlider } from "@/components/sections/HeroSlider";
import { CategoryList } from "@/components/sections/CategoryList";
import {
  ProductGrid,
  ProductGridFeatured,
  ProductGridEnd,
} from "@/components/sections/ProductGrid";
import { FilterSidebar } from "@/components/sections/FilterSidebar";
import { products, categories, banners } from "@/data/mockData";
import { SearchBar } from "@/components";
import { FilterBar } from "@/components/listing/FilterProduct";
import { StoreLocation } from "@/components/sections/storeLocation";

export default function HomePage() {
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleFilterChange = (filters) => {
    let filtered = products;

    if (filters.categories.length > 0) {
      filtered = filtered.filter((p) =>
        filters.categories.includes(p.category),
      );
    }

    if (filters.priceRange) {
      filtered = filtered.filter(
        (p) =>
          p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1],
      );
    }

    if (filters.rating) {
      filtered = filtered.filter((p) => (p.rating || 0) >= filters.rating);
    }

    setFilteredProducts(filtered);
  };

  return (
    <div className="">
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-6">
        <HeroSlider banners={banners} />
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-display font-bold text-gray-800 mb-2">
            Popular Categories
          </h2>
        </div>
        <CategoryList categories={categories} />
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-display font-bold text-gray-800 mb-2">
            Offer Products
          </h2>
        </div>
        <ProductGrid products={filteredProducts} />
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-display font-bold text-gray-800 mb-2">
            Feature Products
          </h2>
        </div>
        <ProductGridFeatured products={filteredProducts} />
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-display font-bold text-gray-800 mb-2">
              Items sold by Rice Spice and Dice
            </h2>
          </div>
        </div>

        <div className="flex gap-6">
          <aside className="hidden lg:block w-[312px] flex-shrink-0">
            <FilterSidebar
              categories={Array.from(new Set(products.map((p) => p.category)))}
              onFilterChange={handleFilterChange}
            />
          </aside>

          <div className="">
            <div className="hidden md:block space-y-4">
              <h3>Search Products</h3>
              <SearchBar
                placeholder="Search for products, brands, or categories..."
                show={true}
              />
            </div>

            <div className="hidden md:block ">
              <h3 className="py-4">Filters</h3>
              <FilterBar />
            </div>

            <ProductGridEnd products={filteredProducts} />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <StoreLocation />
      </section>
    </div>
  );
}
