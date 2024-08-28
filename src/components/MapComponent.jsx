import React, { useEffect } from 'react';
import Map, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

const MapComponent = ({ location }) => {
  const [viewport, setViewport] = React.useState({
    latitude: location?.lat || -3.745,
    longitude: location?.lng || -38.523,
    zoom: 10,
  });

  useEffect(() => {
    if (location) {
      setViewport({
        ...viewport,
        latitude: location.lat,
        longitude: location.lng,
        zoom: 12,
      });
    }
  }, [location]);

  return (
    <Map
      initialViewState={viewport}
      style={{ width: '100%', height: '400px' }}
      mapStyle="mapbox://styles/mapbox/streets-v11"
      mapboxAccessToken={MAPBOX_TOKEN}
      onViewportChange={(newViewport) => setViewport(newViewport)}
    >
      {location && <Marker longitude={location.lng} latitude={location.lat} color="red" />}
    </Map>
  );
};

export default MapComponent;
