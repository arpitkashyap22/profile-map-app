import React, { useState } from 'react';

const SearchFilter = ({ profiles, setFilteredProfiles }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    const filtered = profiles.filter((profile) =>
      profile.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProfiles(filtered);
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search profiles..."
        className="p-2 bg-gray-700 text-white rounded w-full"
      />
      <button
        onClick={handleSearch}
        className="mt-2 bg-primary text-white px-4 py-2 rounded"
      >
        Search
      </button>
    </div>
  );
};

export default SearchFilter;
