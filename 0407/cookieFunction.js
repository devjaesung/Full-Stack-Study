  //cookie 저장
  var setCookie = function(name, value, day) {
    var date = new Date();
    date.setTime(date.getTime() + day * 60 * 60 * 24 * 1000);
    document.cookie = name + '=' + value + ';expires=' + date.toUTCString() + ';path=/';
    };

    //cookie 가져오기
    var getCookie = function(name) {
    var value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return value? value[2] : null;
    };

    //cookie 삭제
    var deleteCookie = function(name) {
    var date = new Date();
    document.cookie = name + "= " + "; expires=" + date.toUTCString() + "; path=/";
    }

    //사용방법
    setCookie("test", "1234", 1);
    //test라는 이름과 1234라는 값을 가지며 1일동안 유지되는 cookie를 생성
    alert(getCookie("test")); //test cookie조회
    deleteCookie("test"); //test cookie 삭제
    alert(getCookie("test")); //test cookie 조회
    
