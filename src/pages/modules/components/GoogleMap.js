import React from 'react';
import GoogleMapReact from 'google-map-react';

const MapComponent = () => {
  // Function to determine the map container width based on screen size
  const getMapContainerWidth = () => {
    if (window.innerWidth >= 768) {
      return '100%'; // Set width to 100% for screen size >= 768px (md)
    }
    return '80%'; // Set width to 80% for other screen sizes
  };

  // Set map container width and height based on screen size
  const mapContainerStyle = {
    width: getMapContainerWidth(),
    height: '100vh', // Full height
  };

  return (
    <div id="map-container" style={mapContainerStyle}>
      <GoogleMapReact
        // Add your Google Maps API key here
        bootstrapURLKeys={{ key: 'YOUR_GOOGLE_MAPS_API_KEY' }}
        defaultCenter={{ lat: 37.7749, lng: -122.4194 }} // Default center coordinates
        defaultZoom={12} // Default zoom level
      >
        {/* Add your marker component or logic here */}
      </GoogleMapReact>
    </div>
  );
};

export default MapComponent;