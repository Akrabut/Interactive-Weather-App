import { useEffect } from 'react';
import { connect } from 'react-redux';
import { set } from './locationActions'
import { setLocation } from './locationHelper'

// this component only serves as a logical model for setting the initial location
function Location(props) {
  useEffect(() => {
    // avoid asking the user for location access every time home component is rerendered
    if (!props.location.asked) setLocation(props.set)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return null
}

const mapDispatchToProps = {
  set,
}

function mapStateToProps(state) {
  return {
    location: state.location,
  }
}

const connectedLocation = connect(mapStateToProps, mapDispatchToProps)(Location)
export default connectedLocation
