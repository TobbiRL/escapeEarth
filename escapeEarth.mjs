import fetch from 'node-fetch';

const url = 'https://spacescavanger.onrender.com/';
const solarUrl = "https://api.le-systeme-solaire.net/en/";
const playerEmail = "torbjornrl@uia.no";

const startGameUrl = 'https://spacescavanger.onrender.com/'

fetch("Link", {
    method: "get",
    headers: "",
    body: i,
})

.then(response => response.json())
.then(json => console.log(json))
.catch(error => console.log(error))

