async function fetchWeather(city) {
    const weather = await fetch('http://api.weatherapi.com/v1/current.json?key='PLACEKEYHERE'&q='+city+'&aqi=yes', {mode: 'cors'})
    .then( response=>{
        console.log(response.clone().json())
        return response.json();
    })
    .then( data => {
        console.log(data.location.country)
        console.log(data.location.name)
        console.log(data.current.condition.text)
        console.log(data.current.feelslike_f)
        console.log(data.current.temp_f)
        console.log(data.current.last_updated)


    })
    .catch( (e) => {
        console.log(e)
    })
    console.log(city);
}
export default fetchWeather