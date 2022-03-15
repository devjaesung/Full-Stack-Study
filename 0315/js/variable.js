"use strict";
//var은 사용 자제!
let globalName = "전역변수";

{
  //scope
  let username = "철수";
  console.log(username);
  username = "민수";
  console.log(username);
  console.log(globalName);
  // let username = '순이'; --> let은 재선언 불가
  // console.log(username);

  // var username2 = "철수";
  // console.log(username2);
  // username2 = "민수";
  // console.log(username2);
  // var username2 = "순이";
  // console.log(username2);
}
/*글로벌 scope는 app의 시작에서 끝까지 항상 메모리에 탑재되어 있기 때문에
 최소한으로 사용하는 것이 좋다.*/

// console.log(username); -->스코프 함수에서만 변수가 저장되어 있음.
console.log(globalName);

console.log(age);
age = 4;
console.log(age);
var age;

{
  var userage = 25;
  console.log(userage);
}
console.log(userage); //var로 변수를 지정하면 scope함수의 지역변수가 되지 않음. --> var변수는 호이스팅 되기 때문!

/* var 변수
    1. 호이스팅된다.
    2. block scope가 되지 않는다.
*/
