$(function(){
    //nav-bar
    $('.gnb').hover(function(){
        $('.lnb,.background').fadeToggle();
    });
//slider
function slide(){
    $('.slidein').animate({'left': '-1200px'},2000 //-1200px 왼쪽로 밀기
    ,function(){
        $('.slidein img:eq(0)').clone().appendTo('.slidein'); //-1200px 밀려있는 이미지를 복사해서 제일 마지막으로 붙여넣는다.
        $('.slidein img:eq(0)').remove();//이미 복사된 -1200에 있는 이미지는 삭제
        $('.slidein').css('left',0);//스타일시트 위치값을 0으로 초기화
    });}

    setInterval(slide,5000);
});