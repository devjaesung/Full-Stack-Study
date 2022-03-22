function Person(){}

    let chulsu = new Person();
    let soony = new Person();


    Person.prototype.getType = function(){
        return 'human';
    }

    chulsu.age = 30;
    console.log(chulsu.age); //30
    console.log(soony.age);  //undefined

    Person.prototype.age = 30;
    console.log(chulsu.age); //30
    console.log(soony.age);  //30

    //프로토타입에서 추가된 getType()을 모두 이용할 수 있다.
    console.log(chulsu.getType()); //human
    console.log(soony.getType()); // human