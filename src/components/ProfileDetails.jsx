import React from 'react';
import { useParams } from 'react-router-dom';

const ProfileDetails = ({ profiles }) => {
  const { id } = useParams();
  const profile = profiles.find(p => p.id === id);

  if (!profile) return <div>Profile not found</div>;

  return (
    <div className="p-4 bg-gray-700 rounded-lg">
      <h2 className="text-2xl font-semibold">{profile.name}</h2>
      <img src={profile.photo} alt={profile.name} className="w-32 h-32 object-cover rounded-full mb-4" />
      <p>{profile.description}</p>
      <p className="text-gray-400">{profile.address}</p>
      <p className="text-gray-400">Contact: {profile.contactInfo}</p>
      <p className="text-gray-400">Interests: {profile.interests}</p>
      <button
        onClick={() => window.location.href = `/map?address=${encodeURIComponent(profile.address)}`}
        className="mt-2 bg-primary text-white px-4 py-2 rounded"
      >
        Show on Map
      </button>
    </div>
  );
};

export default ProfileDetails;
