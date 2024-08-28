import React, { useState } from 'react';
import ProfileList from './components/ProfileList';
import MapComponent from './components/MapComponent';
import AdminPanel from './components/AdminPanel';

function App() {
  const [profiles, setProfiles] = useState([
    {
      id: 1,
      name: 'Arpit kashyap',
      photo: 'https://via.placeholder.com/150',
      description: 'Software Engineer at XYZ.',
      location: { lat: 40.7128, lng: -74.0060 },
    },
    {
      id: 2,
      name: 'Rishabh',
      photo: 'https://via.placeholder.com/150',
      description: 'Product Manager at ABC.',
      location: { lat: 34.0522, lng: -118.2437 },
    },
  ]);

  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleProfileSelect = (location) => {
    setSelectedLocation(location);
  };

  const handleEditProfile = (profile) => {
    const updatedProfiles = profiles.map((p) => (p.id === profile.id ? profile : p));
    setProfiles(updatedProfiles);
  };

  const handleDeleteProfile = (id) => {
    const updatedProfiles = profiles.filter((profile) => profile.id !== id);
    setProfiles(updatedProfiles);
  };

  return (
    <div className="min-h-screen bg-secondary text-white">
      <header className="text-center p-4 bg-primary">
        <h1 className="text-4xl font-bold">Profile Map App</h1>
      </header>
      <main className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <AdminPanel profiles={profiles} setProfiles={setProfiles} />
          <ProfileList
            profiles={profiles}
            onProfileSelect={handleProfileSelect}
            onEdit={handleEditProfile}
            onDelete={handleDeleteProfile}
          />
          <MapComponent location={selectedLocation} />
        </div>
      </main>
    </div>
  );
}



export default App;
