//비동기 동기화
'use strict';

let index1 = '<p>HTML is the standard markup language for Web pages.</p>';
    index1 +='<p>With HTML you can create your own Website.</p>';
    index1 +='<p>HTML is easy to learn - You will enjoy it!</p>';

let index2 ='<p>CSS is the language we use to style an HTML document.</p>';
    index2 +='<p>CSS describes how HTML elements should be displayed.</p>';
    index2 +='<p>This tutorial will teach you CSS from basic to advanced.</p>';

    function main(n){
        if(n == 1){
            document.getElementById('text').innerHTML = index1;
        }else{
            document.getElementById('text').innerHTML = index2;
        }
    }
    // 1) main(1); -->그냥 실행


    // 2) 3초 후에 화면이 실행되게 만들기
    //main은 setTimeout()의 인수로 전달. 3초 후에 main이 호출됨.
    setTimeout('main(1)',3000);
    //함수에 매개변수가 없으면 --> setTimeout(main,3000);


    //실시간으로 바뀌는 지금 시간 출력하기
    function tFunc(){
        let d = new Date();
        document.getElementById('mytime').innerHTML = 
        `${d.getHours()} : ${d.getMinutes()} : ${d.getSeconds()}`;
    }
    setInterval(tFunc,1000);

    //<h1 id = 'love'></h1>을 html에 만들고 5초후에 'I love you!!!'를 출력하시오.
    let l ='I love you!!!';
    function love(){
        document.getElementById('love').innerHTML = l;
    }
    setTimeout(love,5000);