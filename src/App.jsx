import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import ProfileList from './components/ProfileList';
import MapComponent from './components/MapComponent';
import SearchFilter from './components/SearchFilter';
import LoadingIndicator from './components/LoadingIndicator';
import ProfileDetails from './components/ProfileDetails';
import AdminPanel from './components/AdminPanel';
import Navbar from './components/Navbar';

function App() {
  const [profiles, setProfiles] = useState([]);
  const [filteredProfiles, setFilteredProfiles] = useState([]);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const response = await fetch('/profiles.json');
        const data = await response.json();
        setProfiles(data);
        setFilteredProfiles(data);
      } catch (error) {
        console.error('Error fetching profiles:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfiles();
  }, []);

  if (loading) return <LoadingIndicator />;
  return (
    <BrowserRouter>

        <Navbar />
          <Routes>
            <Route path="/" element={<ProfileList profiles={profiles} />} />
            <Route path="/profile/:id" element={<ProfileDetails profiles={profiles} />} />
            <Route path="/admin" element={<AdminPanel profiles={profiles} setProfiles={setProfiles} />} />
            <Route path="/map" element={<MapComponent />} />
          </Routes>
    </BrowserRouter>
  );
}

export default App;
