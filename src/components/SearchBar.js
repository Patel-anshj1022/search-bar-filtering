import React from "react";

const SearchBar = ({ value, onChange }) => {
  return (
    <input
      type="text"
      placeholder="Search name, category, or description..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="search-input"
    />
  );
};

export default SearchBar;
