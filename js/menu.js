document.querySelector('.burger').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.header').classList.toggle('open');
})


function menu() {
    const header = document.querySelector(".header");
    if (window.pageYOffset == 0) {
        header.style.top = "15px";
    } else {
        header.style.top = "0";
    }
    setTimeout(menu, 0);
  }
  
  menu();

//   header.forEach(element => {
//     element.style.top = "0";
//   });