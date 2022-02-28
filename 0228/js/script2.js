var arr1=["김포공항","고촌","풍무","사우","걸포북변"];
var arr2=["운양","장기","마산","구래","양촌"];
var rs=arr1.join(" => ");
document.getElementById("gd1").innerHTML = rs;

rs = arr1.concat(arr2);
document.getElementById("gd2").innerHTML = rs;

rs = arr1.slice(1,3); //1번 배열에서 시작해서 3번배열에서 끝남(마지막 배열은 포함하지 않음)
document.getElementById("gd3").innerHTML = rs;

//slice 예제

var ar = [1,2,3,4];
ar.slice(1,3); // 2,3 값으로 가지게 됨
ar.slice(1); //2,3,4 값으로 가지게 됨
ar.slice(-3,-1); // 마지막 배열부터 순서를 셈/ 2, 3을 가지게 됨

//////////////////////////////////////////////////////////////////

arr1.sort(); //abc순,오름차순 정렬
document.getElementById("gd4").innerHTML = arr2;

arr2.reverse();//역순
document.getElementById("gd5").innerHTML = arr2;



//문제1) 강남을 삭제 후 서초, 역삼을 추가하시오.
//문제2) yellowArr 노선을 pop
//문제3) yellowArr 노선을 shift 
//문제4) 3번의 결과를 yellowArr의 마지막 인덱스에 추가 하시오.
//문제5) 2번의 결과를 yellowArr의 첫번째 인덱스에 추가 하시오.

var greenArr=["교대","방배","강남"];
var yellowArr=["미금","정자","수서"];

greenArr.splice(2,1, "서초","역삼");//2번 인덱스부터 1개의 데이터를 삭제 후 서초,역삼 추가
document.write(greenArr,"<br>");

var dt1=yellowArr.pop(); //-->'수서'
var dt2=yellowArr.shift();//-->'미금'

yellowArr.push(dt2);
document.write(yellowArr,"<br>");

yellowArr.unshift(dt1);
document.write(yellowArr,"<br>");
