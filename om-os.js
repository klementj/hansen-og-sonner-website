"use strict";

// Variable creation for the images
// The large featured image
const featured = document.querySelector('#featured > picture > img');
// All the small clickable images
const featuredSelection = document.querySelectorAll('#om-os > section > div > picture > img');

// Variable creation for the text box
const featuredFullName = document.querySelector('.featured-text > h4');
const featuredWorkTitle = document.querySelector('.featured-text > h5');
const featuredParagraph = document.querySelector('.featured-text > p');

// Function that runs when an image is clicked
function imageSelection(event) {
    // console.log('It got clicked.');

    // Change the featured image source to the one that was clicked
    featured.src = event.target.src;

    // HTML H4 change
    // Change the featured dataset text to the clicked image's dataset text
    featured.dataset.fullname = event.target.dataset.fullname;
    // Take the changed dataset text and replace the HTML with it
    featuredFullName.innerHTML = featured.dataset.fullname;
    // console.log(featured.dataset.fullname);

    // HTML H5 change
    featured.dataset.worktitle = event.target.dataset.worktitle;
    featuredWorkTitle.innerHTML = featured.dataset.worktitle;
    // console.log(featured.dataset.worktitle);

    // HTML paragraph change
    featured.dataset.description = event.target.dataset.description;
    featuredParagraph.innerHTML = featured.dataset.description;
    // console.log(featured.dataset.description);
};

// Listen for any of the images being clicked, then run the imageSelection function on click
featuredSelection.forEach(function(featuredSelect) {
    // console.log(featuredSelect);
    featuredSelect.addEventListener('click', imageSelection);
});