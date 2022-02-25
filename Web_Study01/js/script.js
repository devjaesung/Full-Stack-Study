var txt = '';

for(var i = 1; i < 6; i++){      
    txt += '<div class="blogbox">';
    txt += '<div class="blogimg" style="background-image:url(images/00'+i+'.jpg);"></div>';
    txt += '<h1>Integer sollicitudin vestibulum tempus.</h1>';
    txt += '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse suscipit purus ac odio maximus malesuada.</p>';
    txt += '<div class="iconbox">';
    txt += '<span class="material-icons-outlined">event_note</span>';
    txt += '<span class="date">2022.02.23</span>';
    txt += ' <span class="material-icons-outlined">favorite</span>';
    txt += '<span class="heart">17</span>';
    txt += '<span class="material-icons-outlined">chat</span>';
    txt += '<span class="comment">21</span>';
    txt += '</div>';
    txt += '</div>';
}

document.getElementById("blog").innerHTML = txt;

var text='';
for(var n=1;n<6;n++){
    text +='<li>';
    text +='<img src="images/th0'+n+'.png" alt="th0'+n+'">';
    text +='<h3>Donec luctus nisl non elementum pulvinar.</h3>';
    text +='<p>';
    text +='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse suscipit purus ac odio maximus malesuada.';
    text +='</p>';
    text +='</li>';
}
document.getElementById("posts").innerHTML = text;