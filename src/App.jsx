import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProfileList from './components/ProfileList';
import MapComponent from './components/MapComponent';
import LoadingIndicator from './components/LoadingIndicator';
import ProfileDetails from './components/ProfileDetails';
import AdminPanel from './components/AdminPanel';
import Navbar from './components/Navbar';
import profileService from './services/ProfileService';

function App() {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const data = await profileService.getProfiles();
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
    try {
      await profileService.addProfile(profile);
      setProfiles(await profileService.getProfiles());
    } catch (error) {
      console.error('Error adding profile:', error);
    }
  };

  const handleModifyProfile = async (profile) => {
    try {
      await profileService.modifyProfile(profile);
      setProfiles(await profileService.getProfiles());
    } catch (error) {
      console.error('Error modifying profile:', error);
    }
  };

  const handleDeleteProfile = async (id) => {
    try {
      await profileService.deleteProfile(id);
      setProfiles(await profileService.getProfiles());
    } catch (error) {
      console.error('Error deleting profile:', error);
    }
  };

  return (
    <Router>
      <Navbar />
      <div className='bg-secondary text-white"'>
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
      </Routes>
      </div>
    </Router>
  );
}

export default App;
