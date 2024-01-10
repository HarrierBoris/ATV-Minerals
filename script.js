let btn_ham = document.querySelector('.btn-ham')
let nav_lsit = document.querySelector('.nav-list')

let ham_line_3 = document.querySelector('.ham-line-3')


// Event-listeners
let toggleNavList = () => nav_lsit.classList.toggle('hidden')
btn_ham.addEventListener('click', toggleNavList)


//image-slider 
let allImages = document.querySelectorAll('.image')
let images = allImages.length
let image_slider = document.querySelector('.image-slider')
let counter = 0


let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function () {
    counter++
    if(counter  == images) counter = 0
    image_slider.style.transform = `translateX(${-counter * 100}%)`
})
prev.addEventListener('click', function () {
    
    counter--
    if(counter == -1) counter = images -1
    image_slider.style.transform = `translateX(${-counter * 100}%)`
})

//nav button 
let whatWeSell = document.querySelector('.what-we-sell')
let shop = document.querySelector('.section-logo-slider')
let contactUs = document.querySelector('.contact-us')


let navBtnWhatWeSell = document.querySelector('#what-we-sell')
let navBtnshop = document.querySelector('#image-slider-container') //it wrong but it works i have selected logo section
let navBtncontactUS = document.querySelector('#contact-us')

navBtnWhatWeSell.addEventListener('click', function (e) {
    e.preventDefault()
    whatWeSell.scrollIntoView({ behavior : 'smooth'})
    toggleNavList()
})
navBtnshop.addEventListener('click', function (e) {
    e.preventDefault()
    shop.scrollIntoView({ behavior : 'smooth'})
    toggleNavList()
})
navBtncontactUS.addEventListener('click', function (e) {
    e.preventDefault()
    contactUs.scrollIntoView({ behavior : 'smooth'})
    toggleNavList()
})

let btnContactUs_list = document.querySelectorAll('.btn-contact_us')
btnContactUs_list.forEach(btn => {
    btn.addEventListener('click', function () {
    contactUs.scrollIntoView({ behavior : 'smooth'})
})
})