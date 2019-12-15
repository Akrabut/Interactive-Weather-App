import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { locationReducer } from './reducers/locationReducer'
import { fiveDayReducer } from './reducers/fiveDayReducer'
import { favoritesReducer } from './reducers/favoritesReducer'
import { errorReducer } from './reducers/errorReducer'

const reducer = combineReducers({
  location: locationReducer,
  fiveDay: fiveDayReducer,
  favorites: favoritesReducer,
  error: errorReducer,
})

export const store = createStore(reducer, applyMiddleware(thunk))