class Calculator {
    constructor(displayElement) { 
        this.displayElement = displayElement;
        this.operatorCheck = true; // 연산자 선택 여부 저장
        this.equalsCheck = false; // = 버튼 클릭 여부 관리
        this.clear();
    }    
    appendNumber(number) { //숫자 값 받기
        if (this.equalsCheck) {
            this.displayContent = number; // 새로운 식 입력
            this.equalsCheck = false;
        } else {
            this.displayContent += number; // 기존 식에 추가
        }
        this.operatorCheck = false; // 숫자 입력시 false
    }
    

    appendOperator(operator) { //사칙연산 값 받기   
        
            if (this.operatorCheck) return false; // operatorCheck값이 true이면 함수 빠져나가기
            if (this.equalsCheck) this.equalsCheck = false; 
            this.displayContent += operator;
            return this.operatorCheck = true; //연산자 입력 시 true 
    }

    updateDisplay() { //#result에 입력된 값 표시
        this.displayElement.value = this.displayContent;
    }

    clear() { //AC버튼(reset) 구현
        this.displayContent = '';
        this.displayElement.value = 0;
        this.operatorCheck = true;
    }

    compute() { //계산하는 메소드
        if (this.operatorCheck) return; //연산자가 마지막으로 입력된 상태일 경우 eval함수 동작되지 않도록 처리함
        this.displayContent = eval(this.displayContent
            .replace('\u00D7', '*')
            .replace('\u00F7', '/')
            //자바스크립트에서 곱하기와 나누기를 *,/ 를 사용하므로 replace로 변경
        )
    }

    percent() {
        if (this.operatorCheck) return;
            if (this.equalsCheck) this.equalsCheck = false; 

        this.displayContent = this.displayContent * 0.01;
        console.log(this.displayContent);

        return this.operatorCheck = true; //연산자 입력 시 true 
    }

    plusminus() {
        if (this.operatorCheck) return false; // operatorCheck값이 true이면 함수 빠져나가기
        if (this.equalsCheck) this.equalsCheck = false; 

        this.displayContent = this.displayContent * -1;
        console.log(this.displayContent);

        return this.operatorCheck = true; //연산자 입력 시 true 
    }

    point() {
        if (this.operatorCheck) return false; // operatorCheck값이 true이면 함수 빠져나가기
        if (this.equalsCheck) this.equalsCheck = false; 

        this.displayContent += '.';

        return this.operatorCheck = true; //연산자 입력 시 true 
    }

}

const buttons = document.querySelectorAll('button');
const displayElement = document.querySelector('input');

const calculator = new Calculator(displayElement);

buttons.forEach(button => {
    button.addEventListener('click', () => {
        switch (button.dataset.type) {
            case 'operator':
                console.log('operator')
                calculator.appendOperator(button.innerText);
                calculator.updateDisplay();
                break;
            case 'percent':
                calculator.percent();
                calculator.updateDisplay();
                console.log('percent');
                break;    
            case 'ac':
                calculator.clear(); 
                console.log('ac');
                break;
            case 'plusminus':
                calculator.plusminus();
                calculator.updateDisplay();
                console.log('plusminus');
                break;
            case 'point':
                calculator.point();
                calculator.updateDisplay();
                console.log('point');
                break;
            case 'equals':
                calculator.compute();
                calculator.updateDisplay();
                console.log('equals');
                break;         
            default:
                console.log('number')
                calculator.appendNumber(button.innerText);
                calculator.updateDisplay();
                break;
        }
    })      
})