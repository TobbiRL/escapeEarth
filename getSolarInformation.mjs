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

export {answer1, answer2}

