// LIGHT TOGGLE
const  lightToggle = document.querySelector('#js-light-toggle__toggler')

lightToggle.addEventListener('click', () => {
    if (lightToggle.checked) {
        document.documentElement.style.setProperty('--main', '#208D2B');
        document.documentElement.style.setProperty('--secondary', '#644595');
        document.documentElement.style.setProperty('--alert', '#EA2B1F');
        document.documentElement.style.setProperty('--white', '#C4CBC4');
        document.documentElement.style.setProperty('--grey-100', '#464F49');
        document.documentElement.style.setProperty('--grey-200', '#242E25');
        document.documentElement.style.setProperty('--black', '#090D09');
    } else {
        document.documentElement.style.setProperty('--main', '#E2652F');
        document.documentElement.style.setProperty('--secondary', '#074DFF');
        document.documentElement.style.setProperty('--alert', '#EA2B1F');
        document.documentElement.style.setProperty('--white', '#FDFCFC');
        document.documentElement.style.setProperty('--grey-100', '#878482');
        document.documentElement.style.setProperty('--grey-200', '#524F4E');
        document.documentElement.style.setProperty('--black', '#201F1F');
    }
});

// MENU
/* Opening & closing menu */
const menuToggle = document.querySelector('#menu-btn__toggle');
const menuBtn = document.querySelector('.nav__btn--menu').style;
const arrowBtn = document.querySelector('.nav__btn--arrow').style;


menuToggle.addEventListener('click', (event) => {
    if (menuToggle.checked) {
        menuBtn.right = '3rem';
        arrowBtn.bottom = '-4rem';
    } else {
        menuBtn.right = '5rem';
        arrowBtn.bottom = '4rem';
    }
})

/* Using menu links */
const menu = document.querySelector('#menu');

menu.addEventListener('click', (event) => {
    if (event.target.classList.contains('menu-link')) {
        menuToggle.checked = false;
        menuBtn.right = '5rem';
        arrowBtn.bottom = '4rem';
    };
})

/* Portrait toggle */
const portraitBox = document.querySelector('.home__portrait-box');
const portraitToggle = document.querySelector('#portrait-toggle');

portraitBox.addEventListener('click', (event) => {
    if (portraitToggle.checked) {
        portraitBox.classList.add('open')
    } else {
        portraitBox.classList.remove('open')
    }
})