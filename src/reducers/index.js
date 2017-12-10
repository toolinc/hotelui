
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import hotels from './HotelReducer'
import reviews from './ReviewsReducer'
import attractions from './AttractionsReducer'

const rootReducer = combineReducers({
    router: routerReducer,
    hotels: hotels,
    reviews: reviews,
    attractions: attractions,
})
  
export default rootReducer