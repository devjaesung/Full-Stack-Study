//cookie 쓰기
document.cookie = "user=Jaesung";
//cookie 지우기
//--> 해당 쿠키의 만료일을 과거로 세팅하기
document.cookie = "user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

// 특수 값(공백)은 인코딩 처리 
let name = "my name";
let value = "Jaesung Ko"

// 인코딩 처리를 해, 쿠키를 my%20name=John%20Smith 로 변경
document.cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);

alert(document.cookie); // ...; my%20name=Jaesung%20Ko