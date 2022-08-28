const hamburger = document.querySelector('.hamburger')
const close = document.querySelector('.close')
const nav = document.querySelector('nav')

hamburger.addEventListener('click', () => {
    nav.classList.add('open-nav')
})

close.addEventListener('click', () => {
    nav.classList.remove('open-nav')
})