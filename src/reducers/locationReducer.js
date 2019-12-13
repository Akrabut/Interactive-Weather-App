export const locationReducer = (state = { lat: 32.045, lon: 34.77 }, action) => {
  console.log(state);
  switch (action.type) {
    case 'SET_LOCATION':
      return action.data
    default:
      return state
  }
}