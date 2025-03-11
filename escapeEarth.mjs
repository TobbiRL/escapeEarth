import fetch from 'node-fetch';

const URL = 'https://spacescavanger.onrender.com';
const SOLAR_URL = "https://api.le-systeme-solaire.net/en/";
const MY_EMAIL = "torbjornrl@uia.no";


async function start() {
    const response = await fetch("https://spacescavanger.onrender.com/start?player=torbjornrl@uia.no")
    const data = await response.json();
    console.log("Start game", data);
}
start();

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

