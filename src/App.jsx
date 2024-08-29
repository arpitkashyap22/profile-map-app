import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import BrowserRouter
import ProfileList from './components/ProfileList';
import MapComponent from './components/MapComponent';
import LoadingIndicator from './components/LoadingIndicator';
import ProfileDetails from './components/ProfileDetails';
import AdminPanel from './components/AdminPanel';
import Navbar from './components/Navbar';

function App() {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const response = await fetch('/profiles.json');
        const text = await response.text(); // Get raw text to debug
        console.log('Raw response:', text); // Log raw response for inspection
        const data = JSON.parse(text); // Parse the text as JSON
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

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProfileList profiles={profiles} />} />
        <Route path="/profile/:id" element={<ProfileDetails profiles={profiles} />} />
        <Route path="/admin" element={<AdminPanel profiles={profiles} setProfiles={setProfiles} />} />
        <Route path="/map" element={<MapComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
