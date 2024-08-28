import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ProfileDetails = ({ profiles }) => {
  const { id } = useParams();
  const navigate = useNavigate(); // Using useNavigate for navigation
  const profile = profiles.find(p => p.id === id);

  if (!profile) return <div>Profile not found</div>;

  const handleShowOnMap = () => {
    // Ensure location is available and navigate to the map page
    if (profile.location && profile.location.lng && profile.location.lat) {
      navigate(`/map?lng=${profile.location.lng}&lat=${profile.location.lat}`);
    } else {
      console.error('Location data is missing');
    }
  };

  return (
    <div className="p-4 bg-gray-700 rounded-lg">
      <h2 className="text-2xl font-semibold">{profile.name}</h2>
      <p>{profile.description}</p>
      <button
        onClick={handleShowOnMap}
        className="mt-2 bg-primary text-white px-4 py-2 rounded"
      >
        Show on Map
      </button>
    </div>
  );
};

export default ProfileDetails;
