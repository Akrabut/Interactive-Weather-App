import axios from 'axios'

async function getAutoComplete(key, query) {
  await axios.get(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${key}&q=${query}`)
}

export default getAutoComplete