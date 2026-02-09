"use client";

import React, { useState } from "react";
import { X, ChevronDown } from "lucide-react";

export const FilterBar = () => {
  const [activeFilters, setActiveFilters] = useState([
    { id: 1, label: "Within 5 km", type: "location" },
    { id: 2, label: "Free Delivery", type: "delivery" },
    { id: 3, label: "$10 - $50", type: "price" },
  ]);

  const removeFilter = (id) => {
    setActiveFilters(activeFilters.filter((filter) => filter.id !== id));
  };

  return (
    <div className="bg-white">
      <div className="mb-5">
        <div className="flex items-center gap-3 flex-wrap">
          <button className="flex items-center gap-2 px-3 py-3 border border-gray-300 rounded-lg hover:border-gray-400 transition-colors text-sm">
            <span className="text-gray-600">Sort By Nearest Location</span>
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </button>

          <button className="flex items-center gap-2 px-3 py-3 border border-gray-300 rounded-lg hover:border-gray-400 transition-colors text-sm">
            <span className="text-gray-600">Category</span>
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </button>

          <button className="flex items-center gap-2 px-3 py-3 border border-gray-300 rounded-lg hover:border-gray-400 transition-colors text-sm">
            <span className="text-gray-600">Price Range</span>
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </button>

          <button className="flex items-center gap-2 px-3 py-3 border border-gray-300 rounded-lg hover:border-gray-400 transition-colors text-sm">
            <span className="text-gray-600">Delivery Charge</span>
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </button>
        </div>
      </div>

      {activeFilters.length > 0 && (
        <div className="mb-5">
          <div className="items-center gap-3 flex-wrap">
            <span className="text-sm text-gray-600">
              Active Filters ({activeFilters.length})
            </span>

            <div className="py-4 flex gap-4">
              {activeFilters.map((filter) => (
                <div
                  key={filter.id}
                  className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#EAF5E4] text-green-700 rounded-lg text-sm"
                >
                  <span className="text-custom">{filter.label}</span>
                  <button
                    onClick={() => removeFilter(filter.id)}
                    className="hover:bg-green-100 rounded-full p-0.5 transition-colors"
                  >
                    <X className="w-3.5 h-3.5 text-custom" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
