import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Globe from 'react-globe.gl'
import styles from './globe.module.css'

const GlobeComponent = ({coordinates}) => {

  const [globeSize, setGlobeSize] = useState(700)
  const [globeOffsetSize, setGlobeOffsetSize] = useState([0, -50])
  const refGlobeComponent = useRef(null)
  const location = useLocation()
  const isHomepage = location.pathname === '/'

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
      setGlobeSize(window.innerWidth <= 767 ? 400 : 700)
      setGlobeOffsetSize(window.innerWidth <= 1440 ? [0, 0] : [0, -50])
    }
    resizeGlobeMobile()
    window.addEventListener('resize', resizeGlobeMobile)
    return () => window.removeEventListener('resize', resizeGlobeMobile)
  }, [])
  
  return (
    <div className={isHomepage ? styles.globeHome : styles.globeContainer}>
      <Globe ref={refGlobeComponent} height={globeSize} globeImageUrl='//cdn.jsdelivr.net/npm/three-globe/example/img/earth-blue-marble.jpg'
        bumpImageUrl='//cdn.jsdelivr.net/npm/three-globe/example/img/earth-topology.png' globeOffset={globeOffsetSize} />
    </div>
  )
}

export default GlobeComponent