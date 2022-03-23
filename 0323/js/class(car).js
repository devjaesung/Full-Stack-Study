class Car{
    constructor(brand){
        this.carname = brand;
    }
    info(){ //메소드
        return `내 차는 ${this.carname}입니다.`;
    }
}

class Model extends Car{
    constructor(brand,model){
        super(brand);
        this.model = model;
    }
    result(){ //메소드
        return this.info() + ',모델은 ' + this.model + '입니다.';
    }
    
}

let myCar = new Model('현대','아반떼'); //생성자(class는 호이스팅 되지 않으므로 class 먼저 생성 후 생성자 입력할 것!)
document.getElementById('info').innerHTML = myCar.result();
console.log(myCar);