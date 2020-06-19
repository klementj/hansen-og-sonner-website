"use strict";

console.log("Test");

const featured = document.querySelector('#featured > picture > img');
const featuredSelection = document.querySelectorAll('#om-os > div > picture > img');

const featuredH4 = document.querySelector('.featured-text > h4');


// console.log(featuredSelection);

// featuredSelection.addEventListener('click', function(imageSelection) {
//     console.log('It got clicked.');
//     featured.src = imageSelection.target.src;
// });


function imageSelection() {
    console.log('It got clicked.');
    featured.src = imageSelection.target.src;
};

featuredSelection.forEach(function(featuredSelect) {
    console.log(featuredSelect);
    featuredSelect.addEventListener('click', imageSelection)
});