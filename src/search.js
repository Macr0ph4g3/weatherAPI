import { fetchWeather } from './weatherFetch'

const search = document.querySelector('.searchField')
const magGlass= document.querySelector('.magGlass')

magGlass.addEventListener("click", update => {submit(search.value)})
search.addEventListener("submit", update => {submit(search.value)} )

function submit(string) {

    fetchWeather(string)
    
}

export default { submit }