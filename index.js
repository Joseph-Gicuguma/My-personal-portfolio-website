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
    const themeButtons = document.querySelectorAll('.change-theme');
    const darkTheme = 'dark-theme';
    const iconMoon = 'uil-moon';
    const iconSun = 'uil-sun';

    if (themeButtons.length) {
        // Load previously selected theme (if any)
        const selectedTheme = localStorage.getItem('selected-theme');
        const selectedIcon = localStorage.getItem('selected-icon');

        if (selectedTheme === 'dark') document.body.classList.add(darkTheme);
        else if (selectedTheme === 'light') document.body.classList.remove(darkTheme);

        // Initialize all buttons' icons. If no stored icon, derive from stored theme.
        const effectiveIcon = selectedIcon || (selectedTheme === 'dark' ? iconSun : iconMoon);
        themeButtons.forEach(btn => {
            btn.classList.remove(iconMoon, iconSun);
            btn.classList.add(effectiveIcon);
        });

        // Click handler: toggle theme and sync all buttons
        const toggleTheme = () => {
            document.body.classList.toggle(darkTheme);

            // Determine current icon to set
            const nowDark = document.body.classList.contains(darkTheme);
            const setIcon = nowDark ? iconSun : iconMoon;

            themeButtons.forEach(b => {
                b.classList.remove(iconMoon, iconSun);
                b.classList.add(setIcon);
            });

            // Persist
            localStorage.setItem('selected-theme', nowDark ? 'dark' : 'light');
            localStorage.setItem('selected-icon', setIcon);
        };

        themeButtons.forEach(btn => btn.addEventListener('click', (e) => {
            e.preventDefault();
            toggleTheme();
        }));
    }
}



function updateExperience() {
    const startYear = 2021; 
    const currentYear = new Date().getFullYear();
    const experienceYears = currentYear - startYear;

    document.querySelector(".about__info-title").textContent = experienceYears + "+";
}

document.addEventListener("DOMContentLoaded", updateExperience);






