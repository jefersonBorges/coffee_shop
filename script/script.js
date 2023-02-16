const mButton = document.getElementsByClassName('mobileMenuButton')[0];
const pMenu = document.getElementsByClassName('pageMenu')[0];

mButton.addEventListener('click', () => {
    pMenu.classList.toggle('active');
})