// Header Sidebar Menu
const btn = document.getElementById("navBtn")
const nav = document.getElementById("navMob")

let toggle = false
btn.addEventListener('click', () => {
    if (toggle) {
        nav.classList.remove("open")
        btn.innerHTML = `<i class="fas fa-bars"></i>`
        toggle = false
    } else {
        btn.innerHTML = `<i class="fas fa-xmark"></i>`
        nav.classList.add("open")
        toggle = true
    }
})

// Choose Section Slider

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    autoplay: true,
    loop:true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});