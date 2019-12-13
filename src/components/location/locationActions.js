export function set(location) {
  return async dispatch => {
    dispatch({
      type: 'SET_LOCATION',
      data: location,
    })
  }
}
