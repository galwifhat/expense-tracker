import React, { useState } from "react";

const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value); // Pass search term to parent component
  };

  return (
    <div className="mb-4 p-4 bg-white rounded-lg shadow-sm">
      <div className="relative">
        <input
          type="text"
          placeholder="Search expenses..."
          className="w-full p-3 pl-10 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-blue-300 outline-none"
          value={searchTerm}
          onChange={handleChange}
        />
        <svg
          className="absolute left-3 top-3.5 h-5 w-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
    </div>
  );
};

export default Search;
