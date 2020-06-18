var slideshow = document.getElementById('slideshow')
var slideimgLarge = document.getElementById('slideimgLarge')
var slideIndex = 0;

slideshow.addEventListener('click', function(event) {
    let slideArray = Array.from(document.querySelectorAll('.slideButton'))

    if (event.target.classList.contains('slideButton') && slideIndex != slideArray.indexOf(event.target) || event.target.classList.contains('slideArrow')) {


        if (event.target.classList.contains('slideButton')) {
            slideIndex = slideArray.indexOf(event.target)
        } else if (event.target.classList.contains('slidePrevious')) {

            slideIndex = slideIndex - 1
            if (slideIndex < 0) {

                slideIndex = slideArray.length - 1
            }

        } else if (event.target.classList.contains('slideNext')) {

            slideIndex = slideIndex + 1
            if (slideIndex > slideArray.length - 1) {

                slideIndex = 0
            }

        }



        for (let i = 0; i < slideArray.length; i++) {
            slideArray[i].parentElement.setAttribute('class', 'slideimg_container')
        }


        slideArray[slideIndex].parentElement.setAttribute('class', 'slideimg_container slideTarget')

        slideimgLarge.src = slideArray[slideIndex].getAttribute('src')
        }
    }
)