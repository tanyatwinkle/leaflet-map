import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect } from 'react';
import L from 'leaflet';


// Import the marker icon images
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Fix the default icon issue
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x.src,
  iconUrl: markerIcon.src,
  shadowUrl: markerShadow.src,
});

const markers = [
  { position: [28.6139, 77.209], label: "New Delhi", name:"New Delhi"},
  { position: [19.076, 72.8777], label: "Mumbai" , name:"Mumbai"},
  { position: [13.0827, 80.2707], label: "Chennai", name:"Chennai" },
  { position: [22.5726, 88.3639], label: "Kolkata", name:"Kolkata" },
  { position: [12.9716, 77.5946], label: "Bangalore", name:"Bangalore" },
];

function MarkerWithClick({ position }) {
  const map = useMap();

  const handleClick = () => {
    map.setView(position, map.getZoom(), {
      animate: true,
    });
  };

  return <Marker position={position} eventHandlers={{ click: handleClick }} />;
}

export default function MapComponent() {
  return (
    <MapContainer center={[20.5937, 78.9629]} zoom={5} style={{ height: '715ypx', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      {markers.map((marker, index) => (
        <MarkerWithClick key={index} position={marker.position} />
      ))}
    </MapContainer>
  );
}
