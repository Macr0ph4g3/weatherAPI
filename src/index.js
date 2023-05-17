import './style.css';
import weatherFetch from './weatherFetch.js';
import dom from './dom.js'
import search from './search.js'

search.updateTemp('F')
search.tempControl()
weatherFetch('Los Angeles')
