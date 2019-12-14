import axios from 'axios'

const searchService = {
  getAutoComplete: async function (query) {
    const key = process.env.REACT_APP_API_KEY
    return (await axios.get(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${key}&q=${query}`)).data
  }
}

export default searchService