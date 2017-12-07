import * as types from '../constants/index';
import * as HotelsAPI from '../utils/HotelsAPI';
import * as ReviewsAPI from '../utils/ReviewsAPI';
import * as AttractionsAPI from '../utils/AttractionsAPI';


export const fetchHotels = () => dispatch =>
    HotelsAPI.getAll().then(hotels => dispatch({type: types.GET_HOTELS, hotels: hotels}));