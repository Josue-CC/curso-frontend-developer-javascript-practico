const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
menuEmail.addEventListener('click',toggleDestropMenu)

function toggleDestropMenu() {
    desktopMenu.classList.toggle('inactive')
}