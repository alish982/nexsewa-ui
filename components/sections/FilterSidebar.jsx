"use client";

import React, { useState } from "react";
import PropTypes from "prop-types";
import { X } from "lucide-react";
import { categoryFilter, mockRatings } from "@/data/mockData";
import Image from "next/image";

export const FilterSidebar = ({ isOpen = true, onClose }) => {
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [selectedRating, setSelectedRating] = useState(null);

  return (
    <div
      className={`bg-white rounded-lg border border-gray-200 p-6 ${
        !isOpen && "hidden"
      }`}
    >
      <div className="flex items-center justify-between mb-6">
        <button className="bg-custom font-poppins rounded-xl px-4 py-2 text-white shadow-lg flex items-center gap-2">
          <Image
            src={"/others/hiddenfilter.svg"}
            height={14.67}
            width={14.33}
            alt="filter"
          />
          Hide Filter
        </button>
        {onClose && (
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        )}
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-[500] font-poppins text-gray-700 mb-3">
          Product Categories
        </h2>
        <p className="text-sm text-[#808080]">
          {" "}
          Hover over the categorties for detils
        </p>
      </div>

      <div className="mb-6">
        <div className="space-y-2">
          {categoryFilter.map((val) => (
            <label
              key={val.id}
              className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors"
            >
              <input
                type="radio"
                name="new"
                checked={selectedRating === val.name}
                onChange={() => setSelectedRating(val.name)}
                className={`
                w-4 h-4
                appearance-none
                rounded-full
                ${selectedRating === val.name ? "" : "border-2 border-gray-300"}
                checked:bg-custom
                checked:shadow-[inset_0_0_0_3px_white]
                ring-offset-0.5
                checked:ring-1 checked:ring-custom
  `}
              />
              <div className="flex items-center gap-1">
                <span className="text-sm text-gray-600 ml-1">
                  {val.name}
                  <span className="px-2">({val.items})</span>
                </span>
              </div>
            </label>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h4 className="font-semibold font-poppins text-gray-700 mb-3">Price</h4>
        <div className="space-y-3">
          <div className="relative h-2">
            <div className="absolute w-full h-2 bg-gray-200 rounded-lg"></div>

            <div
              className="absolute h-2 bg-primary-600 rounded-lg"
              style={{
                left: `${(priceRange[0] / 150) * 100}%`,
                right: `${100 - (priceRange[1] / 150) * 100}%`,
              }}
            ></div>

            <input
              type="range"
              min="0"
              max="150"
              value={priceRange[0]}
              onChange={(e) => {
                const value = parseInt(e.target.value);
                if (value < priceRange[1]) {
                  setPriceRange([value, priceRange[1]]);
                }
              }}
              className="absolute w-full h-2 bg-transparent appearance-none cursor-pointer pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary-600 [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-primary-600 [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:cursor-pointer"
            />

            <input
              type="range"
              min="0"
              max="150"
              value={priceRange[1]}
              onChange={(e) => {
                const value = parseInt(e.target.value);
                if (value > priceRange[0]) {
                  setPriceRange([priceRange[0], value]);
                }
              }}
              className="absolute w-full h-2 bg-transparent appearance-none cursor-pointer pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary-600 [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-primary-600 [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:cursor-pointer"
            />
          </div>

          <div className="flex items-center justify-between text-sm text-gray-600">
            <span>0 AUD</span>
            <span>150 AUD</span>
          </div>

          <div>
            <p className="text-sm">Price</p>
            <span className="text-sm">
              {priceRange[0]} AUD - {priceRange[1]} AUD
            </span>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h4 className="font-semibold text-gray-700 mb-3 font-poppins">
          Rating
        </h4>
        <div className="space-y-2">
          {mockRatings.map(({ id, value }) => (
            <label
              key={id}
              className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors"
            >
              <input
                type="checkbox"
                name="rating"
                checked={selectedRating === value}
                onChange={() => setSelectedRating(value)}
                className="w-4 h-4 accent-green-600 border-gray-300 rounded focus:ring-green-500"
              />
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`text-sm ${i < value ? "text-yellow-400" : "text-gray-300"}`}
                  >
                    ★
                  </span>
                ))}

                <span className="text-sm text-gray-600 ml-1">
                  {value === 5 ? `${value}` : `${value} & up`}
                </span>
              </div>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

FilterSidebar.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  categories: PropTypes.array.isRequired,
  onFilterChange: PropTypes.func,
};
