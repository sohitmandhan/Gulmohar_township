import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

// Define map container styles
const containerStyle = {
  width: "100%",
  height: "500px",
  borderRadius: "10px",
  boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
};

// Default center (Nashville, TN)
const defaultCenter = {
  lat: 36.1627,
  lng: -86.7816,
};

const GoogleMapComponent = () => {
  return (
    <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={defaultCenter}
        zoom={12}
      >
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;
