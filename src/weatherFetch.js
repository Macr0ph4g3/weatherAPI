import dom from "./dom.js"


async function fetchWeather(city) {
    // eslint-disable-next-line no-unused-vars
    const weather = await fetch('http://api.weatherapi.com/v1/current.json?key=8d6d643345614f2693a194606230205&q='+city+'&aqi=yes', {mode: 'cors'})
    .then( response=>{
        console.log(response.clone().json())
        return response.json();
    })
    .then( data => {
        currentWeather = data
        console.log(currentWeather)

    })
    .catch( (e) => {
        console.log(e)
    })
    console.log(city);
}

let currentWeather = []


export default fetchWeather