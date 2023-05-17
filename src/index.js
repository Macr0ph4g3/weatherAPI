import './style.css';
import {fetchWeather, currentWeather }  from './weatherFetch.js';
import { todaysForecast } from './todaysForecastDom.js'
import tempControl from './tempControl.js'
import search from './search'

tempControl.updateTemp('F')
tempControl.tempControl()
fetchWeather('Los Angeles')
