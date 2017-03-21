// AN AJAX REQUEST for employee status
// create XMLHttpRequest object
var xhr = new XMLHttpRequest();
// create callback
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4) {
    var employees = JSON.parse(xhr.responseText);
    var statusHTML = '<ul class="bulleted">';
    for (var i=0; i<employees.length; i++) {
      if (employees[i].inoffice === true) {
        statusHTML += '<li class="in">';
      } else {
        statusHTML += '<li class="out">';
      }
      statusHTML += employees[i].name;
      statusHTML += '</li>';
    }
    statusHTML += '</ul>';
    document.getElementById('employeeList').innerHTML = statusHTML;
  }
};
// open a request
xhr.open('GET', 'data/employees.json');
// send request
xhr.send();





// AN AJAX REQUEST for available rooms
// create XMLHttpRequest object
var ajax = new XMLHttpRequest();
// create callback
ajax.onreadystatechange = function() {
  if (ajax.readyState === 4) {
    var rooms = JSON.parse(ajax.responseText);
    var roomStatusHTML = '<ul class="rooms">';
    for (var i=0; i<rooms.length; i++) {
      if (rooms[i].available === true) {
        roomStatusHTML += '<li class="empty">';
      } else {
        roomStatusHTML += '<li class="full">';
      }
      roomStatusHTML += rooms[i].room;
      roomStatusHTML += '</li>';
    }
    roomStatusHTML += '</ul>';
    document.getElementById('roomList').innerHTML = roomStatusHTML;
  }
};
// open a request
ajax.open('GET', 'data/rooms.json');
// send request
ajax.send();
