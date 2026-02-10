"use client";

import {
  HeroSlider,
  CategoryList,
  FilterSidebar,
  ProductGrid,
  SearchBar,
} from "..";
import { banners, products, categories } from "@/data/mockData";
import { ProductGridFeatured, ProductGridEnd } from "./ProductGrid";
import { FilterBar } from "../listing/FilterProduct";
import { StoreLocation } from "./storeLocation";

export default function HomePageSection() {
  return (
    <div>
      <section className="max-w-7xl mx-auto px-4 md:px-6">
        <HeroSlider banners={banners} />
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-quicksand font-[700] text-gray-800 mb-2">
            Popular Categories
          </h2>
        </div>
        <CategoryList categories={categories} />
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 py-6">
        <div className="mb-8">
          <h2 className="text-3xl font-quicksand font-[700] text-gray-800 mb-2">
            Offer Products
          </h2>
        </div>
        <ProductGrid products={products} />
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 py-6">
        <div className="mb-8">
          <h2 className="text-3xl font-quicksand font-[700] text-gray-800 mb-2">
            Feature Products
          </h2>
        </div>
        <ProductGridFeatured products={products} />
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 pt-7">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-quicksand font-[700] text-gray-800 mb-2">
            Items sold by Rice Spice and Dice
          </h2>
        </div>

        <div className="flex gap-6 py-3">
          <aside className="hidden lg:block w-[312px] flex-shrink-0">
            <FilterSidebar
              categories={Array.from(new Set(products.map((p) => p.category)))}
            />
          </aside>

          <div className="w-full">
            <div className="hidden md:block space-y-4">
              <h3 className="font-inter font-[600]">Search Products</h3>
              <SearchBar
                placeholder="Search for products, brands, or categories..."
                show
                rounded="lg"
              />
            </div>

            <div className="hidden md:block">
              <h3 className="py-5 font-inter font-[600]">Filters</h3>
              <FilterBar />
            </div>

            <ProductGridEnd products={products} />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <StoreLocation />
      </section>
    </div>
  );
}
