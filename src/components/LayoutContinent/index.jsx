import { Outlet } from 'react-router-dom'
import styles from './layoutContinent.module.css'
import Header from '../Header'
import Footer from '../Footer'

const LayoutContinent = ({showMobileMenu, mobileMenu, closeMobileMenu}) => {
  return (
    <div className={styles.continentContainer}>
      <Header showMobileMenu={showMobileMenu} mobileMenu={mobileMenu} closeMobileMenu={closeMobileMenu}/>
      <Outlet />
      <Footer />
    </div>
  )
}

export default LayoutContinent