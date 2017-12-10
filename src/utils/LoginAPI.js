const api = "http://localhost:7050"



export const login = (data) =>
    fetch(`${api}/login`, {method: 'POST' ,
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(data => data)
        .catch(function (error) {
            console.log('Request failed', error);
        });
