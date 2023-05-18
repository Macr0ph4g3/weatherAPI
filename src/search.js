import { fetchWeather } from './weatherFetch'
import { currentTemp } from './tempControl.js'

const search = document.querySelector('.searchField')
const magGlass= document.querySelector('.magGlass')

magGlass.addEventListener("click", update => {submit(search.value)})
search.addEventListener("submit", update => {submit(search.value)} )


let lastSearch = 'Los Angeles'

function submit(string) {
    lastSearch = string

    fetchWeather(string, currentTemp)
    

}

export { submit, lastSearch }