//my Documnet
function myDoc(num){
    document.getElementById('info').innerHTML = num;
}

//매개변수 두 개를 받아서 합을 출력하는 함수

//1. 두 개의 함수를 호출시키는 방법
function calculator(num1,num2){
    let sum = num1 + num2;
    return sum;
}

let cal = calculator(5,10);
// myDoc(cal);

//두번째 방법
function calculator2(num1,num2,myCallback){
    let sum = num1 + num2;
    myCallback(sum); //캡슐
}

calculator2(5,5,myDoc);