import React from 'react';
import MapComponent from './components/MapComponent';

function App() {
  return (
    <div className="min-h-screen bg-secondary text-white">
      <header className="text-center p-4 bg-primary">
        <h1 className="text-4xl font-bold">Profile Map App</h1>
      </header>
      <main className="p-4">
        <MapComponent />
      </main>
    </div>
  );
}

export default App;
