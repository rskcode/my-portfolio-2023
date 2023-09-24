const burger = document.querySelector('.burger')
const navbar = document.querySelector('.navbar')
const navLinks = document.querySelector('.navLinks')

burger.addEventListener('click', () => {
    navbar.classList.toggle('open')
})
navLinks.addEventListener('click',()=>{
    navbar.classList.toggle('open')
})