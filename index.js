const hamburgerEl = document.querySelectorAll('.hamburger');
const navbarEl = document.querySelector('nav');
const dropdownEl = document.querySelectorAll('.dropdown');
const menuItemEl = document.querySelectorAll('.menu-item');
const arrowEl = document.querySelectorAll('.arrow');


hamburgerEl.forEach(menu => {
    menu.addEventListener('click', () => {
        hamburgerEl[0].classList.toggle('inactive');
        hamburgerEl[1].classList.toggle('inactive');
        navbarEl.classList.toggle('inactive');
    })
})



// menu items
menuItemEl.forEach(item => {

    item.addEventListener('click', () => {
        if(item === menuItemEl[0]) {
            dropdownEl[0].classList.toggle('inactive')
            arrowEl[0].classList.toggle('rotate')
            arrowEl[1].classList.toggle('rotate')

        } else if(item === menuItemEl[1]) {
            dropdownEl[1].classList.toggle('inactive')
            arrowEl[2].classList.toggle('rotate')
            arrowEl[3].classList.toggle('rotate')

        } else if(item === menuItemEl[2]){
            dropdownEl[2].classList.toggle('inactive')
            arrowEl[4].classList.toggle('rotate')
            arrowEl[5].classList.toggle('rotate')

        }
    })
})