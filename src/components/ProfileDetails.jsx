import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import defaultPicture from '../assets/default-user-icon-3.jpg';
import { Link } from 'react-router-dom';

import ProfileService from '../services/ProfileService';

const ProfileDetails = ({ profiles, setProfiles }) => {
  
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentProfiles, setCurrentProfiles] = useState(profiles);
  const profile = currentProfiles.find(p => p.id === parseInt(id, 10));

  if (!profile) return <div className="p-4 bg-gray-700 rounded-lg text-white">Profile not found</div>;

  const handleEdit = () => {
    navigate(`/edit/${id}`);
  };

  const handleDelete = async () => {
    const confirmDelete = window.confirm(`Are you sure you want to delete ${profile.name}?`);
    if (confirmDelete) {
      try {
        const updatedProfiles = await ProfileService.deleteProfile(profile.id);
        setCurrentProfiles(updatedProfiles);
        setProfiles(updatedProfiles); // Update the profiles state in App component
        navigate('/'); // Redirect to the profile list after deletion
      } catch (error) {
        console.error('Error deleting profile:', error);
      }
    }
  };

  return (
    <div className="p-4 bg-gray-700 rounded-lg text-white">
      <h2 className="text-2xl font-semibold mb-4">{profile.name}</h2>
      <img
        src={profile.photo || defaultPicture}
        alt={profile.name}
        className="w-32 h-32 object-cover rounded-full mb-4"
      />
      <p className="mb-2">{profile.description}</p>
      <p className="text-gray-400 mb-2">{profile.address}</p>
      <p className="text-gray-400 mb-2">Contact: {profile.contactInfo}</p>
      <p className="text-gray-400 mb-4">Interests: {profile.interests}</p>
      
      {/*<button
        onClick={() => window.location.href = `/map?lat=${encodeURIComponent(profile.location.lat)}&lng=${encodeURIComponent(profile.location.lng)}`}
        className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark mr-2"
      >
        Show on Map
      </button>

      {/* Edit Button */
      <Link
                    to={`/map?lat=${encodeURIComponent(profile.location.lat)}&lng=${encodeURIComponent(profile.location.lng)}`}
                    className="bg-secondary text-white px-4 py-2 rounded m-2 hover:bg-secondary-dark"
                  >
                    Show on Map
                  </Link>}
      <button
        onClick={handleEdit}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 mr-2"
      >
        Edit
      </button>

      {/* Delete Button */}
      <button
        onClick={handleDelete}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
      >
        Delete
      </button>
    </div>
  );
};

export default ProfileDetails;
