// getter setter

// ex1) 커피 자판기
// 300원 넣으면 밀크커피, 300원미만 넣으면 '모자름'출력

class CoffeeMachine{
    constructor(money){
        this.coffee = 'maxim';
        this.sugar = 'sugar';
        this.cream = 'prima';
        this.money = money;
    }

    get money(){
        return this._money; //변수가 같아지면 안되므로 underbar 추가
    }
    
    set money(value){
        this._money = value > 299 ? this.make() : console.log('돈이 모자름');
    }

    make(){
        console.log(`1. ${this.coffee}를 넣습니다.`);
        console.log(`2. ${this.sugar}를 넣습니다.`);
        console.log(`3. ${this.cream}을 넣습니다.`);
        console.log(`잘 저어 줍니다.`);
        console.log(`커피가 나왔습니다. 맛있게 드세요.`);
    }
}

const chulsu = new CoffeeMachine(150);
chulsu.money;
const jack = new CoffeeMachine(300);
jack.money;
