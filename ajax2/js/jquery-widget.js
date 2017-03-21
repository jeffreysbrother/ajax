// A jquery AJAX REQUEST for employee status
var url = "data/employees.json"

$.getJSON(url, function(response) {
var statusHTML = '<ul class="bulleted">';
  $.each(response, function(index, employee) {
    if (employee.inoffice === true) {
      statusHTML += '<li class="in">';
    } else {
      statusHTML += '<li class="out">';
    }
    statusHTML += employee.name + '</li>';
  });
  statusHTML += '</ul>';
  $('#employeeList').html(statusHTML);
});








// A jquery AJAX REQUEST for available rooms
var roomurl = "data/rooms.json"

$.getJSON(roomurl, function(response) {
var roomStatusHTML = '<ul class="rooms">';
  $.each(response, function(index, rooms) {
    if (rooms.available === true) {
      roomStatusHTML += '<li class="empty">';
    } else {
      roomStatusHTML += '<li class="full">';
    }
    roomStatusHTML += rooms.room + '</li>';
  });
  roomStatusHTML += '</ul>';
  $('#roomList').html(roomStatusHTML);
});
