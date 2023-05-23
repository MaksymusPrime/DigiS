let darkmode = document.querySelector('#darkmode');

darkmode.onclick = () => {
    if (darkmode.classList.contains('bxs-moon')) {
        darkmode.classList.replace ('bxs-moon', 'bxs-sun');
        document.body.classList.add('color');
        navlist.classList.add('color');
    }else{
        darkmode.classList.replace ('bxs-sun', 'bxs-moon');
        document.body.classList.remove('color');
        navlist.classList.remove('color');
    }
}

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
}

const sr = ScrollReveal ({
    distance: '70px',
    duration: 2700,
    reset: true
})

sr.reveal('.hero-text',{delay:200, origin: 'bottom'});
sr.reveal('.hero-img',{delay:350, origin: 'top'});
sr.reveal('.down-arrow',{delay:450, origin: 'right'});