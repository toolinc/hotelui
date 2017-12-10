import {GET_ATTRACTIONS} from '../constants/constants'


export default function(state = {attractions: null}, action) {
    const { attractions} = action
    switch (action.type) {
        case GET_ATTRACTIONS:
            return [action.attractions.results];
        default:
            return state;
    }
}