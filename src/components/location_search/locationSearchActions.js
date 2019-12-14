export function setCachedFiveDay(city) {
  return async dispatch => {
    dispatch({
      type: 'SET_FIVE_DAY',
      data: city,
    })
  }
}