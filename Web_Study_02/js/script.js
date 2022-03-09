function openNav(){
    document.getElementById("mynav").style.left="0%";
}

function closeNav(){
    document.getElementById("mynav").style.left="-100%";
}

/************slides****/
var ind = 1;
viewSlide(ind);

function pSlide(n){
    viewSlide(ind += n);
}

function viewSlide(n){
    var i, slides;
    slides = document.getElementsByClassName("slidein");
    if(n > slides.length) ind = 1;
    if(n < 1) ind = slides.length;
    for(i=0; i<slides.length; i++){
        slides[i].style.display = "none";
        slides[i].className = "slidein";
    }

    slides[ind-1].style.display="block";
    slides[ind-1].className += " fade";
}

/*****************슬라이드가 5초마다 자동으로 바뀜********************** */
function autoSlide(){
    ind++;
    viewSlide(ind);
}
setInterval(autoSlide,5000);

/***************************my cafe**************************** */

