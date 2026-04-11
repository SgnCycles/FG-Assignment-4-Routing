import { Outlet } from 'react-router-dom'
import styles from './layoutHome.module.css'
import Header from '../Header'
import Footer from '../Footer'
import Logo from '../Logo'

const LayoutHome = ({showMobileMenu, mobileMenu, closeMobileMenu}) => {
  return (
    <div className={styles.homeContainer}>
      <Logo />
      <Outlet />
      <Header showMobileMenu={showMobileMenu} mobileMenu={mobileMenu} closeMobileMenu={closeMobileMenu}/>
      <Footer />
    </div>
  )
}

export default LayoutHome