import React from 'react';

const profiles = [
  {
    id: 1,
    name: 'John Doe',
    photo: 'https://via.placeholder.com/150',
    description: 'Software Engineer at XYZ.',
    location: { lat: 40.7128, lng: -74.0060 }, // Example coordinates for New York
  },
  {
    id: 2,
    name: 'Jane Smith',
    photo: 'https://via.placeholder.com/150',
    description: 'Product Manager at ABC.',
    location: { lat: 34.0522, lng: -118.2437 }, // Example coordinates for Los Angeles
  },
  // Add more profiles as needed
];

const ProfileList = ({ onProfileSelect }) => {
  return (
    <div className="space-y-4">
      {profiles.map((profile) => (
        <div key={profile.id} className="bg-gray-800 p-4 rounded-lg shadow-md">
          <div className="flex items-center space-x-4">
            <img src={profile.photo} alt={profile.name} className="w-16 h-16 rounded-full" />
            <div>
              <h2 className="text-xl font-semibold text-white">{profile.name}</h2>
              <p className="text-gray-400">{profile.description}</p>
              <button
                onClick={() => onProfileSelect(profile.location)}
                className="mt-2 text-primary underline"
              >
                View on Map
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProfileList;
