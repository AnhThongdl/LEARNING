let menuBtn = document.querySelector('.header__menu-btn');
let navbar = document.querySelector('.header .header__navbar');

menuBtn.onclick = () => {
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

let themeBtn = document.querySelector('#theme-btn');

themeBtn.onclick = () => {
    themeBtn.classList.toggle('fa-sun');

    if(themeBtn.classList.contains('fa-sun')) {
        document.body.classList.add('active')
    } else {
        document.body.classList.remove('active')
    }
}

window.onscroll = () => {
    menuBtn.classList.remove('fa-times');
    navbar.classList.remove('active');

    let maxHeight = window.document.body.scrollHeight - window.innerHeight;
    let percentage = ((window.scrollY) / maxHeight) * 100;
    document.querySelector('.header .scroll-indicator').style.width = percentage + '%';
}