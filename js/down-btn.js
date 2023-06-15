const btn = document.querySelector(".main__down-btn");

btn.addEventListener('click', () => window.scrollTo({
    top: 850,
    behavior: 'smooth',
}));



// const header = document.querySelector(".header");
// if (window.pageYOffset == 0) {
//   header.style.top = "15px";
// } else {
//   header.style.top = "0";
// }

// console.log(window.pageYOffset);
  