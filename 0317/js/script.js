'use strict';

let slideIndex = 1;
showSlide(slideIndex);

function plusSlides(n){
    showSlide(slideIndex += n);
}
function currentSlides(n){
    showSlide(slideIndex = n);
}

function showSlide(n){
    let i;
    let slides = document.getElementsByClassName('mySlides');
    let dots = document.getElementsByClassName('opacity');
    let captionText = document.getElementById('caption');
    if(n>slides.length){slideIndex = 1}
    if(n<1){slideIndex.slide.length}

    for(i=0; i< dots.length; i++){
        dots[i].className = dots[i].className.replace('active','');
    }
    for(i=0; i<slides.length; i++){
        slides[i].style.display = 'none';
    }

    slides[slideIndex-1].style.display = 'block';
    dots[slideIndex-1].className += 'active';
    captionText.innerHTML = dots[slideIndex-1].alt;
}