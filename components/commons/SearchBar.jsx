"use client";

import React, { useState } from "react";
import PropTypes from "prop-types";
import { Search } from "lucide-react";
import { Input } from "./Input";

export const SearchBar = ({ placeholder, onSearch, show, rounded}) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch && onSearch(query);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative flex-1 font-poppins max-w-2xl"
    >
      <Input
        type="text"
        placeholder={show ? placeholder : "search for product"}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        icon={show ? <Search className="w-5 h-5" /> : ""}
        className={`pr-20 md:pr-24 text-sm md:text-base rounded-${rounded}`}
        name="nex"
        fullWidth
      />
      <button
        type="submit"
        className="absolute right-1 top-1/2 -translate-y-1/2 px-2 mr-4 py-1.5 bg-custom text-white rounded-md hover:bg-primary-700 transition-colors font-medium text-sm md:text-base"
      >
        {show ? "Search" : <Search className="w-5 h-5" />}
      </button>
    </form>
  );
};

SearchBar.propTypes = {
  placeholder: PropTypes.string,
  onSearch: PropTypes.func,
  rounded: PropTypes.string,
  show: PropTypes.bool
};
