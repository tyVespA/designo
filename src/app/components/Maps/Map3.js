import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from "leaflet";

import styles from "./Maps.module.css";

export default function Map3() {
  const position = [51.50096, -0.1252];
  return (
    <MapContainer
      className={styles.map}
      center={position}
      zoom={17}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        position={position}
        icon={
          new Icon({
            iconUrl: "/shared/desktop/markerIcon.png",
            iconSize: [40, 66],
            iconAnchor: [20, 66],
          })
        }
      ></Marker>
    </MapContainer>
  );
}
