/*======menu show y hidden======*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/*======menu show======*/
/*validate if constant exists*/
if (navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*======menu hidden======*/
/*validate if constant exists*/
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}


/*======Remove menu mobile======*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')

    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*======Accordion skills======*/
const skillsContent = document.getElementsByClassName('skills__content'),
    skillsHeader = document.querySelectorAll('.skills__header')

function toggleskills(){
    let itemClass = this.parentNode.className

    for(i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills__content skills__close'
    }
    if(itemClass === 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open'
    }
}

skillsHeader.forEach((el) =>{
    el.addEventListener('click', toggleskills)
})



/*======Qualification Tabs======*/
const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')

        tab.forEach(tab =>{
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
})

/*======Scroll Sections active link======*/
/*const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('Id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId +']').classList.
        }else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*======Changing Background header======*/
function scrollHeader(){
    const nav = document.getElementById('header')

    if (this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollHeader)

/*======SHow Scroll to top======*/
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');

    if (this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*======Dark and light theme======*/
/* Dark / Light theme toggle with persistence */
{
    const themeButton = document.getElementById('theme-button');
    const darkTheme = 'dark-theme';
    const iconMoon = 'uil-moon';
    const iconSun = 'uil-sun';

    if (themeButton) {
        // Load previously selected theme (if any)
        const selectedTheme = localStorage.getItem('selected-theme');
        const selectedIcon = localStorage.getItem('selected-icon');

        if (selectedTheme === 'dark') document.body.classList.add(darkTheme);
        else if (selectedTheme === 'light') document.body.classList.remove(darkTheme);

        // Ensure the button shows an icon (default: moon)
        if (selectedIcon === iconSun) {
            themeButton.classList.add(iconSun);
        } else {
            themeButton.classList.add(iconMoon);
        }

        // Toggle handler
        themeButton.addEventListener('click', () => {
            document.body.classList.toggle(darkTheme);

            // Swap icon classes
            if (themeButton.classList.contains(iconMoon)) {
                themeButton.classList.remove(iconMoon);
                themeButton.classList.add(iconSun);
            } else {
                themeButton.classList.remove(iconSun);
                themeButton.classList.add(iconMoon);
            }

            // Save selection
            const currentTheme = document.body.classList.contains(darkTheme) ? 'dark' : 'light';
            const currentIcon = themeButton.classList.contains(iconMoon) ? iconMoon : iconSun;
            localStorage.setItem('selected-theme', currentTheme);
            localStorage.setItem('selected-icon', currentIcon);
        });
    }
}



function updateExperience() {
    const startYear = 2021; 
    const currentYear = new Date().getFullYear();
    const experienceYears = currentYear - startYear;

    document.querySelector(".about__info-title").textContent = experienceYears + "+";
}

document.addEventListener("DOMContentLoaded", updateExperience);






