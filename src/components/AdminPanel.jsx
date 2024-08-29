import React, { useState } from 'react';
import LocationPickerModal from './LocationPickerModal';

const AdminPanel = ({ addProfile }) => {
  const [profile, setProfile] = useState({
    name: '',
    photo: '',
    description: '',
    address: '',
    contactInfo: '',
    interests: '',
    location: {
      lat: 37.7749, // Default to San Francisco
      lng: -122.4194
    }
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleLocationSelect = (location) => {
    setProfile((prevProfile) => ({
      ...prevProfile,
      location,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProfile(profile);
    setProfile({
      name: '',
      photo: '',
      description: '',
      address: '',
      contactInfo: '',
      interests: '',
      location: {
        lat: 37.7749,
        lng: -122.4194,
      },
    });
  };

  return (
    <div className="p-4 bg-gray-800 rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Add New Profile</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={profile.name}
          onChange={handleChange}
          className="block w-full p-2 border border-gray-600 bg-gray-700 rounded-md text-white"
        />
        <input
          type="text"
          name="photo"
          placeholder="Photo URL"
          value={profile.photo}
          onChange={handleChange}
          className="block w-full p-2 border border-gray-600 bg-gray-700 rounded-md text-white"
        />
        <textarea
          name="description"
          placeholder="Description"
          value={profile.description}
          onChange={handleChange}
          className="block w-full p-2 border border-gray-600 bg-gray-700 rounded-md text-white"
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={profile.address}
          onChange={handleChange}
          className="block w-full p-2 border border-gray-600 bg-gray-700 rounded-md text-white"
        />
        <input
          type="text"
          name="contactInfo"
          placeholder="Contact Information"
          value={profile.contactInfo}
          onChange={handleChange}
          className="block w-full p-2 border border-gray-600 bg-gray-700 rounded-md text-white"
        />
        <input
          type="text"
          name="interests"
          placeholder="Interests"
          value={profile.interests}
          onChange={handleChange}
          className="block w-full p-2 border border-gray-600 bg-gray-700 rounded-md text-white"
        />

        {/* Map Location Picker */}
        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="bg-primary text-white px-4 py-2 rounded"
        >
          Choose on Map
        </button>
        <div className="mt-2 text-white">
          Chosen Location: Latitude {profile.location.lat}, Longitude {profile.location.lng}
        </div>

        <button type="submit" className="bg-primary text-white px-4 py-2 rounded">
          Add Profile
        </button>
      </form>

      {/* Location Picker Modal */}
      <LocationPickerModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSelectLocation={handleLocationSelect}
      />
    </div>
  );
};

export default AdminPanel;
