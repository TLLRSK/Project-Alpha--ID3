// LIGHT TOGGLE
const  lightToggle = document.querySelector('#js-light-toggle__toggler')

lightToggle.addEventListener('click', () => {
    if (lightToggle.checked) {
        document.documentElement.style.setProperty('--main', 'hsla(126, 63%, 34%, 1)');
        document.documentElement.style.setProperty('--secondary', 'hsla(263, 37%, 43%, 1)');
        document.documentElement.style.setProperty('--alert', 'hsla(4, 83%, 52%, 1)');
        document.documentElement.style.setProperty('--white', 'hsla(120, 6%, 78%, 1)');
        document.documentElement.style.setProperty('--grey-100', 'hsla(140, 6%, 29%, 1)');
        document.documentElement.style.setProperty('--grey-200', 'hsla(126, 12%, 16%, 1)');
        document.documentElement.style.setProperty('--black', 'hsla(120, 18%, 4%, 1)');
    } else {
        document.documentElement.style.setProperty('--main', 'hsla(7, 100%, 65%, 1)');
        document.documentElement.style.setProperty('--secondary', 'hsla(223, 100%, 51%, 1)');
        document.documentElement.style.setProperty('--alert', 'hsla(4, 83%, 52%, 1)');
        document.documentElement.style.setProperty('--white', 'hsla(0, 20%, 99%, 1)');
        document.documentElement.style.setProperty('--grey-100', 'hsla(24, 2%, 52%, 1)');
        document.documentElement.style.setProperty('--grey-200', 'hsla(15, 3%, 31%, 1)');
        document.documentElement.style.setProperty('--black', 'hsla(0, 2%, 12%, 1)');
    }
});

// PORTRAIT
const portraitBox = document.querySelector('.home__portrait-box');
const portraitToggle = document.querySelector('#portrait-toggle');
const portraitBtn = document.querySelector('.portrait-box__btn');
const portraitImg = document.querySelector('.portrait-img');

portraitToggle.addEventListener('click', (event) => {
    if (portraitToggle.checked) {      
        portraitBtn.classList.add('open');
        setTimeout(() => {
            portraitBtn.classList.add('full');
        }, 80);
        setTimeout(() => {
            portraitImg.style.opacity = 1;
        }, 90);
    } else {
        portraitBtn.classList.add('close')
        setTimeout(() => {
            portraitImg.style.opacity = 0;
            portraitBtn.classList.remove('close');
            portraitBtn.classList.remove('full');
            portraitBtn.classList.remove('open');   
        }, 80);
    }
})


// MENU
const menuToggle = document.querySelector('#menu-btn__toggle');
const menuBtn = document.querySelector('.nav__btn--menu').style;

// Opening menu on section: About-1
menuToggle.addEventListener('click', () => {
    if(currentSection == 'about-1' && menuToggle.checked === true) {
        console.log('click')
        btnMenu.classList.remove('border--dashed-main')
    } else if (currentSection == 'about-1' && menuToggle.checked === false) {
        console.log('click')
        btnMenu.classList.add('border--dashed-main')
    }
})

// Using menu links
const menu = document.querySelector('#menu');

menu.addEventListener('click', (event) => {
    if (event.target.classList.contains('menu-link')) {
        menuToggle.checked = false;
    };
})



// Handling media query
const emailUrl = document.querySelector('.email-link');
const helpP = document.querySelector('.contact__p--help');

const mediaQuery960px = window.matchMedia('(max-width: 960px)');
const mediaQuery1280px = window.matchMedia('(max-width: 1280px)');
const mediaQueryPlus1280px = window.matchMedia('(min-width: 1281px)');

const handleMediaQueryChange = (mq) => {
    if (mediaQuery960px.matches) {
        emailUrl.innerHTML = 'HELLO@<br>PEDROJ<br>GIL<br>.COM';
        helpP.innerHTML = 'Do you need<br>help with a project?';
    } else if (mediaQuery1280px.matches) {
        emailUrl.innerHTML = 'HELLO@<br>PEDROJGIL.COM';
        helpP.innerHTML = 'Do you need help with a project?';
    } else if (mediaQueryPlus1280px.matches) {
        emailUrl.innerHTML = 'HELLO@PEDROJGIL.COM';
        helpP.innerHTML = 'Do you need help with a project?';
    }
}
window.addEventListener("load", handleMediaQueryChange);
window.addEventListener("resize", handleMediaQueryChange);


//Handling sections
let sections = document.querySelectorAll('section');
let sectionsId = [];

sections.forEach(section => sectionsId.push(section.id));


// Navigation
// Getting current position
const navBtnMenu = document.querySelector('.nav__btn--menu');
const btnMenu = document.querySelector('.menu-btn');

let currentSection = null;
let nextSection = null;
let currentY = null;

const getCurrentPosition = () => {
    currentY = window.scrollY;
    
    sections.forEach(section => {
        if(currentY >= section.offsetTop && currentY < (section.offsetTop + section.offsetHeight)) {
            currentSection = section.id;
            nextSection = sectionsId[(sectionsId.indexOf(currentSection) + 1)];
        }
    })

}

window.addEventListener('load', getCurrentPosition);
window.addEventListener('scroll', getCurrentPosition);

// Change menu btn bordercolor
const changeMenuBtn = () => {
    if (currentSection == 'about-1') {
        btnMenu.classList.add('border--dashed-main')
    } else {
        btnMenu.classList.remove('border--dashed-main')
    }
}
// Change body background color
let bodyBackground = document.querySelector('body');
const changeBodyColor = () => {
    if (currentSection == 'contact') {
        bodyBackground.classList.add('background--black')
    } else {
        bodyBackground.classList.remove('background--black')
    }
}

window.addEventListener('scroll', changeMenuBtn);
window.addEventListener('scroll', changeBodyColor);
