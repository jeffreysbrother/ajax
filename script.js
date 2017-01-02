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
    console.log(request);
    document.write(request.responseText);
  }
}
request.send();
