import {useState}from 'react';
import Map, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

const MapComponent = () => {
  const [viewport, setViewport] = useState({
    latitude: -3.745,
    longitude: -38.523,
    zoom: 10,
  });


  return (
    <Map
      initialViewState={viewport}
      style={{ width: '100%', height: '400px' }}
      mapStyle="mapbox://styles/mapbox/streets-v11"
      mapboxAccessToken={MAPBOX_TOKEN}
      onViewportChange={(newViewport) => setViewport(newViewport)}
    >
      <Marker
        longitude={-38.523}
        latitude={-3.745}
        color="red"
      />
    </Map>
  );
};

export default MapComponent;
