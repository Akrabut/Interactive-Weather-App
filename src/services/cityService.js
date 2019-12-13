import axios from 'axios'

const cityService = {
  getCityKey: async function(key, { lat, lon }) {
    return (await axios.get(`http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${key}&q=${lat},${lon}`)).data
  },
  
  getFiveDayForecast: async function(key, cityKey) {
    return (await axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${cityKey}?apikey=${key}&metric=true`)).data
  },

  getDayForecast: async function(key, cityKey) {
    return (await axios.get(`http://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=${key}&metric=true`)).data
  }
}

export default cityService