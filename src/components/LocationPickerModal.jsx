import React, { useState } from 'react';
import Map from 'react-map-gl';
import { Dialog } from '@headlessui/react';

const LocationPickerModal = ({ isOpen, onClose, onSelectLocation }) => {
  const [viewport, setViewport] = useState({
    latitude: 37.7749, // Default to San Francisco
    longitude: -122.4194,
    zoom: 12,
    width: '100%',
    height: '400px',
  });

  const handleMapClick = (event) => {
    const { lngLat } = event;
    onSelectLocation({ lat: lngLat[1], lng: lngLat[0] });
    onClose();
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <Dialog.Panel className="w-full max-w-lg p-6 bg-white rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Pick a Location</h2>
        <Map
          {...viewport}
          mapboxAccessToken="YOUR_MAPBOX_TOKEN"
          mapStyle="mapbox://styles/mapbox/streets-v11"
          onViewportChange={(nextViewport) => setViewport(nextViewport)}
          onClick={handleMapClick}
        />
        <button onClick={onClose} className="mt-4 bg-gray-800 text-white px-4 py-2 rounded">
          Cancel
        </button>
      </Dialog.Panel>
    </Dialog>
  );
};

export default LocationPickerModal;
