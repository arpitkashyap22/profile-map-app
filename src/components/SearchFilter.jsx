import React from 'react';

const SearchFilter = ({ search, filter, onSearchChange, onFilterChange }) => {
  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search by name, state, or ID..."
        value={search}
        onChange={onSearchChange}
        className="block w-full p-2 border border-gray-600 bg-gray-700 rounded-md text-white mb-2"
      />
     
    </div>
  );
};

export default SearchFilter;
