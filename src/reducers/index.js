
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import create from './Create'

const rootReducer = combineReducers({
    router: routerReducer,
    create: create,
})
  
export default rootReducer