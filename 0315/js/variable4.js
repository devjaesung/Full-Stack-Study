/* typescript */

const user = { uname: "철수", age: 20, area: "gimpo" };
// user = { bname: "철수", age: 20, area: "gimpo" }; --> user자체를 바꾸는건 불가능!
user.uname = "민수"; //user 안의 uname은 바꿀수 있음!

console.log(user);

let book;
let sports = "축구";
sports = "농구";
console.log(sports);
// let sports = "배구";
let one = 1,
  two = 2,
  three;
console.log(`${one}, ${two}, ${three}`);

let sports2 = "축구";
if (sports2) {
  let sports2 = "농구";
  console.log(`블록: ${sports2}`);
}
console.log(`글로벌 : ${sports2}`);
