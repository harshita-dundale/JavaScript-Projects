let celcius = document.querySelector("#Celcius")
let fahrenheit = document.querySelector("#Fahrenheit")
let kelvin = document.querySelector("#Kelvin")

let last = document.querySelector("#last")

function sum(number){
   return Math.round((number*100)/100)
}


celcius.addEventListener('input', ()=>{
    let Ctemp = parseFloat(celcius.value)
    let Ftemp = (Ctemp*(9/5)) +32
    let Ktemp = Ctemp + 273.15

    fahrenheit.value = sum(Ftemp)
    kelvin.value = sum(Ktemp)
})
fahrenheit.addEventListener('input', ()=>{
    let Ftemp = parseFloat(fahrenheit.value)
    let Ctemp = (Ftemp - 32) * (5/9)
    let Ktemp = (Ftemp - 32) * (5/9) + 273.15

    celcius.value = sum(Ctemp)
    kelvin.value = sum(Ktemp)
})

kelvin.addEventListener('input', ()=>{
    let Ktemp = parseFloat(kelvin.value)
    let Ctemp = Ktemp - 273.15
    let Ftemp = (Ktemp - 32) * (9/5) + +32

    celcius.value = sum(Ctemp)
    fahrenheit.value = sum(Ftemp)
})

last.addEventListener('click', ()=>{
    celcius.value ="";
    kelvin.value = "";
    fahrenheit.value = "";
})