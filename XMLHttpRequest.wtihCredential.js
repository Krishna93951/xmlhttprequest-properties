exports.withCredential = function withCredential(){
  var xhr = new XMLHttpRequest();
  xhr.open('GET','https://www.  google.com/',true);
  xhr.responseType='text';
  
  xhr.onload = function(){
    if (xhr.readyState === xhr.DONE) {
        if (xhr.status === 200) {
    console.log(xhr.response)
        }
    }
  }
  xhr.send(null);
}