//1.
function fnc(str){
       let val = function(str){
        return '문서' + str;
    }
};
//함수가 다른 함수의 값을 리턴 할 수 있다.

//2.
let val1 = function(str){
    return '문서' + str;
}
val = function(n){
    return f;
}
fnc(val);
//함수가 다른 함수의 값을 리턴 할 수 있다.
//함수가 다른 함수의 입력 값이 될 수 있다.

//3.
let val2 = function(y){
    return 5;
}
function fnc2(arg){
    arg();
}
fnc2(val2);
// callback 함수
// : 다른 함수의 입력 값으로 그 함수에 의해 나중에 호출되는 함수.