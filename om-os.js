"use strict";

console.log("Test");

const featured = document.querySelector('#featured > picture > img');
const featuredSelection = document.querySelectorAll('#om-os > div > picture > img');

const featuredH4 = document.querySelector('.featured-text > h4');

// event.target.dataset.description
// console.log(featuredSelection);

// featuredSelection.addEventListener('click', function(imageSelection) {
//     console.log('It got clicked.');
//     featured.src = imageSelection.target.src;
// });


function imageSelection(event) {
    console.log('It got clicked.');
    featured.src = event.target.src;
    featuredH4.src = event.target.dataset.h4.src;
};

featuredSelection.forEach(function(featuredSelect) {
    console.log(featuredSelect);
    featuredSelect.addEventListener('click', imageSelection)
});