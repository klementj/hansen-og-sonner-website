const slideshow = document.getElementById('slideshow')
var slideIndex = 0;

slideshow.addEventListener('click', function(event) {
    let slideArray = [ ... document.querySelectorAll('.slideButton')]

    if (event.target.classList.contains('slideButton') && slideIndex != slideArray.indexOf(event.target) || event.target.classList.contains('slideArrow')) {

        
        switch (event.target.getAttribute('class')) {
            case 'slideButton':
                slideIndex = slideArray.indexOf(event.target)
                break;
            case 'slideArrow slidePrevious':
                slideIndex = slideIndex - 1
                if (slideIndex < 0) {

                    slideIndex = slideArray.length - 1
                }
                break;
            case 'slideArrow slideNext':
                slideIndex = slideIndex + 1
                if (slideIndex > slideArray.length - 1) {

                    slideIndex = 0
                }
                break;
        }


        for (let i = 0; i < slideArray.length; i++) {
            slideArray[i].parentElement.setAttribute('class', 'slideimg_container')
        }


        slideArray[slideIndex].parentElement.setAttribute('class', 'slideimg_container slideTarget')

        document.getElementById('slideimgLarge').src = slideArray[slideIndex].getAttribute('src')
        document.getElementById('slideTitle').innerHTML = slideArray[slideIndex].dataset.slidetitle
        document.getElementById('slideDescription').innerHTML = slideArray[slideIndex].dataset.slidedescription
        }
    }
)