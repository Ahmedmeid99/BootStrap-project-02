
/////////////////
// form submit handler
const form = document.getElementById('form')
form.addEventListener('submit', (e) => e.preventDefault())
/////////////////
// close menu after click on menu-link
const menu = document.querySelector('.navbar-collapse')
const links = document.querySelectorAll('.nav-item a')
links.forEach((link) => {
    link.addEventListener('click', () => {
        menu.classList.remove('show')
    })
})
// animation
AOS.init({
    delay: 200,
    duration: 1500,
});