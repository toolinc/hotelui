import * as types from '../constants/constants'
import * as HotelsAPI from '../utils/HotelsAPI'
import * as LoginAPI from '../utils/LoginAPI'
import * as ReviewsAPI from '../utils/ReviewsAPI'
import * as AttractionsAPI from '../utils/AttractionsAPI'


// export const fetchHotels = () => dispatch =>
//     HotelsAPI.getAll().then(hotels => dispatch({type: types.GET_HOTELS, hotels: hotels}));

export const fetchHotels = (city) => dispatch =>
    HotelsAPI.getHotels(city).then(hotels => dispatch({type: types.GET_HOTELS, hotels: hotels}));

export const login = (data) => dispatch =>
    LoginAPI.login(data).then(user => dispatch({type: types.LOGIN_USER, user: user}));

export const fetchReviews = (hotelId) => dispatch =>
    ReviewsAPI.getReviews(hotelId).then(reviews => dispatch({type: types.GET_REVIEWS, reviews: reviews}));

export const fetchAttractions = (hotelId) => dispatch =>
    AttractionsAPI.getAttractions(hotelId).then(attractions => dispatch({type: types.GET_ATTRACTIONS, attractions: attractions}));

export const orderByDate = () => dispatch =>
    dispatch({type: types.ORDER_BY_DATE});

export const orderByRating = () => dispatch =>
    dispatch({type: types.ORDER_BY_RATING});

