import styles from './layoutCountry.module.css'
import Header from '../Header'
import Footer from '../Footer'
import { Outlet } from 'react-router-dom'

const LayoutCountry = ({showMobileMenu, mobileMenu, closeMobileMenu}) => {
  return (
    <div className={styles.CountryContainer}>
      <Header showMobileMenu={showMobileMenu} mobileMenu={mobileMenu} closeMobileMenu={closeMobileMenu}/>
      <Outlet />
      <Footer />
    </div>
  )
}

export default LayoutCountry