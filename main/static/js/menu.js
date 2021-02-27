const menu = document.querySelector('.menu-main');
const navlinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');
const bar3 = document.querySelector('.bar3');

for (var o = 1; o <= 7; o++) {
    var t = 'menuAfterClick' + o;
    document.querySelector('.' + t).addEventListener('click', menuToggle);
    menu.addEventListener('mouseenter', () => {
        bar3.classList.add('hvr');
    });
    menu.addEventListener('mouseleave', () => {
        bar3.classList.remove('hvr');
    });
}

function menuToggle() {
    navlinks.classList.toggle('open');
    links.forEach(link => {
        link.classList.toggle('fade');
    });
}

menu.addEventListener('click', menuToggle);

menu.addEventListener('mouseenter', () => {
    bar3.classList.add('hvr');
});
menu.addEventListener('mouseleave', () => {
    bar3.classList.remove('hvr');
});
