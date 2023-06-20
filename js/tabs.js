const tabs = document.querySelectorAll('.portfolio__tab');
const content = document.querySelectorAll('.portfolio__box');

tabs.forEach((tab, index) => { 
    tab.addEventListener('click', e => {
        tab.classList.add('active');
        // content[index].classList.add('active');
        if (index == 0) {
            location.reload();
        }
    })
});