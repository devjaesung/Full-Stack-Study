class Shape{
    constructor(width,height,color){
        this.width = width;
        this.height = height;
        this.color = color;
    }
    draw(){
        console.log(`drawing ${this.color} color`);
    }

    getArea(){ //넓이값 구하기
        return this.width * this.height;
    }
}

class Rectangle extends Shape{} //extends 부모 -> 부모값을 상속받음
class Triangle extends Shape{

    draw(){
        console.log('삼각형'); //재정의 메소드
        super.draw(); //부모 메소드를 그대로 가져옴
    }

    getArea(){
        return (this.wdith * this.height) /2; //오버라이딩(다형성)
        //getArea를 상속받아서 재정의
    }
    toString(){
        return `이 ${this.color}색의 삼각형은 objcect의 상속을 받는다.`;
    }//오버라이딩
}

const myRect = new Rectangle(20,20,'Blue');
myRect.draw();
console.log(myRect.getArea());

const myTri = new Triangle(20,20,'Red');
myTri.draw();
console.log(myTri.getArea());
console.log(myTri.toString());
//클래스의 타입체킹 instance of

console.log(myRect instanceof Rectangle);//t
console.log(myTri instanceof Triangle);//t
console.log(myTri instanceof Rectangle);//f
console.log(myTri instanceof Shape);//t
console.log(myTri instanceof Object);//t


