
/////////////////
// form submit handler
const form = document.getElementById('form')
form.addEventListener('submit', (e) => e.preventDefault())
/////////////////
// close menu after click on menu-link
const menu = document.querySelector('.navbar-collapse')
const links = document.querySelectorAll('.nav-item a')
console.log(menu)
console.log(links)
// links.forEach((link) => {
//     link.addEventListener('click', () => {
//         menu.classList.remove('show')
//         console.log('work')
//     })
// })
// animation
AOS.init({
    delay: 200,
    duration: 1500,
});