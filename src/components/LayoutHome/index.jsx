import styles from './layoutHome.module.css'
import Header from "../Header"
import Footer from "../Footer"
import { Outlet } from 'react-router-dom'

const LayoutHome = ({showMobileMenu, mobileMenu, closeMobileMenu}) => {
  return (
    <div className={styles.homeContainer}>
      <Outlet />
      <Header showMobileMenu={showMobileMenu} mobileMenu={mobileMenu} closeMobileMenu={closeMobileMenu}/>
      <Footer />
    </div>
  )
}

export default LayoutHome