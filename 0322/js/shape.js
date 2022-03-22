//shape 상위클래스
function Shape(){
    this.x = 0;
    this.y = 0;
};

Shape.prototype.move = function(x,y){
    this.x += x;
    this.y += y;
    console.log('도형이 움직였습니다.');
}

//하위클래스(사각형)
function Rectangle(){
    Shape.call(this);
}

Rectangle.prototype = Object.create(Shape.prototype); //Object.create로 상속
console.log(Rectangle.prototype);

console.log(Rectangle.prototype.__proto__);