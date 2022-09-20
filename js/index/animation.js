let menu = document.querySelector('.main__menu')
let menutoggle = document.querySelector('.header__menutoggle')

menutoggle.onclick = function () {
    menu.classList.toggle('active')
    menutoggle.classList.toggle('active')
}