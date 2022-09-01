'use strict' 

// Make navbar transparent when it is on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
    document.addEventListener('scroll', () => {
    if(window.scrollY > navbarHeight){
        navbar.classList.add('navbar--appear');
    } else {
        navbar.classList.remove('navbar--appear');
    } 
});

// Handle scrolling when tapping on the navbar menu
const navabrMenu = document.querySelector('.navbar__menu');
navabrMenu.addEventListener('click' , (event) => {
    const target = event.target;
    const link = target.dataset.link;
    if (link == null) {
        return;
    } 
        scrollIntoView(link);
})

// Handle scrolling when 'contact me' is pressed.
const contactMe = document.querySelector('.home__contact');
contactMe.addEventListener('click' , (event) => {
    scrollIntoView('#contact');
})



//Handle transparent of home when it is scrolling.
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
    console.log(window.scrollY);
    console.log(`homeHeight: ${homeHeight} `);
    console.log(1-window.scrollY / homeHeight);
    home.style.opacity = 1- window.scrollY/homeHeight; 
});

//Show arrow button
const arrowBtn = document.querySelector('.arrow__btn');

document.addEventListener('scroll', () =>{
    if(homeHeight / 2 < window.scrollY) {
        arrowBtn.classList.add('visible')
    } else {
        arrowBtn.classList.remove('visible')
    }
});

//Handle click on the 'arrow button'
document.addEventListener('click', () => {

    scrollIntoView('#home');

})

function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: "smooth"}); 
}