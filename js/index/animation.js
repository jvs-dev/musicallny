let body = document.querySelector("body")
let menu = document.querySelector('.main__menu')
let menutoggle = document.querySelector('.header__menutoggle')
let daynight = document.getElementById("daynight")

menutoggle.onclick = function () {
    menu.classList.toggle('active')
    menutoggle.classList.toggle('active')
    if (menu.classList.contains('active')) {
        body.style.overflowY="hidden";
        window.scrollTo(0, 0)
    } else {
        body.style.overflowY="auto"
    }
}
daynight.onclick = function() {
    body.classList.toggle('dark')
    if (body.classList.contains('dark')) {
        daynight.name="sunny-outline"
    } else {
        daynight.name="moon"
    }
}