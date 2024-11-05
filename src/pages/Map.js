import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import moment from 'moment';

const taxiIcon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

function Map({ trips }) {
  const center = [40.7128, -74.0060];

  return (
    <MapContainer center={center} zoom={12} style={{ height: '100vh' }} zoomControl={false} className="z-40">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {trips.map((taxi, index) => {
        if (
          taxi.pickup_latitude &&
          taxi.pickup_longitude &&
          !isNaN(parseFloat(taxi.pickup_latitude)) &&
          !isNaN(parseFloat(taxi.pickup_longitude))
        ) {
          const pickupLatLng = [parseFloat(taxi.pickup_latitude), parseFloat(taxi.pickup_longitude)];
          return (
            <Marker key={index} position={pickupLatLng} icon={taxiIcon}>
              <Popup>
              <div>
                <strong>Pickup Time:</strong> {moment(taxi.pickup_datetime).format('MMMM D YYYY, h:mm a')}<br />
                <strong>Dropoff Time:</strong> {moment(taxi.dropoff_datetime).format('MMMM D YYYY, h:mm a')}<br />
                <strong>Passengers:</strong> {taxi.passenger_count}<br />
                <strong>Distance:</strong> {parseFloat(taxi.trip_distance)} miles<br />
              </div>
              </Popup>
            </Marker>
          );
        } else {
          // Handle cases with invalid coordinates (e.g., log an error or skip)
          console.warn(`Invalid coordinates for data index ${index}:`, taxi);
          return null; 
        }
      })}
    </MapContainer>
  );
}

export default Map;