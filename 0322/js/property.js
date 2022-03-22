// o라는 객체가 있고 property로  a와 b를 갖는다.
let f = function(){
    this.a = 1;
    this.b = 2;
}
let o = new f(); // {a:1, b:2}

// f함수의 prototype에 새로운 속성을 추가하자
f.prototype.b = 3;
f.prototype.c = 4;  //f.prototype = { b : 3, c : 4} -->이런식으로 사용하면 안됨!(Error)

console.log(o.a); // 1
console.log(o.b); // 2

//prototype도 b라는 속성을 갖지만 이 값은 사용되지 않는다. = prototype shadowing

console.log(o.c); // 4
console.log(o.d); //undefined

var oo = {
    a : 2,
    m : function(b){
        return this.a + 1;
    }
}
console.log(oo.m());

let p = Object.create(oo); //p는 프로토타입을 oo로 가지는 오브젝트
console.log(p.a);
p.a = 12;

console.log(p.m());
//p.m이 호출될 때 m에 있는 this는 p를 가리키게 됨.
//따라서 o의 함수 m을 상속 받으며, this.a는 p.a를 나타내며 p의 개인 속성 a가 된다.