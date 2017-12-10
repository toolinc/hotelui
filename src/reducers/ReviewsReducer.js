import {GET_REVIEWS, ORDER_BY_DATE, ORDER_BY_RATING} from '../constants/constants'


export default function(state = {reviews: null}, action) {
    switch (action.type) {
        case GET_REVIEWS:
            return [action.reviews.reviews];

        case ORDER_BY_DATE:
            let sortByDate = state[0].slice(0);
            sortByDate.sort(function(a,b) {
                a.date = new Date(a.date);
                b.date = new Date(b.date);
                return b.date - a.date;
            });
            return [sortByDate];
        case ORDER_BY_RATING:
            let sortByRating = state[0].slice(0);
            sortByRating.sort(function(a,b){
                console.log("sort rating ");
                return b.rating - a.rating;
            });
            return [sortByRating];
        default:
            return state;
    }
}