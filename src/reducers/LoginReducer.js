import {LOGIN_USER} from '../constants/constants'

export default function(state = {}, action) {
    switch (action.type) {
        case LOGIN_USER:
            return [action.user];
        default:
            return state;
    }
}
