import cityService from '../../services/cityService'
import { setupCity } from './homeHelper'

export function setFiveDay(location) {
  return async dispatch => {
    const city = await cityService.getCityKey(process.env.REACT_APP_API_KEY, location)
    const fiveDay = await cityService.getFiveDayForecast(process.env.REACT_APP_API_KEY, city.Key)
    const currentWeather = await cityService.getDayForecast(process.env.REACT_APP_API_KEY, city.Key)
    dispatch({
      type: 'SET_FIVE_DAY',
      data: setupCity(city, fiveDay, currentWeather[0]),
    })
  }
}