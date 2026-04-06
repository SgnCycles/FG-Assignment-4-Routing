import { div } from 'three/src/nodes/math/OperatorNode.js'
import styles from './map.module.css'
import { MapContainer, TileLayer } from 'react-leaflet'
import "leaflet/dist/leaflet.css";

const Map = ({countryLatitude, countryLongitude }) => {
  return(
    <div className={styles.mapContainer}>
      <MapContainer className={styles.map} center={[countryLatitude, countryLongitude]} zoom={5} scrollWheelZoom={false}>
        <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  )
}

export default Map