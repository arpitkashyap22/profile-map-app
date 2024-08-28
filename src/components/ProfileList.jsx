import React from 'react';

const ProfileList = ({ profiles, onProfileSelect }) => {
  return (
    <div className="space-y-4">
      {profiles.map((profile) => (
        <div key={profile.id} className="bg-gray-700 p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">{profile.name}</h3>
          {profile.photo && <img src={profile.photo} alt={profile.name} className="w-32 h-32 object-cover rounded-full" />}
          <p>{profile.description}</p>
          <button
            onClick={() => onProfileSelect(profile.location)}
            className="mt-2 bg-primary text-white px-4 py-2 rounded"
          >
            Show on Map
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProfileList;
