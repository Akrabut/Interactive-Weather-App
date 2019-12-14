/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { Container } from 'semantic-ui-react'
import Location from '../location/Location'
import LocationSearch from '../location_search/LocationSearch'
import HomeGrid from '../home_grid/HomeGrid'
import { connect } from 'react-redux';
import { setFiveDay } from './homeActions'

// rendering HomeGrid is sync while the data that populates it is fetched async
// this makes sure the component is rendered only after the required states are populated
function renderHomeGrid(fiveDay) {
  if (!fiveDay.fiveDays) return null
  return <HomeGrid fiveDay={fiveDay} />
}

function Home(props) {
  useEffect(() => {
    (async () => {
      // if the user didn't allow location access setup app with tel aviv
      if (props.location.lat === 32.045 && props.location.lon === 34.77) {
        // tel aviv's key is hard coded
        return props.setFiveDay(null, 215854, 'Tel Aviv')
      }
      props.setFiveDay(props.location)
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.location])

  return (
    <Container>
      <LocationSearch setFiveDay={props.setFiveDay} />
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