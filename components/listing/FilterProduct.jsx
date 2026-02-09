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

  const clearAllFilters = () => {
    setActiveFilters([]);
  };

  return (
    <div className="bg-white border-b">
      <div className="px-4 py-3">
        <div className="flex items-center gap-3 flex-wrap">
          <button className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg hover:border-gray-400 transition-colors text-sm">
            <span className="text-gray-600">Sort By Nearest Location</span>
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </button>

          <button className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg hover:border-gray-400 transition-colors text-sm">
            <span className="text-gray-600">Category</span>
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </button>

          <button className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg hover:border-gray-400 transition-colors text-sm">
            <span className="text-gray-600">Price Range</span>
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </button>

          <button className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg hover:border-gray-400 transition-colors text-sm">
            <span className="text-gray-600">Delivery Charge</span>
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </button>
        </div>
      </div>

      {activeFilters.length > 0 && (
        <div className="px-4 py-3 border-t bg-gray-50">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-sm text-gray-600">
              Active Filters ({activeFilters.length})
            </span>

            {activeFilters.map((filter) => (
              <div
                key={filter.id}
                className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-50 text-green-700 rounded-lg text-sm"
              >
                <span>{filter.label}</span>
                <button
                  onClick={() => removeFilter(filter.id)}
                  className="hover:bg-green-100 rounded-full p-0.5 transition-colors"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}

            {activeFilters.length > 0 && (
              <button
                onClick={clearAllFilters}
                className="text-sm text-gray-500 hover:text-gray-700 underline"
              >
                Clear all
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
