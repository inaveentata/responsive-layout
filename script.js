const nav = document.querySelector('nav');
const toggleBtn = document.querySelector('.hamburger')

toggleBtn.addEventListener('click', () => {
    nav.classList.toggle('nav--visible')
})