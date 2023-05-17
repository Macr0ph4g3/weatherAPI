
const forecastLocation = document.querySelector('.subHeader')
const forecastWeather = document.querySelector('.currentWeather')
const forecastTemp = document.querySelector('.currentTemp')
const forecastWind = document.querySelector('.windDirection')
const forecastPrecip = document.querySelector('.precipitation')
const forecastHumidity = document.querySelector('.humidity')

function todaysForecast(object, temperature) {

    
    console.log(object)

    const currentWeather = object.current.condition.text
    const precipitation = object.current.precip_in
    const humidity = object.current.humidity
    const windDir = object.current.wind_dir
    let windSpeed = ''
    let tempNow = ''
    const location = object.location.name

        if (temperature == 'F') {
            windSpeed = object.current.wind_mph
            tempNow = Math.round(object.current.temp_f)
            forecastTemp.innerHTML = `${tempNow}°`
            forecastWind.innerHTML = `${windDir} ${windSpeed} mph`
            console.log('F')
        }
        if (temperature == 'C') {
            windSpeed = object.current.wind_kph
            tempNow = Math.round(object.current.temp_c)
            forecastTemp.innerHTML =  `${tempNow}°`
            forecastWind.innerHTML = `${windDir} ${windSpeed} kph`
            console.log('C')
        }

    forecastLocation.innerHTML = location
    forecastWeather.innerHTML = currentWeather
    forecastHumidity.innerHTML = `${humidity}%`
    forecastPrecip.innerHTML = `${precipitation}%`

    return location

}

export { todaysForecast }