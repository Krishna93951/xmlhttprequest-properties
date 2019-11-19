exports.response = function response(){
  //responseText and response
  
var xhr = new XMLHttpRequest();
xhr.open('GET', '/server', true);

xhr.responseType = 'arraybuffer';

xhr.onload = function () {
    if (xhr.readyState === xhr.DONE) {
        if (xhr.status === 200) {
            console.log(xhr.response);
            // console.log(xhr.responseText);
        }
    }
};

xhr.send(null);

}