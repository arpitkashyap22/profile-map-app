import React from 'react';
import { Link } from 'react-router-dom';

const ProfileList = ({ profiles }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {profiles.map(profile => (
        <div key={profile.id} className="bg-gray-800 p-4 rounded-lg">
          <img src={profile.photo} alt={profile.name} className="w-full h-32 object-cover rounded-full" />
          <h3 className="text-xl font-semibold mt-2">{profile.name}</h3>
          <p>{profile.description}</p>
          <div className="mt-2 flex space-x-4">
            <Link to={`/profile/${profile.id}`} className="text-primary underline">View Details</Link>
            <Link
              to={`/map?lng=${profile.location.lng}&lat=${profile.location.lat}`}
              className="text-primary underline"
            >
              Show on Map
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProfileList;
