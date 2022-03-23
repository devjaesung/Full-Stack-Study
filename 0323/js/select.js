const x = document.images;
let imgname = '';
for(let i=0; i< x.length;i++){
    imgname += x[i].src + '<br>';
}
document.getElementById('demo').innerHTML = imgname;