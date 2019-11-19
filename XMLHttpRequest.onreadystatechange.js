exports.onReadyStateChange = function onReadyStateChange(){
  var xhr = new XMLHttpRequest(),
  method = 'GET',
  url = '';

  xhr.open(method,url,true);
  xhr.onreadystatechange = function(){
    if(xhr.readyState === XMLHttpRequest.DONE){
      console.log(xhr.responseText)
    }
  }
  xhr.send();
}