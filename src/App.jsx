import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import LayoutHome from './components/LayoutHome'
import LayoutContinent from './components/LayoutContinent'
import LayoutCountry from './components/LayoutCountry'
import Continent from './pages/Continent'
import Country from './pages/Country'
import Home from './pages/Home'

function App() {

  const [mobileMenu, setMobileMenu] = useState(false)
  const [coordinates, setCoordinates] = useState([])

  const showMobileMenu = () => {
    setMobileMenu(!mobileMenu)
  }

  const closeMobileMenu = () => {
    setMobileMenu(false)
  }
  
  const updateCoordinates = (newCoordinates) => {
    setCoordinates(newCoordinates)
  }

  return (
    <>
    <Routes>
      <Route element={<LayoutHome showMobileMenu={showMobileMenu} mobileMenu={mobileMenu} closeMobileMenu={closeMobileMenu} updateCoordinates={updateCoordinates}/>}>
        <Route path='/' element={<Home />}/>
      </Route>
      <Route element={<LayoutContinent showMobileMenu={showMobileMenu} mobileMenu={mobileMenu} closeMobileMenu={closeMobileMenu} />}>
        <Route path='/continent/:name' element={<Continent coordinates={coordinates} updateCoordinates={updateCoordinates}/>}/>
      </Route>
      <Route element={<LayoutCountry showMobileMenu={showMobileMenu} mobileMenu={mobileMenu} closeMobileMenu={closeMobileMenu} />}>
        <Route path='/country/:name' element={<Country countryCoordinates={coordinates} updateCountryCoordinates={updateCoordinates}/>}/>
      </Route>
    </Routes>
    </>
  )
}

export default App