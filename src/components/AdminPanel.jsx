import React, { useState } from 'react';

const AdminPanel = ({ profiles, setProfiles }) => {
  const [formState, setFormState] = useState({ name: '', photo: '', description: '', lat: '', lng: '' });

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProfile = {
      id: profiles.length + 1,
      name: formState.name,
      photo: formState.photo,
      description: formState.description,
      location: {
        lat: parseFloat(formState.lat),
        lng: parseFloat(formState.lng),
      },
    };
    setProfiles([...profiles, newProfile]);
    setFormState({ name: '', photo: '', description: '', lat: '', lng: '' });
  };

  return (
    <div className="p-4 bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-white">Admin Panel</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formState.name}
          onChange={handleChange}
          className="block w-full mb-2 p-2 bg-gray-700 text-white rounded"
        />
        <input
          type="text"
          name="photo"
          placeholder="Photo URL"
          value={formState.photo}
          onChange={handleChange}
          className="block w-full mb-2 p-2 bg-gray-700 text-white rounded"
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formState.description}
          onChange={handleChange}
          className="block w-full mb-2 p-2 bg-gray-700 text-white rounded"
        />
        <input
          type="text"
          name="lat"
          placeholder="Latitude"
          value={formState.lat}
          onChange={handleChange}
          className="block w-full mb-2 p-2 bg-gray-700 text-white rounded"
        />
        <input
          type="text"
          name="lng"
          placeholder="Longitude"
          value={formState.lng}
          onChange={handleChange}
          className="block w-full mb-4 p-2 bg-gray-700 text-white rounded"
        />
        <button type="submit" className="w-full bg-primary p-2 rounded text-white">
          Add Profile
        </button>
      </form>
    </div>
  );
};

export default AdminPanel;
