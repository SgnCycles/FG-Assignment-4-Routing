import {useState, useEffect} from 'react'

const useFetch = (endpoint = '') => {

  const API_ENDPOINT = `${import.meta.env.VITE_API_ENDPOINT}${endpoint}`

  const [data, setData] = useState(null)

  const getData = async () => {
    try {
      const response = await fetch(API_ENDPOINT)
      const countryData = await response.json()
      setData(countryData)
    } catch(error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getData()
  }, [endpoint])

  return data
}

export default useFetch