// var sports = "축구";
// let music = "jazz";

// function get() {
//   var sports = "basketball";
//   let music = "classic";
//   console.log("1:", sports);
//   console.log("2:", music);
//   console.log("1:", this.sports);
//   console.log("2:", this.music); -->let은 this를 받을 수 없음.
// }

// window.get();

let sports = "축구";
try {
  let sports = "basketball";
  console.log(sports);
} catch (e) {
  console.log("error");
}

console.log(sports);
