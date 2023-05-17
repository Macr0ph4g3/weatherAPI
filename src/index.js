import './style.css';
import {fetchWeather, currentWeather }  from './weatherFetch.js';
import dom from './dom.js'
import tempControl from './tempControl.js'
import search from './search'

tempControl.updateTemp('F')
tempControl.tempControl()
console.log(currentWeather)
fetchWeather('Los Angeles')
