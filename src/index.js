import './style.css';
import {fetchWeather, currentWeather }  from './weatherFetch.js';
import { todaysForecast } from './todaysForecastDom.js'
import { tempControl, updateTemp, currentTemp } from './tempControl.js'
import search from './search'

updateTemp('F')
tempControl()
