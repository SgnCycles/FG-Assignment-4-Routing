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
      <section className={styles.countryImageContainer}>
        <h1 className={styles.countryHeader}>Welcome to <br />{country.name.common}</h1>
        <div className={styles.countryFlag}>
          <img src={country.flags.svg} alt={country.flags.alt} height={200}/>
        </div>
        <div className={styles.countryCoatOfArms}>
          {countryHasCoatOfArms ? <img src={country.coatOfArms.svg} alt={`Coat of arms of ${country.name.common}`} height={200}/> :  <div>Country has no coat of arms</div>}
        </div>
      </section>
      <div className={styles.countryMap}>
        <Map countryLatitude={countryLat} countryLongitude={countryLng}/>
      </div>
      <div className={styles.countryFacts}>
        <section className={`${styles.factContainer} ${styles.countryNameLocal}`}>
          <h3 className={styles.countryFactsHeader}>Local Country Name:</h3>
          <p className={styles.countryFactsInfo}>{localCountryName.common}</p>
        </section>
        <section className={`${styles.factContainer} ${styles.countryContinent}`}>
          <p className={styles.countryFactsHeader}>Continent:
          </p>
          <p className={styles.countryFactsInfo}>{country.continents[0]}</p>
        </section>
        <section className={`${styles.factContainer} ${styles.countrySubregion}`}>
          <h3 className={styles.countryFactsHeader}>Subregion:</h3>
          <p className={styles.countryFactsInfo}>{country.subregion}</p>
        </section>
        <section className={`${styles.factContainer} ${styles.countryCapital}`}>
          <h3 className={styles.countryFactsHeader}>Capital:</h3>
          <p className={styles.countryFactsInfo}>{country.capital.join(', ')}</p>
        </section>
        <section className={`${styles.factContainer} ${styles.countryPopulation}`}>
          <h3 className={styles.countryFactsHeader}>Population:</h3>
          <p className={styles.countryFactsInfo}>{Intl.NumberFormat().format(country.population)}</p>
        </section>
        <section className={`${styles.factContainer} ${styles.countryArea}`}>
          <span className={styles.countryFactsHeader}>Country area:</span>
          <p className={styles.countryFactsInfo}>{Intl.NumberFormat().format(country.area)} km<sup>2</sup></p>
        </section>
        <section className={`${styles.factContainer} ${styles.countryLanguage}`}>
          <h3 className={styles.countryFactsHeader}>Languages:</h3>
          <p className={styles.countryFactsInfo}>{Object.values(country.languages).join(', ')}</p>
        </section>
        <section className={`${styles.factContainer} ${styles.countryCurrency}`}>
          <h3 className={styles.countryFactsHeader}>Currency:</h3>
          <ul className={styles.countryFactsInfo}>
            <li><span className={styles.factSubheader}>Abbreviation: </span>{countryCurrencyAbr}</li>
            <li><span className={styles.factSubheader}>Symbol: </span>{countryCurrency.symbol}</li>
            <li><span className={styles.factSubheader}>Name: </span>{countryCurrency.name}</li>
          </ul>
        </section>
        <section className={`${styles.factContainer} ${styles.countryTimezone}`}>
          <h3 className={styles.countryFactsHeader}>Timezone:</h3>
          <p className={styles.countryFactsInfo}>{country.timezones[0]}</p>
        </section>
        <section className={`${styles.factContainer} ${styles.countryBorder}`}>
          <h3 className={styles.countryFactsHeader}>Borders:</h3>
          <ul className={styles.countryFactsInfo}>
            {country.borders && country.borders.length > 0 ? country.borders.map((country, index) => <li key={index}>{country}</li>) : <li>No bordering countries</li>}
          </ul>
        </section>
        <section className={`${styles.factContainer} ${styles.countryUN}`}>
          <h3 className={styles.countryFactsHeader}>UN Member:</h3>
          <p className={styles.countryFactsInfo}>{country.unMember ? 'Yes' : 'No'}</p>
        </section>
        <section className={`${styles.factContainer} ${styles.countryIndependent}`}>
          <span className={styles.countryFactsHeader}>Is independent:</span>
          <p className={styles.countryFactsInfo}>{country.independent ? 'Yes' : 'No'}</p>
        </section>
        <section className={`${styles.factContainer} ${styles.countryCode}`}>
          <h3 className={styles.countryFactsHeader}>Country Code:</h3>
          <p className={styles.countryFactsInfo}>{countryCode.join(', ')}</p>
        </section>
        <section className={`${styles.factContainer} ${styles.countryStartOfTheWeek}`}>
          <h3 className={styles.countryFactsHeader}>Start of the week:</h3>
          <p className={styles.countryFactsInfo}>{country.startOfWeek.charAt(0).toUpperCase() + country.startOfWeek.slice(1)}</p>
        </section>
        <section className={`${styles.factContainer} ${styles.carPlate}`}>
          <h3 className={styles.countryFactsHeader}>Car Plate Nr:</h3>
          <p className={styles.countryFactsInfo}>{country.car.signs}</p>
        </section>
        <section className={`${styles.factContainer} ${styles.trafficSide}`}>
          <h3 className={styles.countryFactsHeader}>Traffic:</h3>
          <p className={styles.countryFactsInfo}>{country.car.side.charAt(0).toUpperCase() + country.car.side.slice(1)}</p>
        </section>
        <section className={`${styles.factContainer} ${styles.demonymFemale}`}>
          <h3 className={styles.countryFactsHeader}>Demonym - Female:</h3>
          <p className={styles.countryFactsInfo}>{country.demonyms.eng.f}</p>
        </section>
        <section className={`${styles.factContainer} ${styles.demonyMale}`}>
          <h3 className={styles.countryFactsHeader}>Demonym - Male:</h3>
          <p className={styles.countryFactsInfo}>{country.demonyms.eng.m}</p>
        </section>
      </div>
    </div>
  )
}

export default Country