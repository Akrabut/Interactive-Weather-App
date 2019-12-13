export function setFiveDay(cityObject) {
  return async dispatch => {
    dispatch({
      type: 'SET_FIVE_DAY',
      data: cityObject,
    })
  }
}