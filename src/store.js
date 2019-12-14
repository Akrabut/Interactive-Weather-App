import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { locationReducer } from './reducers/locationReducer'
import { fiveDayReducer } from './reducers/fiveDayReducer'
import { favoritesReducer } from './reducers/favoritesReducer'

const reducer = combineReducers({
  location: locationReducer,
  fiveDay: fiveDayReducer,
  favorites: favoritesReducer,
})

export const store = createStore(reducer, applyMiddleware(thunk))