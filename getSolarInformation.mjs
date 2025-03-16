import fetch from 'node-fetch';

const SOLAR_URL = "https://api.le-systeme-solaire.net/rest";

async function getSolarInformation() {
    const response = await fetch(`${SOLAR_URL}/bodies/sun`)
    const data = await response.json();
    console.log(data);
}
getSolarInformation();
let meanRadiusSun = 695508;
let equaRadiusSun = 696342;
let answer1 = equaRadiusSun - meanRadiusSun; /* got 834 as answer */

async function getAxalTiltInformation() {
    const response = await fetch(`${SOLAR_URL}/bodies`)
    const data = await response.json();

    const EARTH_TILT = 23.44;
    let closestAxialTiltPlanet = null;
    let smallestDifference = Infinity;

    for (let body of data.bodies){
        if (body.isPlanet && body.axialTilt !== undefined && body.englishName !== "Earth") {
            let difference = Math.abs(body.axialTilt - EARTH_TILT);
            if (difference < smallestDifference) {
            smallestDifference = difference;
            closestAxialTiltPlanet = body.englishName
            }
        }
    }
    return(closestAxialTiltPlanet.toLowerCase());
}
let answer2 = await getAxalTiltInformation();

async function planetWithShortestDay() {
    const response = await fetch(`${SOLAR_URL}/bodies`)
    const data = await response.json();

    let shortestDayPlanet = null;
    let shortestRotation = Infinity;

    for (let body of data.bodies){
        if (body.isPlanet && body.sideralRotation !== undefined && body.sideralRotation > 0) {
            if (body.sideralRotation < shortestRotation) {
                shortestRotation = body.sideralRotation;
                shortestDayPlanet = body.englishName;
            }
        }
    }
    return(shortestDayPlanet.toLowerCase());
}
let answer3 = await planetWithShortestDay();

async function jupiterMoonCount() {
    const response = await fetch(`${SOLAR_URL}/bodies/jupiter`)
    const data = await response.json();

    if (data.moons) {
        return data.moons.length
    }
}
let answer4 = await jupiterMoonCount();


async function jupiterLargestMoon() {
    const response = await fetch(`${SOLAR_URL}/bodies`)
    const data = await response.json();
    
    let largestMoon = null;
    let largestRadius = 0;

    for (let body of data.bodies){
        if (body.aroundPlanet && body.aroundPlanet.planet === "jupiter" && body.meanRadius) {
            if (body.meanRadius > largestRadius) {
                largestRadius = body.meanRadius;
                largestMoon = body.englishName;
            }
        }
    }
    console.log(largestMoon);
    return largestMoon;

}
let answer5 = await jupiterLargestMoon();

async function plutosClassification() {
    const response = await fetch(`${SOLAR_URL}/bodies`)
    const data = await response.json();

    for (let body of data.bodies){
        if(body.englishName.toLowerCase()== "pluto") {
            return body
        }
}


export {answer1, answer2, answer3, answer4, answer5}
