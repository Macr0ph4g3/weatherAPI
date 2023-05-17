
const tempControlF = document.querySelector('.F')
const tempControlC = document.querySelector('.C')



function tempControl() {

    tempControlF.addEventListener("click", update => {updateTemp('F')})
    tempControlC.addEventListener("click", update => {updateTemp('C')})

}
let currentTemp = 'F'

function updateTemp(type) {


if (type == 'F') {
    tempControlC.style.color = "rgba(67, 84, 82, 1)"
    tempControlF.style.color = "white"
    currentTemp = "F"
    return currentTemp
}

if (type == "C") {
    tempControlF.style.color = "rgba(67, 84, 82, 1)"
    tempControlC.style.color = "white"
    currentTemp = "C"
    return currentTemp
}


}
export default { tempControl,updateTemp }