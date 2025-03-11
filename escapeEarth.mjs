import fetch from 'node-fetch';

const URL = 'https://spacescavanger.onrender.com';
const SOLAR_URL = "https://api.le-systeme-solaire.net/rest";
const MY_EMAIL = "torbjornrl@uia.no";


async function start() {
    const response = await fetch(`${URL}/start?player=${MY_EMAIL}`)
    const data = await response.json();
    console.log("Start game", data);
}
start();

async function getSolarInformation() {
    const response = await fetch(`${SOLAR_URL}/bodies/sun`)
    const data = await response.json();
    console.log(data);
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

let meanRadiusSun = 695508;
let equaRadiusSun = 696342;

let answer1 = equaRadiusSun - meanRadiusSun;
console.log(answer1);
/* got 834 as answer */

