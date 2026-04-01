import styles from './layoutContinent.module.css'
import Header from "../Header"
import Footer from "../Footer"
import { Outlet } from 'react-router-dom'

const LayoutContinent = () => {
  return (
    <>
    <div className={styles.continentContainer}>
      <Header />
      <Outlet />
      <Footer />
    </div>
    </>
  )
}

export default LayoutContinent