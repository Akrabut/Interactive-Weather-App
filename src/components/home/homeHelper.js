function setupDayArray(arr) {
  return arr.map(forecast => {
    const d = new Date(forecast.Date)
    return (
    {
      temp: `${forecast.Temperature.Minimum.Value}°C - ${forecast.Temperature.Maximum.Value}°C`,
      day: d.toLocaleDateString("en-IL", { weekday: 'long' }).slice(0, 3),
      icon: forecast.Day.Icon,
    }
  )})
}

export function setupCity(city, fiveDayForecast, currentWeather) {
  return {
    name: city.EnglishName,
    headline: currentWeather.WeatherText,
    fiveDays: setupDayArray(fiveDayForecast.DailyForecasts),
    current: `${currentWeather.Temperature.Metric.Value} °C`,
    icon: currentWeather.WeatherIcon,
  }
}