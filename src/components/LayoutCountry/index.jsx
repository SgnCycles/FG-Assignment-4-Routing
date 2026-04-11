import { Outlet } from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer'

const LayoutCountry = ({showMobileMenu, mobileMenu, closeMobileMenu}) => {
  return (
    <div>
      <Header showMobileMenu={showMobileMenu} mobileMenu={mobileMenu} closeMobileMenu={closeMobileMenu}/>
      <Outlet />
      <Footer />
    </div>
  )
}

export default LayoutCountry