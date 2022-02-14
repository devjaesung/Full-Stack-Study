var a=true; //true
var b=false; //false
var c=10>5; //true
var d=Boolean(null); //false

document.write(a, "<br>");
document.write(b, "<br>");
document.write(c, "<br>");
document.write(d, "<br>"); 

var s;
document.write(s, "<br>");  //undefined

var n=null;
document.write(n, "<br>"); //null

var num=100;
var str="자바스크립트";
document.write(typeof num,"<br>");//typeof : 변수의 종류 알려줌
document.write(typeof str,"<br>");

//산술연산자
var num1=15;
var num2=2;
var result;

result=num1+num2;
document.write(result, "<br>");

/* "15"+2  의 result 는 152  로 나옴!  */

result=num1-num2;
document.write(result, "<br>");

result=num1*num2;
document.write(result, "<br>");

result=num1/num2;
document.write(result, "<br>");

result=num1%num2;
document.write(result, "<br>");

var t1="학교종이 ";
var t2="땡땡땡 ";
var t3=8282;
var t4="어서 모이자";
var result = t1+t2+t3+""+t4;    //숫자 변수 뒤에 띄어쓰기 해주기 위해 ""추가함
document.write(result, "<br>");
document.write(t1+t2+"우리학교 갈때는 " + t3 + "어서 모이자.", "<br>");
//변수는 따옴표 안에 들어갈수 없음, 문자열은 가능