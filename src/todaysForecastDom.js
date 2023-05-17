import tempControl  from './tempControl'

let forecastLocation = document.querySelector('.subHeader')
let forecastWeather = document.querySelector('.currentWeather')
let forecastTemp = document.querySelector('.currentTemp')
let forecastWind = document.querySelector('.windDirection')
let forecastPrecip = document.querySelector('.precipitation')
let forecastHumidity = document.querySelector('.humidity')

let temp = tempControl.currentTemp

function todaysForecast(object) {

const currentWeather = object.current.condition.text
const precipitation = object.current.precip_in
const humidity = object.current.humidity
const windDir = object.current.wind_dir
let windSpeed = ''
let tempNow = ''
const location = object.location.name

if (temp == 'F') {
    windSpeed = object.current.wind_mph
    tempNow = object.current.temp_f
    forecastTemp.innerHTML = tempNow
    forecastWind.innerHTML = `${windDir} ${windSpeed} mph`
}
if (temp == 'C') {
    windSpeed = object.current.wind_kph
    tempNow = object.current.temp_c
    forecastWind.innerHTML = `${windDir} ${windSpeed} kph`
    forecastTemp.innerHTML = tempNow
}

forecastLocation.innerHTML = location
forecastWeather.innerHTML = currentWeather
forecastHumidity.innerHTML = humidity
forecastPrecip.innerHTML = precipitation

}

export { todaysForecast }