import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProfileList from './components/ProfileList';
import MapComponent from './components/MapComponent';
import LoadingIndicator from './components/LoadingIndicator';
import ProfileDetails from './components/ProfileDetails';
import AdminPanel from './components/AdminPanel';
import Navbar from './components/Navbar';
import ProfileService from './services/ProfileService'; // Import the service

function App() {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const data = await ProfileService.getProfiles(); // Call static method directly
        setProfiles(data);
      } catch (error) {
        console.error('Error fetching profiles:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfiles();
  }, []);

  if (loading) return <LoadingIndicator />;

  const handleAddProfile = async (profile) => {
    await ProfileService.addProfile(profile); // Call static method directly
    setProfiles(await ProfileService.getProfiles()); // Reload profiles
  };

  const handleModifyProfile = async (profile) => {
    await ProfileService.modifyProfile(profile); // Call static method directly
    setProfiles(await ProfileService.getProfiles()); // Reload profiles
  };

  const handleDeleteProfile = async (id) => {
    await ProfileService.deleteProfile(id); // Call static method directly
    setProfiles(await ProfileService.getProfiles()); // Reload profiles
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProfileList profiles={profiles} />} />
        <Route path="/profile/:id" element={<ProfileDetails profiles={profiles} />} />
        <Route path="/admin" element={
          <AdminPanel
            addProfile={handleAddProfile}
            modifyProfile={handleModifyProfile}
            deleteProfile={handleDeleteProfile}
          />
        } />
        <Route path="/map" element={<MapComponent />} />
        <Route path="*" element={<h1>page not found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
