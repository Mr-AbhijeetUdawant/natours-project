const navbarButton =document.querySelector("#nav .navbar-button");
const nav=document.getElementById("nav")



const onNavBarClick =()=>{
    nav.classList.toggle("active")
}
navbarButton.addEventListener("click",onNavBarClick);