import { useState, useEffect } from 'react'

const useFetch = (endpoint = '', fallbackEndpoint = '') => {

  const API_ENDPOINT = `${import.meta.env.VITE_API_ENDPOINT}`
  const [data, setData] = useState(null)

  const getData = async () => {
    try {
      const response = await fetch(`${API_ENDPOINT}${endpoint}`)

      if (!response.ok && fallbackEndpoint) {
        const responseFallback = await fetch(`${API_ENDPOINT}${fallbackEndpoint}`)
        const dataFallback = await responseFallback.json()
        setData(dataFallback)
        return
      }
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