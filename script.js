const mobileMenu = document.getElementById("mobile-menu")
const mobileNav = document.getElementById("mobile-nav")

function toggleMenu(btn) {
    mobileNav.classList.toggle("show")
}
var currentNewPos = 0
const carousel = document.querySelector(".gallery-wrapper")
const news = document.querySelectorAll(".new")
const btnsNews = document.getElementById("btns-news")
const passNews = setInterval(() => {
    btnsNews.children[currentNewPos].classList.toggle("btn-selected")
    currentNewPos++
    if (currentNewPos >= btnsNews.children.length) {
        currentNewPos = 0
    }
    let newE = news[0].getClientRects()
    carousel.scrollTo(currentNewPos * newE[0].width,0 )
    btnsNews.children[currentNewPos].classList.toggle("btn-selected")
}, 5000);