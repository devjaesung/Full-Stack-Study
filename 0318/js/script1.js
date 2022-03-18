'use strict';

//arrow function
const add = function(a,b){
    return a + b;
}
//위의 함수를 화살표 함수로 만들어 보시오.
const add2 = () => {
    return a + b;
}
/* expalin)
    화살표 함수에서는 function을 사용하지 않음. 바로 () 씀.
    ()다음에 화살표를 만들고 코드를 작성. 만약 return을 써야 할 경우에는
    {}를 만들어도 됨.
*/


/*함수 바로 호출하기 */
(function hello(){
    console.log('반갑습니다.');
})();

// ex)1
// calculate 함수 만들기.
/*
    command, a, b 세가지를 매개변수로 받아서
    사칙연산을 계산해 주는 함수를 만들어 보자.
 */
  function calculate(command,a,b){
      switch(command){
          case '+':
              return a + b;
              case '-':
                  return a - b;
                  case '*':
                      return a * b;
                      case '/':
                          return a / b;
                          case '%':
                              return a % b;
                              default:
                                  throw Error('계산 명령이 틀렸습니다.'); 
      }
  }
  
  console.log(calculate('*',5,3));