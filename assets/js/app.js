const header = document.querySelector('.header')

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.style.backgroundColor = '#fff'
        header.style.padding = '20px 0'
    } else {
        header.style.backgroundColor = 'transparent'
        header.style.padding = '25px 0'
    }
})