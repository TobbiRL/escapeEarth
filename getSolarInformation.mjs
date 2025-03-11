import fetch from 'node-fetch';

const SOLAR_URL = "https://api.le-systeme-solaire.net/rest";

async function getSolarInformation() {
    const response = await fetch(`${SOLAR_URL}/bodies/sun`)
    const data = await response.json();
    console.log(data);
}
getSolarInformation();

async function getAxalTiltInformation() {
    const response = await fetch(`${SOLAR_URL}`)
    const data = await response.json();

    const EARTH_TILT = 23.44;
    let closestAxialTiltPlanet = null;
    let smallestDifference = Infinity;

    if (bodies.isPlanet && bodies.axialTilt !== undefined) {
        let difference = (bodies.axialTilt - EARTH_TILT);
        if (difference < smallestDifference) {
            smallestDifference = difference;
            closestAxialTiltPlanet = bodies.englishName
        }
    }

    console.log(closestAxialTiltPlanet);
}
getAxalTiltInformation();