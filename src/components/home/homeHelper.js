function setupDayArray(arr) {
  return arr.map(forecast => (
    `${forecast.Temperature.Minimum.Value}°C - ${forecast.Temperature.Maximum.Value}°C`
  ))
}

export function setupCity(city, fiveDayForecast, currentWeather) {
  return {
    name: city.EnglishName,
    headline: currentWeather.WeatherText,
    fiveDays: setupDayArray(fiveDayForecast.DailyForecasts),
    current: `${currentWeather.Temperature.Metric.Value} °C`
  }
}