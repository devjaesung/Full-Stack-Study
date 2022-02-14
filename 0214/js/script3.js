/*<div class="box2">
        <div class="health">health</div>
    </div> */


// div 태그 in javascript    
var str1,str2,str3;
str1='<div class="box2"';
str2='<div class="health">health</div>';
str3='</div>';

var str;
str='<div class=\"box2\">';
str+='<div class=\"health\">';
str+='health</div></div>';


document.write(str1+str2+str3);
document.write(str);

//table 태그 in javascript
var tab;
tab="<table border=\'1\' width=\'100\'>";
tab+="<tr>";
tab+="<td>1</td><td>2</td><td>3</td>";
tab+="</tr>";
tab+="</table>";

document.write(tab);


//대입연산자
var num1=10;
var num2=3;

num1+=num2;
document.write(num1,"<br>");

num1-=num2;
document.write(num1,"<br>");

num1*=num2;
document.write(num1,"<br>");

num1%=num2;
document.write(num1,"<br>");