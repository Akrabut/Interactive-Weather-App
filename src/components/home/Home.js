import React, { useEffect } from 'react'
import { Container } from 'semantic-ui-react'
import Location from '../location/Location'
import LocationSearch from '../location_search/LocationSearch'
import HomeGrid from '../home_grid/HomeGrid'
import { connect } from 'react-redux';
import { setFiveDay } from './homeActions'

function Home(props) {
  function renderHomeGrid(fiveDay) {
    if (!fiveDay.fiveDays) return null
    return <HomeGrid fiveDay={fiveDay} />
  }

  useEffect(() => {
    (async () => {
      props.setFiveDay(props.location)
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