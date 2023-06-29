import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './MapComponent.css';

const MapComponent = () => {
  const position = [28.620259, 77.291188];

  return (
    <div class="map-Container">
<h1 class="map-heading">Meet Us for a coffee chat!</h1>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.2078380017338!2d77.35470727431051!3d28.62353238449145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce547c0b17071%3A0xefc95a9d095fd4bf!2sIIM%20Lucknow%20(Noida%20Campus)!5e0!3m2!1sen!2sin!4v1686343536852!5m2!1sen!2sin" class="GooglemapClass" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  );
};

export default MapComponent;
