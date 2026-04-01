import styles from './continent.module.css'
import useFetch from '../../hooks/useFetch'
import { useEffect } from 'react'
import { useParams} from 'react-router-dom'
import Globe from '../../components/Globe'
import CountryCard from '../../components/CountryCard'
import continents from '../../data/continents'

const Continent = ({coordinates, updateCoordinates}) => {

  const {name} = useParams()
  const normalizedContinentName = name.replace(/-/g, ' ')
  const countriesData = useFetch('all?fields=name,capital,flag,population,continents')

  const continentData = continents.find(continent => continent.name.toLowerCase() === normalizedContinentName.toLowerCase())

  useEffect( () => {
    updateCoordinates(continentData.coordinates)
  }, [continentData])

  if(!countriesData) {
    return null
  }

  const filteredContinentCountries = countriesData.filter(country => country.continents.includes(continentData.name))

  return (
    <>
    <Globe coordinates={coordinates}/>
    <h1 className={styles.continentHeader}>Welcome to {name.charAt(0).toUpperCase() + name.slice(1)}!</h1>
    <div className={styles.countryContainer}>
      {filteredContinentCountries && filteredContinentCountries.map((country, index) => <CountryCard key={index} country={country}/>)}
    </div>
    </>
  )
}

export default Continent