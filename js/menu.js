document.querySelector('.burger').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.header').classList.toggle('open');
})

let lastScroll = 0;
const defaultOffset = 50;
const header = document.querySelector('.header');

const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop; // оределяет где находимся
const containHide = () => header.classList.contains('active');  // есть ли класс

window.addEventListener('scroll', () => {
    if(scrollPosition() < lastScroll && !containHide()) {
        header.classList.add('active');
        // header.style.top = "0";
    } else if(scrollPosition() > lastScroll && containHide() && scrollPosition() > defaultOffset){
        header.classList.remove('active');
    } else if(scrollPosition() < defaultOffset) {
        header.style.top = "20px";
    }

    lastScroll = scrollPosition();
})

const headerMenu = document.querySelector('.header__menu');
const headerItems = document.querySelectorAll('.header__menu-li');
let flag;
headerMenu.addEventListener('mouseover', () => {
    headerItems.forEach((item, index) => {
        if(item.classList.contains('active')) {
            flag = index;
            item.classList.remove('active');    
        } 
    });
})

headerMenu.addEventListener('mouseout', () => {
    headerItems.forEach((item, index) => {
        if(index == flag) {
            item.classList.add('active');    
        } 
    });
})
