import React, { useState } from 'react';

const AdminPanel = ({ profiles, setProfiles }) => {
  const [newProfile, setNewProfile] = useState({
    id: '',
    name: '',
    description: '',
    photo: '',
    location: { lng: '', lat: '' }
  });
  const [imagePreview, setImagePreview] = useState('');
  const [editing, setEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewProfile((prevProfile) => ({
        ...prevProfile,
        photo: URL.createObjectURL(file)
      }));
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleAddOrUpdateProfile = () => {
    if (editing) {
      // Update existing profile
      setProfiles((prevProfiles) =>
        prevProfiles.map((profile) =>
          profile.id === newProfile.id ? newProfile : profile
        )
      );
      setEditing(false);
    } else {
      // Add new profile
      setProfiles((prevProfiles) => [
        ...prevProfiles,
        { id: Date.now().toString(), ...newProfile }
      ]);
    }
    setNewProfile({
      id: '',
      name: '',
      description: '',
      photo: '',
      location: { lng: '', lat: '' }
    });
    setImagePreview('');
  };

  const handleEditProfile = (profile) => {
    setNewProfile(profile);
    setImagePreview(profile.photo);
    setEditing(true);
  };

  const handleDeleteProfile = (id) => {
    setProfiles((prevProfiles) =>
      prevProfiles.filter((profile) => profile.id !== id)
    );
  };

  return (
    <div className="p-4 bg-gray-800 rounded-lg max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Admin Panel</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-white">Name</label>
          <input
            type="text"
            name="name"
            value={newProfile.name}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-600 bg-gray-700 rounded-md text-white"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-white">Description</label>
          <textarea
            name="description"
            value={newProfile.description}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-600 bg-gray-700 rounded-md text-white"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-white">Longitude</label>
          <input
            type="text"
            name="lng"
            value={newProfile.location.lng}
            onChange={(e) => setNewProfile(prevProfile => ({
              ...prevProfile,
              location: { ...prevProfile.location, lng: e.target.value }
            }))}
            className="mt-1 block w-full p-2 border border-gray-600 bg-gray-700 rounded-md text-white"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-white">Latitude</label>
          <input
            type="text"
            name="lat"
            value={newProfile.location.lat}
            onChange={(e) => setNewProfile(prevProfile => ({
              ...prevProfile,
              location: { ...prevProfile.location, lat: e.target.value }
            }))}
            className="mt-1 block w-full p-2 border border-gray-600 bg-gray-700 rounded-md text-white"
          />
        </div>
        <div className="col-span-2">
          <label className="block text-sm font-medium text-white">Photo</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="block w-full p-2 border border-gray-600 bg-gray-700 text-white"
          />
          {imagePreview && (
            <img
              src={imagePreview}
              alt="Preview"
              className="mt-4 w-full h-40 object-cover rounded-md"
            />
          )}
        </div>
      </div>
      <button
        onClick={handleAddOrUpdateProfile}
        className="mt-4 bg-primary text-white px-4 py-2 rounded"
      >
        {editing ? 'Update Profile' : 'Add Profile'}
      </button>

      <h3 className="text-xl font-semibold mt-8">Existing Profiles</h3>
      <div className="mt-4 space-y-4">
        {profiles.map((profile) => (
          <div key={profile.id} className="bg-gray-700 p-4 rounded-lg flex items-center">
            <img src={profile.photo} alt={profile.name} className="w-16 h-16 object-cover rounded-full mr-4" />
            <div className="flex-1">
              <h4 className="text-lg font-semibold">{profile.name}</h4>
              <p>{profile.description}</p>
              <div className="mt-2 flex space-x-2">
                <button
                  onClick={() => handleEditProfile(profile)}
                  className="bg-primary text-white px-4 py-2 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteProfile(profile.id)}
                  className="bg-red-600 text-white px-4 py-2 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPanel;
