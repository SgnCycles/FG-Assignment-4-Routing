import styles from './country.module.css'
import Globe from '../../components/Globe'
import useFetch from '../../hooks/useFetch'
// import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Country = ({countryCoordinates, updateCountryCoordinates}) => {

  const {name} = useParams()
  const normalizedCountryName = name.replace(/-/g, ' ')
  const countryData = useFetch(`name/${encodeURIComponent(normalizedCountryName)}`)

  if (!countryData) {
    return null
  }

  console.log('1.country data', countryData)

  const country = countryData[0]

  console.log('2.country', countryData)

  const normalizedCountryCoordinates = {lat: country.latlng[0], lng: country.latlng[1]}

  console.log('3.country coordinates', normalizedCountryCoordinates)

  // useEffect( () => {
  //   updateCountryCoordinates(normalizedCountryCoordinates)
  // }, [country])
  

  return (
    <div className={styles.countryPage}>
      <Globe countryCoordinates={countryCoordinates}/>
      <h1>This is the Page for {  country.name.common}</h1>
      <p>Capital: {country.capital}</p>
      <p>Continent: {country.region}</p>
      <p>Subregion: {country.subregion}</p>
      <p>Population: {country.population}</p>
      <p>Currency: {country.currency}</p>
      <p>Coordinates: {country.latlng}</p>
    </div>
  )
}

export default Country