import React, { useEffect } from 'react'
import { Container } from 'semantic-ui-react'
import Location from '../location/Location'
import LocationSearch from '../location_search/LocationSearch'
import HomeGrid from '../home_grid/HomeGrid'
import { connect } from 'react-redux';
import { setFiveDay } from './homeActions'
import cityService from '../../services/cityService'
import { setupCity } from './homeHelper'

function Home(props) {
  function renderHomeGrid(fiveDay) {
    if (!fiveDay.fiveDays) return null
    return <HomeGrid fiveDay={fiveDay} />
  }

  useEffect(() => {
    (async () => {
      const city = await cityService.getCityKey(process.env.REACT_APP_API_KEY, props.location)
      const fiveDay = await cityService.getFiveDayForecast(process.env.REACT_APP_API_KEY, city.Key)
      const currentWeather = await cityService.getDayForecast(process.env.REACT_APP_API_KEY, city.Key)
      props.setFiveDay(setupCity(city, fiveDay, currentWeather[0]))
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.location])

  return (
    <Container>
      <LocationSearch />
      <Location />
      <Container>
        {renderHomeGrid(props.fiveDay)}
      </Container>
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