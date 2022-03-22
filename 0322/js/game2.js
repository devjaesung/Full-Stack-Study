//초보자 함수
function Beginner(name,hp,mp,exp){
    this.name = name;
    this.hp = hp;
    this.mp = mp;
    this.exp = exp;

    this.attack = function(monster){
        monster.hp -= 10;
    }
}
//전사 함수
function Soldier(){};
Soldier.prototype = new Beginner('전사',100,100,0); //beginner의 프로토타입 받아오기

//몬스터 함수

function Monster(name,hp,mp,exp){
    this.name = name;
    this.hp = hp;
    this.mp = mp;
    this.exp = exp;

    this.attack = function(beginner){
       beginner.hp -= 10;
    }
}

let soldier = new Soldier();
let monster = new Monster('달팽이',10,10,0);

soldier.attack(monster);
console.log(soldier.name);
console.log(monster.hp);