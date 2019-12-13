export const fiveDayReducer = (state = {}, action) => {
  console.log(state);
  switch (action.type) {
    case 'SET_FIVE_DAY':
      return action.data
    default:
      return state
  }
}