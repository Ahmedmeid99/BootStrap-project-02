
/////////////////
// form submit handler
const form = document.getElementById('form')
form.addEventListener('submit', (e) => e.preventDefault())
/////////////////
// close menu after click on menu-link
const menu = document.querySelector('.navbar-collapse')
const menuIcon = document.querySelector('.navbar-toggler')
const links = document.querySelectorAll('.nav-item a')
const logo = document.querySelector('.navbar-brand')
links.forEach((link) => {
    link.addEventListener('click', () => {
        menu.classList.remove('show')
        menuIcon.setAttribute('aria-expanded', "false")
    })
})
logo.addEventListener('click', () => {
    menu.classList.remove('show')
    menuIcon.setAttribute('aria-expanded', "false")
})
// animation
AOS.init({
    delay: 200,
    duration: 1500,
});