const container = document.querySelector(".container")
const percent   = document.querySelector("#percent")

let perVal = 0;

let increament = setInterval(()=>{
    perVal++;
    console.log(perVal)
},1000)