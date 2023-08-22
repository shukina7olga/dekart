const showMore = document.querySelector('.show-more');
const productsLength = document.querySelectorAll('.portfolio__item').length;
let items = 15;
const container = document.getElementById('container');
document.querySelectorAll('.portfolio__item').forEach((el, index) => {
    if (index < 15) {
        el.classList.add('is-visible');
    }
});

showMore.addEventListener('click', () => {
	items += 3;
	const array = Array.from(document.querySelector('.portfolio__box').children);
	const visItems = array.slice(0, items);
    
	visItems.forEach(el => {
		el.classList.add('is-visible');
		if (el.classList.contains('is-visible')) {
			$('#container').isotope( 'insert', el );
		}
		
	});
    iso.updateSortData( container )
	if (visItems.length === productsLength) {
		showMore.style.display = 'none';
	}
	// var $newItems = $('<div class="item" /><div class="item" /><div class="item" />');
	// $('#container').isotope( 'insert', $newItems );
});

// document.addEventListener("DOMContentLoaded", () => {
//     // console.log(document.getElementById('more'));
//     const cards = document.querySelectorAll('.portfolio__item');
//     let count = 0;
//     cards.forEach((card, i) => {
//         if (i > 15) {
//             card[i].style.display = 'none';
//         }
//     });
//     console.log(count);
// });

// const moreBtn = document.getElementById('more');
// const moreItems = document.querySelectorAll('.portfolio__item');




// moreBtn.addEventListener('click', e => {
//     moreItems.forEach(item => {
//         if(item.classList.contains('hidden')) {
//             item.classList.remove('hidden');
//         }
//     });
// })



// const showMore = document.getElementById('more');
// const productsLength = document.querySelectorAll('.portfolio__item').length;
// let items = 15;

// showMore.addEventListener('click', () => {
//  	items += 6;
// 	const array = Array.from(document.querySelector('.portfolio__box').children);
//     // console.log(array);
// 	const visItems = array.slice(0, items);

// 	visItems.forEach(el => el.classList.add('is-visible'));

// 	if (visItems.length === productsLength) {
// 		showMore.style.display = 'none';
// 	}
// });