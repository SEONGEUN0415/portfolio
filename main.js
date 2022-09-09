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

// Handle toggle button
const toggleBtn = document.querySelector('.navbar__toggle-btn');

toggleBtn.addEventListener('click', () => {
    navbarMenu.classList.toggle('open');
});

// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click' , (event) => {
    const target = event.target;
    const link = target.dataset.link;
    if (link == null) {
        return;
    } 
        navbarMenu.classList.remove('open');
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
arrowBtn.addEventListener('click', () => {

    scrollIntoView('#home');

})

// Handle projects buttons
const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document. querySelector('.work__projects');
const projects = document.querySelectorAll('.project');

workBtnContainer.addEventListener('click' ,(e) => {
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
    if (filter == null) {
        return;
    }
    // remove selection from the previouse item and select the new one
    const active = document.querySelector('.category__btn.selected');
    active.classList.remove('selected');
    const target = e.target.nodeName ==='BUTTON' ? e.target : e.target.parentNode;
    target.classList.add('selected');


    projectContainer.classList.add('anim-out');
    setTimeout(() => {
        projects.forEach((project) => {
        if (filter == project.dataset.type || filter == '*') {
            project.classList.remove('invisible');
        } else {
            project.classList.add('invisible');
        }
    });
    projectContainer.classList.remove('anim-out')
    }, 300);
});

function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: "smooth"}); 
}

