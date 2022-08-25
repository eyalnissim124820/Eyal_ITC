const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

const mapsGallery = document.querySelectorAll('.maps-show');
let currentSelected = 0;


prevBtn.addEventListener('click', function () {
    mapsGallery[currentSelected].classList.remove("active");
    currentSelected--;
    mapsGallery[currentSelected].classList.add("active");
    nextBtn.disabled = false;
    if (currentSelected == 0) {
        prevBtn.disabled = true;
    }
})

nextBtn.addEventListener('click', function () {
    mapsGallery[currentSelected].classList.remove("active");
    currentSelected++;
    mapsGallery[currentSelected].classList.add("active");
    prevBtn.disabled = false;
    if (mapsGallery.length == currentSelected + 1) {
        nextBtn.disabled = true;
    }
})
