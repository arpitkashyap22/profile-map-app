import React from 'react';
import { useParams } from 'react-router-dom';
import defaultPicture from '../assets/default-user-icon-3.jpg';

const ProfileDetails = ({ profiles }) => {
  const { id } = useParams();
  const profile = profiles.find(p => p.id === parseInt(id, 10));

  if (!profile) return <div className="p-4 bg-gray-700 rounded-lg text-white">Profile not found</div>;

  return (
    <div className="p-4 bg-gray-700 rounded-lg text-white">
      <h2 className="text-2xl font-semibold mb-4">{profile.name}</h2>
      <img
        src={profile.photo || defaultPicture} // Provide a default image if none is available
        alt={profile.name}
        className="w-32 h-32 object-cover rounded-full mb-4"
      />
      <p className="mb-2">{profile.description}</p>
      <p className="text-gray-400 mb-2">{profile.address}</p>
      <p className="text-gray-400 mb-2">Contact: {profile.contactInfo}</p>
      <p className="text-gray-400 mb-4">Interests: {profile.interests}</p>
      <button
        onClick={() => window.location.href = `/map?lat=${encodeURIComponent(profile.location.lat)}&lng=${encodeURIComponent(profile.location.lng)}`}
        className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark"
      >
        Show on Map
      </button>
    </div>
  );
};

export default ProfileDetails;
