import fetch from 'node-fetch';

const URL = 'https://spacescavanger.onrender.com/';
const SOLAR_URL = "https://api.le-systeme-solaire.net/en/";
const MY_EMAIL = "torbjornrl@uia.no";

const response = fetch("https://spacescavanger.onrender.com//start?player=torbjornrl@uia.no")
const data = response.json();
console.log("Start game" + data);

/*
fetch("Link", {
    method: "get",
    headers: "",
    body: i,
})
*/
/*
.then(response => response.json())
.then(json => console.log(json))
.catch(error => console.log(error))
*/
