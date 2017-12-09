const api = "http://localhost:7050"

export const login = (user,pass) =>
    fetch(`${api}/hotelInfo`)
        .then(res => res.json())
        .then(data => data)
        .catch(function (error) {
            console.log('Request failed', error);
        });