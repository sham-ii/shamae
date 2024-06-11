let currentIndex = 0;
showSlide(currentIndex);

function changeSlide(step) {
    currentIndex += step;
    showSlide(currentIndex);
}

function showSlide(index) {
    let slides = document.getElementsByClassName("mySlides");
    if (index >= slides.length) {
        currentIndex = 0;
    } 
    if (index < 0) {
        currentIndex = slides.length - 1;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[currentIndex].style.display = "block";
}
