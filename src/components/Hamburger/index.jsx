import styles from './hamburger.module.css'

const Hamburger = ({showMobileMenu, mobileMenu}) => {
  return (
    <div>
      <button className={`${styles.hamburger} ${mobileMenu ? styles.active : ''}`} aria-label="Mobile Menu button" onClick={showMobileMenu}>
      <span></span><span></span><span></span>
    </button>
    </div>
  )
}

export default Hamburger