import {GET_HOTELS,ADD_HOTEL} from '../constants/constants'

export default function(state = {}, action) {
    switch (action.type) {
      case GET_HOTELS:
        return [action.hotels];
        //case ADD_HOTEL:
        //    return {...state};
      default:
        return state;
    }
  }













// HOTEL INFO
//
// [{
//     "success":true,
//     "hotelId":"1",
//     "name":"Hilton San Francisco Union Square",
//     "rating":"2.45",
//     "addr":"333 O'Farrell St.",
//     "city":"San Francisco",
//     "state":"CA",
//     "lat":"37.78616",
//     "lng":"-122.41018"
// },{
//     "success":true,
//     "hotelId":"2",
//     "name":"Parc 55 San Francisco - A Hilton Hotel",
//     "rating":"3.36",
//     "addr":"55 Cyril Magnin St",
//     "city":"San Francisco",
//     "state":"CA",
//     "lat":"37.78458",
//     "lng":"-122.40854"
// },{
//     "success":true,
//     "hotelId":"3",
//     "name":"Travelodge San Francisco Airport-North",
//     "rating":"3.32",
//     "addr":"326 S Airport Blvd",
//     "city":"South San Francisco",
//     "state":"CA",
//     "lat":"37.645129",
//     "lng":"-122.40492"
// }]
//
//
//

// REVIEW INFO
// {
//     "success":true,
//     "hotelId":"1",
//     "reviews": [
//     {
//         "reviewId": "36",
//         "title": "drtfygh",
//         "user":"user",
//         "reviewText":"fyghj",
//         "date":"Tue Nov 21 19:38:49 PST 2017",
//         "rating":"1",
//         "isRecom":"false"
//     },
//     {
//         "reviewId": "2",
//         "title": "False Promises",
//         "user":"user",
//         "reviewText":"Nothing promised in the Expedia description or their online presence was true.  No restaurant (under renovation) nor room service NOT EVEN A BOTTLE OF WATER IN THE ROOM, OR MADE AVAILABLE!!  The promise was a pass to the Kabuki Spa. NOT.  Parking $25 a night--its was $45.  The front desk actually laughed a t me when I asked a about these things.  Total disappointment for the price--320 a night.  I went to the far better property Hotel Vitale in the sameJoie de Vivre group, not through Expedia and it was much cheaper, (mid 200's)  totally gorgeous, and utterly professional with restaurant, room service, expresso in room, views. The Kabuki has gone way way downhill.",
//         "date":"Sat Aug 13 19:44:00 PDT 2016",
//         "rating":"2",
//         "isRecom":"false"
//     },
//     {
//         "reviewId": "6",
//         "title": "Convenient location but room too small",
//         "user":"user",
//         "reviewText":"Great location, clean room, elevator moves fast. But room is a little too small. ",
//         "date":"Sat Aug 13 19:44:00 PDT 2016",
//         "rating":"3",
//         "isRecom":"false"
//     },
//     {
//         "reviewId": "7",
//         "title": "False Promises",
//         "user":"user",
//         "reviewText":"Nothing promised in the Expedia description or their online presence was true.  No restaurant (under renovation) nor room service NOT EVEN A BOTTLE OF WATER IN THE ROOM, OR MADE AVAILABLE!!  The promise was a pass to the Kabuki Spa. NOT.  Parking $25 a night--its was $45.  The front desk actually laughed a t me when I asked a about these things.  Total disappointment for the price--320 a night.  I went to the far better property Hotel Vitale in the sameJoie de Vivre group, not through Expedia and it was much cheaper, (mid 200's)  totally gorgeous, and utterly professional with restaurant, room service, expresso in room, views. The Kabuki has gone way way downhill.",
//         "date":"Sat Aug 13 19:44:00 PDT 2016",
//         "rating":"2",
//         "isRecom":"false"
//     }
// ]
// }
//


