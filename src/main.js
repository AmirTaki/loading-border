const container = document.querySelector(".container")
const percent   = document.querySelector("#percent")

let perVal = 0;

let increament = setInterval(()=>{
    perVal++;
    percent.textContent = `${perVal}%`

    if (perVal == 100){
        clearTimeout(increament)
        container.classList.remove('active')
    }
},200)