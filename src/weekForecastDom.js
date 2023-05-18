const daily = document.querySelectorAll('.daily')

console.log(daily[0].children)




function weeklyForecast(object, temperature) {

let forecast = object.forecast.forecastday

function getDayName(dateStr, locale){
    const date = new Date(dateStr);
    return date.toLocaleDateString(locale, { weekday: 'long' });        
}

for (let i = 0; i < daily.length; i++) {
        const dailyChild = daily[i].children;
        const dailyWeekday = dailyChild[1].children[0]
        const dailyPhoto = dailyChild[0]
        const dailyWeather = dailyChild[1].children[1]
        const dailyHigh = dailyChild[2].children[0]
        const dailyLow = dailyChild[2].children[1]
// Above are html elements, below are object

        const date = forecast[i].date
        console.log(date)
        const newDate = date.toString().replace(/-/g, "/");
        const weatherIcon = forecast[i].day.condition.icon
        const weatherText = forecast[i].day.condition.text
        const dayName = getDayName(date, "en-US");


        dailyPhoto.setAttribute("src", weatherIcon)
        dailyWeather.innerHTML = weatherText
        dailyWeekday.innerHTML = getDayName(newDate, 'en-US')

        if (temperature == 'F') {
            const tempMax = Math.round(forecast[i].day.maxtemp_f)
            const tempMin = Math.round(forecast[i].day.mintemp_f)
            dailyHigh.innerHTML = tempMax
            dailyLow.innerHTML = tempMin
            }
        if (temperature == 'C') {
            const tempMax = Math.round(forecast[i].day.maxtemp_c)
            const tempMin = Math.round(forecast[i].day.mintemp_c)
            dailyHigh.innerHTML = tempMax
            dailyLow.innerHTML = tempMin
        }

        
        

    }

}
export { daily, weeklyForecast }