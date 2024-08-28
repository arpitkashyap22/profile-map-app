import React, { useState } from 'react';
import ProfileList from './components/ProfileList';
import MapComponent from './components/MapComponent';

function App() {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleProfileSelect = (location) => {
    setSelectedLocation(location);
  };

  return (
    <div className="min-h-screen bg-secondary text-white">
      <header className="text-center p-4 bg-primary">
        <h1 className="text-4xl font-bold">Profile Map App</h1>
      </header>
      <main className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ProfileList onProfileSelect={handleProfileSelect} />
          <MapComponent location={selectedLocation} />
        </div>
      </main>
    </div>
  );
}

export default App;
