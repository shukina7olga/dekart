document.querySelector('.burger').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.header').classList.toggle('open');
})


function menu() {
    const header = document.querySelector(".header");
    // if (window.pageYOffset == 0) {
    //     header.style.top = "20px";
    //     header.style.display = "block";
    // } else {
    //     header.style.display = "none";
    // }

    if (window.pageYOffset == 0) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
    setTimeout(menu, 0);
  }
  
  menu();
