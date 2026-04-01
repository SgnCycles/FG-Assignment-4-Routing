import styles from './country.module.css'
import { NavLink } from 'react-router-dom'

const CountryCard = ({country}) => {
  return (
  <NavLink className={styles.cardContainer} to={`/country/${country.name.common.toLowerCase().replace(/\s+/g, '-')}`}>
    <div className={styles.card}>
        <div className={styles.countryFlag}>
            <span className={`${styles.cardCircle} ${styles.circle1}`}></span>
            <span className={`${styles.cardCircle} ${styles.circle2}`}></span>
            <span className={`${styles.cardCircle} ${styles.circle3}`}>{country.flag}</span>
        </div>
        <div className={styles.cardGlass}></div>
        <div className={styles.cardContent}>
            <h2 className={styles.cardTitle}>{country.name.common}</h2>
            <p className={styles.cardCapital}><span className={styles.cardInfoTitle}>Capital: </span>{country.capital?.join(', ')}</p>
            <p className={styles.cardPopulation}><span className={styles.cardInfoTitle}>Population: </span>{country.population}</p>
        </div>
        <div className={styles.readMore}>
            <button className={styles.readMoreButton}>Read more</button>
            <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"></path></svg>
        </div>
    </div>
  </NavLink>
  )
}

export default CountryCard