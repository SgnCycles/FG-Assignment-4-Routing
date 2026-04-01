import styles from './header.module.css'
import Logo from '../Logo'
import Navigation from '../Navigation'

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo/>
      <Navigation />
    </header>
  )
}

export default Header