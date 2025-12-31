let increment = document.getElementById("increment");
let decrement = document.getElementById("decrement");
let reset = document.getElementById("reset");
let val = document.getElementById("value");

increment.addEventListener("click" ,()=>{
    val.innerHTML = parseInt(val.innerHTML)+1
})
decrement.addEventListener("click" ,()=>{
    val.innerHTML = parseInt(val.innerHTML)-1
})
reset.addEventListener("click" ,()=>{
    val.innerHTML = 0
})