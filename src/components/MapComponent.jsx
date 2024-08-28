import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import { useLocation } from 'react-router-dom';

const MapComponent = () => {
  const mapContainer = useRef(null);
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const lng = parseFloat(params.get('lng'));
  const lat = parseFloat(params.get('lat'));

  useEffect(() => {
    if (mapContainer.current && lng && lat) {
      mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN'; // Replace with your Mapbox token

      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [lng, lat],
        zoom: 12,
      });

      new mapboxgl.Marker()
        .setLngLat([lng, lat])
        .addTo(map);

      map.on('load', () => {
        map.resize();
      });

      return () => map.remove(); // Cleanup on component unmount
    }
  }, [lng, lat]);

  return <div ref={mapContainer} className="w-full h-80"></div>;
};

export default MapComponent;
