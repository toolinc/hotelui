import {GET_HOTELS} from '../constants/constants'


export default function(state = {hotels: null, city:null, query:null}, action) {
    const { hotels, city, query } = action
    switch (action.type) {
        case GET_HOTELS:
        return [action.hotels];
      default:
        return state;
    }

}
