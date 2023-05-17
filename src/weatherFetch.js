import { todaysForecast } from './todaysForecastDom.js'


async function fetchWeather(city, temperature) {
    // eslint-disable-next-line no-unused-vars
    const weather = await fetch('http://api.weatherapi.com/v1/current.json?key=8d6d643345614f2693a194606230205&q='+city+'&aqi=yes', {mode: 'cors'})
    .then( response=>{
        return response.json();
    })
    .then( data => {
        currentWeather = data
        // return todaysForecast(currentWeather)

        return todaysForecast(currentWeather, temperature)

    })
    .catch( (e) => {
        console.log(e)
    })

}

let currentWeather = []

// export default fetchWeather
export { fetchWeather, currentWeather } 