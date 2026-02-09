"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ShoppingCart,
  User,
  Heart,
  Menu,
  X,
  MapPin,
  Phone,
} from "lucide-react";
import { SearchBar } from "../commons/SearchBar";
import Image from "next/image";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartCount] = useState(8);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4">
        <div className="flex items-center justify-between gap-4">
          <Image src={"/logo/logo.svg"} alt="" width={127} height={127} />

          <div className="hidden md:block flex-1 max-w-2xl">
            <SearchBar placeholder="Search for product" />
          </div>

          <div className="flex items-center gap-3">
            <button className="hidden md:flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Heart className="w-6 h-6 text-gray-600" />
            </button>

            <button className="hidden md:flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <User className="w-6 h-6 text-gray-600" />
            </button>

            <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <ShoppingCart className="w-6 h-6 text-gray-600" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary-600 text-white text-xs rounded-full flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-600" />
              ) : (
                <Menu className="w-6 h-6 text-gray-600" />
              )}
            </button>
          </div>
        </div>

        <div className="md:hidden mt-4">
          <SearchBar />
        </div>
      </div>

      <nav className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between">
          <div className="hidden md:flex items-center gap-8 py-3">
            <Link
              href="/"
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              All Categories
            </Link>
            <Link
              href="/shop"
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              Grocery Store
            </Link>
            <Link
              href="/categories"
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              Restaurants
            </Link>
            <Link
              href="/deals"
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              Gift Store
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              Clothing Store
            </Link>
            <Link
              href="/blog"
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              Offers
            </Link>
          </div>
          <div className="hidden md:flex items-center gap-2 py-3">
            <Link
              href="/mail"
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              {" "}
              Need Help?
            </Link>
            <Link
              href="/mail"
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
            >
              {" "}
              placeholder@gmail.com
            </Link>
          </div>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="absolute top-20 right-16 md:hidden border border-gray-200 py-4 px-4 bg-white">
          <nav className="flex flex-col gap-3">
            <Link
              href="/"
              className="py-2 text-gray-700 hover:text-primary-600 font-medium"
            >
              All Categories
            </Link>
            <Link
              href="/shop"
              className="py-2 text-gray-700 hover:text-primary-600 font-medium"
            >
              Grocery Store
            </Link>
            <Link
              href="/categories"
              className="py-2 text-gray-700 hover:text-primary-600 font-medium"
            >
              Restaurants
            </Link>
            <Link
              href="/deals"
              className="py-2 text-gray-700 hover:text-primary-600 font-medium"
            >
              Gift Store
            </Link>
            <Link
              href="/about"
              className="py-2 text-gray-700 hover:text-primary-600 font-medium"
            >
              Clothing Store
            </Link>
            <Link
              href="/blog"
              className="py-2 text-gray-700 hover:text-primary-600 font-medium"
            >
              Offers
            </Link>
          </nav>
        </div>
      )}
      <div
        className="bg-[linear-gradient(to_right,#55B927,#008005)] 
                flex items-center justify-center 
                px-4 py-2 sm:py-3
                text-center
                text-sm sm:text-base md:text-lg
                leading-snug"
      >
        🎉 Latest Deals and Exciting Offers at ThinkMart – Save Up to 50% on
        Groceries, Fresh Products and More!
      </div>

      <div className="flex items-center h-[53px] justify-center">
        <Image
          src={"/logo/home.svg"}
          width={13.33}
          height={13.62}
          alt="image"
        />
      </div>
    </header>
  );
};
