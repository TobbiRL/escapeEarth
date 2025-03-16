import fetch from 'node-fetch';
import { json } from 'stream/consumers'; 
import { answer1, answer2, answer3, answer4, answer5} from './getSolarInformation.mjs';

const URL = 'https://spacescavanger.onrender.com';
const MY_EMAIL = "torbjornrl@uia.no";

async function start() {
    const response = await fetch(`${URL}/start?player=${MY_EMAIL}`)
    const data = await response.json();
    console.log("Start game", data);
}

async function submitChallengeAnswer(answer) {
    const response = await fetch(`${URL}/answer`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ answer, player: MY_EMAIL}),
    });
    const data = await response.json();
    console.log(data);
}

async function runChallenge(){
await start();
await submitChallengeAnswer(answer1);
await submitChallengeAnswer(answer2);
await submitChallengeAnswer(answer3);
await submitChallengeAnswer(answer4);
await submitChallengeAnswer(answer5);
}

runChallenge();

