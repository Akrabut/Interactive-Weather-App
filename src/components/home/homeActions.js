import cityService from '../../services/cityService'
import { setupCity } from './homeHelper'

export function setFiveDay(location, key, name) {
  return async dispatch => {
    // this gets triggered in the app initialization, where initial details for coordinates have to be fetched
    // in this case key and name are undefined
    if (!key) {
      const city = await cityService.getCityKey(process.env.REACT_APP_API_KEY, location)
      key = city.Key
      name = city.EnglishName
    }
    const fiveDay = await cityService.getFiveDayForecast(process.env.REACT_APP_API_KEY, key)
    const currentWeather = await cityService.getDayForecast(process.env.REACT_APP_API_KEY, key)
    dispatch({
      type: 'SET_FIVE_DAY',
      data: setupCity(name, fiveDay, currentWeather[0]),
    })
  }
}