const api = "http://localhost:7050"


export const getAttractions = (hotelId) =>
    fetch(`${api}/attractions?hotelId=${hotelId}&radius=2`)
        .then(res => res.json())
        .then(data => data)
        .catch(function (error) {
            console.log('Request failed', error);
        });