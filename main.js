const burger = document.getElementById("burger");
const navbar = document.getElementById("navbar");
const bars = document.getElementById("bars");
const header = document.getElementById("header");


burger.addEventListener("click",()=>{
    navbar.classList.toggle("navbar-active");
    bars.classList.toggle("fa-xmark");
})

document.addEventListener("scroll", ()=>{
    if (window.scrollY>0){
        header.classList.add("header-active");
    }
    else{
        header.classList.remove("header-active");
    }
})