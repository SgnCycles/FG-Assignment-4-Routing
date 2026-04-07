import styles from './header.module.css'
import Logo from '../Logo'
import Navigation from '../Navigation'

const Header = ({showMobileMenu, mobileMenu, closeMobileMenu}) => {
  return (
    <header className={styles.header}>
      <Logo/>
      <Navigation showMobileMenu={showMobileMenu} mobileMenu={mobileMenu} closeMobileMenu={closeMobileMenu}/>
    </header>
  )
}

export default Header