import styles from './header.module.css'
import Logo from '../Logo'
import Navigation from '../Navigation'
import { useLocation } from 'react-router-dom'

const Header = ({showMobileMenu, mobileMenu, closeMobileMenu}) => {

  const location = useLocation()
  const isHomepage = location.pathname === '/'

  return (
    <header className={styles.header}>
      {!isHomepage && <Logo/>}
      <Navigation showMobileMenu={showMobileMenu} mobileMenu={mobileMenu} closeMobileMenu={closeMobileMenu}/>
    </header>
  )
}

export default Header