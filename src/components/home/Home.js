import React, { useEffect } from 'react'
import { Container } from 'semantic-ui-react'
import Location from '../location/Location'
import LocationSearch from '../location_search/LocationSearch'
import { connect } from 'react-redux';
import { setFiveDay } from './homeActions'
import cityService from '../../services/cityService'
import { setupCity } from './homeHelper'

function Home(props) {
  useEffect(() => {
    (async () => {
      const city = await cityService.getCityKey(process.env.REACT_APP_API_KEY, props.location)
      const fiveDay = await cityService.getFiveDayForecast(process.env.REACT_APP_API_KEY, city.Key)
      const currentWeather = await cityService.getDayForecast(process.env.REACT_APP_API_KEY, city.Key)
      console.log(currentWeather);
      props.setFiveDay(setupCity(city, fiveDay, currentWeather[0]))
    })()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.location])

  return (
    <Container>
      <LocationSearch/>
      <Location/>
    </Container>
  )
}

const mapDispatchToProps = {
  setFiveDay,
}

function mapStateToProps(state) {
  return {
    location: state.location,
    fiveDay: state.fiveDay,
  }
}

const connectedHome = connect(mapStateToProps, mapDispatchToProps)(Home)
export default connectedHome