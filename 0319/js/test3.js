// let arr = [1,1,3,3,0,1,1];
// //indexOf(), filter(), includes(), forEach() 활용하기

// //forEach() - 배열을 순회하면서 배열의 원드로 주어진 callback함수를 실행한다.
// let result = [];
// arr.forEach((element, index, array) =>
//     {
//     console.log(element);
//     console.log(index);
//     console.log(array);
//     }
// );

//forEach 연습문제
//0부터 10까지 중에서 3의 배수만 출력하기

// let arr = [0,1,2,3,4,5,6,7,8,9,10];
// let result = [];
// arr.forEach((element) => {
//     if(element%3 == 0){
//         result.push(element);
//     }
// });
// console.log(result);


//includes() - 배열에 특정 값이 포함되는지 여부를 검사한다.
//includes 연습문제
let arr = [1,1,3,3,0,1,1];

let rs = [];
arr.forEach((element) => {
    if(!rs.includes(element)){
        rs.push(element);
    }
    console.log(rs);
});