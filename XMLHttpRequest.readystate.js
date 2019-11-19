exports.readyState = function readyState(){
  var xhr = new XMLHttpRequest();
  console.log('UNSENT:',xhr.readyState);

  xhr.open('GET','/api',true);
  console.log('OPENED:',xhr.readyState);

  xhr.onprogress = function(){
    console.log('LOADING',xhr.readyState);
  }

  xhr.onload = function () {
    console.log('DONE', xhr.readyState); 
  };

  xhr.send();
} 