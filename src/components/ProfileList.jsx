import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProfileList = ({ profiles }) => {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState({
    name: '',
    address: ''
  });

  const handleSearchChange = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter((prevFilter) => ({
      ...prevFilter,
      [name]: value
    }));
  };

  const filteredProfiles = profiles
    .filter(profile =>
      profile.name.toLowerCase().includes(search) &&
      (filter.name ? profile.name.toLowerCase().includes(filter.name.toLowerCase()) : true) &&
      (filter.address ? profile.address.toLowerCase().includes(filter.address.toLowerCase()) : true)
    );

  return (
    <div className="p-4 bg-gray-800 rounded-lg max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Profile List</h2>
      
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={handleSearchChange}
          className="block w-full p-2 border border-gray-600 bg-gray-700 rounded-md text-white mb-2"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            name="name"
            placeholder="Filter by name..."
            value={filter.name}
            onChange={handleFilterChange}
            className="block w-full p-2 border border-gray-600 bg-gray-700 rounded-md text-white"
          />
          <input
            type="text"
            name="address"
            placeholder="Filter by address..."
            value={filter.address}
            onChange={handleFilterChange}
            className="block w-full p-2 border border-gray-600 bg-gray-700 rounded-md text-white"
          />
        </div>
      </div>

      <div className="space-y-4">
        {filteredProfiles.length === 0 ? (
          <p className="text-white">No profiles found</p>
        ) : 
          filteredProfiles.map((profile) => (
            <div key={profile.id} className="bg-gray-700 p-4 rounded-lg flex items-center">
              <img src={profile.photo} alt={profile.name} className="w-16 h-16 object-cover rounded-full mr-4" />
              <div className="flex-1">
                <h4 className="text-lg font-semibold">{profile.name}</h4>
                <p>{profile.description}</p>
                <p className="text-gray-400">{profile.address}</p>
                <div className="mt-2 flex space-x-2">
                  <Link
                    to={`/profile/${profile.id}`}
                    className="bg-primary text-white px-4 py-2 rounded"
                  >
                    View Details
                  </Link>
                  <Link
                    to={`/map?address=${encodeURIComponent(profile.address)}`}
                    className="bg-secondary text-white px-4 py-2 rounded"
                  >
                    Show on Map
                  </Link>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default ProfileList;
