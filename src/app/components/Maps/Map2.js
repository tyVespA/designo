import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from "leaflet";

import styles from "./Maps.module.css";

export default function Map2() {
  const position = [-30.329597, 149.788339];
  return (
    <MapContainer
      className={styles.map}
      center={position}
      zoom={15}
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
