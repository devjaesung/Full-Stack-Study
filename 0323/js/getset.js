class Car{
    constructor(brand){
        this._carname = brand;
    }
    get carname() {
        return this._carname;
    }
    set carname(v){
        this._carname = v; //set에는 변수가 들어감
    }

}

let myCar = new Car('현대');
document.getElementById('info').innerHTML = myCar.carname;