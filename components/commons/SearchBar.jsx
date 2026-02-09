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
    <form onSubmit={handleSubmit} className="relative flex-1 max-w-2xl">
      <Input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        icon={show ? <Search className="w-5 h-5" /> : ""}
        className="pr-24"
        fullWidth
      />
      <button
        type="submit"
        className="absolute right-1 top-1/2 -translate-y-1/2 mr-2 px-2 py-1.5 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors font-medium"
      >
        {show ? "Search" : <Search className="w-5 h-5" />}
      </button>
    </form>
  );
};

SearchBar.propTypes = {
  placeholder: PropTypes.string,
  onSearch: PropTypes.func,
};
