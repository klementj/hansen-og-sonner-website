"use strict";

const featured = document.querySelector('#featured > picture > img');
const featuredSelection = document.querySelectorAll('#om-os > section > div > picture > img');

const featuredFullName = document.querySelector('.featured-text > h4');
const featuredWorkTitle = document.querySelector('.featured-text > h5');
const featuredParagraph = document.querySelector('.featured-text > p');

function imageSelection(event) {
    // console.log('It got clicked.');
    featured.src = event.target.src;

    // HTML H4 change
    featured.dataset.fullname = event.target.dataset.fullname;
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

featuredSelection.forEach(function(featuredSelect) {
    // console.log(featuredSelect);
    featuredSelect.addEventListener('click', imageSelection);
});