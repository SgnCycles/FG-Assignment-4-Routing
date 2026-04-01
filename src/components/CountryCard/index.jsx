import styles from './country.module.css'
import { NavLink } from 'react-router-dom'

const CountryCard = ({country}) => {
  return (
    <NavLink className={styles.countryCard} to={`/country/${country.name.common.toLowerCase().replace(/\s+/g, '-')}`} >
      <h2 className={styles.countryCardHeader}>{country.name.common}<span className={styles.countryCardFlag}>{country.flag}</span></h2>
      <p className={styles.countryCardCapital}><span>Capital:</span> {country.capital?.join(', ')}</p>
      <p className={styles.countryCardPopulation}><span>Population:</span>  {country.population}</p>
    </NavLink>
  )
}

export default CountryCard