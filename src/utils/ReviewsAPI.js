const api = "http://localhost:7050"


export const getReviews = (hotelId) =>
    fetch(`${api}/reviews?hotelId=${hotelId}&num=20`)
        .then(res => res.json())
        .then(data => data)
        .catch(function (error) {
            console.log('Request failed', error);
        });