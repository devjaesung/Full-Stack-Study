

function navFunc(){
    
   var x = document.getElementsByClassName("topnav")[0];
    if(x.className == "topnav"){ //class가 topnav만 있을때
        x.className += " submenu"; //띄어쓰기 해야 class가 추가됨!
    }else{
        x.className = "topnav";
    }
}
