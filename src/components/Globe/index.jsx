import { useEffect, useRef } from 'react'
import Globe from 'react-globe.gl'
import styles from './globe.module.css'

const GlobeComponent = ({coordinates}) => {

  const refGlobeComponent = useRef(null)

  useEffect(() => {

    if (coordinates && refGlobeComponent.current) {
      refGlobeComponent.current.pointOfView(
        {lat: coordinates.lat, lng: coordinates.lng},
        2000
      )
      refGlobeComponent.current.controls().enableZoom = false
    }
  }, [coordinates])
  
  return (
    <div className={styles.globeContainer}>
      <Globe ref={refGlobeComponent} globeImageUrl="//cdn.jsdelivr.net/npm/three-globe/example/img/earth-blue-marble.jpg"
        bumpImageUrl="//cdn.jsdelivr.net/npm/three-globe/example/img/earth-topology.png" globeOffset={[0, -30]} />
    </div>

  )
}

export default GlobeComponent