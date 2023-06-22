const tabs = document.querySelectorAll('.portfolio__tab');
const content = document.querySelectorAll('.portfolio__box');

const elem = document.querySelector('.portfolio__box');
const iso = new Isotope( elem, {
  // options
    itemSelector: '.portfolio__item',
    layoutMode: 'fitRows'
});



tabs.forEach((tab, index) => { 
    tab.addEventListener('click', e => {
        let filter = e.currentTarget.dataset.filter;
        iso.arrange({filter: `${filter}`});
    })

});



for (let i = 0; i < tabs.length; i++) {
    const item = tabs[i];
    item.addEventListener("click", changeActiveClass);
  }
  
  function changeActiveClass(e)
  {
    for (let i = 0; i < tabs.length; i++) {
      const item = tabs[i];
      item.classList.remove('active');
    }
    e.target.classList.add('active');
  }
