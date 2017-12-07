const api = "http://localhost:7050"

const proxyUrl = 'https://cors-anywhere.herokuapp.com/'

const headers = {
    'Access-Control-Allow-Credentials': true,
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
}

export const getAll = () =>
    fetch(`${api}/hotelInfo`,{ headers})
        .then(res => console.log(res))
        // .then(data => console.log(data))
        .catch(function (error) {
            console.log('Request failed', error);
        });