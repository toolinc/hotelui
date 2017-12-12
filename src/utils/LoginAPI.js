// const api = "http://localhost:7050"
const api = "https://hotelbackend.appspot.com"


export const login = (data) =>
    fetch(`${api}/login`, {method: 'POST' ,
        body: JSON.stringify(data)
    })
        .then(res => {
            console.log("Cookie "+res.headers.get('Set-Cookie'));
            return res.json();
        })
        .then(data => {
            document.cookie="JSESSIONID="+data.JSESSIONID
            return data;
        })
        .catch(function (error) {
            console.log('Request failed', error);
        });
