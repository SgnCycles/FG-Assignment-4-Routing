import styles from './navigation.module.css'
import { NavLink } from 'react-router-dom'
import Hamburger from '../Hamburger'
import continents from '../../data/continents'

const Navigation = ({showMobileMenu, mobileMenu, closeMobileMenu}) => {

  return (
    <nav className={styles.navigation}>
      <Hamburger showMobileMenu={showMobileMenu} mobileMenu={mobileMenu}/>
      <div className={`${styles.navMenuList} ${mobileMenu ? styles.active : ''}`}>
      {continents.map((item, index) => <NavLink to={item.name === 'Home' ? '/' : `/continent/${item.name.toLowerCase().replace(' ', '-')}`} className={({isActive}) => `${styles.navItem} ${isActive ? styles.active : ''}`} key={index} onClick={closeMobileMenu}>{item.name}</NavLink>)}
      </div>
    </nav>
  )
}

export default Navigation