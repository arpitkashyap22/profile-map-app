import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import { useLocation } from 'react-router-dom';

const MapComponent = () => {
  const mapContainer = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const lng = parseFloat(params.get('lng')) || -122.4194; // Default to San Francisco
    const lat = parseFloat(params.get('lat')) || 37.7749; // Default to San Francisco

    mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: 12
    });

    new mapboxgl.Marker()
      .setLngLat([lng, lat])
      .addTo(map);

    return () => map.remove(); // Clean up on unmount
  }, [location.search]);

  return (
    <div className="w-full h-80 md:h-96 lg:h-[500px]" ref={mapContainer}></div>
  );
};

export default MapComponent;
