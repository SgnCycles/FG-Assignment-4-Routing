import styles from './layoutHome.module.css'
import Header from "../Header"
import Footer from "../Footer"
import { Outlet } from 'react-router-dom'

const LayoutHome = () => {
  return (
    <div className={styles.homeContainer}>
      <Outlet />
      <Header />
      <Footer />
    </div>
  )
}

export default LayoutHome