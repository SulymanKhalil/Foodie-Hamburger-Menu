const hamBurgerIcon = document.querySelector(".hamburger-menu-container");
const headerContent = document.querySelector(".header-content");
const closeIcon = document.querySelector(".close-icon");
const nav = document.querySelector("nav");
const goToTop = document.querySelector(".go-to-top");
const logo = document.querySelector(".tap-logo")

hamBurgerIcon.addEventListener("click", (e) => {
    e.stopPropagation();
    headerContent.classList.add("menu-open")
})

nav.addEventListener("click", (e)=>{
    e.stopPropagation();
})

closeIcon.addEventListener("click", ()=>{
    headerContent.classList.remove("menu-open")
})

goToTop.addEventListener("click", (e)=>{
    document.querySelector(".main-content").scrollTo(0,0)
})

logo.addEventListener("click", (e)=>{
    document.querySelector(".main-content").scrollTo(0,0)
})

window.addEventListener("click", ()=>{
    headerContent.classList.remove("menu-open")
})