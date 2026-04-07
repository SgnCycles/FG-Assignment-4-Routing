import { useEffect, useRef, useState } from 'react'
import Globe from 'react-globe.gl'
import styles from './globe.module.css'

const GlobeComponent = ({coordinates}) => {

  const [globeSize, setGlobeSize] = useState(800)
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

  useEffect(() => {
    const resizeGlobeMobile = () => {
      setGlobeSize(window.innerWidth <= 767 ? 400 : 800)
    }
    resizeGlobeMobile()
    window.addEventListener('resize', resizeGlobeMobile)
  }, [])
  
  return (
    <div className={styles.globeContainer}>
      <Globe ref={refGlobeComponent} height={globeSize} globeImageUrl="//cdn.jsdelivr.net/npm/three-globe/example/img/earth-blue-marble.jpg"
        bumpImageUrl="//cdn.jsdelivr.net/npm/three-globe/example/img/earth-topology.png" globeOffset={[0, -30]} />
    </div>

  )
}

export default GlobeComponent