import React, { useState } from 'react';

const AdminPanel = ({ profiles, setProfiles }) => {
  const [form, setForm] = useState({ name: '', photo: '', description: '', lng: '', lat: '' });
  const [editId, setEditId] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editId) {
      // Update existing profile
      setProfiles((prev) =>
        prev.map((profile) =>
          profile.id === editId ? { ...profile, ...form } : profile
        )
      );
    } else {
      // Add new profile
      setProfiles((prev) => [
        ...prev,
        { ...form, id: Date.now().toString() }
      ]);
    }
    setForm({ name: '', photo: '', description: '', lng: '', lat: '' });
    setEditId(null);
  };

  const handleEdit = (profile) => {
    setForm(profile);
    setEditId(profile.id);
  };

  const handleDelete = (id) => {
    setProfiles((prev) => prev.filter((profile) => profile.id !== id));
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Admin Panel</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name"
          className="p-2 mb-2 w-full"
        />
        <input
          type="text"
          name="photo"
          value={form.photo}
          onChange={handleChange}
          placeholder="Photo URL"
          className="p-2 mb-2 w-full"
        />
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Description"
          className="p-2 mb-2 w-full"
        />
        <input
          type="number"
          name="lng"
          value={form.lng}
          onChange={handleChange}
          placeholder="Longitude"
          className="p-2 mb-2 w-full"
        />
        <input
          type="number"
          name="lat"
          value={form.lat}
          onChange={handleChange}
          placeholder="Latitude"
          className="p-2 mb-2 w-full"
        />
        <button type="submit" className="bg-primary text-white px-4 py-2 rounded">
          {editId ? 'Update Profile' : 'Add Profile'}
        </button>
      </form>
      <h3 className="text-xl font-semibold mb-2">Profiles List</h3>
      <ul>
        {profiles.map((profile) => (
          <li key={profile.id} className="bg-gray-700 p-4 mb-2 rounded">
            <h4 className="text-lg font-semibold">{profile.name}</h4>
            {profile.photo && <img src={profile.photo} alt={profile.name} className="w-32 h-32 object-cover rounded-full" />}
            <p>{profile.description}</p>
            <button onClick={() => handleEdit(profile)} className="bg-yellow-500 text-white px-4 py-2 rounded mr-2">
              Edit
            </button>
            <button onClick={() => handleDelete(profile.id)} className="bg-red-500 text-white px-4 py-2 rounded">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;
