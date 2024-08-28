const ProfileList = ({ profiles, onProfileSelect, onEdit, onDelete }) => {
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
                <button
                  onClick={() => onEdit(profile)}
                  className="ml-2 mt-2 text-yellow-500 underline"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(profile.id)}
                  className="ml-2 mt-2 text-red-500 underline"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
export default ProfileList;