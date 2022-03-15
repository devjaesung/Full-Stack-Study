/* const(상수) */
/*  - 변하지 않는 값을 저장할 때 사용. --> 고정값
    - 보안,암호화에 유용
    - 메모리 안전 관리
    - 실수를 보호
    
    --> 한 번 할당한 값이 변경되지 않아야 하는 데이터타입에 사용하자
    --> 스레드들이 동시에 변경하는 것을 막아줌
    --> 코드를 변경할 때 실수를 막아줌;
*/

/*  자바스크립트 변수의 종류
    number
    string
    boolean
    null
    undefined
    symbol

    object
    box container
    function
    class
*/

const count = 17; //정수형 변수
const size = 27.12; //실수형 변수

console.log("값은" + count + "이며 타입은" + typeof count + "입니다.");
console.log(`값은 ${count}이며 타입은 ${typeof count} 입니다.`); //키보드 1 옆에 있는 키 ₩
console.log("값은" + size + "이며 타입은" + typeof size + "입니다.");
console.log(`값은 ${size}이며 타입은 ${typeof size} 입니다.`);

//number에서 특별히 봐야 할 것들
const infinity = 1 / 0;
const nInfinity = -1 / 0;
const nAn = "not a number" / 2;
const bigInt = 123123123123123123123123123123n;

console.log(infinity);
console.log(nInfinity);
console.log(nAn);
console.log(bigInt);
//javascript가 표현할 수 있는 숫자의 최대값, 최소값
//-2^53 ~ 2^53
