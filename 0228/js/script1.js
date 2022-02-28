//날짜 객체
// 변수 new Date();
//배열 객체
//var 참조변수 = new Array();
var myInfo = new Array(10,"홍길동","율도국","황제");
document.write(myInfo[0]);

var myInfo2 = [10,"홍길동","율도국","황제"];
document.write(myInfo2[1]);

var myInfo3 = new Array();
myInfo3[0] = 10;
myInfo3[1] = "홍길동";
myInfo3[2] = "율도국";
myInfo3[3] = "황제";
document.write(myInfo3[3],"<hr>");

var arr = [30,19,"철수","영수","순이",true,false,"금자",0,10,12,10,20];

var num = arr.length; //배열의 길이
document.write("배열의 길이는 " + num + "입니다.","<br>");

for(var i=0;i<num;i++){
    document.write(arr[i],"<br>");
}
document.write("<hr>");
//for in 문
for(n in arr){
    document.write(arr[n],"<br>")
}

