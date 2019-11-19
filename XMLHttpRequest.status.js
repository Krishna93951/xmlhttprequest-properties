exports.status = function status(){
  var xhr = new XMLHttpRequest();
  console.log('UNSENT:',xhr.status);

  xhr.open('GET','/server',true);
  console.log('OPENED:',xhr.status);

  xhr.onprogress = function (){
    console.log('LOADING:',xhr.status);
  }

  xhr.onload = function (){
    console.log('DONE:',xhr.status);
  }
  xhr.send();
}