function timg(str){
    document.getElementById('img').src = 'images/'+str+'.jpg';
}

function toggletxt(){
  let firstname = document.getElementById('firstname').value;
  if(firstname != ''){
      document.getElementById('lastname').disabled = false;
  }else{
    document.getElementById('lastname').disabled = true;
  }
}