//maplestory

// 초보자
class Beginner {
  constructor(name, hp, mp, exp) {
    this.name = name; //이름
    this.hp = hp; //체력
    this.mp = mp; //마나
    this.exp = exp; //경험치
  }

  //일반공격
  attack(monster) {
    document.getElementById("info").innerHTML = "몬스터를 공격합니다.";
    this.mp -= 2;
    monster.hp -= 5;
    if (monster.hp < 1) {
      document.getElementById("info").innerHTML = "몬스터를 처치했습니다.";
      this.exp += 100;
    }
  }
  info(){
    let talk;
    let talk2;
    if(this.hp < 1){
        talk = '캐릭터가 사망했습니다.';
    }
    if(this.mp < 1){
        '마나를 모두 사용했습니다.';
    }else{
       return `이름 : ${this.name}, 체력 : ${this.hp}, 마나 : ${this.mp}, 경험치 : ${this.exp}`;
    }
}
}

// 1차직업 : 전사
class Soldier extends Beginner {
  constructor(name, hp, mp, exp) {
    super(name, hp, mp, exp);
  }

  // 전사 공격
  attack(monster) {
    super.attack(monster); //--> 부모값 그대로 받아옴
  }
}

// 2차직업 : 마법전사
class MagicSoldier extends Soldier {
  constructor(name, hp, mp, exp) {
    super(name, hp, mp, exp);
  }

  
  // 일반 공격
  attack(monster) {

    super.attack(monster); //--> 부모값 그대로 받아온 후
    monster.hp -= 10;     //오버라이딩(재정의)
    this.mp -= 5;
  
  }

  // 마법 공격
  mattack(monster) {
    super.attack(monster); //--> 부모값 그대로 받아온 후
    monster.hp -= 20;     //오버라이딩(재정의)
    this.mp -= 10;
  }
}

//몬스터
class Monster {
  constructor(name, hp, mp, exp) {
    this.name = name;
    this.hp = hp;
    this.mp = mp;
    this.exp = exp;
  }

  //공격
  attack(Beginner) {
    document.getElementById("info").innerHTML = '몬스터가 캐릭터를 공격합니다.';

    Beginner.hp -= 5; //캐릭터에게 데미지 5씩
    if (beginner.hp < 1) {
        document.getElementById("info").innerHTML = '캐릭터가 사망했습니다.';
      this.exp += 100;
    }
  }
  info(){
    let talk;
    let talk2;
    if(this.hp < 1){
        talk = '몬스터를 처치했습니다.';
    }
else{
       return `이름 : ${this.name}, 체력 : ${this.hp}, 마나 : ${this.mp}, 경험치 : ${this.exp}`;
    }
}
}

//전사 클래스 생성
let beginner = new Beginner("초보자", 50, 50, 0);
let soldier = new Soldier("메이플 검사", 100, 100, 0);
let magicsoldier = new MagicSoldier("마법 검사", 200, 200, 0);
let greenSnail = new Monster("초록달팽이", 30, 0, 10);


//전사가 몬스터 공격
document.getElementById("attack").addEventListener("click", function () {
  soldier.attack(greenSnail);
  document.getElementById("character").innerHTML = soldier.info();
  document.getElementById("monster").innerHTML = greenSnail.info();
});

//초록달팽이가 전사 공격
document.getElementById('gattack').addEventListener('click',function(){

    greenSnail.attack(soldier);
    document.getElementById("character").innerHTML = soldier.info();
  document.getElementById("monster").innerHTML = greenSnail.info();
    
    });

  //마법전사 일반공격
  document.getElementById("sattack").addEventListener("click", function () {
    magicsoldier.attack(greenSnail);
    document.getElementById("character").innerHTML = magicsoldier.info();
    document.getElementById("monster").innerHTML = greenSnail.info();
  });
  

  //마법전사 마법공격
  document.getElementById("mattack").addEventListener("click", function () {
    magicsoldier.attack(greenSnail);
    document.getElementById("character").innerHTML = magicsoldier.info();
    document.getElementById("monster").innerHTML = greenSnail.info();
  });
  

