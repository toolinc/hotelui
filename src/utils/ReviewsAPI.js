// const api = "http://localhost:7050"
const api = "https://hotelbackend.appspot.com"

export const getReviews = (hotelId) =>
    fetch(`${api}/reviews?hotelId=${hotelId}&num=20`)
        .then(res => {
            console.log(res.body);
            return res.json()
        })
        .then(data => data)
        .catch(function (error) {
            console.log('Request failed', error);
        });