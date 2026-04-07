import Header from "../Header"
import Footer from "../Footer"
import { Outlet } from 'react-router-dom'

const LayoutCountry = ({showMobileMenu, mobileMenu, closeMobileMenu}) => {
  return (
    <>
      <Header showMobileMenu={showMobileMenu} mobileMenu={mobileMenu} closeMobileMenu={closeMobileMenu}/>
      <Outlet />
      <Footer />
    </>
  )
}

export default LayoutCountry