let btn = document.querySelector('.menu__button')
let menu = document.querySelector('#nav')

btn.addEventListener('click', (e) => {
    menu.classList.toggle('active')
})