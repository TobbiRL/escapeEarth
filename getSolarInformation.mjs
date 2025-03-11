import fetch from 'node-fetch';

const SOLAR_URL = "https://api.le-systeme-solaire.net/rest";

async function getSolarInformation() {
    const response = await fetch(`${SOLAR_URL}/bodies/sun`)
    const data = await response.json();
    console.log(data);
}
getSolarInformation();

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
    console.log(closestAxialTiltPlanet);
}
let answer2 = getAxalTiltInformation();

export {answer2}

