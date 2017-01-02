// support for older browsers (IE?)
var request;
if (window.XMLHttpRequest) {
    request = new XMLHttpRequest();
} else {
  request = new ActiveXObject("Microsoft.XMLHTTP");
}

// an asynchronous request
request.open('GET', 'data.txt');
request.onreadystatechange = function() {
  if ((request.readyState === 4) && (request.status === 200)) {
    var modify = document.getElementsByTagName('li');
    modify[2].innerHTML = request.responseText;
  }
}
request.send();
