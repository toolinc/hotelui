import {CREATE_POST} from '../constants'

export default function(state = {}, action) {
    switch (action.type) {
      case CREATE_POST:
        return 'ddd';
      default:
        return state;
    }
  }