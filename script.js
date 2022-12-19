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

