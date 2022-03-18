'use strict';
//Javascript class
//1. 클래스의 필수 가족(생성자와 메소드)
class Person{
    constructor(name,age){ //생성자
        
        this.name = name;//field(속성값)
        this.age = age;
    }
}

const chulsu = new Person('철수',30);
const tony = new Person('Tony',25);
console.log(`이름 : ${chulsu.name}, 나이 : ${chulsu.age}`);
console.log(chulsu);
console.log(`name : ${tony.name}, age : ${tony.age} `);

class Jeans{
    constructor(name,color,price){
        this.name = name;
        this.color = color;
        this.price = price;
    }

    //method
    showPrice(){
        console.log(`이 상품의 가격은 ${this.price}입니다.`);
        console.log(`색깔은 ${this.color}입니다.`);
    }
}

const myjean = new Jeans('Lee','white-blue','200,000원');
myjean.showPrice();//method 출력방식


//ex2) 의자 클래스
//  속성 : 색깔, 앉은높이, 앉은 크기, 가격
//  메소드 이용하여 전체 속성 정보 보여주기

class Chair{
    constructor(color,height,size,price){
        this.color = color;
        this.height = height;
        this.size = size;
        this.price = price;
    }
    showProperty(){
        console.log(`이 상품의 색깔은 ${this.color}이며`);
        console.log(`앉은 높이는 ${this.height}이며`);
        console.log(`앉은 크기는 ${this.size}이고`);
        console.log(`가격은 ${this.price}입니다.`);
    }
}

const chairA = new Chair('파란색','20cm','Big','300,000');
chairA.showProperty();

