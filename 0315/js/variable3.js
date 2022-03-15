/* string */

const char = "c";
const str = "문자열";
const greeting = "안녕하세요?" + str;

console.log(`${greeting}, 타입 : ${typeof greeting}`);
const hello = greeting + "님";
console.log(`${hello},타입 : ${typeof hello};`);

/* boolean */
/*  false = 0,null,undefined, NaN, ''
    true = 그외
*/

const tr = true;
const test = 3 < 1; //false
console.log(`${tr} 타입은  ${typeof tr}`);
console.log(`${test} 타입은  ${typeof test}`);

let nothing = null;
let x;
console.log(`${nothing} 타입은  ${typeof nothing}`);
console.log(`${x} 타입은  ${typeof x}`);

/* symbol : 객체에 대한 고유 식별자를 생성해 줌 */
/* create unique identifiers for objects */

const sb1 = Symbol("id");
const sb2 = Symbol("id");
console.log(sb1 === sb2); //서로 주소값이 다름 --> false

const gsb1 = Symbol.for("id"); //값을 똑같이 만들어줌
const gsb2 = Symbol.for("id");
console.log(gsb1 === gsb2); // --> true

console.log(`심볼출력 :  ${sb1.description}, ${typeof sb1}`);
//symbol 출력할 때 .description 붙여야함.

/* 
    선언할 때 타입을 결정하지 않고 런타임으로 실행될 때 타입이 할당된다 --> dynamic typeing
*/

let text = "안녕하세요?";
console.log(text.charAt(0));
console.log(`value: ${text}, type: ${typeof text}`);

text = 1;
console.log(`value: ${text}, type: ${typeof text}`);

text = "7" + 5;
console.log(`value: ${text}, type: ${typeof text}`);

text = "8" / "2";
console.log(`value: ${text}, type: ${typeof text}`); //자동으로 숫자값으로 나눠서 출력해줌
console.log(text.charAt(0));
