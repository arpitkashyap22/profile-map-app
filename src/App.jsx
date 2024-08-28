import React, { useState, useEffect } from 'react';
import ProfileList from './components/ProfileList';
import MapComponent from './components/MapComponent';
import AdminPanel from './components/AdminPanel';

function App() {
  const [profiles, setProfiles] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const response = await fetch('/profiles.json');
        const data = await response.json();
        setProfiles(data);
      } catch (error) {
        console.error('Error fetching profiles:', error);
      }
    };

    fetchProfiles();
  }, []);

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
