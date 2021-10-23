let btn = document.querySelector(".btn-theme-toggle")
let sunMoonBox = document.querySelector(".sun-moon-container")

btn.addEventListener("click",()=>{
    document.body.classList.toggle("dark")
    let currentRotate = parseInt(getComputedStyle(sunMoonBox).getPropertyValue("--rotation"))
    sunMoonBox.style.setProperty("--rotation", currentRotate + 180)
    
})
