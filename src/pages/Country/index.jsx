import styles from './country.module.css'
import useFetch from '../../hooks/useFetch'
import { useParams } from 'react-router-dom'
import Map from '../../components/Map'

const Country = () => {

  const {name} = useParams()
  const normalizedCountryName = name.replace(/-/g, ' ')
  const countryData = useFetch(`name/${encodeURIComponent(normalizedCountryName)}`)

  if (!countryData) {
    return null
  }

  const country = countryData[0]
  const countryCurrency = Object.values(country.currencies)[0]
  const countryCurrencyAbr = Object.keys(country.currencies)[0]
  const countryCode = country.idd.suffixes.map(suffix => country.idd.root + suffix)
  const localCountryName = Object.values(country.name.nativeName)[0]
  const countryLat = country.latlng[0]
  const countryLng = country.latlng[1]
  const countryHasCoatOfArms = Object.keys(country.coatOfArms).length > 0;

  return (
    <div className={styles.countryPage}>
      <div className={styles.countryImageContainer}>
        <h1 className={styles.countryHeader}>Welcome to <br />{country.name.common}</h1>
        <div className={styles.countryFlag}>
          <img src={country.flags.svg} alt={country.flags.alt} height={200}/>
        </div>
        <div className={styles.countryCoatOfArms}>
          {countryHasCoatOfArms ? <img src={country.coatOfArms.svg} alt={`Coat of arms of ${country.name.common}`} height={200}/> :  <div>Country has no coat of arms</div>}
        </div>
      </div>
      <div className={styles.countryMap}>
        <Map countryLatitude={countryLat} countryLongitude={countryLng}/>
      </div>
      <div className={styles.countryFacts}>
        <p className={`${styles.factContainer} ${styles.countryNameLocal}`}><span className={`${styles.factContainer} ${styles.countryFactsHeaders}`}>Local Country Name: </span>{localCountryName.common}</p>
        <p className={`${styles.factContainer} ${styles.countryContinent}`}><span className={styles.countryFactsHeaders}>Continent: </span>{country.continents[0]}</p>
        <p className={`${styles.factContainer} ${styles.countrySubregion}`}><span className={styles.countryFactsHeaders}>Subregion: </span>{country.subregion}</p>
        <p className={`${styles.factContainer} ${styles.countryCapital}`}><span className={styles.countryFactsHeaders}>Capital: </span>{country.capital.join(', ')}</p>
        <p className={`${styles.factContainer} ${styles.countryPopulation}`}><span className={styles.countryFactsHeaders}>Population: </span>{Intl.NumberFormat().format(country.population)}</p>
        <p className={`${styles.factContainer} ${styles.countryArea}`}><span className={styles.countryFactsHeaders}>Country area km2: </span>{Intl.NumberFormat().format(country.area)}</p>
        <p className={`${styles.factContainer} ${styles.countryLanguage}`}><span className={styles.countryFactsHeaders}>Languages: </span>{Object.values(country.languages).join(', ')}</p>
        <ul className={`${styles.factContainer} ${styles.countryCurrency}`}><span className={styles.countryFactsHeaders}>Currency:</span>
          <li>Abbreviation: {countryCurrencyAbr}</li>
          <li>Symbol: {countryCurrency.symbol}</li>
          <li>Name: {countryCurrency.name}</li>
        </ul>
        <p className={`${styles.factContainer} ${styles.countryTimezone}`}><span className={styles.countryFactsHeaders}>Timezone: </span>{country.timezones[0]}</p>
        <ul className={`${styles.factContainer} ${styles.countryBorder}`}><span className={styles.countryFactsHeaders}>Borders: </span>{country.borders && country.borders.length > 0 ? country.borders.map((country, index) => <li key={index}>{country}</li>) : <li>No bordering countries</li>}</ul>
        <p className={`${styles.factContainer} ${styles.countryUN}`}><span className={styles.countryFactsHeaders}>UN Member: </span>{country.unMember ? 'Yes' : 'No'}</p>
        <p className={`${styles.factContainer} ${styles.countryIndependent}`}><span className={styles.countryFactsHeaders}>Is independent: </span>{country.independent ? 'Yes' : 'No'}</p>
        <p className={`${styles.factContainer} ${styles.countryCode}`}><span className={styles.countryFactsHeaders}>Country Code: </span>{countryCode.join(', ')}</p>
        <p className={`${styles.factContainer} ${styles.countryStartOfTheWeek}`}><span className={styles.countryFactsHeaders}>Start of the week: </span>{country.startOfWeek.charAt(0).toUpperCase() + country.startOfWeek.slice(1)}</p>
      </div>
    </div>
  )
}

export default Country