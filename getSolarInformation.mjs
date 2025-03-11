import fetch from 'node-fetch';

const SOLAR_URL = "https://api.le-systeme-solaire.net/rest";

async function getSolarInformation() {
    const response = await fetch(`${SOLAR_URL}/bodies/sun`)
    const data = await response.json();
    console.log(data);
}
getSolarInformation();