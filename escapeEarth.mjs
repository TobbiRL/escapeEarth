import fetch from 'node-fetch';

const url = 'https://spacescavanger.onrender.com/';
const playerEmail = "torbjornrl@uia.no";

const request = 'https://spacescavanger.onrender.com/';

const data = {}

fetch("Link", {
    method: "get",
    mode: "cors",
    cache: "default"
})

.then(response => response.json())
.then(json => console.log(json))
.catch(error => console.log(error))

