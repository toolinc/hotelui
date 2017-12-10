const api = "http://localhost:7050"

export const getHotels = (city) =>
    fetch(`${api}/hotelInfo?city=${city}`)
        .then(res => res.json())
        .then(data => data)
        .catch(function (error) {
            console.log('Request failed', error);
        });
