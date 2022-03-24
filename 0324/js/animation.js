'use strict';
//3초에 한번씩 화면이 fadeOut 되며 바뀌게 처리

let slides = document.querySelectorAll('#slides .slide');
console.log(slides);
let n = 0;

function aniSlide(){
    slides[n].className = 'slide';
    n = (n + 1)%slides.length; //?
    slides[n].className = 'slide showing';
}
setInterval(aniSlide,3000);

//버튼을 만들고 애니메이션 상태일 경우 정지가 보이도록, 정지상태일 경우 애니메이션이 보이도록
//정지시키기 : clearInterval() 활용
let btn = document.getElementById('play');
let playing = true;
var slideInterval;

function playSlideShow(){
    btn.innerHTML = '멈춰!';
    playing = true;
    slideInterval = setInterval(aniSlide,3000);
    console.log('멈춰!');
}
function stopSlideShow(){
    btn.innerHTML = '시작!';
    playing  = false;
    clearInterval(slideInterval);
    console.log('시작!');
}

btn.onclick = function(){
    if(playing == true){
        stopSlideShow();
    }else if(playing == false){
        playSlideShow();
    }
}

playSlideShow();