"use client";

import React, { useState } from "react";
import { categoryFilter, mockRatings } from "@/data/mockData";
import Image from "next/image";

export const FilterSidebar = () => {
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [selectedRating, setSelectedRating] = useState(null);

  return (
    <div className={`bg-white`}>
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
      </div>

      <div className="mb-3">
        <h2 className="text-2xl font-[500] font-poppins text-gray-700 mb-3">
          Product Categories
        </h2>
        <p className="flex items-center gap-2 text-sm text-[#808080]">
          <Image
            src="/others/questionmark.svg"
            height={15}
            width={15}
            alt="?"
          />
          <span className="whitespace-nowrap">
            Hover over the categories for details
          </span>
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

      <div className="mb-7">
        <div className="flex justify-between">
          <h4 className="font-semibold font-poppins text-gray-700 mb-5">
            Price
          </h4>
          <Image
            src="/others/downarrow.svg"
            height={15}
            width={15}
            alt="arrow"
          />
        </div>

        <div className="space-y-5">
          <div className="relative h-2">
            <div className="absolute w-full h-2 bg-gray-200 rounded-lg"></div>

            <div
              className="absolute h-2 bg-custom rounded-lg"
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
              className="absolute w-full h-2 bg-transparent appearance-none bg-custom cursor-pointer pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary-600 [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-primary-600 [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:cursor-pointer"
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

          <div className="flex items-center justify-between text-sm text-gray-700">
            <span>0 AUD</span>
            <span>150 AUD</span>
          </div>

          <div className="flex">
            <p className="text-[#4D4D4D]">Price: </p>
            <span className="text- font-poppins font-[400] text-[#1A1A1A] px-2">
              {priceRange[0]} AUD - {priceRange[1]} AUD
            </span>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex justify-between">
          <h4 className="font-semibold font-poppins text-gray-700 mb-5">
            Rating
          </h4>
          <Image
            src="/others/downarrow.svg"
            height={15}
            width={15}
            alt="arrow"
          />
        </div>
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
