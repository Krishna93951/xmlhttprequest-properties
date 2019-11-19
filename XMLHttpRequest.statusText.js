exports.statusText = function statusText(){
  var xhr = new XMLHttpRequest();
  console.log('0 UNSENT:',xhr.statusText); // empty string
  xhr.open('GET','/api',true);
  console.log('1 OPENED:',xhr.statusText); // empty string

  xhr.onprogress = function(){
    console.log('3 LOADING:',xhr.statusText);
  }

  xhr.onload = function(){
    console.log('4 DONE:',xhr.statusText);
  }

  xhr.send(null);
}