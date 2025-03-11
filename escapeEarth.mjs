import fetch from 'node-fetch';

const URL = 'https://spacescavanger.onrender.com';
const SOLAR_URL = "https://api.le-systeme-solaire.net/en/";
const MY_EMAIL = "torbjornrl@uia.no";


async function start() {
    const response = await fetch(`${URL}/start?player=${MY_EMAIL}`)
    const data = await response.json();
    console.log("Start game", data);
}
start();

async function getSolarInformation() {
    const response = await fetch(`${SOLAR_URL}`)
    const data = await response.json();
    console.log("Solar data", data);
}
getSolarInformation();

async function submitChallengeAnswer(answer) {
    const response = await fetch(`${URL}/answer`, {
    method: "POST",
    headers: "",
    body: i,
    })
}

/*
.then(response => response.json())
.then(json => console.log(json))
.catch(error => console.log(error))
*/

