const api = "http://localhost:7050"



// export const getAll = () =>
//     fetch(`${api}/posts`, {headers})
//         .then(res => res.json())
//         .catch(function (error) {
//             console.log('Request failed', error);
//         });
//
//
//
// export const removePost = (id) =>
//     fetch(`${api}/posts/${id}`, {
//         method: 'DELETE',
//         headers: {
//             ...headers,
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({deleted: true})
//     }).then(res => res.json())
//         .catch(function (error) {
//             console.log('Request failed', error);
//         });