import { todaysForecast } from './todaysForecastDom.js'
import { weeklyForecast } from './weekForecastDom.js'

async function fetchWeather(city, temperature) {
    // eslint-disable-next-line no-unused-vars
    const weather = await fetch('http://api.weatherapi.com/v1/forecast.json?key=8d6d643345614f2693a194606230205&q='+city+'&days=9&aqi=no&alerts=no', {mode: 'cors'})
    .then( response=>{
        return response.json();
    })
    .then( data => {
        currentWeather = data
        todaysForecast(currentWeather, temperature)
        weeklyForecast(currentWeather, temperature)
        
    })
    .catch( (e) => {
        console.log(e)
    })

}

let currentWeather = []

// export default fetchWeather
export { fetchWeather, currentWeather } 
