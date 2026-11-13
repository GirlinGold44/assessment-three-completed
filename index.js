let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Hide all slides
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 } // Reset to first slide
    slides[slideIndex - 1].style.display = "block"; // Show the current slide
    setTimeout(showSlides, 5000); // Change slide every 5 seconds
}

function plusSlides(n) {
    slideIndex += n;
    if (slideIndex > document.getElementsByClassName("mySlides").length) { slideIndex = 1 }
    if (slideIndex < 1) { slideIndex = document.getElementsByClassName("mySlides").length }
    showSlidesManually();
}

function showSlidesManually() {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Hide all slides
    }
    slides[slideIndex - 1].style.display = "block"; // Show the current slide
}