import React, { useEffect, useState } from 'react';
import Map, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';

const MapComponent = ({ address }) => {
  const [viewport, setViewport] = useState({
    latitude: 37.7749, // Default to San Francisco
    longitude: -122.4194,
    zoom: 10,
    width: '100%',
    height: '500px'
  });
  const [marker, setMarker] = useState(null);

  useEffect(() => {
    if (address) {
      fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=YOUR_MAPBOX_TOKEN`)
        .then(response => response.json())
        .then(data => {
          const [lng, lat] = data.features[0].geometry.coordinates;
          setViewport(prevViewport => ({
            ...prevViewport,
            latitude: lat,
            longitude: lng
          }));
          setMarker({ latitude: lat, longitude: lng });
        })
        .catch(error => console.error('Error fetching location:', error));
    }
  }, [address]);

  return (
    <Map
      {...viewport}
      mapboxAccessToken="YOUR_MAPBOX_TOKEN"
      mapStyle="mapbox://styles/mapbox/streets-v11"
      onViewportChange={nextViewport => setViewport(nextViewport)}
    >
      {marker && <Marker latitude={marker.latitude} longitude={marker.longitude} color="red" />}
    </Map>
  );
};

export default MapComponent;
