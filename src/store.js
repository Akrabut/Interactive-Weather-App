import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { locationReducer } from './reducers/locationReducer'
import { fiveDayReducer } from './reducers/fiveDayReducer'

const reducer = combineReducers({
  location: locationReducer,
  fiveDay: fiveDayReducer,
})

export const store = createStore(reducer, applyMiddleware(thunk))